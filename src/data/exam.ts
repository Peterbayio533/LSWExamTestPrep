import type { IconName } from '../theme';

// Blueprint for the ASWB Masters exam (required for the NJ LSW, N.J.A.C. 13:44G-4.2),
// effective Aug 3, 2026. Weights and format verified against the ASWB Examination
// Guidebook (08/2026): 122 questions (110 scored), 4 hours, 3- and 4-option items.

export type DomainId = 'ethics' | 'assessment' | 'intervention';

export interface Domain {
  id: DomainId;
  name: string;
  short: string;
  weight: number;
  color: string;
  softColor: string;
  icon: IconName;
  summary: string;
}

export const DOMAINS: Domain[] = [
  {
    id: 'ethics',
    name: 'Values and Ethics',
    short: 'Ethics',
    weight: 0.35,
    color: '#7C3AED',
    softColor: '#F3E8FF',
    icon: 'shield-checkmark',
    summary:
      'Legal and ethical standards, ethical dilemmas, boundaries, confidentiality, documentation, and anti-oppressive practice.',
  },
  {
    id: 'assessment',
    name: 'Assessment and Planning',
    short: 'Assessment',
    weight: 0.33,
    color: '#0284C7',
    softColor: '#E0F2FE',
    icon: 'clipboard',
    summary:
      'Assessment concepts and methods, risk assessment, human development in context, collaborative goal setting, and service planning.',
  },
  {
    id: 'intervention',
    name: 'Intervention and Practice',
    short: 'Intervention',
    weight: 0.32,
    color: '#059669',
    softColor: '#D1FAE5',
    icon: 'people',
    summary:
      'Engagement, intervention methods, crisis work, case management, groups and families, grief and loss, and evaluating practice.',
  },
];

export const DOMAIN_BY_ID = Object.fromEntries(DOMAINS.map((d) => [d.id, d])) as Record<DomainId, Domain>;

export const EXAM_INFO = {
  license: 'NJ Licensed Social Worker (LSW)',
  exam: 'ASWB Masters Exam',
  blueprintEffective: 'August 3, 2026',
  totalQuestions: 122,
  scoredQuestions: 110,
  pretestQuestions: 12,
  timeLimitMinutes: 240,
  secondsPerQuestion: 120,
  contentVersion: '2026.09.2',
};
