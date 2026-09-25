import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { formatRef, SOURCES, type Ref, type Source } from '../data/sources';
import { colors } from '../theme';

/** Compact list of citations; entries with a URL open the source when tapped. */
export function SourceList({ refs, title = 'Sources' }: { refs: Ref[]; title?: string }) {
  if (!refs.length) return null;
  return (
    <View style={s.wrap}>
      <Text style={s.title}>{title}</Text>
      {refs.map((ref, i) => {
        const src: Source = SOURCES[ref.s];
        const label = formatRef(ref);
        return src.url ? (
          <Pressable
            key={i}
            onPress={() => Linking.openURL(src.url!)}
            accessibilityRole="link"
            accessibilityLabel={`Open source: ${label}`}
            style={s.row}
          >
            <Ionicons name="open-outline" size={13} color={colors.primary} />
            <Text style={[s.text, { color: colors.primary }]}>{label}</Text>
          </Pressable>
        ) : (
          <View key={i} style={s.row}>
            <Ionicons name="book-outline" size={13} color={colors.muted} />
            <Text style={s.text}>{label}</Text>
          </View>
        );
      })}
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { gap: 4 },
  title: { fontSize: 12, fontWeight: '800', color: colors.muted, textTransform: 'uppercase', letterSpacing: 0.5 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  text: { flex: 1, fontSize: 13, color: colors.muted },
});
