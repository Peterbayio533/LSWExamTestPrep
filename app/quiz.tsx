import Ionicons from '@expo/vector-icons/Ionicons';
import * as Haptics from 'expo-haptics';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { QuestionCard } from '../src/components/QuestionCard';
import { Button, Card, ProgressBar, styles } from '../src/components/ui';
import { DOMAINS, DOMAIN_BY_ID, type DomainId } from '../src/data/exam';
import { BADGES } from '../src/lib/gamification';
import { buildQuiz, mockTimeLimitSeconds, shuffle, type QuizMode } from '../src/lib/quiz';
import { useProgress } from '../src/state/ProgressContext';
import type { MockResult } from '../src/state/types';
import { colors } from '../src/theme';

const TITLES: Record<QuizMode, string> = {
  daily: 'Daily 10',
  domain: 'Domain Practice',
  review: 'Review Missed',
  mock: 'Mock Exam',
};

const fmtClock = (sec: number) => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;

// iOS full-screen modals don't inherit safe-area insets from the root provider,
// so the quiz measures its own; otherwise the header slides under the status bar.
export default function QuizScreen() {
  return (
    <SafeAreaProvider>
      <QuizContent />
    </SafeAreaProvider>
  );
}

function QuizContent() {
  const params = useLocalSearchParams<{ mode?: string; domain?: string }>();
  const mode = (params.mode ?? 'daily') as QuizMode;
  const domain = params.domain as DomainId | undefined;
  const isMock = mode === 'mock';
  const { state, recordAnswers, completeSession, recordMock } = useProgress();

  // Snapshot everything at session start.
  const [questions] = useState(() => buildQuiz(mode, state, domain));
  const [orders] = useState(() => questions.map((q) => shuffle(q.options.map((_, i) => i))));
  const [startXp] = useState(state.xp);
  const [startBadges] = useState(() => new Set(Object.keys(state.badges)));
  const [startedAt] = useState(Date.now());

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [revealed, setRevealed] = useState(false);
  const [finished, setFinished] = useState(false);
  const [remaining, setRemaining] = useState(() => mockTimeLimitSeconds(questions.length));

  const answersRef = useRef(answers);
  answersRef.current = answers;
  const finishedRef = useRef(false);

  const q = questions[idx];
  const selected = answers[idx];
  const correctCount = answers.filter((a, i) => a === questions[i]?.answer).length;

  const finishMock = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    const final = answersRef.current;
    const byDomain = Object.fromEntries(DOMAINS.map((d) => [d.id, { correct: 0, total: 0 }])) as MockResult['byDomain'];
    const records = questions.map((qq, i) => {
      const correct = final[i] === qq.answer;
      byDomain[qq.domain].total++;
      if (correct) byDomain[qq.domain].correct++;
      return { id: qq.id, correct };
    });
    const correct = records.filter((r) => r.correct).length;
    recordAnswers(records);
    recordMock({ date: Date.now(), correct, total: questions.length, seconds: Math.round((Date.now() - startedAt) / 1000), byDomain });
    setFinished(true);
  }, [questions, recordAnswers, recordMock, startedAt]);

  useEffect(() => {
    if (!isMock || finished || !questions.length) return;
    const t = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(t);
          setTimeout(finishMock, 0);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [isMock, finished, finishMock, questions.length]);

  const select = (opt: number) => {
    Haptics.selectionAsync().catch(() => {});
    setAnswers((prev) => prev.map((a, i) => (i === idx ? opt : a)));
  };

  const check = () => {
    if (selected === null) return;
    const correct = selected === q.answer;
    Haptics.notificationAsync(correct ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Error).catch(() => {});
    recordAnswers([{ id: q.id, correct }]);
    setRevealed(true);
  };

  const next = () => {
    if (idx < questions.length - 1) {
      setIdx(idx + 1);
      setRevealed(false);
      return;
    }
    if (isMock) {
      const unanswered = answers.filter((a) => a === null).length;
      if (unanswered) {
        Alert.alert('Submit exam?', `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}.`, [
          { text: 'Keep working', style: 'cancel' },
          { text: 'Submit', onPress: finishMock },
        ]);
      } else finishMock();
    } else {
      completeSession(questions.length, correctCount);
      setFinished(true);
    }
  };

  const close = () => {
    if (finished || (!isMock && idx === 0 && !revealed)) return router.back();
    Alert.alert('Leave session?', isMock ? 'This mock exam will not be scored.' : 'Answers so far are saved.', [
      { text: 'Stay', style: 'cancel' },
      { text: 'Leave', style: 'destructive', onPress: () => router.back() },
    ]);
  };

  // ── Empty state ──
  if (!questions.length) {
    return (
      <SafeAreaView style={[styles.safe, { padding: 24, justifyContent: 'center', gap: 16 }]}>
        <Text style={[styles.title, { textAlign: 'center' }]}>All caught up 🎉</Text>
        <Text style={[styles.body, { textAlign: 'center' }]}>No questions available for this mode yet.</Text>
        <Button label="Back" onPress={() => router.back()} />
      </SafeAreaView>
    );
  }

  // ── Results ──
  if (finished) {
    const pct = Math.round((correctCount / questions.length) * 100);
    const newBadges = BADGES.filter((b) => state.badges[b.id] && !startBadges.has(b.id));
    return (
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={[styles.scroll, { alignItems: 'stretch' }]}>
          <View style={{ alignItems: 'center', gap: 6, marginTop: 12 }}>
            <Ionicons name={pct >= 75 ? 'trophy' : 'barbell'} size={56} color={pct >= 75 ? colors.gold : colors.primary} />
            <Text style={styles.title}>{pct >= 90 ? 'Outstanding!' : pct >= 75 ? 'Great work!' : pct >= 50 ? 'Good effort!' : 'Keep practicing!'}</Text>
            <Text style={{ fontSize: 40, fontWeight: '900', color: colors.text }}>{pct}%</Text>
            <Text style={styles.muted}>
              {correctCount} of {questions.length} correct
            </Text>
          </View>

          <Card style={[styles.row, { justifyContent: 'center' }]}>
            <Ionicons name="sparkles" size={22} color={colors.gold} />
            <Text style={{ fontSize: 18, fontWeight: '800', color: colors.text }}>+{state.xp - startXp} XP earned</Text>
          </Card>

          {newBadges.map((b) => (
            <Card key={b.id} style={[styles.row, { backgroundColor: '#FEF9C3', borderColor: colors.gold }]}>
              <Ionicons name={b.icon} size={30} color={colors.gold} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: '800', color: colors.text }}>Badge unlocked: {b.name}</Text>
                <Text style={styles.muted}>{b.description}</Text>
              </View>
            </Card>
          ))}

          {isMock ? (
            <>
              <Card style={{ gap: 10 }}>
                <Text style={{ fontWeight: '800', color: colors.text }}>By domain</Text>
                {DOMAINS.map((d) => {
                  const qs = questions.map((qq, i) => ({ qq, i })).filter((x) => x.qq.domain === d.id);
                  const c = qs.filter((x) => answers[x.i] === x.qq.answer).length;
                  return (
                    <View key={d.id} style={{ gap: 4 }}>
                      <View style={[styles.row, { justifyContent: 'space-between' }]}>
                        <Text style={styles.body}>{d.short}</Text>
                        <Text style={styles.muted}>
                          {c}/{qs.length}
                        </Text>
                      </View>
                      <ProgressBar value={qs.length ? c / qs.length : 0} color={d.color} />
                    </View>
                  );
                })}
              </Card>
              <Text style={[styles.muted, { fontWeight: '700' }]}>REVIEW</Text>
              {questions.map((qq, i) => (
                <Card key={qq.id}>
                  <QuestionCard question={qq} order={orders[i]} selected={answers[i]} revealed />
                </Card>
              ))}
            </>
          ) : null}

          <Button label="Done" onPress={() => router.back()} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── Question ──
  const domainColor = DOMAIN_BY_ID[q.domain].color;
  return (
    <SafeAreaView style={styles.safe}>
      <View style={{ paddingHorizontal: 12, paddingTop: 12, gap: 10 }}>
        <View style={[styles.row, { justifyContent: 'space-between' }]}>
          <Pressable
            onPress={close}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Close quiz"
            style={({ pressed }) => ({
              width: 44,
              height: 44,
              borderRadius: 22,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: pressed ? colors.border : colors.card,
            })}
          >
            <Ionicons name="close" size={26} color={colors.text} />
          </Pressable>
          <Text style={{ fontWeight: '800', color: colors.text }}>{TITLES[mode]}</Text>
          {isMock ? (
            <Text style={{ fontWeight: '800', color: remaining < 120 ? colors.danger : colors.text, minWidth: 50, textAlign: 'right' }}>
              {fmtClock(remaining)}
            </Text>
          ) : (
            <Text style={[styles.muted, { minWidth: 50, textAlign: 'right' }]}>
              {idx + 1}/{questions.length}
            </Text>
          )}
        </View>
        <ProgressBar value={(idx + (revealed ? 1 : 0)) / questions.length} color={domainColor} />
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 24 }}>
        <QuestionCard question={q} order={orders[idx]} selected={selected} revealed={revealed} onSelect={select} />
      </ScrollView>

      <View style={{ padding: 16, gap: 10, borderTopWidth: 1, borderTopColor: colors.border, backgroundColor: colors.card }}>
        {isMock ? (
          <View style={[styles.row, { gap: 10 }]}>
            <View style={{ flex: 1 }}>
              <Button label="Back" variant="secondary" disabled={idx === 0} onPress={() => setIdx(idx - 1)} />
            </View>
            <View style={{ flex: 2 }}>
              <Button label={idx === questions.length - 1 ? 'Submit exam' : `Next (${idx + 1}/${questions.length})`} onPress={next} />
            </View>
          </View>
        ) : revealed ? (
          <Button label={idx === questions.length - 1 ? 'See results' : 'Next question'} icon="arrow-forward" onPress={next} />
        ) : (
          <Button label="Check answer" disabled={selected === null} onPress={check} />
        )}
      </View>
    </SafeAreaView>
  );
}
