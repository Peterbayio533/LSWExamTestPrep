import type { DomainId } from '../data/exam';

export interface QuestionStat {
  attempts: number;
  correct: number;
  /** Leitner box 0-4: 0 = needs review, 4 = mastered. */
  box: number;
  lastSeen: number;
  lastCorrect: boolean;
}

export interface MockResult {
  date: number;
  correct: number;
  total: number;
  seconds: number;
  byDomain: Record<DomainId, { correct: number; total: number }>;
}

export interface Settings {
  name: string;
  /** YYYY-MM-DD */
  examDate: string | null;
  dailyGoal: number;
  remindersOn: boolean;
  reminderHour: number;
  reminderMinute: number;
}

export interface ProgressState {
  version: 1;
  xp: number;
  stats: Record<string, QuestionStat>;
  /** YYYY-MM-DD -> questions answered that day */
  dailyCounts: Record<string, number>;
  /** badge id -> timestamp earned */
  badges: Record<string, number>;
  mocks: MockResult[];
  readTopics: string[];
  sessionsCompleted: number;
  perfectSessions: number;
  settings: Settings;
}

export const DEFAULT_STATE: ProgressState = {
  version: 1,
  xp: 0,
  stats: {},
  dailyCounts: {},
  badges: {},
  mocks: [],
  readTopics: [],
  sessionsCompleted: 0,
  perfectSessions: 0,
  settings: {
    name: '',
    examDate: null,
    dailyGoal: 10,
    remindersOn: false,
    reminderHour: 19,
    reminderMinute: 0,
  },
};
