import type { QuestionInput } from './types';

// III. INTERVENTION AND PRACTICE (32%)
export const INTERVENTION_QUESTIONS: QuestionInput[] = [
  // ───────────── IIIA. Practice concepts ─────────────
  {
    id: 'asm-001',
    competency: 'IIIA',
    topic: 'Engagement at intake',
    stem: 'A social worker meets a new client for the first time at a community agency. What should the social worker do FIRST?',
    options: [
      "Explain her role, the purpose of services, and confidentiality",
      "Begin the biopsychosocial assessment to gather background information",
      "Work with the client to set treatment goals for the coming weeks",
    ],
    answer: 0,
    rationale:
      'Engagement comes before assessment and planning. Explaining roles, purpose, and confidentiality builds trust and is part of informed consent.',
    refs: [{ s: 'nasw', at: '1.03(a)' }, { s: 'nasw', at: '1.07(e)' }, { s: 'hepworth' }],
  },
  {
    id: 'int-009',
    competency: 'IIIA',
    topic: 'Advocacy and empowerment',
    stem: "A client's disability benefits were wrongly denied. Which approach BEST reflects empowerment-based practice?",
    options: [
      "Support the client in pursuing the appeal themselves",
      "File the appeal for the client without involving them in the process",
      "Tell the client that appeals rarely succeed and suggest reapplying",
      "Refer the client to a legal aid attorney and close the case",
    ],
    answer: 0,
    rationale:
      'Empowerment builds the client\'s own capacity to act while the social worker provides support. Doing everything for the client can reinforce powerlessness.',
    refs: [{ s: 'saleebey' }, { s: 'aswb', at: 'Outline IIIA — empowerment' }],
  },
  {
    id: 'int-013',
    competency: 'IIIA',
    topic: 'Empathy',
    stem: "A client says, 'I can't believe my wife left after 20 years. I don't know who I am anymore.' Which response BEST demonstrates empathy?",
    options: [
      "Her leaving after 20 years has shaken your sense of who you are.",
      "I know exactly how you feel. My own divorce was very hard too.",
      "In time, you'll rebuild your life and feel like yourself again.",
    ],
    answer: 0,
    rationale:
      "Empathy communicates accurate understanding of the client's experience from the client's point of view. Self-focused disclosure and premature reassurance do not.",
    refs: [{ s: 'hepworth', at: 'Empathic communication' }],
  },
  {
    id: 'int-014',
    competency: 'IIIA',
    topic: 'Problem-solving process',
    stem: "What is the social worker's PRIMARY role in the problem-solving process?",
    options: [
      "Help the client define the problem and weigh possible solutions",
      "Choose the best solution and guide the client in carrying it out",
      "Solve problems for the client to reduce the client's stress",
    ],
    answer: 0,
    rationale:
      "The social worker facilitates the client's own problem solving. This builds skills and respects self-determination.",
    refs: [{ s: 'hepworth' }, { s: 'nasw', at: '1.02' }],
  },
  {
    id: 'int-015',
    competency: 'IIIA',
    topic: 'IEP team collaboration',
    stem: "A school social worker attends a student's Individualized Education Program (IEP) meeting. The parent seems intimidated and silent. What should the social worker do?",
    options: [
      "Invite the parent's input and support her full participation",
      "Summarize the parent's concerns for her so the meeting can keep moving",
      "Suggest the parent leave decisions to the school professionals",
    ],
    answer: 0,
    rationale:
      "Under IDEA, parents are required members of the IEP team. The social worker supports meaningful family participation and brings the student's psychosocial perspective to the team.",
    refs: [{ s: 'idea' }, { s: 'nasw', at: '2.03(a)' }],
  },
  {
    id: 'int-016',
    competency: 'IIIA',
    topic: 'Hospice and palliative care',
    stem: 'A patient\'s family asks how hospice differs from palliative care. Which explanation is MOST accurate?',
    options: [
      "Palliative care can accompany a cure; hospice is for a prognosis of six months or less",
      "Both require stopping curative treatment, but hospice is provided only in hospitals",
      "Hospice can accompany curative treatment; palliative care is only for the last weeks of life",
      "They are the same service, but Medicare covers hospice and not palliative care",
    ],
    answer: 0,
    rationale:
      'Palliative care focuses on comfort at any stage of serious illness. The Medicare hospice benefit requires certification of a life expectancy of six months or less if the illness runs its normal course.',
    refs: [{ s: 'hospice' }, { s: 'aswb', at: 'Outline IIIA — end of life' }],
  },
  {
    id: 'int-017',
    competency: 'IIIA',
    topic: 'Stages of dying',
    stem: "A terminally ill patient says, 'If I can just live to see my daughter graduate in June, I'll be ready.' According to Kübler-Ross, which stage does this reflect?",
    options: ['Denial', 'Bargaining', 'Acceptance', 'Anger'],
    answer: 1,
    rationale:
      'Bargaining involves attempts to postpone the inevitable, often by setting conditions such as living until a special event. The stages are not necessarily linear.',
    refs: [{ s: 'kublerRoss' }],
  },
  {
    id: 'int-018',
    competency: 'IIIA',
    topic: 'Parenting skill building',
    stem: 'A father frequently yells at his 6-year-old son for misbehavior and says, "Nothing works." Which intervention is MOST appropriate?',
    options: [
      "Teach specific praise and calm, consistent consequences",
      "Recommend stricter physical discipline to regain control",
      "Tell the father directly that his yelling is harming his son",
    ],
    answer: 0,
    rationale:
      'Building parenting capacity through positive reinforcement, specific praise, and predictable consequences is an evidence-informed way to reduce child misbehavior.',
    refs: [{ s: 'aswb', at: 'Outline IIIA — parenting' }, { s: 'familyText' }],
  },
  {
    id: 'int-019',
    competency: 'IIIA',
    topic: 'Concurrent planning',
    stem: 'A child welfare social worker is working toward reunifying a child with her mother while also identifying a relative who could adopt if reunification fails. What is this practice called?',
    options: ['Kinship care', 'Concurrent planning', 'Family preservation'],
    answer: 1,
    rationale:
      'Concurrent planning pursues reunification and an alternative permanent plan at the same time, reducing the time children spend in foster care.',
    refs: [{ s: 'asfa' }, { s: 'aswb', at: 'Outline IIIA — permanency' }],
  },
  {
    id: 'int-020',
    competency: 'IIIA',
    topic: 'ASFA timelines',
    stem: 'Under the Adoption and Safe Families Act, when must states generally file to terminate parental rights?',
    options: [
      "When a child has been in care 15 of the most recent 22 months",
      "When a child has been in foster care for 6 consecutive months",
      "Only when both parents voluntarily consent to the termination",
      "When a child has been in care 12 of the most recent 18 months",
    ],
    answer: 0,
    rationale:
      'ASFA generally requires states to file for termination of parental rights when a child has been in care 15 of the most recent 22 months. Exceptions include placement with a relative or a documented compelling reason.',
    refs: [{ s: 'asfa' }],
  },
  {
    id: 'int-021',
    competency: 'IIIA',
    topic: 'Indian Child Welfare Act',
    stem: 'A child who is an enrolled member of a federally recognized tribe must be removed from her home. What must the child welfare agency do?',
    options: [
      "Notify the tribe and follow ICWA placement preferences",
      "Place her in the first available licensed foster home",
      "Place her with the non-Native family best able to meet her needs",
    ],
    answer: 0,
    rationale:
      "ICWA requires notice to the child's tribe and placement preferences that prioritize extended family, then tribal and other Native placements. The goal is to protect the child's connection to her tribe and culture.",
    refs: [{ s: 'icwa' }],
  },
  {
    id: 'int-022',
    competency: 'IIIA',
    topic: 'Community organizing',
    stem: 'A social worker wants to help residents of a neighborhood address rising evictions. What should the social worker do FIRST?',
    options: [
      "Meet with residents to learn their concerns and priorities",
      "Draft a policy proposal on evictions to present to the city council",
      "Organize a protest at city hall to draw media attention",
    ],
    answer: 0,
    rationale:
      'Community organizing begins with engaging residents, understanding their priorities, and building relationships and leadership before choosing strategies.',
    refs: [{ s: 'macro' }, { s: 'aswb', at: 'Outline IIIA — community organizing' }],
  },
  {
    id: 'int-023',
    competency: 'IIIB',
    topic: 'Models of community practice',
    stem: 'Tenants organize a rent strike and public demonstrations to pressure a landlord to make repairs. Which model of community practice does this reflect?',
    options: ['Locality development', 'Social planning', 'Social action'],
    answer: 2,
    rationale:
      "In Rothman's typology, social action uses confrontation and collective pressure to shift power and resources. Locality development relies on consensus and self-help, and social planning relies on expert, data-driven problem solving.",
    refs: [{ s: 'rothman' }, { s: 'macro' }],
  },

  // ───────────── IIIB. Intervention methods and techniques ─────────────
  {
    id: 'int-001',
    competency: 'IIIB',
    topic: 'Motivational interviewing',
    stem: "A client says, 'I want to cut back on drinking, but all my friends drink and I'd be alone.' Which response BEST reflects motivational interviewing?",
    options: [
      "So you want to cut back, but you worry about being alone.",
      "You need to find new friends who will support your recovery.",
      "Drinking with friends is a pretty common excuse, isn't it?",
      "Have you thought about going to AA to meet new people?",
    ],
    answer: 0,
    rationale:
      'A double-sided reflection names both sides of the ambivalence without judging, which lets the client resolve it. Advising, confronting, and pushing solutions tend to create resistance.',
    refs: [{ s: 'miller' }],
  },
  {
    id: 'int-002',
    competency: 'IIIB',
    topic: 'Crisis intervention',
    stem: 'A mother of two arrives at the agency the morning after a fire destroyed her apartment. She is tearful and overwhelmed. What should the social worker do FIRST?',
    options: [
      "Make sure the family is safe and help secure shelter",
      "Explore her feelings about losing her home and belongings",
      "Screen her for symptoms of post-traumatic stress disorder",
    ],
    answer: 0,
    rationale:
      'Crisis intervention starts with safety and basic needs. Emotional processing and formal assessment come after immediate needs are stable.',
    refs: [{ s: 'james' }],
  },
  {
    id: 'int-003',
    competency: 'IIIB',
    topic: 'Grief and loss',
    stem: 'A 68-year-old widow whose husband died three months ago reports crying spells, trouble sleeping, and missing him deeply. She is still caring for herself and seeing friends. What is the BEST intervention?',
    options: [
      "Validate her grief and provide education about normal grieving",
      "Refer her for an evaluation for antidepressant medication",
      "Diagnose major depressive disorder and begin treatment",
      "Encourage her to put away his belongings so she can begin to move on",
    ],
    answer: 0,
    rationale:
      'These are normal grief reactions and she is still functioning. The right response is to validate and normalize, not pathologize. Grief has no fixed timeline.',
    refs: [{ s: 'dsm', at: 'Prolonged grief disorder' }, { s: 'aswb', at: 'Outline IIIB — grief' }],
  },
  {
    id: 'int-004',
    competency: 'IIIB',
    topic: 'Case management',
    stem: "A client with serious mental illness works with a psychiatrist, a housing program, and a vocational counselor, and the providers' plans conflict. What is the case manager's PRIMARY role?",
    options: [
      "Coordinate services and, with consent, bring the providers together",
      "Decide which provider's plan the client should follow going forward",
      "Ask the client to resolve the conflicts with each provider",
    ],
    answer: 0,
    rationale:
      'Case management means coordinating, linking, and advocating so that services work together around the client\'s goals, with the client\'s consent to share information.',
    refs: [{ s: 'aswb', at: 'Outline IIIB — case management' }, { s: 'nasw', at: '1.07(b)' }],
  },
  {
    id: 'int-005',
    competency: 'IIIB',
    topic: 'Group work',
    stem: 'In the second session of a support group, one member dominates the discussion. What should the group leader do?',
    options: [
      "Acknowledge the member's input and invite others to share",
      "Ask the member to leave the group for the rest of the session",
      "Let it continue, since groups usually correct this on their own",
      "Wait several sessions, then address it privately with the member",
    ],
    answer: 0,
    rationale:
      'In the early stages of a group, the leader actively shapes norms. Tactful redirection that acknowledges the member protects participation for everyone without shaming anyone.',
    refs: [{ s: 'toseland' }],
  },
  {
    id: 'int-007',
    competency: 'IIIB',
    topic: 'CBT',
    stem: "After failing one exam, a college student says, 'I'm a complete failure at everything.' Which intervention is MOST consistent with CBT?",
    options: [
      "Help him identify the thought and examine the evidence for it",
      "Explore his early childhood experiences with failure and criticism",
      "Reassure him that he is a capable student who had a bad day",
      "Encourage him to take a semester off to reduce his stress",
    ],
    answer: 0,
    rationale:
      'Cognitive restructuring targets distortions such as overgeneralization by identifying the thought and testing it against evidence. Reassurance does not build that skill.',
    refs: [{ s: 'aswb', at: 'Outline IIIB — evidence-based practices' }, { s: 'hepworth' }],
  },
  {
    id: 'int-008',
    competency: 'IIIB',
    topic: 'Involuntary clients',
    stem: "A court-ordered client opens the first session by saying, 'I don't need to be here. This is a waste of time.' What is the BEST response?",
    options: [
      "Acknowledge the client's frustration and clarify what is negotiable",
      "Remind the client of the legal consequences of not participating fully",
      "Agree to shorten sessions to reduce the client's frustration",
    ],
    answer: 0,
    rationale:
      'With involuntary clients, acknowledging their feelings and being clear about what is required and what the client can choose supports engagement. Leading with threats undermines the relationship.',
    refs: [{ s: 'hepworth', at: 'Involuntary clients' }, { s: 'nasw', at: '1.03(d)' }],
  },
  {
    id: 'int-010',
    competency: 'IIIB',
    topic: 'Trauma-informed care',
    stem: 'A client with a trauma history startles every time the office door closes during sessions. What is the MOST trauma-informed response?',
    options: [
      "Ask whether she prefers the door open or closed and where to sit",
      "Reassure her that the office is a safe place and nothing will happen",
      "Begin gradual exposure work using the sound of the door",
    ],
    answer: 0,
    rationale:
      'Trauma-informed care puts safety, choice, and collaboration first. Offering control over the environment is the priority. Exposure work would be premature.',
    refs: [{ s: 'samhsaTic' }],
  },
  {
    id: 'int-011',
    competency: 'IIIB',
    topic: 'Family systems',
    stem: 'Whenever the parents argue, each one confides in their 14-year-old son and asks him to take their side. Which family systems concept does this BEST describe?',
    options: ['Triangulation', 'Enmeshment', 'Differentiation', 'Homeostasis'],
    answer: 0,
    rationale:
      'Triangulation happens when two people in conflict pull a third person in to reduce the tension between them. Here, the parents are pulling in their child.',
    refs: [{ s: 'familyText' }],
  },
  {
    id: 'int-024',
    competency: 'IIIB',
    topic: 'Limit setting',
    stem: 'A 15-year-old client repeatedly curses at the social worker during sessions. What is the BEST response?',
    options: [
      "Calmly state a clear limit and explore what is driving the anger",
      "Ignore the cursing to avoid getting into a power struggle with him",
      "End the session immediately each time the cursing happens",
    ],
    answer: 0,
    rationale:
      'Effective limit setting is calm, clear, and consistent, and it pairs the boundary with curiosity about the underlying feelings.',
    refs: [{ s: 'aswb', at: 'Outline IIIB — limit setting' }],
  },
  {
    id: 'int-025',
    competency: 'IIIB',
    topic: 'Complex trauma',
    stem: 'A client with a history of prolonged childhood abuse reports frequent dissociation and self-harm. According to phase-oriented trauma treatment, what should the social worker focus on FIRST?',
    options: [
      "Safety, stabilization, and emotion-regulation skills",
      "Detailed processing of the childhood trauma memories",
      "Planning a family session to confront the abuser",
    ],
    answer: 0,
    rationale:
      'Phase-oriented treatment for complex trauma begins with safety and stabilization. Trauma processing comes only after the client has adequate coping and regulation skills.',
    refs: [{ s: 'samhsaTic' }, { s: 'aswb', at: 'Outline IIIB — complex trauma' }],
  },
  {
    id: 'int-026',
    competency: 'IIIB',
    topic: 'Safety planning',
    stem: 'A client reports passive thoughts of death but no plan or intent, and has a supportive partner. What is the MOST appropriate intervention?',
    options: [
      "Develop a collaborative safety plan with means restriction",
      "Arrange involuntary hospitalization to ensure the client stays safe",
      "Ask the client to sign a no-suicide contract before leaving",
      "Schedule a follow-up in two weeks and monitor for changes",
    ],
    answer: 0,
    rationale:
      'For lower-risk clients, collaborative safety planning with means restriction is best practice. No-suicide contracts are not supported by evidence.',
    refs: [{ s: 'james' }, { s: 'aswb', at: 'Outline IIIB — crisis intervention' }],
  },
  {
    id: 'int-027',
    competency: 'IIIB',
    topic: 'DBT skills',
    stem: 'A DBT client wants skills to get through intense urges to self-harm without making the situation worse. Which DBT skills module is MOST relevant?',
    options: ['Mindfulness', 'Distress tolerance', 'Interpersonal effectiveness', 'Emotion regulation'],
    answer: 1,
    rationale:
      'Distress tolerance skills help clients survive crises without acting on harmful urges. Emotion regulation focuses on understanding and changing emotions over time.',
    refs: [{ s: 'linehan' }],
  },
  {
    id: 'int-028',
    competency: 'IIIB',
    topic: 'Class advocacy',
    stem: 'A social worker notices that many clients are being denied SNAP benefits because of a confusing application form, and works with the state agency to redesign it. What type of advocacy is this?',
    options: ['Case advocacy', 'Class (cause) advocacy', 'Self-advocacy'],
    answer: 1,
    rationale:
      'Class, or cause, advocacy seeks change for a whole group affected by the same problem. Case advocacy works on behalf of one client.',
    refs: [{ s: 'macro' }, { s: 'nasw', at: '6.04(a)' }],
  },
  {
    id: 'int-029',
    competency: 'IIIB',
    topic: 'Ambiguous loss',
    stem: 'A woman whose husband has advanced dementia says, "He\'s here, but he\'s not here. I don\'t know how to grieve." Which concept BEST describes her experience?',
    options: ['Anticipatory grief', 'Ambiguous loss', 'Disenfranchised grief'],
    answer: 1,
    rationale:
      "Ambiguous loss, described by Pauline Boss, occurs when a loved one is physically present but psychologically absent, as in dementia, or physically absent but psychologically present, as with a missing person.",
    refs: [{ s: 'boss' }],
  },
  {
    id: 'int-030',
    competency: 'IIIB',
    topic: 'Prolonged grief disorder',
    stem: 'According to DSM-5-TR, at least how long after a death must an adult\'s intense, impairing grief persist before prolonged grief disorder can be diagnosed?',
    options: ['2 months', '6 months', '12 months'],
    answer: 2,
    rationale:
      'DSM-5-TR requires at least 12 months since the death for adults (6 months for children and adolescents), along with persistent, impairing grief symptoms.',
    refs: [{ s: 'dsm', at: 'Prolonged grief disorder' }],
  },
  {
    id: 'int-031',
    competency: 'IIIB',
    topic: 'Children and grief',
    stem: 'A 5-year-old keeps asking when her grandmother, who died last week, is coming back. What is the BEST guidance for her parents?',
    options: [
      "Use concrete words like 'died' and explain she cannot come back",
      "Tell her that Grandma is sleeping so she will not be frightened",
      "Avoid the topic until she is older and can understand death",
    ],
    answer: 0,
    rationale:
      "Young children are still developing an understanding of death's permanence. Clear, concrete language avoids confusion and fear, while euphemisms like 'sleeping' can cause anxiety about sleep.",
    refs: [{ s: 'ashford' }, { s: 'aswb', at: 'Outline IIIB — grief' }],
  },
  {
    id: 'int-032',
    competency: 'IIIB',
    topic: 'Case recording (SOAP)',
    stem: 'In a SOAP note, which entry belongs in the "O" (Objective) section?',
    options: [
      "Client arrived on time, was well groomed, and made eye contact.",
      "Client reports that she has been feeling 'more hopeful this week.'",
      "Client appears to be making steady progress toward her goals.",
      "Continue weekly sessions and review the safety plan next week.",
    ],
    answer: 0,
    rationale:
      "Objective data are observable facts. The client's own report is Subjective, the social worker's clinical judgment is Assessment, and next steps are the Plan.",
    refs: [{ s: 'aswb', at: 'Outline IIIB — case recording' }, { s: 'nasw', at: '3.04(a)' }],
  },
  {
    id: 'int-033',
    competency: 'IIIB',
    topic: 'Evidence-based practice — DBT',
    stem: 'A client with borderline personality disorder has chronic self-harm and repeated crises. Which treatment has the STRONGEST evidence base for this presentation?',
    options: ['Dialectical behavior therapy', 'Psychoanalysis', 'Solution-focused brief therapy'],
    answer: 0,
    rationale:
      'DBT was developed for chronically suicidal clients with borderline personality disorder and has strong research support for reducing self-harm.',
    refs: [{ s: 'linehan' }, { s: 'aswb', at: 'Outline IIIB — evidence-based practices' }],
  },
  {
    id: 'int-034',
    competency: 'IIIB',
    topic: 'Behavioral activation',
    stem: 'A depressed client has stopped doing activities she once enjoyed and spends most days in bed. Which technique is MOST appropriate?',
    options: [
      "Behavioral activation using small, meaningful scheduled activities",
      "Waiting until her mood lifts before adding new activities to her week",
      "Exploring the origins of her depression in early childhood experiences",
    ],
    answer: 0,
    rationale:
      'Behavioral activation is an evidence-based treatment for depression. It increases engagement in rewarding activities, which improves mood, rather than waiting for motivation to come first.',
    refs: [{ s: 'aswb', at: 'Outline IIIB — evidence-based practices' }],
  },
  {
    id: 'int-035',
    competency: 'IIIB',
    topic: 'Change talk',
    stem: 'Which client statement is an example of "change talk" in motivational interviewing?',
    options: [
      "I want to be there for my kids, and drinking gets in the way.",
      "I don't think my drinking is really as bad as everyone says.",
      "My wife is always on my case about every little thing I do.",
    ],
    answer: 0,
    rationale:
      "Change talk is the client's own speech in favor of change, such as desire, ability, reasons, or need. The social worker listens for it and reinforces it.",
    refs: [{ s: 'miller' }],
  },
  {
    id: 'int-036',
    competency: 'IIIB',
    topic: 'Exposure',
    stem: 'A client has an intense fear of elevators that prevents her from going to work. Which intervention is MOST appropriate?',
    options: [
      "Graduated exposure, starting with the least feared situations",
      "Advise her to take the stairs so she can avoid the fear entirely",
      "Explore childhood memories that may be connected to small spaces",
    ],
    answer: 0,
    rationale:
      'Graduated exposure, such as systematic desensitization, is the treatment of choice for specific phobias. Avoidance maintains the fear.',
    refs: [{ s: 'aswb', at: 'Outline IIIB — evidence-based practices' }],
  },
  {
    id: 'int-037',
    competency: 'IIIB',
    topic: 'Harm reduction',
    stem: 'A client who injects opioids says he is not ready to stop using. What is the MOST appropriate harm-reduction response?',
    options: [
      "Provide naloxone and information on safer-use supplies",
      "Require a commitment to abstinence before continuing services",
      "Explain that services will resume once he is ready to stop using",
    ],
    answer: 0,
    rationale:
      'Harm reduction meets clients where they are and reduces risk of overdose and disease, keeping clients engaged until they are ready for further change.',
    refs: [{ s: 'samhsaHarm' }],
  },
  {
    id: 'int-038',
    competency: 'IIIB',
    topic: 'Medications for opioid use disorder',
    stem: "A client starting buprenorphine for opioid use disorder worries he is 'just trading one drug for another.' What is the BEST response?",
    options: [
      "Explain that MOUD is effective, evidence-based treatment",
      "Agree, and encourage him to try quitting without any medication first",
      "Explain that the medication is short-term and must stop within a month",
    ],
    answer: 0,
    rationale:
      'MOUD, including buprenorphine, methadone, and naltrexone, is evidence-based and reduces overdose deaths. Recovery can include long-term medication.',
    refs: [{ s: 'samhsaMoud' }],
  },
  {
    id: 'int-039',
    competency: 'IIIB',
    topic: 'Partializing',
    stem: 'A client facing eviction, unemployment, and a child\'s school suspension says she is too overwhelmed to do anything. Which technique is MOST helpful?',
    options: [
      "Partializing: breaking the problems into small, manageable steps",
      "Addressing all three problems together in one long session this week",
      "Referring her to three separate agencies at the same time",
    ],
    answer: 0,
    rationale:
      'Partializing breaks overwhelming problems into smaller, manageable tasks, which restores a sense of control and makes progress possible.',
    refs: [{ s: 'hepworth' }, { s: 'aswb', at: 'Outline IIIB — contracting' }],
  },
  {
    id: 'int-040',
    competency: 'IIIB',
    topic: 'Discharge planning',
    stem: 'When should discharge planning begin for a patient admitted to a psychiatric unit?',
    options: ['At admission', 'The day before discharge', 'After symptoms fully resolve'],
    answer: 0,
    rationale:
      'Discharge planning should begin at admission so that housing, aftercare, medications, and follow-up are arranged in time for a safe transition.',
    refs: [{ s: 'aswb', at: 'Outline IIIB — discharge and aftercare' }],
  },
  {
    id: 'int-041',
    competency: 'IIIB',
    topic: 'Family psychoeducation',
    stem: 'Research on schizophrenia shows that relapse is more likely in families with high "expressed emotion." Which family behavior reflects high expressed emotion?',
    options: [
      "Criticism, hostility, and emotional overinvolvement",
      "Warm, calm, and supportive communication among members",
      "Frequent family meals, shared routines, and rituals",
      "Open, frequent discussion of symptoms and treatment plans",
    ],
    answer: 0,
    rationale:
      'High expressed emotion, meaning criticism, hostility, and emotional overinvolvement, predicts relapse. Family psychoeducation reduces it and lowers relapse rates.',
    refs: [{ s: 'expressedEmotion' }, { s: 'aswb', at: 'Outline IIIB — psychoeducation' }],
  },
  {
    id: 'int-042',
    competency: 'IIIB',
    topic: 'Anger management',
    stem: 'Which is an effective FIRST step in teaching a client anger management?',
    options: [
      "Help the client identify triggers and early physical warning signs",
      "Encourage the client to release anger by hitting a pillow or punching bag",
      "Tell the client to suppress angry feelings when they arise",
    ],
    answer: 0,
    rationale:
      'Recognizing triggers and early cues, such as a racing heart or clenched jaw, allows the client to use coping strategies before anger escalates. Venting tends to increase aggression.',
    refs: [{ s: 'aswb', at: 'Outline IIIB — anger management' }],
  },
  {
    id: 'int-043',
    competency: 'IIIB',
    topic: 'Group stages',
    stem: "In the fourth session of a group, members begin challenging the leader and arguing with one another. How should the leader understand this?",
    options: [
      "As a normal transition stage to be addressed openly",
      "As a sign that the group is failing and may need a different leader",
      "As a reason to end the group before the conflict escalates further",
    ],
    answer: 0,
    rationale:
      'Conflict and challenges to the leader are expected in the transition or storming stage. Addressing them openly helps the group move toward cohesion and productive work.',
    refs: [{ s: 'toseland' }],
  },
  {
    id: 'int-044',
    competency: 'IIIB',
    topic: 'Group therapeutic factors',
    stem: "After her first group session, a member says, 'I thought I was the only one who felt this way.' Which therapeutic factor is she describing?",
    options: ['Universality', 'Catharsis', 'Altruism', 'Instillation of hope'],
    answer: 0,
    rationale:
      "Universality, one of Yalom's therapeutic factors, is the relief of discovering that others share similar problems and feelings.",
    refs: [{ s: 'yalom' }],
  },
  {
    id: 'int-045',
    competency: 'IIIB',
    topic: 'Structural family therapy',
    stem: 'A family therapist asks the parents to discuss a disagreement in session while the therapist observes, then helps them strengthen their parental subsystem. Which model is this?',
    options: ['Structural', 'Narrative', 'Solution-focused'],
    answer: 0,
    rationale:
      "Structural family therapy (Minuchin) uses enactments, joining, and boundary-making to reorganize the family's structure and subsystems.",
    refs: [{ s: 'familyText' }],
  },

  // ───────────── IIIC. Practice evaluation and research ─────────────
  {
    id: 'asm-011',
    competency: 'IIIC',
    topic: 'Evaluating practice',
    stem: "A social worker wants to measure whether an intervention is reducing a client's panic attacks. Which approach is BEST?",
    options: [
      "Set a baseline, then track panic attacks throughout treatment",
      "Ask the client at termination whether she feels her panic has improved",
      "Compare the client's progress with other clients on the caseload",
      "Rely on the supervisor's impressions of the client's progress",
    ],
    answer: 0,
    rationale:
      'A single-subject design, with a baseline followed by repeated measurement, gives objective evidence of change for an individual client.',
    refs: [{ s: 'bloom' }, { s: 'rubin' }],
  },
  {
    id: 'int-046',
    competency: 'IIIC',
    topic: 'Formative vs. summative evaluation',
    stem: 'A new youth mentoring program collects feedback during its first months to adjust activities as it goes. What type of evaluation is this?',
    options: ['Formative evaluation', 'Summative evaluation', 'Cost-benefit analysis'],
    answer: 0,
    rationale:
      "Formative evaluation happens during implementation to improve a program. Summative evaluation assesses overall outcomes after the program is completed.",
    refs: [{ s: 'rubin' }],
  },
  {
    id: 'int-047',
    competency: 'IIIC',
    topic: 'Cost-benefit analysis',
    stem: 'An agency wants to show funders that every dollar spent on its job-training program returns more in reduced public assistance costs. Which method is MOST appropriate?',
    options: ['Cost-effectiveness analysis', 'Cost-benefit analysis', 'Needs assessment'],
    answer: 1,
    rationale:
      'Cost-benefit analysis converts outcomes into dollars to compare benefits with costs. Cost-effectiveness analysis compares the cost per unit of a non-monetary outcome.',
    refs: [{ s: 'rubin' }],
  },
  {
    id: 'int-048',
    competency: 'IIIC',
    topic: 'Reliability and validity',
    stem: 'A depression scale gives very consistent scores when clients retake it, but the scores do not correlate with clinical diagnoses of depression. How should the scale be described?',
    options: ['Reliable but not valid', 'Valid but not reliable', 'Both reliable and valid'],
    answer: 0,
    rationale:
      'Reliability is consistency. Validity is whether the scale measures what it claims to measure. A scale can be consistent without being accurate.',
    refs: [{ s: 'rubin' }],
  },
  {
    id: 'int-049',
    competency: 'IIIC',
    topic: 'Research ethics',
    stem: 'An agency client is invited to take part in a research study and asks whether refusing will affect her services. What should the social worker tell her?',
    options: [
      "Participation is voluntary, and refusing will not affect her services",
      "Participation is required to keep receiving services from the agency",
      "She may decline now, but cannot withdraw once the study has begun",
    ],
    answer: 0,
    rationale:
      'Research participation must be voluntary, with informed consent and the right to withdraw at any time without penalty or loss of services.',
    refs: [{ s: 'nasw', at: '5.02' }],
  },
  {
    id: 'int-050',
    competency: 'IIIC',
    topic: 'Evaluating agency programs',
    stem: 'Before designing a new after-school program, an agency surveys families and reviews community data to find out which services are lacking. What is this process called?',
    options: ['Needs assessment', 'Outcome evaluation', 'Summative evaluation'],
    answer: 0,
    rationale:
      'A needs assessment identifies gaps between current conditions and desired conditions before a program is designed. Outcome and summative evaluations measure results after services are delivered.',
    refs: [{ s: 'rubin' }, { s: 'aswb', at: 'Outline IIIC — program evaluation' }],
  },

  // ───────────── IIID. Supervision and administration ─────────────
  {
    id: 'int-051',
    competency: 'IIID',
    topic: "Supervisee's role",
    stem: 'A newly licensed social worker begins weekly supervision. What is her MOST important responsibility as a supervisee?',
    options: [
      "Assess her own learning needs and come prepared with cases",
      "Wait for the supervisor to identify problems in her cases",
      "Present only her most successful cases to build confidence",
    ],
    answer: 0,
    rationale:
      'Supervisees actively shape supervision by assessing their own learning needs, preparing cases, and bringing difficulties, not just successes.',
    refs: [{ s: 'naswAswbSup' }, { s: 'aswb', at: "Outline IIID — supervisee's role" }],
  },
  {
    id: 'int-052',
    competency: 'IIID',
    topic: 'Functions of supervision',
    stem: 'A supervisor spends part of each meeting helping a supervisee process the stress of a difficult caseload. Which function of supervision is this?',
    options: ['Administrative', 'Educational', 'Supportive'],
    answer: 2,
    rationale:
      "Kadushin's model describes three functions of supervision. Administrative covers policies and workload, educational covers skill development, and supportive covers morale, stress, and burnout prevention.",
    refs: [{ s: 'kadushin' }],
  },
  {
    id: 'int-053',
    competency: 'IIID',
    topic: 'Parallel process',
    stem: 'A supervisee who feels overwhelmed by a demanding, helpless client begins acting helpless and demanding with her own supervisor. What does this illustrate?',
    options: ['Parallel process', 'Countertransference', 'Role reversal'],
    answer: 0,
    rationale:
      'In parallel process, dynamics from the client–worker relationship are unconsciously reenacted in the supervisory relationship. Recognizing it gives insight into the case.',
    refs: [{ s: 'kadushin' }, { s: 'aswb', at: 'Outline IIID — transference' }],
  },
  {
    id: 'int-054',
    competency: 'IIID',
    topic: 'Countertransference',
    stem: 'A social worker notices a strong urge to rescue a young client who reminds her of her younger sister. What should she do?',
    options: [
      "Recognize this as countertransference and discuss it in supervision",
      "Act on the feeling, since it will motivate her to work harder for the client",
      "Transfer the client to a colleague immediately without discussion",
    ],
    answer: 0,
    rationale:
      "Countertransference is the social worker's emotional reaction to a client, shaped by her own history. Recognizing it and using supervision keeps it from distorting practice.",
    refs: [{ s: 'naswAswbSup' }, { s: 'nasw', at: '4.05(b)' }],
  },
  {
    id: 'int-055',
    competency: 'IIID',
    topic: 'Risk-reduction policies',
    stem: 'Two social workers were recently threatened during home visits. As program administrator, what is the BEST action?',
    options: [
      "Create a home-visit safety policy with check-ins and training",
      "Remind staff to be more careful and alert during home visits",
      "Stop all home visits permanently to eliminate the risk to staff",
    ],
    answer: 0,
    rationale:
      'Administrators create and evaluate policies that reduce risk to staff and clients, such as check-ins, risk assessment before visits, and training, while preserving services.',
    refs: [{ s: 'nasw', at: '3.07(d)' }, { s: 'aswb', at: 'Outline IIID — risk policies' }],
  },
];
