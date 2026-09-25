import { DOMAINS, type DomainId } from '../data/exam';
import { QUESTIONS } from '../data/questions';
import type { ProgressState } from '../state/types';
import { addDays, dateKey, parseDateKey } from './dates';

export interface DomainStat {
  attempts: number;
  correct: number;
  accuracy: number;
  total: number;
  seen: number;
  /** share of the domain's questions whose most recent answer was correct */
  mastery: number;
}

export function domainStats(state: ProgressState): Record<DomainId, DomainStat> {
  const out = {} as Record<DomainId, DomainStat>;
  for (const d of DOMAINS) out[d.id] = { attempts: 0, correct: 0, accuracy: 0, total: 0, seen: 0, mastery: 0 };
  const mastered = {} as Record<DomainId, number>;
  for (const q of QUESTIONS) {
    const s = out[q.domain];
    s.total++;
    const st = state.stats[q.id];
    if (!st) continue;
    s.seen++;
    s.attempts += st.attempts;
    s.correct += st.correct;
    if (st.lastCorrect) mastered[q.domain] = (mastered[q.domain] ?? 0) + 1;
  }
  for (const d of DOMAINS) {
    const s = out[d.id];
    s.accuracy = s.attempts ? s.correct / s.attempts : 0;
    s.mastery = s.total ? (mastered[d.id] ?? 0) / s.total : 0;
  }
  return out;
}

/** Blueprint-weighted mastery across the whole bank, 0..1. */
export function readiness(state: ProgressState): number {
  const ds = domainStats(state);
  return DOMAINS.reduce((sum, d) => sum + d.weight * ds[d.id].mastery, 0);
}

export function totals(state: ProgressState) {
  let attempts = 0;
  let correct = 0;
  for (const st of Object.values(state.stats)) {
    attempts += st.attempts;
    correct += st.correct;
  }
  return { attempts, correct, accuracy: attempts ? correct / attempts : 0 };
}

export function answeredOn(state: ProgressState, key: string): number {
  return state.dailyCounts[key] ?? 0;
}

/** Consecutive study days ending today (or yesterday, if today isn't done yet). */
export function currentStreak(state: ProgressState): number {
  let day = new Date();
  if (!answeredOn(state, dateKey(day))) day = addDays(day, -1);
  let streak = 0;
  while (answeredOn(state, dateKey(day)) > 0) {
    streak++;
    day = addDays(day, -1);
  }
  return streak;
}

export function longestStreak(state: ProgressState): number {
  const days = Object.keys(state.dailyCounts).filter((k) => state.dailyCounts[k] > 0).sort();
  let best = 0;
  let run = 0;
  let prev: string | null = null;
  for (const k of days) {
    const prevDate = prev ? parseDateKey(prev) : null;
    run = prevDate && dateKey(addDays(prevDate, 1)) === k ? run + 1 : 1;
    best = Math.max(best, run);
    prev = k;
  }
  return best;
}

export function missedQuestionIds(state: ProgressState): string[] {
  return QUESTIONS.filter((q) => state.stats[q.id] && !state.stats[q.id].lastCorrect).map((q) => q.id);
}

/** Last `n` days of activity, oldest first. */
export function recentActivity(state: ProgressState, n = 14) {
  const today = new Date();
  return Array.from({ length: n }, (_, i) => {
    const d = addDays(today, i - (n - 1));
    const key = dateKey(d);
    return { key, day: d.getDate(), count: answeredOn(state, key) };
  });
}
