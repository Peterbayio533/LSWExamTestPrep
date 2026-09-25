import type { DomainId } from './exam';

// Original practice items written to the 2026 ASWB Masters blueprint.
// `answer` is the index into `options`. Options are shuffled at display time,
// so never write "all of the above"-style choices.

export interface Question {
  id: string;
  domain: DomainId;
  topic: string;
  stem: string;
  options: string[];
  answer: number;
  rationale: string;
}

export const QUESTIONS: Question[] = [
  // ───────────── Values and Ethics ─────────────
  {
    id: 'eth-001',
    domain: 'ethics',
    topic: 'Duty to warn/protect',
    stem:
      'During a session, a client angrily states that he plans to hurt his ex-partner tonight when she leaves work, and names the location. He has a history of violence toward her. What should the social worker do FIRST?',
    options: [
      'Take protective action consistent with state law and agency policy, such as warning the ex-partner and/or notifying law enforcement',
      'Explore the client\'s feelings about the breakup and revisit the threat next session',
      'Keep the statement confidential because the client did not consent to disclosure',
      'Terminate services because the client has become a danger to others',
    ],
    answer: 0,
    rationale:
      'A specific, credible threat against an identifiable person triggers the duty to protect. New Jersey law requires licensed practitioners to take protective steps. Confidentiality does not cover threats of serious, foreseeable harm, and ending services leaves the danger in place.',
  },
  {
    id: 'eth-002',
    domain: 'ethics',
    topic: 'Dual relationships',
    stem:
      'A long-term client invites the social worker to her daughter\'s wedding and says it would mean a great deal to her. What is the BEST response?',
    options: [
      'Attend the ceremony briefly but skip the reception',
      'Warmly decline and explore the meaning of the invitation with the client in session',
      'Accept the invitation to strengthen the therapeutic alliance',
    ],
    answer: 1,
    rationale:
      'Attending would create a dual relationship that could blur boundaries. Declining with warmth and treating the invitation as clinical material respects the client and keeps the relationship professional.',
  },
  {
    id: 'eth-003',
    domain: 'ethics',
    topic: 'Gifts',
    stem:
      'At their final session, a client from a culture where gift-giving expresses respect offers the social worker a small homemade dish. What should the social worker consider FIRST?',
    options: [
      'Whether it is ethical to refuse any gift regardless of value',
      'How to reciprocate with a gift of equal value',
      'Agency policy and the cultural and clinical meaning of the gift',
    ],
    answer: 2,
    rationale:
      'Small gifts are not automatically unethical. The social worker weighs agency policy, cultural meaning, value, and clinical impact, then documents the decision. Refusing reflexively can harm the relationship and disregard cultural norms.',
  },
  {
    id: 'eth-004',
    domain: 'ethics',
    topic: 'Informed consent (mandated clients)',
    stem:
      'A court-mandated client asks, "What are you going to tell my probation officer?" What is the social worker\'s BEST response?',
    options: [
      'Explain exactly what information will be shared, with whom, and the consequences if the client declines services',
      'Reassure the client that everything said in session stays confidential',
      'Tell the client that only the probation officer can answer that question',
      'Say that reports will be vague so the client does not need to worry',
    ],
    answer: 0,
    rationale:
      'Informed consent for mandated clients means spelling out the limits of confidentiality, what will be reported, and the client\'s right to refuse along with the consequences. False reassurance violates informed consent.',
  },
  {
    id: 'eth-005',
    domain: 'ethics',
    topic: 'Colleague impairment',
    stem:
      'A social worker repeatedly notices that a colleague smells of alcohol at work and seems unsteady during client meetings. What should the social worker do FIRST?',
    options: [
      'Report the colleague to the state licensing board immediately',
      'Discuss the concerns directly with the colleague and encourage them to seek help',
      'Keep quiet, because the colleague\'s personal life is not the social worker\'s business',
    ],
    answer: 1,
    rationale:
      'The NASW Code directs social workers who know of a colleague\'s impairment to consult with that colleague, when feasible, and help them take remedial action. If the colleague does not act, the next step is escalating through appropriate channels.',
  },
  {
    id: 'eth-006',
    domain: 'ethics',
    topic: 'Documentation',
    stem:
      'A social worker discovers that a case note written last week contains an incorrect medication name. How should the error be corrected?',
    options: [
      'Delete the original note and rewrite it with the correct information',
      'Leave the note as is, since it has already been signed',
      'Add a dated, signed correction or addendum while keeping the original entry visible',
      'Ask a colleague to amend the note under their login',
    ],
    answer: 2,
    rationale:
      'Records must stay accurate and unaltered. Corrections are made as dated addenda and the original entry is never erased. Deleting or backdating entries can be treated as falsifying records.',
  },
  {
    id: 'eth-007',
    domain: 'ethics',
    topic: 'Technology and social media',
    stem: 'A current client sends the social worker a friend request on a personal social media account. What should the social worker do?',
    options: [
      'Accept, but avoid discussing therapy online',
      'Decline the request and discuss professional boundaries and the social media policy with the client',
      'Ignore the request and never mention it',
    ],
    answer: 1,
    rationale:
      'Personal online connections with clients create dual relationships and privacy risks. Declining the request and discussing it openly, ideally by pointing to the social media policy covered at intake, protects the relationship and gives the client clarity.',
  },
  {
    id: 'eth-008',
    domain: 'ethics',
    topic: 'Self-determination',
    stem:
      'An 82-year-old client with intact decision-making capacity insists on continuing to live alone even though her adult children want her in assisted living. What should the social worker do?',
    options: [
      'Support the children\'s plan because they know her best',
      'Respect the client\'s decision and work with her on reducing risks at home',
      'Delay services until the family reaches agreement',
      'Refer to adult protective services because of her age',
    ],
    answer: 1,
    rationale:
      'A client with capacity has the right to self-determination, even when others disagree. The social worker respects the choice and collaborates on safety supports. Age alone is not a reason to override the client\'s decision.',
  },
  {
    id: 'eth-009',
    domain: 'ethics',
    topic: 'Subpoenas and privilege',
    stem:
      'A social worker receives a subpoena from an attorney requesting a client\'s complete records. The client has not given consent. What should the social worker do FIRST?',
    options: [
      'Send the complete records, because a subpoena is a legal document',
      'Ignore the subpoena, since therapy records are always confidential',
      'Notify the client and seek legal guidance on asserting privilege or limiting disclosure',
    ],
    answer: 2,
    rationale:
      'A subpoena is not a court order and should not simply be ignored. The social worker protects confidentiality by informing the client, consulting legal counsel, and asserting privilege or seeking to limit what is released.',
  },
  {
    id: 'eth-010',
    domain: 'ethics',
    topic: 'Cultural humility',
    stem:
      'A client explains that in her family, important decisions are made together with her parents and elders. The social worker\'s training emphasized individual autonomy. What is the BEST approach?',
    options: [
      'Encourage the client to make decisions independently to promote empowerment',
      'Ask the client how she would like her family involved in planning',
      'Include the family in every session to respect the culture',
      'Refer the client to a worker who shares her cultural background',
    ],
    answer: 1,
    rationale:
      'Cultural humility means letting the client define how culture shapes her care. Asking about her preferences avoids imposing individualist values and also avoids assuming what her culture requires.',
  },
  {
    id: 'eth-011',
    domain: 'ethics',
    topic: 'Competence',
    stem:
      'A client requests EMDR for trauma symptoms. The social worker has read about EMDR but has no formal training in it. What should the social worker do?',
    options: [
      'Provide EMDR using online videos as a guide',
      'Refer the client to a qualified provider, or obtain proper training and supervision before using the method',
      'Tell the client that EMDR is not evidence-based',
    ],
    answer: 1,
    rationale:
      'Social workers practice only within their competence. Using a new intervention requires proper training and supervision. Until then, the social worker should refer to someone qualified.',
  },
  {
    id: 'eth-012',
    domain: 'ethics',
    topic: 'Mandated reporting (NJ)',
    stem:
      'An 8-year-old tells a school social worker that the red welts on his legs came from his father hitting him with a belt. What should the social worker do?',
    options: [
      'Interview the child further to confirm the abuse before reporting',
      'Call the father to hear his side of the story',
      'Report immediately to the NJ Division of Child Protection and Permanency (State Central Registry)',
      'Document the disclosure and discuss it at next week\'s team meeting',
    ],
    answer: 2,
    rationale:
      'New Jersey requires anyone with reasonable cause to believe a child has been abused to report immediately to DCP&P. Proof is not required, and investigating or contacting the alleged abuser can put the child at risk.',
  },

  // ───────────── Assessment and Planning ─────────────
  {
    id: 'asm-001',
    domain: 'assessment',
    topic: 'Engagement at intake',
    stem: 'A social worker meets a new client for the first time at a community agency. What should the social worker do FIRST?',
    options: [
      'Complete the full biopsychosocial assessment form',
      'Clarify the social worker\'s role and the purpose of services, and explain confidentiality and its limits',
      'Set treatment goals for the client',
    ],
    answer: 1,
    rationale:
      'Engagement comes before assessment and planning. Explaining roles, purpose, and confidentiality builds trust and is part of informed consent.',
  },
  {
    id: 'asm-002',
    domain: 'assessment',
    topic: 'Suicide risk assessment',
    stem:
      'A client being seen for job loss says quietly, "Sometimes I think everyone would be better off without me." What should the social worker do NEXT?',
    options: [
      'Reassure the client that his family loves him',
      'Ask directly whether he is having thoughts of suicide, and about any plan, intent, and means',
      'Refocus the session on the job search',
      'Arrange immediate hospitalization',
    ],
    answer: 1,
    rationale:
      'Indirect statements call for a direct suicide assessment. Asking about suicide does not increase risk. Whether hospitalization is needed depends on what the assessment finds.',
  },
  {
    id: 'asm-003',
    domain: 'assessment',
    topic: 'Rule out medical causes',
    stem:
      'A 74-year-old client\'s daughter reports that over the past three days her mother has become suddenly confused and agitated, which is unlike her. What should the social worker do FIRST?',
    options: [
      'Begin a cognitive assessment for dementia',
      'Refer for an immediate medical evaluation',
      'Refer the client to a memory care program',
    ],
    answer: 1,
    rationale:
      'Sudden changes in mental status in older adults may signal delirium from a medical cause, such as an infection or a medication reaction. Medical causes are ruled out first. Dementia usually develops gradually.',
  },
  {
    id: 'asm-004',
    domain: 'assessment',
    topic: 'Goal setting',
    stem: 'Which of the following is the BEST-written treatment goal?',
    options: [
      'Client will improve her sobriety',
      'Client will attend three recovery meetings per week for eight weeks, verified by attendance slips',
      'Client will understand the dangers of alcohol',
      'Client will feel more confident about staying sober',
    ],
    answer: 1,
    rationale:
      'Strong goals are specific, measurable, achievable, relevant, and time-bound (SMART). Only this option says what will happen, how often, for how long, and how it will be verified.',
  },
  {
    id: 'asm-005',
    domain: 'assessment',
    topic: 'Collateral information',
    stem:
      'A social worker wants to review the school records of a 12-year-old client as part of an assessment. What must the social worker do FIRST?',
    options: [
      'Call the school counselor and request the records',
      'Obtain written consent from the child\'s parent or legal guardian',
      'Ask the child to bring the records from school',
    ],
    answer: 1,
    rationale:
      'Getting collateral information requires a valid release of information. For a minor, that release generally comes from the parent or legal guardian.',
  },
  {
    id: 'asm-006',
    domain: 'assessment',
    topic: 'Standardized instruments',
    stem: 'A social worker wants a brief, validated screening tool for depressive symptoms. Which instrument is MOST appropriate?',
    options: ['PHQ-9', 'GAD-7', 'AUDIT', 'MMSE'],
    answer: 0,
    rationale:
      'The PHQ-9 screens for depression. The GAD-7 screens for anxiety, the AUDIT for alcohol use, and the MMSE for cognitive impairment.',
  },
  {
    id: 'asm-007',
    domain: 'assessment',
    topic: 'Human development',
    stem:
      'Parents of a 2-year-old are worried because their child says "No!" constantly and insists on doing things herself. What is the social worker\'s BEST response?',
    options: [
      'Refer for an evaluation of oppositional defiant disorder',
      'Explain that this is typical development as toddlers work on autonomy, and suggest ways to support it',
      'Advise the parents to set firm limits on all independent behavior',
    ],
    answer: 1,
    rationale:
      'In Erikson\'s stage of autonomy vs. shame and doubt, toddlers assert independence. This behavior is expected, and explaining normal development to the parents is the right intervention.',
  },
  {
    id: 'asm-008',
    domain: 'assessment',
    topic: 'Strengths perspective',
    stem: 'Which question BEST reflects a strengths-based assessment?',
    options: [
      'What problems brought you here today?',
      'What has helped you get through difficult times before?',
      'How long have you had these symptoms?',
      'Who is to blame for the current situation?',
    ],
    answer: 1,
    rationale:
      'The strengths perspective looks for resources, resilience, and past coping that can be built on, rather than focusing on deficits.',
  },
  {
    id: 'asm-009',
    domain: 'assessment',
    topic: 'Intimate partner violence',
    stem:
      'During a couples intake, one partner answers every question for the other, who appears fearful and avoids eye contact. The social worker suspects intimate partner violence. What should the social worker do?',
    options: [
      'Ask about violence in the joint session so both partners can respond',
      'Arrange to meet with each partner individually to screen for safety',
      'Begin couples counseling focused on communication skills',
    ],
    answer: 1,
    rationale:
      'Screening for IPV must happen privately, because asking in front of a possible abuser can escalate the danger. Couples therapy is generally contraindicated when there is active IPV.',
  },
  {
    id: 'asm-010',
    domain: 'assessment',
    topic: 'Stages of change',
    stem: 'A client says, "I know my drinking is causing problems at home, but I\'m not sure I\'m ready to stop." Which stage of change does this reflect?',
    options: ['Precontemplation', 'Contemplation', 'Action'],
    answer: 1,
    rationale:
      'Contemplation means the client recognizes the problem but is ambivalent about changing. In precontemplation the client does not see a problem, and in action the client is actively changing.',
  },
  {
    id: 'asm-011',
    domain: 'assessment',
    topic: 'Evaluating practice',
    stem:
      'A social worker wants to measure whether an intervention is reducing a client\'s panic attacks. Which approach is BEST?',
    options: [
      'Ask the client at termination whether she feels better',
      'Establish a baseline frequency of panic attacks, then measure frequency repeatedly during the intervention',
      'Compare the client with other clients on the caseload',
      'Rely on the supervisor\'s impressions of progress',
    ],
    answer: 1,
    rationale:
      'A single-subject design, with a baseline followed by repeated measurement, gives objective evidence of change for an individual client.',
  },
  {
    id: 'asm-012',
    domain: 'assessment',
    topic: 'Assessment tools',
    stem:
      'A social worker wants to visually map a family\'s relationships with outside systems such as school, church, employers, and agencies. Which tool is MOST appropriate?',
    options: ['Genogram', 'Ecomap', 'Timeline'],
    answer: 1,
    rationale:
      'An ecomap shows the client\'s connections to external systems and the quality of those connections. A genogram maps family structure and patterns across generations.',
  },

  // ───────────── Intervention and Practice ─────────────
  {
    id: 'int-001',
    domain: 'intervention',
    topic: 'Motivational interviewing',
    stem:
      'A client says, "I want to cut back on drinking, but all my friends drink and I\'d be alone." Which response BEST reflects motivational interviewing?',
    options: [
      'You need new friends who support your recovery.',
      'Part of you wants to cut back, and part of you worries about losing your friends.',
      'Drinking with friends is a common excuse.',
      'Have you considered going to AA?',
    ],
    answer: 1,
    rationale:
      'A double-sided reflection names both sides of the ambivalence without judging, which lets the client resolve it. Advising, confronting, and pushing solutions tend to create resistance.',
  },
  {
    id: 'int-002',
    domain: 'intervention',
    topic: 'Crisis intervention',
    stem:
      'A mother of two arrives at the agency the morning after a fire destroyed her apartment. She is tearful and overwhelmed. What should the social worker do FIRST?',
    options: [
      'Explore her feelings about the loss of her home',
      'Make sure the family is safe and help secure shelter and other immediate needs',
      'Screen her for post-traumatic stress disorder',
    ],
    answer: 1,
    rationale:
      'Crisis intervention starts with safety and basic needs. Emotional processing and formal assessment come after immediate needs are stable.',
  },
  {
    id: 'int-003',
    domain: 'intervention',
    topic: 'Grief and loss',
    stem:
      'A 68-year-old widow whose husband died three months ago reports crying spells, trouble sleeping, and missing him deeply. She is still caring for herself and seeing friends. What is the BEST intervention?',
    options: [
      'Refer her for an antidepressant evaluation',
      'Validate her grief and provide education about normal grieving',
      'Diagnose major depressive disorder',
      'Encourage her to put away his belongings so she can move on',
    ],
    answer: 1,
    rationale:
      'These are normal grief reactions and she is still functioning. The right response is to validate and normalize, not pathologize. Grief has no fixed timeline.',
  },
  {
    id: 'int-004',
    domain: 'intervention',
    topic: 'Case management',
    stem:
      'A client with serious mental illness works with a psychiatrist, a housing program, and a vocational counselor, and the providers\' plans conflict. What is the case manager\'s PRIMARY role?',
    options: [
      'Choose the one provider the client should keep',
      'Coordinate services and, with the client\'s consent, convene the providers to align the plan',
      'Tell the client to resolve the conflicts with each provider',
    ],
    answer: 1,
    rationale:
      'Case management means coordinating, linking, and advocating so that services work together around the client\'s goals, with the client\'s consent.',
  },
  {
    id: 'int-005',
    domain: 'intervention',
    topic: 'Group work',
    stem: 'In the second session of a support group, one member dominates the discussion. What should the group leader do?',
    options: [
      'Ask the member to leave the group',
      'Acknowledge the member\'s contribution and invite other members to share',
      'Allow it to continue, since the group will self-correct',
      'Address the behavior privately after several more sessions',
    ],
    answer: 1,
    rationale:
      'In the early stages of a group, the leader actively shapes norms. Tactful redirection that acknowledges the member protects participation for everyone without shaming anyone.',
  },
  {
    id: 'int-006',
    domain: 'intervention',
    topic: 'Termination',
    stem: 'An agency program will close in one month because of lost funding. What should the social worker do?',
    options: [
      'Continue services as usual until the final week, then inform clients',
      'Inform clients promptly, process their reactions, and arrange appropriate referrals and transfers',
      'Close all cases immediately to avoid disruption',
    ],
    answer: 1,
    rationale:
      'Ethical termination means giving timely notice, attending to clients\' feelings, and making sure services continue through referrals, which prevents abandonment.',
  },
  {
    id: 'int-007',
    domain: 'intervention',
    topic: 'CBT',
    stem: 'After failing one exam, a college student says, "I\'m a complete failure at everything." Which intervention is MOST consistent with CBT?',
    options: [
      'Explore his early childhood experiences with failure',
      'Help him identify the automatic thought and examine the evidence for and against it',
      'Reassure him that he is a good student',
      'Encourage him to take a semester off',
    ],
    answer: 1,
    rationale:
      'Cognitive restructuring targets distortions such as overgeneralization by identifying the thought and testing it against evidence. Reassurance does not build that skill.',
  },
  {
    id: 'int-008',
    domain: 'intervention',
    topic: 'Involuntary clients',
    stem:
      'A court-ordered client opens the first session by saying, "I don\'t need to be here. This is a waste of time." What is the BEST response?',
    options: [
      'Remind the client of the legal consequences of noncompliance',
      'Acknowledge the client\'s frustration about being mandated and clarify what is and is not negotiable',
      'Agree to shorten sessions to reduce the client\'s frustration',
    ],
    answer: 1,
    rationale:
      'With involuntary clients, acknowledging their feelings and being clear about what is required and what the client can choose supports engagement. Leading with threats undermines the relationship.',
  },
  {
    id: 'int-009',
    domain: 'intervention',
    topic: 'Advocacy and empowerment',
    stem: 'A client\'s disability benefits were wrongly denied. Which approach BEST reflects empowerment-based practice?',
    options: [
      'File the appeal on the client\'s behalf without involving the client',
      'Help the client understand the appeals process and support the client in advocating for themselves',
      'Tell the client that appeals rarely succeed',
      'Refer the client to an attorney and close the case',
    ],
    answer: 1,
    rationale:
      'Empowerment builds the client\'s own capacity to act while the social worker provides support. Doing everything for the client can reinforce powerlessness.',
  },
  {
    id: 'int-010',
    domain: 'intervention',
    topic: 'Trauma-informed care',
    stem:
      'A client with a trauma history startles every time the office door closes during sessions. What is the MOST trauma-informed response?',
    options: [
      'Reassure the client that the office is safe',
      'Ask the client whether she prefers the door open or closed and where she would like to sit',
      'Begin exposure work using the door sound',
    ],
    answer: 1,
    rationale:
      'Trauma-informed care puts safety, choice, and collaboration first. Offering control over the environment is the priority. Exposure work would be premature.',
  },
  {
    id: 'int-011',
    domain: 'intervention',
    topic: 'Family systems',
    stem:
      'Whenever the parents argue, each one confides in their 14-year-old son and asks him to take their side. Which family systems concept does this BEST describe?',
    options: ['Triangulation', 'Enmeshment', 'Differentiation', 'Homeostasis'],
    answer: 0,
    rationale:
      'Triangulation happens when two people in conflict pull a third person in to reduce the tension between them. Here, the parents are pulling in their child.',
  },
  {
    id: 'int-012',
    domain: 'intervention',
    topic: 'Working with interpreters',
    stem:
      'A client with limited English proficiency arrives with her 10-year-old son to interpret for a session about family stressors. What should the social worker do?',
    options: [
      'Proceed with the son interpreting, since the client chose him',
      'Arrange for a qualified professional interpreter',
      'Conduct the session in English as slowly as possible',
    ],
    answer: 1,
    rationale:
      'Using children as interpreters puts them in inappropriate roles, compromises confidentiality, and risks inaccurate interpretation. A trained interpreter is the standard, and the social worker speaks directly to the client.',
  },
];

export const QUESTION_BY_ID = Object.fromEntries(QUESTIONS.map((q) => [q.id, q])) as Record<string, Question>;
