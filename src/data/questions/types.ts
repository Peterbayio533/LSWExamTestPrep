import type { CompetencyId } from '../outline';
import type { Ref } from '../sources';

// Original practice items written to the 2026 ASWB Masters content outline.
// `answer` is the index into `options`. Options are shuffled at display time,
// so never write "all of the above"-style choices (ASWB never uses them either).
// Keep ids stable once published — progress is stored by id.

export interface QuestionInput {
  id: string;
  competency: CompetencyId;
  topic: string;
  stem: string;
  options: string[];
  answer: number;
  rationale: string;
  refs: Ref[];
}
