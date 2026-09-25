import type { QuestionInput } from './types';

// II. ASSESSMENT AND PLANNING (33%)
export const ASSESSMENT_QUESTIONS: QuestionInput[] = [
  // ───────────── IIA. Assessment concepts ─────────────
  {
    id: 'asm-003',
    competency: 'IIA',
    topic: 'Rule out medical causes',
    stem: "A 74-year-old client's daughter reports that over the past three days her mother has become suddenly confused and agitated, which is unlike her. What should the social worker do FIRST?",
    options: [
      'Begin a cognitive assessment for dementia',
      'Refer for an immediate medical evaluation',
      'Refer the client to a memory care program',
    ],
    answer: 1,
    rationale:
      'Sudden changes in mental status in older adults may signal delirium from a medical cause, such as an infection or a medication reaction. Medical causes are ruled out first. Dementia usually develops gradually.',
    refs: [{ s: 'dsm', at: 'Delirium' }, { s: 'corcoranWalsh' }],
  },
  {
    id: 'asm-007',
    competency: 'IIA',
    topic: 'Typical development (toddlers)',
    stem: 'Parents of a 2-year-old are worried because their child says "No!" constantly and insists on doing things herself. What is the social worker\'s BEST response?',
    options: [
      "Explain that this is typical development for a toddler",
      "Refer for an evaluation of oppositional defiant disorder",
      "Advise the parents to set firm limits on all independent behavior",
      "Suggest the parents ignore the behavior until it stops on its own",
    ],
    answer: 0,
    rationale:
      "In Erikson's stage of autonomy vs. shame and doubt, toddlers assert independence. This behavior is expected, and explaining normal development to the parents is the right intervention.",
    refs: [{ s: 'ashford', at: 'Erikson' }],
  },
  {
    id: 'asm-013',
    competency: 'IIA',
    topic: 'Trauma indicators in children',
    stem: 'A 7-year-old who had been toilet-trained for years begins wetting the bed and clinging to his mother after witnessing violence at home. How should the social worker understand this behavior?',
    options: [
      "As regression, a common trauma response in young children",
      "As attention-seeking behavior that is best ignored by parents",
      "As most likely a medical problem unrelated to the violence",
    ],
    answer: 0,
    rationale:
      'Regression to earlier behaviors, such as bedwetting and clinginess, is a common way young children express trauma and stress. It calls for a trauma-informed assessment, not punishment.',
    refs: [{ s: 'samhsaTic' }, { s: 'ashford' }],
  },
  {
    id: 'asm-014',
    competency: 'IIA',
    topic: 'Historical trauma',
    stem: 'A Native American family is extremely distrustful of the child welfare social worker, although this worker has never harmed them. Which concept BEST helps explain this?',
    options: ['Historical trauma', 'Paranoid ideation', 'Resistance to treatment'],
    answer: 0,
    rationale:
      'Historical trauma is cumulative emotional and psychological wounding across generations resulting from massive group trauma, including forced child removal through boarding schools and child welfare systems.',
    refs: [{ s: 'braveHeart' }, { s: 'icwa' }],
  },
  {
    id: 'asm-015',
    competency: 'IIA',
    topic: 'Family dynamics — parentification',
    stem: 'A 12-year-old cooks, cleans, and cares for her younger siblings because her mother is severely depressed. She is falling behind in school. Which concept BEST describes her role?',
    options: ['Enmeshment', 'Parentification', 'Triangulation'],
    answer: 1,
    rationale:
      'Parentification is a role reversal in which a child takes on adult or parental responsibilities, often at the expense of the child\'s own developmental needs.',
    refs: [{ s: 'familyText' }],
  },
  {
    id: 'asm-016',
    competency: 'IIA',
    topic: 'Poverty and social determinants of health',
    stem: 'A client with diabetes has missed four medical appointments, and her physician calls her "noncompliant." What should the social worker do FIRST?',
    options: [
      "Assess barriers such as transportation, childcare, and cost",
      "Explain the health consequences of missing appointments to the client",
      "Agree with the physician and document the pattern of noncompliance",
      "Refer her to a diabetes education class to improve her motivation",
    ],
    answer: 0,
    rationale:
      'Social determinants of health, such as transportation, income, and work demands, often explain missed care. Assessing barriers comes before labeling a client noncompliant.',
    refs: [{ s: 'aswb', at: 'Outline IIA — poverty/SDOH' }, { s: 'hepworth' }],
  },
  {
    id: 'asm-017',
    competency: 'IIA',
    topic: 'Relationship diversity',
    stem: 'During an assessment for work stress, a client mentions she is in a consensual polyamorous relationship with two partners. How should the social worker proceed?',
    options: [
      "Assess her relationships as she defines them, without assuming a problem",
      "Explore the polyamorous relationship as the likely source of her stress",
      "Refer her to couples therapy that includes both of her partners",
    ],
    answer: 0,
    rationale:
      'The 2026 outline explicitly names diverse relationship structures, including polyamory. Social workers assess relationships nonjudgmentally and do not assume nontraditional arrangements are pathological.',
    refs: [{ s: 'aswb', at: 'Outline IIA — relationship dynamics' }, { s: 'nasw', at: '1.05(d)' }],
  },
  {
    id: 'asm-018',
    competency: 'IIA',
    topic: 'Indicators of physical abuse',
    stem: 'Which finding is MOST suggestive of physical abuse in a young child?',
    options: [
      "Patterned bruises in different stages of healing",
      "Bruises on the shins and knees of a child who plays outside",
      "A scraped elbow after a fall from a bicycle",
      "A single bruise on the forehead of a child learning to walk",
    ],
    answer: 0,
    rationale:
      'Patterned marks, injuries at different stages of healing, and explanations that do not fit the injury are classic abuse indicators. Bruises on bony, exposed areas are typical of normal childhood activity.',
    refs: [{ s: 'aswb', at: 'Outline IIA — abuse indicators' }, { s: 'njAbuse' }],
  },
  {
    id: 'asm-019',
    competency: 'IIA',
    topic: 'Depression in older adults',
    stem: 'A 78-year-old man reports poor sleep, low energy, vague aches, and difficulty concentrating, but denies feeling sad. What should the social worker consider?',
    options: [
      "Depression, which in older adults often presents physically",
      "These are normal signs of aging that do not require further assessment",
      "Malingering in order to receive more attention from family members",
    ],
    answer: 0,
    rationale:
      'Late-life depression often presents with physical and cognitive symptoms rather than reported sadness, and it is frequently missed. It should be screened for, not dismissed as normal aging.',
    refs: [{ s: 'corcoranWalsh' }, { s: 'dsm', at: 'Depressive disorders' }],
  },
  {
    id: 'asm-020',
    competency: 'IIA',
    topic: 'Out-of-home placement',
    stem: 'A 9-year-old in foster care begins acting out after being moved to his third placement in a year. How should the social worker understand the behavior?',
    options: [
      "As a likely response to grief, loss, and disrupted attachment",
      "As evidence that the child cannot succeed in a family setting",
      "As a behavior problem unrelated to the changes in placement",
    ],
    answer: 0,
    rationale:
      'Placement instability disrupts attachment and produces grief and loss, which children often express through behavior. The assessment should consider the effects of the moves themselves.',
    refs: [{ s: 'aswb', at: 'Outline IIA — out-of-home placement' }, { s: 'ashford' }],
  },
  {
    id: 'asm-021',
    competency: 'IIA',
    topic: 'Caregiver stress',
    stem: 'An adult daughter caring full-time for her father with dementia reports exhaustion, irritability, and neglecting her own health. What should the social worker do?',
    options: [
      "Assess caregiver burden and connect her with respite and support",
      "Recommend nursing home placement for her father as soon as possible",
      "Teach her strategies to be more patient with her father's behavior",
    ],
    answer: 0,
    rationale:
      'Caregiving affects the whole family system. Assessing caregiver burden and linking the caregiver to respite and support protects both her and her father.',
    refs: [{ s: 'aswb', at: 'Outline IIA — impact of caregiving' }],
  },
  {
    id: 'asm-022',
    competency: 'IIA',
    topic: 'Alcohol withdrawal',
    stem: 'A client who drinks heavily every day arrives for a session tremulous, sweating, and anxious. He says he stopped drinking yesterday. What should the social worker do FIRST?',
    options: [
      'Praise his decision and schedule a follow-up next week',
      'Arrange immediate medical evaluation',
      'Refer him to a 12-step meeting today',
    ],
    answer: 1,
    rationale:
      'Alcohol withdrawal can progress to seizures and delirium tremens and can be life-threatening. Medical evaluation for supervised withdrawal comes first.',
    refs: [{ s: 'dsm', at: 'Alcohol withdrawal' }],
  },
  {
    id: 'asm-023',
    competency: 'IIA',
    topic: 'Co-occurring disorders',
    stem: 'A client has both major depression and an alcohol use disorder. Which approach is MOST consistent with best practice?',
    options: [
      "Treat both conditions at the same time in an integrated way",
      "Treat the alcohol use first, then address the depression after sobriety",
      "Treat the depression first, since the drinking is likely a symptom",
    ],
    answer: 0,
    rationale:
      'Integrated treatment of co-occurring disorders, addressing both at once, is the recommended standard. Treating them one after the other often leads to poorer outcomes.',
    refs: [{ s: 'aswb', at: 'Outline IIA — co-occurring' }],
  },
  {
    id: 'asm-024',
    competency: 'IIA',
    topic: 'Perpetrator grooming',
    stem: 'A parent tells a school social worker that an adult coach gives her son special gifts, texts him privately, and told him to keep their conversations "our secret." What does this pattern MOST suggest?',
    options: ['Mentoring', 'Grooming', 'Favoritism'],
    answer: 1,
    rationale:
      'Special attention and gifts, private communication, and requests for secrecy are hallmark grooming behaviors that perpetrators use to build trust and isolate a child.',
    refs: [{ s: 'aswb', at: 'Outline IIA — perpetrator characteristics' }],
  },
  {
    id: 'asm-025',
    competency: 'IIA',
    topic: 'Financial exploitation (online)',
    stem: 'A widowed 76-year-old client says she has fallen in love with a man she met online but has never seen in person. He has asked her to wire money for an emergency. What should the social worker do FIRST?',
    options: [
      "Gently share concerns about a possible scam and explore the details",
      "Respect her right to manage her own money and avoid raising concerns",
      "Contact her bank right away and ask them to freeze her accounts",
    ],
    answer: 0,
    rationale:
      'The pattern strongly suggests a romance scam. The social worker respects self-determination while providing information, exploring the situation, and assessing capacity and risk before taking further steps.',
    refs: [{ s: 'aswb', at: 'Outline IIA — exploitation' }, { s: 'nasw', at: '1.02' }],
  },
  {
    id: 'asm-026',
    competency: 'IIA',
    topic: 'Defense mechanisms — displacement',
    stem: 'After being criticized by his boss, a client comes home and yells at his children over minor issues. Which defense mechanism is this?',
    options: ['Projection', 'Displacement', 'Sublimation', 'Rationalization'],
    answer: 1,
    rationale:
      'Displacement redirects feelings from their true source, the boss, to a safer target, the children.',
    refs: [{ s: 'annaFreud' }],
  },
  {
    id: 'asm-027',
    competency: 'IIA',
    topic: 'Defense mechanisms — reaction formation',
    stem: 'A client who deeply resents her mother-in-law is excessively sweet and complimentary toward her. Which defense mechanism is this?',
    options: ['Reaction formation', 'Denial', 'Intellectualization'],
    answer: 0,
    rationale:
      'Reaction formation replaces an unacceptable feeling with its exaggerated opposite, here resentment with excessive sweetness.',
    refs: [{ s: 'annaFreud' }],
  },
  {
    id: 'asm-028',
    competency: 'IIA',
    topic: 'Homelessness and education',
    stem: 'A family is living in their car after an eviction. The parents worry their children will have to change schools. What should the social worker tell them?',
    options: [
      "The children can usually stay at their current school, with transportation",
      "The children must enroll in the district where the family is sleeping now",
      "The children cannot attend school until the family has a permanent address",
    ],
    answer: 0,
    rationale:
      'The McKinney-Vento Act gives children experiencing homelessness the right to immediate enrollment and, when in their best interest, to remain in their school of origin with transportation.',
    refs: [{ s: 'mckinney' }],
  },
  {
    id: 'asm-029',
    competency: 'IIA',
    topic: 'Body image and eating disorders',
    stem: 'A 15-year-old athlete has lost significant weight, skips meals, and exercises for hours daily. She says she still "needs to lose more." What should the social worker do FIRST?',
    options: [
      "Refer for a medical evaluation and assess for an eating disorder",
      "Praise her discipline and commitment to her sport",
      "Suggest she talk with her coach about building a healthy meal plan",
    ],
    answer: 0,
    rationale:
      'Restriction, excessive exercise, and distorted body image suggest an eating disorder, which carries serious medical risk. Medical evaluation is the first priority.',
    refs: [{ s: 'dsm', at: 'Feeding and eating disorders' }],
  },
  {
    id: 'asm-030',
    competency: 'IIA',
    topic: 'Racial identity development',
    stem: 'A Black teenager at a predominantly white school, after experiencing a racist incident, begins exclusively wearing African-centered clothing, reading Black history, and avoiding white peers. According to Cross\'s model, which stage is this?',
    options: ['Pre-encounter', 'Immersion-emersion', 'Internalization'],
    answer: 1,
    rationale:
      "In Cross's Nigrescence model, an encounter with racism is often followed by immersion-emersion, when the person intensely embraces Black identity and may withdraw from white culture. Internalization comes later, with a secure, inclusive identity.",
    refs: [{ s: 'cross' }],
  },
  {
    id: 'asm-031',
    competency: 'IIA',
    topic: 'Gender identity',
    stem: 'A 16-year-old tells the social worker that they are transgender and asks to be called by a different name and pronouns. What is the social worker\'s BEST response?',
    options: [
      "Use the requested name and pronouns and explore their supports",
      "Wait to use the new name until the parents give their approval",
      "Explain that identity is still forming at 16 and may change later",
    ],
    answer: 0,
    rationale:
      "Affirming the client's identity is the professional standard. Using the chosen name and pronouns builds trust, and assessment then explores family, school, and safety supports.",
    refs: [{ s: 'nasw', at: '1.05(b)' }, { s: 'aswb', at: 'Outline IIA — identity formation' }],
  },
  {
    id: 'asm-032',
    competency: 'IIA',
    topic: 'Attachment',
    stem: 'In the Strange Situation procedure, a toddler shows little distress when the mother leaves and ignores her when she returns. Which attachment style does this suggest?',
    options: ['Secure', 'Anxious-ambivalent', 'Avoidant', 'Disorganized'],
    answer: 2,
    rationale:
      'Avoidant attachment is marked by minimal distress at separation and avoidance at reunion. Securely attached children seek comfort at reunion and are soothed.',
    refs: [{ s: 'ashford', at: 'Attachment' }],
  },
  {
    id: 'asm-033',
    competency: 'IIA',
    topic: 'Cognitive development',
    stem: 'A 5-year-old insists there is more juice in a tall, thin glass than in a short, wide glass holding the same amount. Which Piagetian stage is the child in?',
    options: ['Sensorimotor', 'Preoperational', 'Concrete operational'],
    answer: 1,
    rationale:
      'Children in the preoperational stage (about ages 2–7) have not yet mastered conservation. Conservation develops in the concrete operational stage.',
    refs: [{ s: 'ashford', at: 'Piaget' }],
  },
  {
    id: 'asm-034',
    competency: 'IIA',
    topic: 'Technology and social media',
    stem: 'A parent reports that her 13-year-old has become withdrawn, avoids school, and seems upset after checking her phone. What should the social worker assess for?',
    options: [
      "Cyberbullying, along with depression and suicide risk",
      "Normal adolescent moodiness that will likely pass",
      "Excessive screen time as the main problem",
    ],
    answer: 0,
    rationale:
      'Distress tied to phone use, school avoidance, and withdrawal are warning signs of cyberbullying, which is associated with depression and suicidal ideation. Assessment should cover both.',
    refs: [{ s: 'aswb', at: 'Outline IIA — technology/social media' }],
  },
  {
    id: 'asm-035',
    competency: 'IIA',
    topic: 'Climate change',
    stem: 'A 22-year-old says constant worry about climate change makes her feel hopeless about having a future or a family. What is the BEST initial response?',
    options: [
      "Validate her concern, assess its impact, and explore coping",
      "Reassure her that scientists will solve the problem in time",
      "Diagnose generalized anxiety disorder and begin treatment",
    ],
    answer: 0,
    rationale:
      'The 2026 outline adds the impact of climate change and environmental hazards on clients. Climate distress is a rational response to a real threat. Validation, assessing impairment, and building coping and a sense of agency are appropriate.',
    refs: [{ s: 'aswb', at: 'Outline IIA — climate change' }],
  },
  {
    id: 'asm-036',
    competency: 'IIA',
    topic: 'Right to refuse medication',
    stem: 'A client with schizophrenia who has decision-making capacity tells the social worker he wants to stop his antipsychotic medication because of weight gain. What should the social worker do?',
    options: [
      "Explore his concerns and encourage him to talk with his prescriber",
      "Tell him he needs to keep taking the medication exactly as prescribed",
      "Ask his family to help make sure he keeps taking the medication",
    ],
    answer: 0,
    rationale:
      'Clients with capacity have the right to refuse treatment, including medication. The social worker explores reasons, supports an informed decision, and connects him with his prescriber about side-effect alternatives.',
    refs: [{ s: 'nasw', at: '1.02' }, { s: 'aswb', at: 'Outline IIA — self-determination' }],
  },

  // ───────────── IIB. Assessment methods and techniques ─────────────
  {
    id: 'asm-002',
    competency: 'IIB',
    topic: 'Suicide risk assessment',
    stem: 'A client being seen for job loss says quietly, "Sometimes I think everyone would be better off without me." What should the social worker do NEXT?',
    options: [
      "Ask directly about suicidal thoughts, plan, intent, and means",
      "Reassure him that his family loves him and would miss him",
      "Refocus the session on the job search to build hope",
      "Arrange for immediate psychiatric hospitalization for his safety",
    ],
    answer: 0,
    rationale:
      'Indirect statements call for a direct suicide assessment, and asking about suicide does not increase risk. Whether hospitalization is needed depends on what the assessment finds.',
    refs: [{ s: 'aswb', at: 'Outline IIB — risk of harm' }, { s: 'corcoranWalsh' }],
  },
  {
    id: 'asm-005',
    competency: 'IIB',
    topic: 'Collateral information',
    stem: 'A social worker wants to review the school records of a 12-year-old client as part of an assessment. What must the social worker do FIRST?',
    options: [
      "Obtain written consent from the child's parent or guardian",
      "Call the school counselor and request the records directly",
      "Ask the child to bring copies of the records from school",
    ],
    answer: 0,
    rationale:
      'Getting collateral information requires valid consent from the client or a person legally authorized to consent. For a minor, that is generally the parent or legal guardian.',
    refs: [{ s: 'nasw', at: '1.07(b)' }, { s: 'nasw', at: '1.03(c)' }],
  },
  {
    id: 'asm-006',
    competency: 'IIB',
    topic: 'Standardized instruments',
    stem: 'A social worker wants a brief, validated screening tool for depressive symptoms. Which instrument is MOST appropriate?',
    options: ['PHQ-9', 'GAD-7', 'AUDIT', 'MMSE'],
    answer: 0,
    rationale:
      'The PHQ-9 screens for depression. The GAD-7 screens for anxiety, the AUDIT for alcohol use, and the MMSE for cognitive impairment.',
    refs: [{ s: 'phq9' }],
  },
  {
    id: 'asm-008',
    competency: 'IIB',
    topic: 'Strengths perspective',
    stem: 'Which question BEST reflects a strengths-based assessment?',
    options: [
      "What has helped you get through difficult times before?",
      "What are the main problems that brought you here today?",
      "How long have you been having these symptoms?",
      "Who do you think is to blame for the current situation?",
    ],
    answer: 0,
    rationale:
      'The strengths perspective looks for resources, resilience, and past coping that can be built on, rather than focusing on deficits.',
    refs: [{ s: 'saleebey' }],
  },
  {
    id: 'asm-009',
    competency: 'IIB',
    topic: 'Intimate partner violence',
    stem: 'During a couples intake, one partner answers every question for the other, who appears fearful and avoids eye contact. The social worker suspects intimate partner violence. What should the social worker do?',
    options: [
      'Ask about violence in the joint session so both partners can respond',
      'Arrange to meet with each partner individually to screen for safety',
      'Begin couples counseling focused on communication skills',
    ],
    answer: 1,
    rationale:
      'Screening for IPV must happen privately, because asking in front of a possible abuser can escalate the danger. Couples therapy is generally contraindicated when there is active IPV.',
    refs: [{ s: 'aswb', at: 'Outline IIB — sensitive information' }, { s: 'hepworth' }],
  },
  {
    id: 'asm-010',
    competency: 'IIB',
    topic: 'Stages of change',
    stem: 'A client says, "I know my drinking is causing problems at home, but I\'m not sure I\'m ready to stop." Which stage of change does this reflect?',
    options: ['Precontemplation', 'Contemplation', 'Action'],
    answer: 1,
    rationale:
      'Contemplation means the client recognizes the problem but is ambivalent about changing. In precontemplation the client does not see a problem, and in action the client is actively changing.',
    refs: [{ s: 'prochaska' }],
  },
  {
    id: 'asm-012',
    competency: 'IIB',
    topic: 'Assessment tools',
    stem: "A social worker wants to visually map a family's relationships with outside systems such as school, church, employers, and agencies. Which tool is MOST appropriate?",
    options: ['Genogram', 'Ecomap', 'Timeline'],
    answer: 1,
    rationale:
      "An ecomap shows the client's connections to external systems and the quality of those connections. A genogram maps family structure and patterns across generations.",
    refs: [{ s: 'ecomap' }],
  },
  {
    id: 'asm-037',
    competency: 'IIB',
    topic: 'Interviewing — clarification',
    stem: "A client says, 'I'm just done with all of it.' Which response is an example of clarification?",
    options: [
      "What do you mean when you say you're 'done'?",
      "It sounds like you're feeling hopeless about everything.",
      "Everyone feels that way sometimes when life gets hard.",
    ],
    answer: 0,
    rationale:
      'Clarification asks the client to explain vague or ambiguous statements. This matters especially here, because "done" could signal suicidal thinking.',
    refs: [{ s: 'hepworth' }],
  },
  {
    id: 'asm-038',
    competency: 'IIB',
    topic: 'Interviewing — confrontation',
    stem: 'A client says he is committed to finding a job but has missed three scheduled interviews. Which response BEST illustrates constructive confrontation?',
    options: [
      "You say work matters, yet you've missed three interviews. Help me understand.",
      "You're obviously not serious about finding work if you keep missing interviews.",
      "Let's set that aside and talk about what's going well for you instead.",
      "If you miss another interview, we'll have to reconsider your plan.",
    ],
    answer: 0,
    rationale:
      'Constructive confrontation respectfully points out a discrepancy between words and actions and invites exploration, without judgment or blame.',
    refs: [{ s: 'hepworth' }],
  },
  {
    id: 'asm-039',
    competency: 'IIB',
    topic: 'Interviewing — reflection of feeling',
    stem: "A client says, 'My son hasn't called in months, even on my birthday.' Which response is a reflection of feeling?",
    options: [
      "It sounds like you feel hurt and forgotten.",
      "How often did he call you before this happened?",
      "Maybe he has just been busy with work lately.",
    ],
    answer: 0,
    rationale:
      "Reflection of feeling identifies and names the emotion beneath the client's words. Questions and explanations do not do this.",
    refs: [{ s: 'hepworth' }],
  },
  {
    id: 'asm-040',
    competency: 'IIB',
    topic: 'Suicide risk factors',
    stem: 'Which factor is the STRONGEST predictor of a future suicide attempt?',
    options: [
      "A previous suicide attempt",
      "A recent job loss",
      "Living alone after a divorce",
      "Chronic physical pain",
    ],
    answer: 0,
    rationale:
      'A prior suicide attempt is the single strongest predictor of a future attempt. The other factors increase risk but are less predictive on their own.',
    refs: [{ s: 'corcoranWalsh' }, { s: 'aswb', at: 'Outline IIB — risk of harm' }],
  },
  {
    id: 'asm-041',
    competency: 'IIB',
    topic: 'Obtaining sensitive information',
    stem: 'Which approach is MOST likely to elicit accurate information about a client\'s alcohol use?',
    options: [
      "Many people drink to cope. How much do you drink in a typical week?",
      "You don't drink too much, do you? Most of my clients don't.",
      "Would you describe yourself as an alcoholic, or more of a social drinker?",
    ],
    answer: 0,
    rationale:
      'Normalizing the topic and asking direct, specific questions reduces shame and encourages honest answers. Leading questions and labels discourage disclosure.',
    refs: [{ s: 'aswb', at: 'Outline IIB — sensitive information' }, { s: 'hepworth' }],
  },
  {
    id: 'asm-042',
    competency: 'IIB',
    topic: 'Readiness for change',
    stem: "A client says, 'I've set a quit date for next month and bought nicotine patches.' Which stage of change is this?",
    options: ['Contemplation', 'Preparation', 'Maintenance'],
    answer: 1,
    rationale:
      'Preparation involves intending to act soon and taking initial steps, such as setting a date and gathering resources.',
    refs: [{ s: 'prochaska' }],
  },
  {
    id: 'asm-043',
    competency: 'IIB',
    topic: 'Assessing communication',
    stem: 'A client who had a stroke has expressive aphasia and struggles to find words. How should the social worker adapt the assessment?',
    options: [
      "Use yes/no questions and visual aids, and allow extra time",
      "Speak loudly and quickly so the session does not tire the client",
      "Complete the assessment by interviewing family members instead",
    ],
    answer: 0,
    rationale:
      'Adapting communication through simple, closed questions, visual supports, and patience lets the client take part directly in the assessment.',
    refs: [{ s: 'aswb', at: 'Outline IIB — communication skills' }, { s: 'ada' }],
  },
  {
    id: 'asm-044',
    competency: 'IIB',
    topic: 'Using prior records',
    stem: 'A new client\'s file includes a psychological evaluation from five years ago with a diagnosis. How should the social worker use it?',
    options: [
      "Use it as one source and confirm it with a current assessment",
      "Adopt the prior diagnosis, since it was made by a qualified evaluator",
      "Disregard the evaluation entirely, since it is more than five years old",
    ],
    answer: 0,
    rationale:
      'Records and prior evaluations provide useful history, but the client may have changed. A current, independent assessment is needed.',
    refs: [{ s: 'aswb', at: 'Outline IIB — records and evaluations' }],
  },
  {
    id: 'asm-045',
    competency: 'IIB',
    topic: 'Mental status exam — thought process',
    stem: 'During a mental status exam, a client repeatedly drifts off-topic and never returns to answer the original question. Which MSE area does this describe?',
    options: ['Thought content', 'Thought process', 'Orientation', 'Insight'],
    answer: 1,
    rationale:
      "Tangentiality is a thought-process disturbance: it concerns how thoughts are organized. Thought content concerns what the client thinks about, such as delusions or obsessions.",
    refs: [{ s: 'corcoranWalsh', at: 'Mental status exam' }],
  },
  {
    id: 'asm-046',
    competency: 'IIB',
    topic: 'Mental status exam — mood vs. affect',
    stem: "A client says she feels 'great' while appearing tearful, with a flat facial expression. In MSE terms, how is this BEST documented?",
    options: [
      "Stated mood 'great'; affect tearful and incongruent",
      "Mood and affect are congruent and appropriate",
      "Mood and affect are both euthymic and appropriate",
      "Mood is tearful; affect is 'great' and reactive",
    ],
    answer: 0,
    rationale:
      'Mood is the client\'s self-reported emotional state. Affect is the emotion the clinician observes. Incongruence between them is clinically meaningful and should be documented.',
    refs: [{ s: 'corcoranWalsh', at: 'Mental status exam' }],
  },

  // ───────────── IIC. Assessment practices ─────────────
  {
    id: 'asm-004',
    competency: 'IIC',
    topic: 'Goal setting',
    stem: 'Which of the following is the BEST-written treatment goal?',
    options: [
      "Client will attend three meetings weekly for eight weeks, verified by slips",
      "Client will improve her sobriety and reduce her drinking over the coming months",
      "Client will understand the dangers of alcohol and how it affects her family",
      "Client will feel more confident about staying sober by the end of treatment",
    ],
    answer: 0,
    rationale:
      'Strong goals are specific, measurable, achievable, relevant, and time-bound (SMART). Only this option says what will happen, how often, for how long, and how it will be verified.',
    refs: [{ s: 'hepworth', at: 'Goal setting' }],
  },
  {
    id: 'asm-047',
    competency: 'IIC',
    topic: 'Medication side effects',
    stem: 'During a biopsychosocial assessment, a client reporting new anxiety and insomnia mentions she recently started a new asthma medication. What should the social worker do?',
    options: [
      "Note the timing and encourage her to talk with her prescriber",
      "Diagnose an anxiety disorder and begin CBT for her symptoms",
      "Advise her to stop the new medication until she feels calmer",
    ],
    answer: 0,
    rationale:
      'Some medications, including certain asthma drugs, can cause anxiety-like symptoms. The social worker identifies the possible link and refers to the prescriber, and never advises stopping a medication.',
    refs: [{ s: 'psychopharm' }, { s: 'aswb', at: 'Outline IIC — medications' }],
  },
  {
    id: 'asm-048',
    competency: 'IIC',
    topic: 'Cultural considerations in planning',
    stem: 'A Muslim client observing Ramadan is scheduled for daytime group sessions that include a shared lunch. What is the BEST way to adapt the service plan?',
    options: [
      "Work with the client to adjust scheduling and activities during Ramadan",
      "Keep the schedule the same, since attending the shared lunch is optional",
      "Suspend her group services until Ramadan has ended to avoid conflict",
    ],
    answer: 0,
    rationale:
      'Service plans should reflect the client\'s culture and religious practices. Collaborating on adjustments supports engagement without interrupting care.',
    refs: [{ s: 'aswb', at: 'Outline IIC — cultural considerations' }, { s: 'nasw', at: '1.05(b)' }],
  },
  {
    id: 'asm-049',
    competency: 'IIC',
    topic: 'Triage',
    stem: 'An emergency department social worker has four referrals at once. Which client should be seen FIRST?',
    options: [
      "A patient with a plan to kill himself tonight and access to a firearm",
      "A patient who needs help arranging transportation home this evening",
      "A family requesting information about nursing homes for their mother",
      "A patient who needs help applying for Medicaid before discharge",
    ],
    answer: 0,
    rationale:
      'Triage prioritizes imminent risk to life. A client with a suicide plan, intent, and access to lethal means takes precedence over all other needs.',
    refs: [{ s: 'aswb', at: 'Outline IIC — triage' }],
  },
  {
    id: 'asm-050',
    competency: 'IIC',
    topic: 'Selecting modalities',
    stem: 'An 8-year-old is referred for anxiety about school. Which intervention is MOST developmentally appropriate?',
    options: [
      'Insight-oriented talk therapy focused on early memories',
      'Play-based and CBT techniques with parent involvement',
      'A weekly adult anxiety support group',
    ],
    answer: 1,
    rationale:
      "Interventions are selected based on the client's developmental level. For young children, play-based and child-adapted CBT approaches with caregiver involvement fit their cognitive abilities.",
    refs: [{ s: 'aswb', at: 'Outline IIC — modality selection' }],
  },
  {
    id: 'asm-051',
    competency: 'IIC',
    topic: 'Lithium toxicity',
    stem: 'A client taking lithium for bipolar disorder reports vomiting, diarrhea, a coarse hand tremor, and confusion. What should the social worker do?',
    options: [
      'Suggest she drink more water and rest',
      'Help her get immediate medical attention',
      'Document the symptoms and follow up next session',
    ],
    answer: 1,
    rationale:
      'These are signs of possible lithium toxicity, a medical emergency. Lithium has a narrow therapeutic range and requires blood-level monitoring.',
    refs: [{ s: 'psychopharm', at: 'Mood stabilizers' }],
  },
  {
    id: 'asm-052',
    competency: 'IIC',
    topic: 'Antidepressants and suicide risk',
    stem: 'A 19-year-old started an SSRI two weeks ago and now reports increased agitation and new thoughts of suicide. What should the social worker do?',
    options: [
      "Assess suicide risk immediately and contact the prescriber",
      "Reassure him that these side effects usually pass within weeks",
      "Advise him to stop taking the medication right away to be safe",
    ],
    answer: 0,
    rationale:
      'Antidepressants carry an FDA boxed warning about increased suicidal thoughts in children, adolescents, and young adults, especially early in treatment. This requires immediate risk assessment and prescriber contact, and the client should not stop abruptly on the social worker\'s advice.',
    refs: [{ s: 'psychopharm', at: 'Antidepressants' }],
  },
  {
    id: 'asm-053',
    competency: 'IIC',
    topic: 'Tardive dyskinesia',
    stem: 'A client who has taken antipsychotic medication for many years develops involuntary lip-smacking and tongue movements. What side effect does this MOST likely indicate?',
    options: ['Tardive dyskinesia', 'Serotonin syndrome', 'Lithium toxicity'],
    answer: 0,
    rationale:
      'Tardive dyskinesia is a movement disorder of the face, tongue, and limbs linked to long-term antipsychotic use. It should be reported to the prescriber.',
    refs: [{ s: 'psychopharm', at: 'Antipsychotics' }],
  },
  {
    id: 'asm-054',
    competency: 'IIC',
    topic: 'Herbal supplement interactions',
    stem: 'A client taking an SSRI mentions she has started St. John\'s wort to "boost her mood." What should the social worker do?',
    options: [
      "Encourage her to tell her prescriber about the supplement",
      "Support it, since herbal supplements are natural and generally safe",
      "Suggest she stop the SSRI and use only the supplement instead",
    ],
    answer: 0,
    rationale:
      "St. John's wort can cause serotonin syndrome when combined with SSRIs, and it interacts with other medications, including oral contraceptives. The prescriber must be informed.",
    refs: [{ s: 'psychopharm', at: 'Alternative medications' }],
  },
  {
    id: 'asm-055',
    competency: 'IIC',
    topic: 'Readiness for termination',
    stem: 'Which finding BEST indicates that a client is ready for termination?',
    options: [
      'The client has attended the number of sessions insurance allows',
      'The client has met goals and uses new coping skills independently',
      'The social worker feels the relationship has become too comfortable',
    ],
    answer: 1,
    rationale:
      'Readiness for termination is based on goal attainment and the client\'s ability to maintain gains independently, not on outside limits or the social worker\'s feelings.',
    refs: [{ s: 'aswb', at: 'Outline IIC — termination readiness' }, { s: 'nasw', at: '1.17(a)' }],
  },
  {
    id: 'asm-056',
    competency: 'IIC',
    topic: 'Prioritizing problems',
    stem: 'A client presents with housing problems, conflict with her sister, and stress at work. None involve safety concerns. How should the social worker decide which to address first?',
    options: [
      'Start with the problem the social worker considers most serious',
      'Ask the client which concern feels most pressing to her',
      'Address all three at once so none are neglected',
    ],
    answer: 1,
    rationale:
      "When safety is not at issue, involving the client in prioritizing problems respects self-determination and increases motivation.",
    refs: [{ s: 'aswb', at: 'Outline IIB — client involvement' }, { s: 'hepworth' }],
  },
];
