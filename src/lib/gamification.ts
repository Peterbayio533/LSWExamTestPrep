import { STUDY_TOPICS } from '../data/studyGuide';
import type { ProgressState } from '../state/types';
import type { IconName } from '../theme';
import { domainStats, longestStreak, totals } from './stats';

export const XP = {
  correct: 10,
  incorrect: 2,
  topicRead: 5,
  sessionComplete: 20,
  dailyGoal: 25,
  mockComplete: 100,
  badge: 50,
};

const TITLES = [
  'MSW Student',
  'Field Intern',
  'Case Aide',
  'Case Manager',
  'Social Worker I',
  'Social Worker II',
  'Senior Social Worker',
  'Program Coordinator',
  'Field Supervisor',
  'Exam Ready',
];

/** Total XP needed to reach `level` (level 1 = 0, 2 = 100, 3 = 300, 4 = 600 …). */
export function xpForLevel(level: number): number {
  return 50 * level * (level - 1);
}

export function levelInfo(xp: number) {
  let level = 1;
  while (xp >= xpForLevel(level + 1)) level++;
  const floor = xpForLevel(level);
  const next = xpForLevel(level + 1);
  return {
    level,
    title: TITLES[Math.min(level - 1, TITLES.length - 1)],
    xpIntoLevel: xp - floor,
    xpToNext: next - floor,
    progress: (xp - floor) / (next - floor),
  };
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: IconName;
  test: (s: ProgressState) => boolean;
}

const domainAce = (domain: 'ethics' | 'assessment' | 'intervention') => (s: ProgressState) => {
  const d = domainStats(s)[domain];
  return d.attempts >= 20 && d.accuracy >= 0.8;
};

export const BADGES: Badge[] = [
  { id: 'first', name: 'First Step', description: 'Answer your first question', icon: 'footsteps', test: (s) => totals(s).attempts >= 1 },
  { id: 'streak3', name: 'On a Roll', description: '3-day study streak', icon: 'flame', test: (s) => longestStreak(s) >= 3 },
  { id: 'streak7', name: 'Week Warrior', description: '7-day study streak', icon: 'bonfire', test: (s) => longestStreak(s) >= 7 },
  { id: 'streak30', name: 'Unstoppable', description: '30-day study streak', icon: 'rocket', test: (s) => longestStreak(s) >= 30 },
  { id: 'q100', name: 'Century', description: 'Answer 100 questions', icon: 'ribbon', test: (s) => totals(s).attempts >= 100 },
  { id: 'q500', name: 'Question Machine', description: 'Answer 500 questions', icon: 'trophy', test: (s) => totals(s).attempts >= 500 },
  { id: 'perfect', name: 'Flawless', description: 'Perfect score on a 10-question session', icon: 'star', test: (s) => s.perfectSessions >= 1 },
  { id: 'aceEthics', name: 'Ethics Ace', description: '80%+ in Ethics (20+ answers)', icon: 'shield-checkmark', test: domainAce('ethics') },
  { id: 'aceAssess', name: 'Sharp Assessor', description: '80%+ in Assessment (20+ answers)', icon: 'clipboard', test: domainAce('assessment') },
  { id: 'aceInterv', name: 'Skilled Helper', description: '80%+ in Intervention (20+ answers)', icon: 'people', test: domainAce('intervention') },
  { id: 'mock1', name: 'Dress Rehearsal', description: 'Complete a mock exam', icon: 'timer', test: (s) => s.mocks.length >= 1 },
  { id: 'mockPass', name: 'Test Ready', description: 'Score 75%+ on a mock exam', icon: 'medal', test: (s) => s.mocks.some((m) => m.correct / m.total >= 0.75) },
  { id: 'scholar', name: 'Scholar', description: 'Read every study guide topic', icon: 'library', test: (s) => STUDY_TOPICS.every((t) => s.readTopics.includes(t.id)) },
];

/** Adds any newly earned badges (and their XP bonus) to the state. */
export function awardBadges(s: ProgressState): ProgressState {
  const newly = BADGES.filter((b) => !s.badges[b.id] && b.test(s));
  if (!newly.length) return s;
  const badges = { ...s.badges };
  const now = Date.now();
  for (const b of newly) badges[b.id] = now;
  return { ...s, badges, xp: s.xp + newly.length * XP.badge };
}
