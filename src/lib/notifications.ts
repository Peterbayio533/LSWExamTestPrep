import * as Notifications from 'expo-notifications';
import type { Settings } from '../state/types';
import { addDays, daysUntil, parseDateKey } from './dates';

const STREAK_SAVER_HOUR = 20;
const EXAM_MILESTONES = [60, 30, 14, 7, 3, 1, 0];

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function ensurePermission(): Promise<boolean> {
  const current = await Notifications.getPermissionsAsync();
  if (current.granted) return true;
  if (!current.canAskAgain) return false;
  const req = await Notifications.requestPermissionsAsync();
  return req.granted;
}

function atTime(day: Date, hour: number, minute: number): Date {
  const d = new Date(day);
  d.setHours(hour, minute, 0, 0);
  return d;
}

async function scheduleAt(date: Date, title: string, body: string) {
  if (date.getTime() <= Date.now()) return;
  await Notifications.scheduleNotificationAsync({
    content: { title, body },
    trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date },
  });
}

/**
 * Rebuilds all local reminders from scratch:
 *  - a repeating daily study reminder
 *  - a one-shot "streak saver" in the evening on the next day without study
 *  - countdown nudges before the exam date
 */
export async function rescheduleReminders(settings: Settings, studiedToday: boolean): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();
  if (!settings.remindersOn) return;
  if (!(await Notifications.getPermissionsAsync()).granted) return;

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Time for your Daily 10 📚',
      body: 'A few focused minutes today moves you closer to your LSW. Keep the streak alive!',
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: settings.reminderHour,
      minute: settings.reminderMinute,
    },
  });

  const saverDay = studiedToday ? addDays(new Date(), 1) : new Date();
  await scheduleAt(
    atTime(saverDay, STREAK_SAVER_HOUR, 0),
    "Don't lose your streak 🔥",
    'You haven\'t practiced yet today. A quick 10-question round keeps it going.',
  );

  const exam = settings.examDate ? parseDateKey(settings.examDate) : null;
  const left = settings.examDate ? daysUntil(settings.examDate) : null;
  if (exam && left !== null && left >= 0) {
    for (const d of EXAM_MILESTONES) {
      const when = atTime(addDays(exam, -d), settings.reminderHour, settings.reminderMinute);
      await scheduleAt(
        when,
        d === 0 ? 'Exam day — you\'ve got this 💪' : `${d} day${d === 1 ? '' : 's'} until your ASWB exam`,
        d === 0
          ? 'Breathe, read each question for "FIRST/BEST/NEXT," and trust your preparation.'
          : d <= 3
            ? 'Light review only: skim your missed questions and get good sleep.'
            : 'Take a mock exam this week to check your pacing and weak areas.',
      );
    }
  }
}

export async function sendTestNotification() {
  await Notifications.scheduleNotificationAsync({
    content: { title: 'Reminders are on ✅', body: 'This is what your study reminders will look like.' },
    trigger: { type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL, seconds: 3 },
  });
}
