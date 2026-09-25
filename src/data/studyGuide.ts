import type { DomainId } from './exam';

export interface StudyTopic {
  id: string;
  domain: DomainId;
  title: string;
  points: string[];
  examTip: string;
}

export const STUDY_TOPICS: StudyTopic[] = [
  // Values and Ethics
  {
    id: 'st-eth-conf',
    domain: 'ethics',
    title: 'Confidentiality & its limits',
    points: [
      'Explain the limits of confidentiality at the start of services, again as needed, and in writing.',
      'Exceptions include the duty to protect (a credible threat against an identifiable person), suspected child or elder abuse, court orders, and client consent.',
      'A subpoena is not a court order: notify the client, consult counsel, and assert privilege.',
      'Share only the minimum information needed for the purpose.',
    ],
    examTip: 'When safety and confidentiality conflict, safety wins. Choose the answer that protects the person at risk through legal, proportionate steps.',
  },
  {
    id: 'st-eth-bound',
    domain: 'ethics',
    title: 'Boundaries & dual relationships',
    points: [
      'Avoid dual relationships that risk exploitation or harm. When one cannot be avoided, set clear boundaries and seek consultation.',
      'Sexual relationships with current or former clients, or with clients\' relatives, are prohibited.',
      'Gifts: weigh value, cultural meaning, clinical impact, and agency policy, then document the decision.',
      'Social media: decline personal connections with clients and follow a written policy.',
    ],
    examTip: 'The best answer usually explores the meaning of a boundary challenge with the client instead of reacting with a flat "yes" or "no."',
  },
  {
    id: 'st-eth-consent',
    domain: 'ethics',
    title: 'Informed consent & self-determination',
    points: [
      'Consent covers purpose, risks, limits of confidentiality, fees, the right to refuse, and alternatives, in language the client understands.',
      'Mandated clients still receive full informed consent, including what will be reported and to whom.',
      'Clients with capacity may make choices others disagree with.',
      'Limit self-determination only when there is serious, foreseeable, and imminent risk.',
    ],
    examTip: 'Age, diagnosis, or family pressure alone do not override a capable client\'s choice.',
  },
  {
    id: 'st-eth-nj',
    domain: 'ethics',
    title: 'NJ-specific practice essentials',
    points: [
      'NJ licenses social workers through the State Board of Social Work Examiners (Division of Consumer Affairs).',
      'License levels: CSW (ASWB Bachelors exam), LSW (ASWB Masters exam), and LCSW (ASWB Clinical exam).',
      'Suspected child abuse must be reported immediately to DCP&P\'s State Central Registry. Proof is not required.',
      'NJ has a duty-to-warn/protect statute for licensed practitioners.',
      'LSW renewal is every two years and requires continuing education, including ethics and cultural competence hours.',
    ],
    examTip: 'The ASWB exam itself is national, so answer by NASW Code standards. Know NJ rules for your own practice.',
  },
  {
    id: 'st-eth-docs',
    domain: 'ethics',
    title: 'Documentation & records',
    points: [
      'Records should be accurate, timely, objective, and relevant to services.',
      'Correct errors with a dated addendum. Never delete, alter, or backdate entries.',
      'Clients generally have reasonable access to their records. Limit access only when it could cause serious harm, and document why.',
      'Store and dispose of records securely, and follow retention laws.',
    ],
    examTip: 'Any answer that involves altering an original record is wrong.',
  },

  // Assessment and Planning
  {
    id: 'st-asm-process',
    domain: 'assessment',
    title: 'The helping process order',
    points: [
      'Engagement → Assessment → Planning → Intervention → Evaluation → Termination.',
      'Rule out medical causes first when symptoms have a sudden onset or physical features.',
      'Assess before intervening, and do not skip steps in "FIRST" or "NEXT" questions.',
      'Safety assessment (suicide, homicide, abuse) takes priority over everything else.',
    ],
    examTip: 'For "FIRST/NEXT" questions, find where the vignette sits in the process. The answer is usually the next step, not the final goal.',
  },
  {
    id: 'st-asm-risk',
    domain: 'assessment',
    title: 'Risk assessment',
    points: [
      'Ask directly about suicide: ideation, plan, intent, means, and history. Asking does not increase risk.',
      'Risk factors include prior attempts, access to lethal means, substance use, isolation, and recent loss.',
      'Screen for intimate partner violence privately, never in a joint session.',
      'Safety planning is collaborative and specific.',
    ],
    examTip: 'When a client makes an indirect statement about death, the best answer is always a direct assessment.',
  },
  {
    id: 'st-asm-dev',
    domain: 'assessment',
    title: 'Human development in context',
    points: [
      'Erikson: trust vs. mistrust → autonomy vs. shame → initiative vs. guilt → industry vs. inferiority → identity vs. role confusion → intimacy vs. isolation → generativity vs. stagnation → integrity vs. despair.',
      'Piaget: sensorimotor → preoperational → concrete operational → formal operational.',
      'Attachment styles: secure, anxious-ambivalent, avoidant, and disorganized.',
      'Person-in-environment and ecological (systems) perspectives frame every assessment.',
    ],
    examTip: 'Under the 2026 blueprint, development is tested through applied vignettes. Recognizing "normal for age" is often the key.',
  },
  {
    id: 'st-asm-tools',
    domain: 'assessment',
    title: 'Assessment tools & measures',
    points: [
      'PHQ-9 screens for depression, GAD-7 for anxiety, AUDIT and CAGE for alcohol use, and MMSE and MoCA for cognition.',
      'Genogram maps family structure and multigenerational patterns. Ecomap maps external systems and resources.',
      'Stages of change: precontemplation → contemplation → preparation → action → maintenance.',
      'Obtain a signed release before gathering collateral information.',
    ],
    examTip: 'Match the tool to what is being measured, and match the intervention to the client\'s stage of change.',
  },
  {
    id: 'st-asm-plan',
    domain: 'assessment',
    title: 'Goals, planning & evaluation',
    points: [
      'Goals are set collaboratively and are SMART.',
      'Plans build on the client\'s strengths and preferences.',
      'Single-subject designs measure a baseline, then take repeated measurements during the intervention.',
      'Review and revise the plan as the client\'s situation changes.',
    ],
    examTip: 'The best-written goal names a behavior, a frequency, a timeframe, and how it will be measured.',
  },

  // Intervention and Practice
  {
    id: 'st-int-mi',
    domain: 'intervention',
    title: 'Motivational interviewing',
    points: [
      'Spirit of MI: partnership, acceptance, compassion, and evocation.',
      'OARS: open questions, affirmations, reflections, and summaries.',
      'Roll with resistance and develop the discrepancy between the client\'s goals and current behavior.',
      'Listen for "change talk" and reinforce it.',
    ],
    examTip: 'An MI answer usually reflects ambivalence. It does not advise, confront, or label.',
  },
  {
    id: 'st-int-crisis',
    domain: 'intervention',
    title: 'Crisis intervention',
    points: [
      'A crisis is time-limited, usually 4 to 6 weeks, and is a chance for growth.',
      'Order of priorities: safety → immediate needs → emotional stabilization → coping and resources.',
      'The worker is active and directive and stays focused on the here and now.',
    ],
    examTip: 'In a crisis vignette, the FIRST action is securing safety and basic needs, not insight.',
  },
  {
    id: 'st-int-models',
    domain: 'intervention',
    title: 'Practice models',
    points: [
      'CBT: identify and challenge automatic thoughts, and use behavioral activation.',
      'Solution-focused: miracle question, exception questions, and scaling questions.',
      'Narrative therapy: externalize the problem and re-author the story.',
      'Family systems: triangulation, boundaries, homeostasis, and differentiation.',
      'Trauma-informed care: safety, trustworthiness, choice, collaboration, and empowerment.',
    ],
    examTip: 'Learn each model\'s signature technique. Exam items often describe the technique and ask you to name the model.',
  },
  {
    id: 'st-int-groups',
    domain: 'intervention',
    title: 'Groups, case management & advocacy',
    points: [
      'Group stages include forming → storming → norming → performing → adjourning.',
      'In early group stages the leader is most active in setting norms.',
      'Case management means assessing, linking, coordinating, monitoring, and advocating.',
      'Empowerment builds the client\'s own capacity rather than doing things for the client.',
    ],
    examTip: 'When a client could act for themselves with support, choose the answer that builds their capacity to advocate.',
  },
  {
    id: 'st-int-grief',
    domain: 'intervention',
    title: 'Grief, loss & termination',
    points: [
      'Normal grief can include crying, sleep changes, and yearning. Do not pathologize it.',
      'Know Kübler-Ross\'s stages, but remember that grief is not linear.',
      'Plan termination early: review progress, process feelings, and plan for maintenance.',
      'When services must end, give notice and make referrals to avoid abandonment.',
    ],
    examTip: 'If the client is still functioning, the answer is to normalize and support, not to refer for medication.',
  },
];
