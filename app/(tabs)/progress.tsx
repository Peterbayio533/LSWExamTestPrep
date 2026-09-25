import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, View } from 'react-native';
import { Card, ProgressBar, Screen, SectionTitle, styles } from '../../src/components/ui';
import { DOMAINS } from '../../src/data/exam';
import { BADGES } from '../../src/lib/gamification';
import { currentStreak, domainStats, longestStreak, readiness, recentActivity, totals } from '../../src/lib/stats';
import { useProgress } from '../../src/state/ProgressContext';
import { colors } from '../../src/theme';

const pct = (v: number) => `${Math.round(v * 100)}%`;

export default function ProgressScreen() {
  const { state } = useProgress();
  const ready = readiness(state);
  const ds = domainStats(state);
  const t = totals(state);
  const activity = recentActivity(state, 14);
  const maxDay = Math.max(state.settings.dailyGoal, ...activity.map((a) => a.count));
  const readyColor = ready >= 0.75 ? colors.success : ready >= 0.5 ? colors.gold : colors.danger;

  return (
    <Screen title="Progress">
      <Card style={{ gap: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: '800', color: colors.text }}>Exam readiness</Text>
        <Text style={{ fontSize: 44, fontWeight: '900', color: readyColor }}>{pct(ready)}</Text>
        <ProgressBar value={ready} color={readyColor} height={12} />
        <Text style={styles.muted}>
          Weighted by the 2026 blueprint: the share of questions in each domain you most recently answered correctly. Aim
          for 75% or higher before test day.
        </Text>
      </Card>

      <View style={[styles.row, { gap: 12 }]}>
        {[
          { label: 'Answered', value: String(t.attempts) },
          { label: 'Accuracy', value: pct(t.accuracy) },
          { label: 'Streak', value: `${currentStreak(state)}d` },
          { label: 'Best', value: `${longestStreak(state)}d` },
        ].map((s) => (
          <Card key={s.label} style={{ flex: 1, alignItems: 'center', paddingHorizontal: 6 }}>
            <Text style={{ fontSize: 20, fontWeight: '800', color: colors.text }}>{s.value}</Text>
            <Text style={styles.muted}>{s.label}</Text>
          </Card>
        ))}
      </View>

      <SectionTitle>By domain</SectionTitle>
      <Card style={{ gap: 14 }}>
        {DOMAINS.map((d) => (
          <View key={d.id} style={{ gap: 6 }}>
            <View style={[styles.row, { justifyContent: 'space-between' }]}>
              <Text style={{ fontWeight: '700', color: colors.text }}>{d.name}</Text>
              <Text style={styles.muted}>
                {pct(ds[d.id].accuracy)} accuracy · {ds[d.id].seen}/{ds[d.id].total} seen
              </Text>
            </View>
            <ProgressBar value={ds[d.id].mastery} color={d.color} />
          </View>
        ))}
      </Card>

      <SectionTitle>Last 14 days</SectionTitle>
      <Card>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: 100, gap: 4 }}>
          {activity.map((a) => (
            <View key={a.key} style={{ flex: 1, alignItems: 'center', gap: 4 }}>
              <View
                style={{
                  width: '100%',
                  height: Math.max(3, (a.count / maxDay) * 80),
                  borderRadius: 4,
                  backgroundColor: a.count >= state.settings.dailyGoal ? colors.success : a.count ? colors.primary : colors.border,
                }}
              />
              <Text style={{ fontSize: 10, color: colors.muted }}>{a.day}</Text>
            </View>
          ))}
        </View>
      </Card>

      {state.mocks.length ? (
        <>
          <SectionTitle>Mock exams</SectionTitle>
          <Card style={{ gap: 10 }}>
            {[...state.mocks].reverse().slice(0, 5).map((m) => (
              <View key={m.date} style={[styles.row, { justifyContent: 'space-between' }]}>
                <Text style={styles.body}>{new Date(m.date).toLocaleDateString()}</Text>
                <Text style={styles.muted}>{Math.round(m.seconds / 60)} min</Text>
                <Text style={{ fontWeight: '800', color: m.correct / m.total >= 0.75 ? colors.success : colors.text }}>
                  {m.correct}/{m.total} ({pct(m.correct / m.total)})
                </Text>
              </View>
            ))}
          </Card>
        </>
      ) : null}

      <SectionTitle>
        Badges · {Object.keys(state.badges).length}/{BADGES.length}
      </SectionTitle>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
        {BADGES.map((b) => {
          const earned = !!state.badges[b.id];
          return (
            <Card key={b.id} style={{ width: '31%', alignItems: 'center', gap: 4, paddingHorizontal: 6, opacity: earned ? 1 : 0.55 }}>
              <Ionicons name={earned ? b.icon : 'lock-closed'} size={26} color={earned ? colors.gold : colors.locked} />
              <Text style={{ fontSize: 12, fontWeight: '800', color: colors.text, textAlign: 'center' }}>{b.name}</Text>
              <Text style={{ fontSize: 10, color: colors.muted, textAlign: 'center' }}>{b.description}</Text>
            </Card>
          );
        })}
      </View>
    </Screen>
  );
}
