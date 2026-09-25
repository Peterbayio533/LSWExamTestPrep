import React, { useState } from 'react';
import { Alert, Pressable, Switch, Text, TextInput, View } from 'react-native';
import { Button, Card, Chip, Screen, SectionTitle, styles } from '../../src/components/ui';
import { EXAM_INFO } from '../../src/data/exam';
import { QUESTIONS } from '../../src/data/questions';
import { parseDateKey } from '../../src/lib/dates';
import { ensurePermission, sendTestNotification } from '../../src/lib/notifications';
import { useProgress } from '../../src/state/ProgressContext';
import { colors } from '../../src/theme';

const GOALS = [5, 10, 20, 30];

function formatTime(h: number, m: number) {
  const hr = h % 12 === 0 ? 12 : h % 12;
  return `${hr}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
}

export default function SettingsScreen() {
  const { state, updateSettings, resetProgress } = useProgress();
  const { settings } = state;
  const [examInput, setExamInput] = useState(settings.examDate ?? '');

  const saveExamDate = () => {
    if (!examInput.trim()) return updateSettings({ examDate: null });
    if (!parseDateKey(examInput)) return Alert.alert('Invalid date', 'Use the format YYYY-MM-DD, e.g. 2026-12-15.');
    updateSettings({ examDate: examInput.trim() });
  };

  const toggleReminders = async (on: boolean) => {
    if (!on) return updateSettings({ remindersOn: false });
    if (await ensurePermission()) updateSettings({ remindersOn: true });
    else Alert.alert('Notifications are off', 'Enable notifications for NJ LSW Prep in the iPhone Settings app.');
  };

  const shiftTime = (minutes: number) => {
    const total = (settings.reminderHour * 60 + settings.reminderMinute + minutes + 1440) % 1440;
    updateSettings({ reminderHour: Math.floor(total / 60), reminderMinute: total % 60 });
  };

  const confirmReset = () =>
    Alert.alert('Reset all progress?', 'XP, streaks, badges, and answer history will be erased. Settings are kept.', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Reset', style: 'destructive', onPress: resetProgress },
    ]);

  return (
    <Screen title="Settings">
      <SectionTitle>Profile</SectionTitle>
      <Card style={{ gap: 12 }}>
        <Text style={styles.muted}>First name</Text>
        <TextInput
          value={settings.name}
          onChangeText={(name) => updateSettings({ name })}
          placeholder="Your name"
          style={inputStyle}
        />
        <Text style={styles.muted}>Exam date (YYYY-MM-DD)</Text>
        <TextInput
          value={examInput}
          onChangeText={setExamInput}
          onBlur={saveExamDate}
          onSubmitEditing={saveExamDate}
          placeholder="2026-12-15"
          keyboardType="numbers-and-punctuation"
          style={inputStyle}
        />
      </Card>

      <SectionTitle>Daily goal</SectionTitle>
      <Card style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
        {GOALS.map((g) => (
          <Chip key={g} label={`${g} questions`} active={settings.dailyGoal === g} onPress={() => updateSettings({ dailyGoal: g })} />
        ))}
      </Card>

      <SectionTitle>Reminders</SectionTitle>
      <Card style={{ gap: 14 }}>
        <View style={[styles.row, { justifyContent: 'space-between' }]}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: '700', color: colors.text }}>Study reminders</Text>
            <Text style={styles.muted}>A daily nudge, an evening streak saver, and exam countdown alerts</Text>
          </View>
          <Switch value={settings.remindersOn} onValueChange={toggleReminders} trackColor={{ true: colors.primary }} />
        </View>
        {settings.remindersOn ? (
          <>
            <View style={[styles.row, { justifyContent: 'space-between' }]}>
              <Text style={styles.body}>Daily reminder time</Text>
              <View style={styles.row}>
                <Pressable onPress={() => shiftTime(-15)} style={stepStyle}>
                  <Text style={stepText}>−</Text>
                </Pressable>
                <Text style={{ fontSize: 16, fontWeight: '800', minWidth: 80, textAlign: 'center', color: colors.text }}>
                  {formatTime(settings.reminderHour, settings.reminderMinute)}
                </Text>
                <Pressable onPress={() => shiftTime(15)} style={stepStyle}>
                  <Text style={stepText}>+</Text>
                </Pressable>
              </View>
            </View>
            <Button label="Send test notification" variant="secondary" icon="notifications" onPress={sendTestNotification} />
          </>
        ) : null}
      </Card>

      <SectionTitle>Content</SectionTitle>
      <Card style={{ gap: 6 }}>
        <Text style={styles.body}>
          Content version {EXAM_INFO.contentVersion} · {QUESTIONS.length} practice questions · aligned to the ASWB Masters
          blueprint effective {EXAM_INFO.blueprintEffective}.
        </Text>
        <Text style={styles.muted}>
          Practice items are original and are not actual exam questions. This app is not affiliated with ASWB or the NJ
          State Board of Social Work Examiners. Always confirm requirements with the official sources.
        </Text>
      </Card>

      <Button label="Reset progress" variant="danger" icon="trash" onPress={confirmReset} />
    </Screen>
  );
}

const inputStyle = {
  borderWidth: 1,
  borderColor: colors.border,
  borderRadius: 10,
  padding: 12,
  fontSize: 16,
  color: colors.text,
} as const;

const stepStyle = {
  width: 36,
  height: 36,
  borderRadius: 18,
  backgroundColor: colors.primarySoft,
  alignItems: 'center',
  justifyContent: 'center',
} as const;

const stepText = { fontSize: 20, fontWeight: '800', color: colors.primary } as const;
