import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button, Card, Screen, SectionTitle, styles } from '../../src/components/ui';
import { DOMAINS, EXAM_INFO } from '../../src/data/exam';
import { STUDY_TOPICS } from '../../src/data/studyGuide';
import { XP } from '../../src/lib/gamification';
import { useProgress } from '../../src/state/ProgressContext';
import { colors } from '../../src/theme';

export default function StudyScreen() {
  const { state, markTopicRead } = useProgress();
  const [open, setOpen] = useState<string | null>(null);
  const readCount = STUDY_TOPICS.filter((t) => state.readTopics.includes(t.id)).length;

  return (
    <Screen title="Study Guide" subtitle={`${readCount} of ${STUDY_TOPICS.length} topics read`}>
      <Card style={{ gap: 6, backgroundColor: colors.primarySoft, borderColor: colors.primarySoft }}>
        <Text style={{ fontSize: 16, fontWeight: '800', color: colors.primary }}>About the exam</Text>
        <Text style={styles.body}>
          The {EXAM_INFO.license} requires the {EXAM_INFO.exam}. Since {EXAM_INFO.blueprintEffective}, it has{' '}
          {EXAM_INFO.totalQuestions} questions ({EXAM_INFO.scoredQuestions} scored, {EXAM_INFO.pretestQuestions} unscored pretest), a{' '}
          {EXAM_INFO.timeLimitMinutes / 60}-hour limit, three content areas, and a mix of 3- and 4-option questions.
        </Text>
        <Text style={styles.muted}>Pacing: about 2 minutes per question. Scoring is scaled pass/fail.</Text>
      </Card>

      {DOMAINS.map((d) => (
        <View key={d.id} style={{ gap: 10 }}>
          <SectionTitle>
            {d.name} · ~{Math.round(d.weight * 100)}%
          </SectionTitle>
          <Text style={styles.muted}>{d.summary}</Text>
          {STUDY_TOPICS.filter((t) => t.domain === d.id).map((t) => {
            const isOpen = open === t.id;
            const isRead = state.readTopics.includes(t.id);
            return (
              <Card key={t.id} style={{ gap: 10 }}>
                <Pressable onPress={() => setOpen(isOpen ? null : t.id)} style={styles.row}>
                  <Ionicons
                    name={isRead ? 'checkmark-circle' : 'ellipse-outline'}
                    size={22}
                    color={isRead ? colors.success : colors.locked}
                  />
                  <Text style={{ flex: 1, fontSize: 16, fontWeight: '700', color: colors.text }}>{t.title}</Text>
                  <Ionicons name={isOpen ? 'chevron-up' : 'chevron-down'} size={20} color={colors.muted} />
                </Pressable>
                {isOpen ? (
                  <View style={{ gap: 8 }}>
                    {t.points.map((p, i) => (
                      <View key={i} style={{ flexDirection: 'row', gap: 8 }}>
                        <Text style={{ color: d.color, fontWeight: '900' }}>•</Text>
                        <Text style={[styles.body, { flex: 1 }]}>{p}</Text>
                      </View>
                    ))}
                    <View style={{ backgroundColor: d.softColor, padding: 12, borderRadius: 10 }}>
                      <Text style={{ fontWeight: '800', color: d.color }}>Exam tip</Text>
                      <Text style={styles.body}>{t.examTip}</Text>
                    </View>
                    <View style={[styles.row, { gap: 10 }]}>
                      <View style={{ flex: 1 }}>
                        <Button
                          label={isRead ? 'Read ✓' : `Mark read +${XP.topicRead} XP`}
                          variant="secondary"
                          disabled={isRead}
                          onPress={() => markTopicRead(t.id)}
                        />
                      </View>
                      <View style={{ flex: 1 }}>
                        <Button
                          label="Practice"
                          icon="play"
                          onPress={() => router.push({ pathname: '/quiz', params: { mode: 'domain', domain: d.id } })}
                        />
                      </View>
                    </View>
                  </View>
                ) : null}
              </Card>
            );
          })}
        </View>
      ))}
    </Screen>
  );
}
