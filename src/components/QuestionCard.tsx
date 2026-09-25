import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { DOMAIN_BY_ID } from '../data/exam';
import { COMPETENCY_BY_ID } from '../data/outline';
import type { Question } from '../data/questions';
import { colors, radius } from '../theme';
import { SourceList } from './SourceList';

const LETTERS = ['A', 'B', 'C', 'D'];

interface Props {
  question: Question;
  /** display order of original option indices */
  order: number[];
  selected: number | null;
  revealed: boolean;
  onSelect?: (optionIndex: number) => void;
}

export function QuestionCard({ question, order, selected, revealed, onSelect }: Props) {
  const domain = DOMAIN_BY_ID[question.domain];
  return (
    <View style={{ gap: 12 }}>
      <View style={[s.tag, { backgroundColor: domain.softColor }]}>
        <Text style={[s.tagText, { color: domain.color }]}>
          {question.competency} · {question.topic}
        </Text>
      </View>
      <Text style={s.stem}>{question.stem}</Text>
      {order.map((optIdx, pos) => {
        const isSelected = selected === optIdx;
        const isAnswer = question.answer === optIdx;
        let border = colors.border;
        let bg = colors.card;
        let icon: 'checkmark-circle' | 'close-circle' | null = null;
        if (revealed && isAnswer) {
          border = colors.success;
          bg = colors.successSoft;
          icon = 'checkmark-circle';
        } else if (revealed && isSelected) {
          border = colors.danger;
          bg = colors.dangerSoft;
          icon = 'close-circle';
        } else if (isSelected) {
          border = colors.primary;
          bg = colors.primarySoft;
        }
        return (
          <Pressable
            key={optIdx}
            disabled={revealed || !onSelect}
            onPress={() => onSelect?.(optIdx)}
            style={[s.option, { borderColor: border, backgroundColor: bg }]}
          >
            <View style={[s.letter, isSelected && !revealed && { backgroundColor: colors.primary }]}>
              <Text style={[s.letterText, isSelected && !revealed && { color: '#fff' }]}>{LETTERS[pos]}</Text>
            </View>
            <Text style={s.optionText}>{question.options[optIdx]}</Text>
            {icon ? <Ionicons name={icon} size={22} color={icon === 'checkmark-circle' ? colors.success : colors.danger} /> : null}
          </Pressable>
        );
      })}
      {revealed ? (
        <View style={s.rationale}>
          <Text style={s.rationaleTitle}>Why</Text>
          <Text style={s.rationaleText}>{question.rationale}</Text>
          <View style={s.divider} />
          <Text style={s.outline}>
            ASWB outline {question.competency}: {COMPETENCY_BY_ID[question.competency].name}
          </Text>
          <SourceList refs={question.refs} />
        </View>
      ) : null}
    </View>
  );
}

const s = StyleSheet.create({
  tag: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  tagText: { fontSize: 12, fontWeight: '700' },
  stem: { fontSize: 18, lineHeight: 26, color: colors.text, fontWeight: '600' },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderRadius: radius.md,
    borderWidth: 2,
  },
  letter: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letterText: { fontWeight: '800', color: colors.muted },
  optionText: { flex: 1, fontSize: 15, lineHeight: 21, color: colors.text },
  rationale: { backgroundColor: colors.primarySoft, borderRadius: radius.md, padding: 14, gap: 4 },
  rationaleTitle: { fontWeight: '800', color: colors.primary },
  rationaleText: { fontSize: 15, lineHeight: 22, color: colors.text },
  divider: { height: StyleSheet.hairlineWidth, backgroundColor: colors.border, marginVertical: 6 },
  outline: { fontSize: 12, fontWeight: '700', color: colors.muted },
});
