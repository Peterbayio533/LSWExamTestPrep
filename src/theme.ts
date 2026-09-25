import type { ComponentProps } from 'react';
import type Ionicons from '@expo/vector-icons/Ionicons';

export type IconName = ComponentProps<typeof Ionicons>['name'];

export const colors = {
  bg: '#F6F7FB',
  card: '#FFFFFF',
  text: '#1B1F3B',
  muted: '#6B7280',
  border: '#E5E7EB',
  primary: '#4F46E5',
  primarySoft: '#EEF2FF',
  success: '#16A34A',
  successSoft: '#DCFCE7',
  danger: '#DC2626',
  dangerSoft: '#FEE2E2',
  streak: '#F97316',
  gold: '#EAB308',
  locked: '#D1D5DB',
};

export const radius = { sm: 8, md: 14, lg: 20 };
