import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { Button, Card, ProgressBar, Screen, SectionTitle, styles } from '../../src/components/ui';
import { DOMAINS, type DomainId } from '../../src/data/exam';
import { daysUntil, dateKey } from '../../src/lib/dates';
import { levelInfo } from '../../src/lib/gamification';
import { ensurePermission } from '../../src/lib/notifications';
import type { QuizMode } from '../../src/lib/quiz';
import { answeredOn, currentStreak, domainStats, missedQuestionIds } from '../../src/lib/stats';
import { useProgress } from '../../src/state/ProgressContext';
import { colors } from '../../src/theme';

function startQuiz(mode: QuizMode, domain?: DomainId) {
  router.push({ pathname: '/quiz', params: domain ? { mode, domain } : { mode } });
}

export default function HomeScreen() {
  const { state, updateSettings } = useProgress();
  const { settings } = state;
  const lvl = levelInfo(state.xp);
  const streak = currentStreak(state);
  const today = answeredOn(state, dateKey());
  const goalMet = today >= settings.dailyGoal;
  const ds = domainStats(state);
  const missed = missedQuestionIds(state).length;
  const left = settings.examDate ? daysUntil(settings.examDate) : null;

  const enableReminders = async () => {
    if (await ensurePermission()) updateSettings({ remindersOn: true });
    else Alert.alert('Notifications are off', 'Enable notifications for NJ LSW Prep in the iPhone Settings app.');
  };

  return (
    <Screen title={settings.name ? `Hi, ${settings.name} 👋` : 'NJ LSW Prep'} subtitle="ASWB Masters · 2026 blueprint">
      {/* Countdown + streak */}
      <View style={[styles.row, { gap: 12 }]}>
        <Card style={{ flex: 1, alignItems: 'center' }}>
          <Ionicons name="flame" size={28} color={streak ? colors.streak : colors.locked} />
          <Text style={{ fontSize: 24, fontWeight: '800', color: colors.text }}>{streak}</Text>
          <Text style={styles.muted}>day streak</Text>
        </Card>
        <Pressable style={{ flex: 1 }} onPress={() => router.push('/settings')}>
          <Card style={{ alignItems: 'center' }}>
            <Ionicons name="calendar" size={28} color={colors.primary} />
            <Text style={{ fontSize: 24, fontWeight: '800', color: colors.text }}>{left !== null && left >= 0 ? left : '—'}</Text>
            <Text style={styles.muted}>{left !== null && left >= 0 ? 'days to exam' : 'set exam date'}</Text>
          </Card>
        </Pressable>
      </View>

      {/* Level */}
      <Card style={{ gap: 8 }}>
        <View style={[styles.row, { justifyContent: 'space-between' }]}>
          <Text style={{ fontSize: 17, fontWeight: '800', color: colors.text }}>
            Lv {lvl.level} · {lvl.title}
          </Text>
          <Text style={styles.muted}>{state.xp} XP</Text>
        </View>
        <ProgressBar value={lvl.progress} color={colors.gold} height={10} />
        <Text style={styles.muted}>
          {lvl.xpToNext - lvl.xpIntoLevel} XP to level {lvl.level + 1}
        </Text>
      </Card>

      {/* Daily goal */}
      <Card style={{ gap: 10 }}>
        <View style={[styles.row, { justifyContent: 'space-between' }]}>
          <Text style={{ fontSize: 17, fontWeight: '800', color: colors.text }}>Today's goal</Text>
          <Text style={[styles.muted, goalMet && { color: colors.success, fontWeight: '700' }]}>
            {goalMet ? 'Complete! +25 XP' : `${today} / ${settings.dailyGoal}`}
          </Text>
        </View>
        <ProgressBar value={today / settings.dailyGoal} color={goalMet ? colors.success : colors.primary} height={10} />
        <Button label={goalMet ? 'Keep going: Daily 10' : 'Start Daily 10'} icon="play" onPress={() => startQuiz('daily')} />
      </Card>

      {!settings.remindersOn ? (
        <Card style={[styles.row, { backgroundColor: colors.primarySoft, borderColor: colors.primarySoft }]}>
          <Ionicons name="notifications" size={24} color={colors.primary} />
          <Text style={[styles.body, { flex: 1 }]}>Turn on daily reminders to protect your streak.</Text>
          <Pressable onPress={enableReminders}>
            <Text style={{ color: colors.primary, fontWeight: '800' }}>Enable</Text>
          </Pressable>
        </Card>
      ) : null}

      <SectionTitle>Practice by domain</SectionTitle>
      {DOMAINS.map((d) => (
        <Pressable key={d.id} onPress={() => startQuiz('domain', d.id)}>
          <Card style={[styles.row, { gap: 14 }]}>
            <View style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: d.softColor, alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name={d.icon} size={22} color={d.color} />
            </View>
            <View style={{ flex: 1, gap: 6 }}>
              <View style={[styles.row, { justifyContent: 'space-between' }]}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: colors.text }}>{d.name}</Text>
                <Text style={styles.muted}>{Math.round(d.weight * 100)}% of exam</Text>
              </View>
              <ProgressBar value={ds[d.id].mastery} color={d.color} />
              <Text style={styles.muted}>{Math.round(ds[d.id].mastery * 100)}% mastered</Text>
            </View>
          </Card>
        </Pressable>
      ))}

      <SectionTitle>More ways to practice</SectionTitle>
      <View style={[styles.row, { gap: 12 }]}>
        <Pressable style={{ flex: 1 }} onPress={() => (missed ? startQuiz('review') : Alert.alert('Nothing to review', 'Questions you miss will show up here.'))}>
          <Card style={{ gap: 6 }}>
            <Ionicons name="refresh-circle" size={28} color={colors.danger} />
            <Text style={{ fontWeight: '800', color: colors.text }}>Review missed</Text>
            <Text style={styles.muted}>{missed} to review</Text>
          </Card>
        </Pressable>
        <Pressable style={{ flex: 1 }} onPress={() => startQuiz('mock')}>
          <Card style={{ gap: 6 }}>
            <Ionicons name="timer" size={28} color={colors.primary} />
            <Text style={{ fontWeight: '800', color: colors.text }}>Mock exam</Text>
            <Text style={styles.muted}>Timed · exam weighting</Text>
          </Card>
        </Pressable>
      </View>
    </Screen>
  );
}
