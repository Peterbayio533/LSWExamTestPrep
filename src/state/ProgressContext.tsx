import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { awardBadges, XP } from '../lib/gamification';
import { dateKey } from '../lib/dates';
import { rescheduleReminders } from '../lib/notifications';
import { DEFAULT_STATE, type MockResult, type ProgressState, type Settings } from './types';

const STORAGE_KEY = 'nj-lsw-prep/progress/v1';

export interface AnswerRecord {
  id: string;
  correct: boolean;
}

interface ProgressContextValue {
  state: ProgressState;
  ready: boolean;
  recordAnswers: (answers: AnswerRecord[]) => void;
  completeSession: (size: number, correct: number) => void;
  recordMock: (result: MockResult) => void;
  markTopicRead: (topicId: string) => void;
  updateSettings: (patch: Partial<Settings>) => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

function hydrate(raw: unknown): ProgressState {
  const parsed = (raw ?? {}) as Partial<ProgressState>;
  return { ...DEFAULT_STATE, ...parsed, settings: { ...DEFAULT_STATE.settings, ...parsed.settings } };
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProgressState>(DEFAULT_STATE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => raw && setState(hydrate(JSON.parse(raw))))
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  useEffect(() => {
    if (ready) AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state)).catch(() => {});
  }, [state, ready]);

  // Keep scheduled reminders in sync with settings and today's activity.
  const studiedToday = (state.dailyCounts[dateKey()] ?? 0) > 0;
  const settingsKey = JSON.stringify(state.settings);
  useEffect(() => {
    if (ready) rescheduleReminders(state.settings, studiedToday).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, settingsKey, studiedToday]);

  const update = useCallback((fn: (s: ProgressState) => ProgressState) => {
    setState((prev) => awardBadges(fn(prev)));
  }, []);

  const recordAnswers = useCallback(
    (answers: AnswerRecord[]) =>
      update((s) => {
        const stats = { ...s.stats };
        let xp = s.xp;
        const now = Date.now();
        for (const { id, correct } of answers) {
          const prev = stats[id] ?? { attempts: 0, correct: 0, box: 0, lastSeen: 0, lastCorrect: false };
          stats[id] = {
            attempts: prev.attempts + 1,
            correct: prev.correct + (correct ? 1 : 0),
            box: correct ? Math.min(prev.box + 1, 4) : 0,
            lastSeen: now,
            lastCorrect: correct,
          };
          xp += correct ? XP.correct : XP.incorrect;
        }
        const today = dateKey();
        const before = s.dailyCounts[today] ?? 0;
        const after = before + answers.length;
        if (before < s.settings.dailyGoal && after >= s.settings.dailyGoal) xp += XP.dailyGoal;
        return { ...s, stats, xp, dailyCounts: { ...s.dailyCounts, [today]: after } };
      }),
    [update],
  );

  const completeSession = useCallback(
    (size: number, correct: number) =>
      update((s) => ({
        ...s,
        xp: s.xp + XP.sessionComplete,
        sessionsCompleted: s.sessionsCompleted + 1,
        perfectSessions: s.perfectSessions + (size >= 10 && correct === size ? 1 : 0),
      })),
    [update],
  );

  const recordMock = useCallback(
    (result: MockResult) => update((s) => ({ ...s, xp: s.xp + XP.mockComplete, mocks: [...s.mocks, result] })),
    [update],
  );

  const markTopicRead = useCallback(
    (topicId: string) =>
      update((s) =>
        s.readTopics.includes(topicId) ? s : { ...s, xp: s.xp + XP.topicRead, readTopics: [...s.readTopics, topicId] },
      ),
    [update],
  );

  const updateSettings = useCallback(
    (patch: Partial<Settings>) => update((s) => ({ ...s, settings: { ...s.settings, ...patch } })),
    [update],
  );

  const resetProgress = useCallback(() => setState((s) => ({ ...DEFAULT_STATE, settings: s.settings })), []);

  const value = useMemo(
    () => ({ state, ready, recordAnswers, completeSession, recordMock, markTopicRead, updateSettings, resetProgress }),
    [state, ready, recordAnswers, completeSession, recordMock, markTopicRead, updateSettings, resetProgress],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}
