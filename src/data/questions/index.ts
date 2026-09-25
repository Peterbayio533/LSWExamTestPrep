import type { DomainId } from '../exam';
import { COMPETENCY_BY_ID } from '../outline';
import { ASSESSMENT_QUESTIONS } from './assessment';
import { ETHICS_QUESTIONS } from './ethics';
import { INTERVENTION_QUESTIONS } from './intervention';
import type { QuestionInput } from './types';

export type { QuestionInput } from './types';

export interface Question extends QuestionInput {
  domain: DomainId;
}

export const QUESTIONS: Question[] = [...ETHICS_QUESTIONS, ...ASSESSMENT_QUESTIONS, ...INTERVENTION_QUESTIONS].map((q) => ({
  ...q,
  domain: COMPETENCY_BY_ID[q.competency].domain,
}));

export const QUESTION_BY_ID = Object.fromEntries(QUESTIONS.map((q) => [q.id, q])) as Record<string, Question>;
