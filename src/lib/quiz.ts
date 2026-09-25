import { DOMAINS, EXAM_INFO, type DomainId } from '../data/exam';
import { QUESTIONS, type Question } from '../data/questions';
import type { ProgressState } from '../state/types';

export type QuizMode = 'daily' | 'domain' | 'review' | 'mock';

export const QUIZ_SIZE = 10;
export const MOCK_MAX = 40;

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Spaced-repetition priority: missed items first, then unseen, then seen items
 * whose Leitner box is low or that haven't been seen in a while.
 */
function priority(q: Question, state: ProgressState, now: number): number {
  const st = state.stats[q.id];
  const jitter = Math.random() * 10;
  if (!st) return 60 + jitter;
  if (!st.lastCorrect) return 100 + jitter;
  const daysSince = (now - st.lastSeen) / 86_400_000;
  return 40 - st.box * 8 + Math.min(daysSince, 14) * 2 + jitter;
}

function pickByPriority(pool: Question[], state: ProgressState, n: number): Question[] {
  const now = Date.now();
  const ranked = pool
    .map((q) => ({ q, p: priority(q, state, now) }))
    .sort((a, b) => b.p - a.p)
    .slice(0, n)
    .map((x) => x.q);
  return shuffle(ranked);
}

export function buildQuiz(mode: QuizMode, state: ProgressState, domain?: DomainId): Question[] {
  switch (mode) {
    case 'domain':
      return pickByPriority(QUESTIONS.filter((q) => q.domain === domain), state, QUIZ_SIZE);
    case 'review':
      return shuffle(QUESTIONS.filter((q) => state.stats[q.id] && !state.stats[q.id].lastCorrect)).slice(0, 15);
    case 'mock': {
      // Mirror the blueprint's domain weighting.
      const n = Math.min(MOCK_MAX, QUESTIONS.length);
      const picked = DOMAINS.flatMap((d) =>
        shuffle(QUESTIONS.filter((q) => q.domain === d.id)).slice(0, Math.round(d.weight * n)),
      );
      return shuffle(picked);
    }
    case 'daily':
    default:
      return pickByPriority(QUESTIONS, state, QUIZ_SIZE);
  }
}

export function mockTimeLimitSeconds(count: number): number {
  return count * EXAM_INFO.secondsPerQuestion;
}
