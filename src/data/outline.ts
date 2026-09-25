import type { DomainId } from './exam';

// Competencies from the official ASWB Masters content outline (2026 Examination
// Guidebook). Every question is tagged to exactly one competency.

export type CompetencyId = 'IA' | 'IB' | 'IC' | 'IIA' | 'IIB' | 'IIC' | 'IIIA' | 'IIIB' | 'IIIC' | 'IIID';

export interface Competency {
  id: CompetencyId;
  domain: DomainId;
  name: string;
}

export const COMPETENCIES: Competency[] = [
  { id: 'IA', domain: 'ethics', name: 'Ethical principles and responsibilities' },
  { id: 'IB', domain: 'ethics', name: 'Ethical service delivery' },
  { id: 'IC', domain: 'ethics', name: 'Diversity and social justice' },
  { id: 'IIA', domain: 'assessment', name: 'Assessment concepts' },
  { id: 'IIB', domain: 'assessment', name: 'Assessment methods and techniques' },
  { id: 'IIC', domain: 'assessment', name: 'Assessment practices' },
  { id: 'IIIA', domain: 'intervention', name: 'Practice concepts' },
  { id: 'IIIB', domain: 'intervention', name: 'Intervention methods and techniques' },
  { id: 'IIIC', domain: 'intervention', name: 'Practice evaluation and research' },
  { id: 'IIID', domain: 'intervention', name: 'Supervision and administration' },
];

export const COMPETENCY_BY_ID = Object.fromEntries(COMPETENCIES.map((c) => [c.id, c])) as Record<CompetencyId, Competency>;
