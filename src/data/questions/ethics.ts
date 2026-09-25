import type { QuestionInput } from './types';

// I. VALUES AND ETHICS (35%)
export const ETHICS_QUESTIONS: QuestionInput[] = [
  // ───────────── IA. Ethical principles and responsibilities ─────────────
  {
    id: 'eth-004',
    competency: 'IA',
    topic: 'Informed consent (mandated clients)',
    stem: "A court-mandated client asks, 'What are you going to tell my probation officer?' What is the social worker's BEST response?",
    options: [
      "Explain what will be reported, to whom, and the client's right to decline services",
      "Assure the client that sessions are confidential and nothing will be shared with probation",
      "Suggest the client ask the probation officer, since the court sets the reporting terms",
      "Explain that only attendance is reported, so everything said in session stays private",
    ],
    answer: 0,
    rationale:
      'Involuntary clients must be told the nature and extent of services and their right to refuse. Explaining exactly what will be reported, and to whom, is part of informed consent. False reassurance violates it.',
    refs: [{ s: 'nasw', at: '1.03(d)' }, { s: 'nasw', at: '1.07(e)' }],
  },
  {
    id: 'eth-005',
    competency: 'IA',
    topic: 'Colleague impairment',
    stem: 'A social worker repeatedly notices that a colleague smells of alcohol at work and seems unsteady during client meetings. What should the social worker do FIRST?',
    options: [
      'Report the colleague to the state licensing board immediately',
      'Discuss the concerns directly with the colleague and encourage them to seek help',
      "Keep quiet, because the colleague's personal life is not the social worker's business",
    ],
    answer: 1,
    rationale:
      "When feasible, a social worker who knows of a colleague's impairment consults with that colleague and helps them take remedial action. If the colleague does not act, the next step is reporting through employer, agency, or licensing channels.",
    refs: [{ s: 'nasw', at: '2.08(a)–(b)' }],
  },
  {
    id: 'eth-010',
    competency: 'IC',
    topic: 'Cultural humility',
    stem: "A client explains that in her family, important decisions are made together with her parents and elders. The social worker's training emphasized individual autonomy. What is the BEST approach?",
    options: [
      'Encourage the client to make decisions independently to promote empowerment',
      'Ask the client how she would like her family involved in planning',
      'Include the family in every session to respect the culture',
      'Refer the client to a worker who shares her cultural background',
    ],
    answer: 1,
    rationale:
      'Cultural humility means critical self-reflection and letting the client define how culture shapes her care. Asking about her preferences avoids imposing individualist values and also avoids assuming what her culture requires.',
    refs: [{ s: 'nasw', at: '1.05(c)' }, { s: 'naswCulture' }],
  },
  {
    id: 'eth-011',
    competency: 'IA',
    topic: 'Competence',
    stem: 'A client requests EMDR for trauma symptoms. The social worker has read about EMDR but has no formal training in it. What should the social worker do?',
    options: [
      "Refer the client to a trained provider, or get training and supervision first",
      "Use EMDR carefully, reviewing published protocols before each session",
      "Offer a trauma approach she is trained in without discussing the EMDR request",
      "Tell the client EMDR lacks evidence and recommend talk therapy instead",
    ],
    answer: 0,
    rationale:
      'Social workers provide services only within the limits of their education and training. They use a new technique only after appropriate study, training, and supervision, and refer the client until then.',
    refs: [{ s: 'nasw', at: '1.04(a)–(b)' }, { s: 'nasw', at: '1.16(a)' }],
  },
  {
    id: 'eth-013',
    competency: 'IA',
    topic: 'Informed consent (comprehension)',
    stem: 'A client with limited reading ability is asked to sign the agency consent form at intake. She says, "Just show me where to sign." What should the social worker do?',
    options: [
      "Explain the form verbally in plain language and confirm she understands it",
      "Show her where to sign, then summarize the key points after she signs",
      "Have a family member read the form to her while she waits in the lobby",
      "Let her take the form home to review with someone she trusts first",
    ],
    answer: 0,
    rationale:
      'Consent is valid only if the client understands it. Social workers must use clear, understandable language and take steps to confirm comprehension, such as a detailed verbal explanation.',
    refs: [{ s: 'nasw', at: '1.03(a)–(b)' }],
  },
  {
    id: 'eth-014',
    competency: 'IA',
    topic: 'HIPAA — minimum necessary',
    stem: "A client's insurance company requests the social worker's complete case file to authorize more sessions. The client has signed a release for billing purposes. What should the social worker send?",
    options: [
      'The complete case file, since the client signed a release',
      'Only the information necessary for the authorization decision',
      'Nothing, because therapy records can never go to insurers',
      'A copy of all process notes so the insurer understands the case',
    ],
    answer: 1,
    rationale:
      "HIPAA's minimum-necessary standard, and the NASW Code, limit disclosure to what is needed for the authorized purpose. Third-party payers get only information the client has authorized.",
    refs: [{ s: 'hipaa', at: 'minimum necessary standard' }, { s: 'nasw', at: '1.07(c), 1.07(h)' }],
  },
  {
    id: 'eth-015',
    competency: 'IA',
    topic: 'Resolving ethical dilemmas',
    stem: 'A social worker faces a situation in which two ethical duties appear to conflict. What should the social worker do FIRST?',
    options: [
      "Identify the ethical issues and the conflicting values and duties",
      "Consult a supervisor about which duty should take priority",
      "Select the option that produces the greatest good for the most people",
      "Review agency policy to see which duty the agency favors",
    ],
    answer: 0,
    rationale:
      'Ethical decision-making models begin by clearly identifying the ethical issues and the conflicting values and duties. Only then does the social worker identify who is affected, weigh options, consult, act, and document.',
    refs: [{ s: 'reamer' }, { s: 'nasw', at: 'Purpose' }],
  },
  {
    id: 'eth-016',
    competency: 'IA',
    topic: 'Burnout and self-care',
    stem: 'A social worker notices she dreads coming to work, feels cynical about her clients, and is increasingly irritable. What is the BEST action?',
    options: [
      "Recognize signs of burnout and seek supervision and self-care",
      "Push through the feelings, since stress like this is part of the job",
      "Quietly close several cases so her caseload is more manageable",
    ],
    answer: 0,
    rationale:
      'Emotional exhaustion, cynicism, and irritability are signs of burnout. The NASW Code emphasizes professional self-care and directs social workers to seek help so personal difficulties do not harm clients. Closing cases without cause would abandon clients.',
    refs: [{ s: 'nasw', at: 'Purpose (self-care)' }, { s: 'nasw', at: '4.05(b)' }],
  },
  {
    id: 'eth-017',
    competency: 'IA',
    topic: 'Secondary traumatic stress',
    stem: "A social worker in a child abuse investigations unit begins having intrusive images of her clients' injuries and trouble sleeping. Which concept BEST describes her experience?",
    options: ['Burnout', 'Secondary traumatic stress', 'Countertransference'],
    answer: 1,
    rationale:
      "Secondary (vicarious) traumatic stress comes from indirect exposure to clients' trauma and produces trauma-like symptoms such as intrusive images. Burnout is general exhaustion from workload and conditions.",
    refs: [{ s: 'aswb', at: 'Outline IA' }, { s: 'samhsaTic' }],
  },
  {
    id: 'eth-018',
    competency: 'IA',
    topic: 'Professional development (NJ)',
    stem: 'A New Jersey LSW is planning continuing education for the biennial renewal period. What does the NJ Board require?',
    options: [
      "30 credits, including 5 in ethics and 3 in social and cultural competence",
      "20 credits, including 5 in ethics and 3 in social and cultural competence",
      "40 credits, including 20 in clinical practice and 5 in ethics",
      "30 credits, with no specific subject-area requirements",
    ],
    answer: 0,
    rationale:
      'N.J.A.C. 13:44G-6.2 requires LSWs to complete at least 30 credits each biennial period, including 5 in ethics and 3 in social and cultural competence. All licensees also need 1 credit on prescription opioids. The 20-credit option applies to CSWs and the 40-credit option to LCSWs.',
    refs: [{ s: 'njac', at: '13:44G-6.2' }],
  },
  {
    id: 'eth-019',
    competency: 'IA',
    topic: 'Unethical conduct of colleagues',
    stem: "A social worker learns that a coworker has been writing notes for home visits that never happened. What should the social worker do FIRST, when it is feasible and likely to be productive?",
    options: [
      'Discuss the concern directly with the coworker',
      'File a complaint with the licensing board',
      'Tell the affected clients about the falsified notes',
    ],
    answer: 0,
    rationale:
      'The Code directs social workers to discuss concerns directly with a colleague when feasible and likely to be productive. If that does not resolve it, they take action through formal channels such as the employer or licensing board.',
    refs: [{ s: 'nasw', at: '2.10(c)–(d)' }],
  },
  {
    id: 'eth-020',
    competency: 'IA',
    topic: 'Professional values',
    stem: 'Which activity MOST directly reflects the social work value of social justice?',
    options: [
      "Advocating for policies that expand affordable housing",
      "Keeping accurate, timely records of services provided to clients",
      "Attending workshops to strengthen clinical assessment skills",
      "Protecting the confidentiality of client information at all times",
    ],
    answer: 0,
    rationale:
      'The social justice principle calls on social workers to challenge injustice and pursue change, especially for vulnerable and oppressed people. Policy advocacy for access to resources is a direct expression of it.',
    refs: [{ s: 'nasw', at: 'Ethical Principles' }, { s: 'nasw', at: '6.04(a)' }],
  },

  // ───────────── IB. Ethical service delivery ─────────────
  {
    id: 'eth-001',
    competency: 'IB',
    topic: 'Duty to warn/protect',
    stem: 'During a session, a client angrily states that he plans to hurt his ex-partner tonight when she leaves work, and names the location. He has a history of violence toward her. What should the social worker do FIRST?',
    options: [
      "Take protective steps, such as warning the ex-partner or notifying police",
      "Explore the client's anger about the breakup and reassess the threat next session",
      "Keep the statement confidential, since the client has not consented to disclosure",
      "Help the client calm down and have him promise not to act on the threat",
    ],
    answer: 0,
    rationale:
      'A specific, credible threat against an identifiable person justifies disclosure without consent to prevent serious, foreseeable, and imminent harm, limited to what is necessary. NJ Board rules permit disclosure when a client presents a clear and present danger. NJ\'s duty-to-warn statute specifically covers clinical social work (LCSWs).',
    refs: [{ s: 'nasw', at: '1.07(c)' }, { s: 'njac', at: '13:44G-12.3(a)(4)' }, { s: 'njWarn' }],
  },
  {
    id: 'eth-002',
    competency: 'IB',
    topic: 'Dual relationships',
    stem: "A long-term client invites the social worker to her daughter's wedding and says it would mean a great deal to her. What is the BEST response?",
    options: [
      "Decline warmly and explore the meaning of the invitation in session",
      "Attend the ceremony briefly, but leave before the reception begins",
      "Accept, since attending could strengthen the therapeutic relationship",
    ],
    answer: 0,
    rationale:
      'Attending would create a dual relationship that risks blurring boundaries. Declining warmly and treating the invitation as clinical material respects the client while keeping clear, culturally sensitive boundaries.',
    refs: [{ s: 'nasw', at: '1.06(c)' }],
  },
  {
    id: 'eth-003',
    competency: 'IB',
    topic: 'Gifts',
    stem: 'At their final session, a client from a culture where gift-giving expresses respect offers the social worker a small homemade dish. What should the social worker consider FIRST?',
    options: [
      "Whether accepting any gift at all violates ethical standards of practice",
      "How to reciprocate with a gift of similar value at termination",
      "Agency policy and the cultural and clinical meaning of the gift",
    ],
    answer: 2,
    rationale:
      'The Code does not ban small gifts. It asks social workers to avoid conflicts of interest and to practice with cultural awareness. The social worker weighs agency policy, value, cultural meaning, and clinical impact, then documents the decision.',
    refs: [{ s: 'nasw', at: '1.06(a)' }, { s: 'nasw', at: '1.05(a)' }],
  },
  {
    id: 'eth-006',
    competency: 'IB',
    topic: 'Documentation',
    stem: 'A social worker discovers that a case note written last week contains an incorrect medication name. How should the error be corrected?',
    options: [
      "Add a dated, signed addendum and leave the original entry intact",
      "Delete the incorrect note and write a corrected replacement note",
      "Leave the note unchanged, since it was already signed and filed",
      "Ask a colleague to correct the note under the colleague's own login",
    ],
    answer: 0,
    rationale:
      'Records must be accurate and reflect the services provided. Corrections are made as dated addenda and never by erasing entries. Deleting or backdating can be treated as falsification.',
    refs: [{ s: 'nasw', at: '3.04(a)' }, { s: 'nasw', at: '4.04' }],
  },
  {
    id: 'eth-007',
    competency: 'IB',
    topic: 'Technology and social media',
    stem: 'A current client sends the social worker a friend request on a personal social media account. What should the social worker do?',
    options: [
      "Decline and discuss boundaries and the social media policy with the client",
      "Accept the request but avoid discussing anything related to therapy online",
      "Ignore the request and wait to see whether the client brings it up",
      "Accept only after the client finishes treatment and services have ended",
    ],
    answer: 0,
    rationale:
      'Social workers should not accept requests from clients on personal social media, to prevent boundary confusion and dual relationships. Discussing the request openly, ideally referring to the social media policy covered at intake, gives the client clarity.',
    refs: [{ s: 'nasw', at: '1.06(h)' }, { s: 'nasw', at: '1.06(e)' }],
  },
  {
    id: 'eth-008',
    competency: 'IB',
    topic: 'Self-determination',
    stem: 'An 82-year-old client with intact decision-making capacity insists on continuing to live alone even though her adult children want her in assisted living. What should the social worker do?',
    options: [
      "Respect her decision and help her reduce risks at home",
      "Support the children's plan, since they know her needs best",
      "Hold off on services until the family reaches an agreement",
      "Refer her to adult protective services because of her age",
    ],
    answer: 0,
    rationale:
      'Clients with capacity have the right to self-determination, which may be limited only when their actions pose serious, foreseeable, and imminent risk. Age alone does not justify overriding a capable client.',
    refs: [{ s: 'nasw', at: '1.02' }],
  },
  {
    id: 'eth-009',
    competency: 'IB',
    topic: 'Subpoenas and privilege',
    stem: "A social worker receives a subpoena from an attorney requesting a client's complete records. The client has not given consent. What should the social worker do FIRST?",
    options: [
      "Notify the client and get legal advice about asserting privilege",
      "Send the complete records, since a subpoena is a legal document",
      "Disregard the subpoena, since therapy records are always privileged",
      "Send a treatment summary instead of the complete records",
    ],
    answer: 0,
    rationale:
      "An attorney's subpoena is not a judge's order. NJ Board rules allow disclosure without consent under a court order, not an attorney's subpoena. The social worker responds without ignoring it, protects confidentiality, and asks that any disclosure be withdrawn or limited.",
    refs: [{ s: 'njac', at: '13:44G-12.3(a)(3)' }, { s: 'nasw', at: '1.07(j)' }],
  },
  {
    id: 'eth-012',
    competency: 'IB',
    topic: 'Mandated reporting (NJ)',
    stem: 'An 8-year-old tells a school social worker that the red welts on his legs came from his father hitting him with a belt. What should the social worker do?',
    options: [
      "Report the disclosure to DCP&P immediately",
      "Ask the child more questions to confirm the abuse before reporting",
      "Contact the father to hear his explanation of the child's injuries",
      "Consult with the school principal before deciding whether to report",
    ],
    answer: 0,
    rationale:
      'NJ law requires any person with reasonable cause to believe a child has been abused to report immediately to DCP&P. Proof is not required, and investigating or contacting the alleged abuser can put the child at risk. Knowingly failing to report is a disorderly persons offense.',
    refs: [{ s: 'njAbuse' }],
  },
  {
    id: 'int-006',
    competency: 'IB',
    topic: 'Termination',
    stem: 'An agency program will close in one month because of lost funding. What should the social worker do?',
    options: [
      "Notify clients promptly and arrange referrals and transfers",
      "Continue services as usual and inform clients in the final week",
      "Close all cases now so clients are not disrupted later",
      "Refer all clients to one nearby agency without discussing options",
    ],
    answer: 0,
    rationale:
      "Social workers notify clients promptly when termination is anticipated, attend to their reactions, and arrange transfers or referrals based on each client's needs. This avoids abandoning clients.",
    refs: [{ s: 'nasw', at: '1.17(b), 1.17(e)' }, { s: 'nasw', at: '1.15' }],
  },
  {
    id: 'eth-021',
    competency: 'IB',
    topic: 'Responsible billing',
    stem: 'A supervisor asks a social worker to bill for a group session for a client who did not attend, saying, "Everyone does it and the agency needs the revenue." What should the social worker do?',
    options: [
      "Decline, and explain that billing must reflect services provided",
      "Bill for the session this once to help the agency meet its budget",
      "Bill for half the session as a compromise with the supervisor",
      "Bill for it, but document that the client did not attend",
    ],
    answer: 0,
    rationale:
      'Billing must accurately reflect the nature and extent of services provided and who provided them. Billing for services not rendered is fraud and violates the prohibition on dishonesty.',
    refs: [{ s: 'nasw', at: '3.05' }, { s: 'nasw', at: '4.04' }],
  },
  {
    id: 'eth-022',
    competency: 'IB',
    topic: 'Diagnosis and reimbursement',
    stem: "A client's insurance covers treatment only for certain diagnoses. The client asks the social worker to record a more serious diagnosis than the assessment supports so sessions will be covered. What is the BEST response?",
    options: [
      "Record the accurate diagnosis and discuss other payment options",
      "Record the requested diagnosis, since it helps the client get care",
      "Leave the diagnosis blank so the insurer cannot deny the claim",
      "Record the requested diagnosis and correct it once coverage starts",
    ],
    answer: 0,
    rationale:
      "Misrepresenting a diagnosis to obtain payment is fraudulent and can follow the client in their records. The social worker documents accurately and helps the client find other ways to afford services.",
    refs: [{ s: 'nasw', at: '4.04' }, { s: 'nasw', at: '3.05' }, { s: 'nasw', at: '1.13(a)' }],
  },
  {
    id: 'eth-023',
    competency: 'IB',
    topic: 'Self-disclosure',
    stem: "In the middle of a session about her marriage, a client asks the social worker, 'Have you ever been divorced?' What should the social worker do FIRST?",
    options: [
      "Explore what prompted the question and what it means to her",
      "Answer honestly and share details to strengthen rapport",
      "Explain that personal questions are outside the rules of therapy",
    ],
    answer: 0,
    rationale:
      "Self-disclosure should serve the client's needs, not the social worker's. Exploring the meaning of the question keeps the focus on the client, and any disclosure should be brief and purposeful.",
    refs: [{ s: 'hepworth' }, { s: 'nasw', at: '1.06(c)' }],
  },
  {
    id: 'eth-024',
    competency: 'IB',
    topic: 'Former clients',
    stem: 'A social worker runs into a former client two years after services ended. The former client asks the social worker out on a date. What should the social worker do?',
    options: [
      "Decline, because relationships with former clients risk exploitation",
      "Accept, since more than two years have passed since services ended",
      "Accept only if the former client signs an agreement that it is voluntary",
    ],
    answer: 0,
    rationale:
      'The Code says social workers should not engage in sexual activities or contact with former clients because of the potential for harm. A social worker who crosses this line bears the full burden of showing there was no exploitation.',
    refs: [{ s: 'nasw', at: '1.09(c)' }],
  },
  {
    id: 'eth-025',
    competency: 'IB',
    topic: 'Bartering',
    stem: "A client who cannot afford the fee offers to paint the social worker's office in exchange for counseling sessions. What is the BEST response?",
    options: [
      "Decline, and explore a sliding fee or a low-cost referral",
      "Accept, since the exchange benefits both the client and the agency",
      "Accept, as long as the client signs a written agreement first",
      "Pause services until the client is able to pay the full fee",
    ],
    answer: 0,
    rationale:
      'The Code says social workers should avoid accepting goods or services as payment, except in limited circumstances. Bartering can create conflicts of interest and dual relationships. Adjusting fees or referring the client protects access to services.',
    refs: [{ s: 'nasw', at: '1.13(a)–(b)' }],
  },
  {
    id: 'eth-026',
    competency: 'IB',
    topic: 'Documentation quality',
    stem: 'Which progress note entry is MOST appropriate?',
    options: [
      "Client arrived 20 minutes late, smelled of alcohol, and said, 'I had one beer.'",
      "Client was manipulative throughout the session and clearly lying about his drinking.",
      "Client is a typical alcoholic in denial and is not motivated to change his behavior.",
      "Client seemed to be in a bad mood again today and did not want to engage.",
    ],
    answer: 0,
    rationale:
      'Good documentation is accurate, objective, and specific. It records observable behavior and the client\'s own words, and avoids labels and unsupported judgments.',
    refs: [{ s: 'nasw', at: '3.04(a)–(c)' }],
  },
  {
    id: 'eth-027',
    competency: 'IB',
    topic: 'Client access to records',
    stem: 'A client asks to see her case record. What should the social worker do?',
    options: [
      "Provide reasonable access and help her understand the record",
      "Refuse, since the case record belongs to the agency and not to her",
      "Give her a written summary instead of showing her the actual record",
    ],
    answer: 0,
    rationale:
      "Clients should have reasonable access to their records, with help interpreting them. Access may be limited only in exceptional circumstances when there is compelling evidence it would cause serious harm, and the reason must be documented. The social worker also protects others' confidential information that appears in the record.",
    refs: [{ s: 'nasw', at: '1.08(a), 1.08(c)' }],
  },
  {
    id: 'eth-028',
    competency: 'IB',
    topic: 'Elder financial exploitation',
    stem: "A home-care social worker finds that an 80-year-old client has had no food in the house for days. The client says her nephew 'handles all her money' and she has not seen her bank statements in months. What should the social worker do?",
    options: [
      "Report suspected exploitation to Adult Protective Services",
      "Confront the nephew and ask him to account for the money",
      "Wait to act until the client herself complains about her nephew",
      "Hold a family meeting before taking any other action",
    ],
    answer: 0,
    rationale:
      'Signs of financial exploitation and neglect of a vulnerable adult warrant a report to Adult Protective Services. In NJ, APS is operated by designated agencies in each county. Confronting the suspected exploiter can increase risk to the client.',
    refs: [{ s: 'aswb', at: 'Outline IB — mandatory reporting' }, { s: 'nasw', at: '1.07(c)' }],
  },
  {
    id: 'eth-029',
    competency: 'IB',
    topic: 'Advance directives',
    stem: 'A hospital social worker meets a newly admitted adult patient with a serious illness. Under federal law, what must hospitals that participate in Medicare and Medicaid do regarding advance directives?',
    options: [
      "Inform adult patients of their right to make advance directives",
      "Require every adult patient to complete an advance directive at admission",
      "Have the attending physician complete an advance directive for each patient",
    ],
    answer: 0,
    rationale:
      'The Patient Self-Determination Act requires participating facilities to inform adult patients of their right to accept or refuse treatment and to execute advance directives. Completing one is voluntary.',
    refs: [{ s: 'psda' }, { s: 'nasw', at: '1.02' }],
  },
  {
    id: 'eth-030',
    competency: 'IB',
    topic: 'Death and dying',
    stem: 'A 70-year-old dialysis patient tells the social worker he wants to stop dialysis because he is "tired of living this way." What should the social worker do FIRST?',
    options: [
      "Explore his reasons and assess his capacity and any depression",
      "Tell him that stopping dialysis would be the same as suicide",
      "Notify his family right away so they can help him reconsider his decision",
      "Refer him to hospice right away to support his decision",
    ],
    answer: 0,
    rationale:
      'Patients with capacity may refuse life-sustaining treatment. The social worker first explores the decision, assesses capacity and treatable depression, and makes sure the choice is informed before supporting it.',
    refs: [{ s: 'nasw', at: '1.02' }, { s: 'nasw', at: '1.14' }],
  },
  {
    id: 'eth-031',
    competency: 'IB',
    topic: 'Ethics in supervision',
    stem: "A supervisor in a small agency is asked by a supervisee to also be her personal therapist because 'you already know me so well.' What should the supervisor do?",
    options: [
      "Decline, explain the dual-relationship concern, and offer referrals",
      "Agree, since the supervisor is already qualified to provide therapy",
      "Agree, but only if therapy sessions take place outside of work hours",
      "Agree, but transfer her supervision to another supervisor at the agency",
    ],
    answer: 0,
    rationale:
      'Supervisors must avoid dual or multiple relationships with supervisees that risk exploitation or harm, and must maintain clear boundaries. Referring the supervisee elsewhere protects both relationships.',
    refs: [{ s: 'nasw', at: '3.01(b)–(c)' }, { s: 'naswAswbSup' }],
  },
  {
    id: 'eth-032',
    competency: 'IB',
    topic: 'Telehealth',
    stem: 'A social worker provides services by video. What should the social worker do at the start of each session?',
    options: [
      "Verify the client's identity and current location",
      'Ask the client to turn off their camera to protect privacy',
      'Record the session for the client file without asking',
    ],
    answer: 0,
    rationale:
      "Knowing the client's identity and location is necessary to obtain emergency help if needed and to confirm which jurisdiction's laws apply. Recording requires informed consent.",
    refs: [{ s: 'nasw', at: '1.03(f), 1.03(h)' }, { s: 'naswTech' }, { s: 'njac', at: '13:44G-15' }],
  },
  {
    id: 'eth-033',
    competency: 'IB',
    topic: 'Electronic communication security',
    stem: 'A client wants to send the social worker detailed trauma history through the social worker\'s personal email account. What is the BEST response?',
    options: [
      "Direct the client to the agency's secure, encrypted platform",
      "Accept the email, since the client chose that method of contact",
      "Ask the client to send it by text message to the work phone instead",
    ],
    answer: 0,
    rationale:
      'Social workers use safeguards such as encryption and secure platforms for electronic communication, and avoid mixing personal accounts with professional work.',
    refs: [{ s: 'nasw', at: '1.07(m)' }, { s: 'nasw', at: '1.06(e)' }, { s: 'naswTech' }],
  },
  {
    id: 'eth-034',
    competency: 'IB',
    topic: 'Searching clients online',
    stem: 'A social worker is curious about a new client and considers searching for her on social media before their next session. What should the social worker do?',
    options: [
      "Don't search without a compelling professional reason and consent",
      "Search freely, since information posted publicly is fair to review",
      "Search, but keep whatever is found private from the client",
      "Search only professional networking sites, not personal social media",
    ],
    answer: 0,
    rationale:
      'Social workers should avoid electronic searches for client information unless there is a compelling professional reason, and should obtain consent except when protecting from serious, imminent harm.',
    refs: [{ s: 'nasw', at: '1.03(i)' }, { s: 'nasw', at: '1.07(q)' }],
  },
  {
    id: 'eth-035',
    competency: 'IB',
    topic: 'Termination (goals met)',
    stem: "A client has met all treatment goals, but says she wants to keep coming to sessions because she 'just likes talking' to the social worker. What should the social worker do?",
    options: [
      "Discuss termination, review progress, and plan to maintain gains",
      "Continue services indefinitely, since the client finds them helpful",
      "End services at the next session so she does not become dependent",
    ],
    answer: 0,
    rationale:
      "Services should end when they are no longer required or no longer serve the client's needs. Planned termination reviews gains and prepares the client, while abrupt endings risk abandonment.",
    refs: [{ s: 'nasw', at: '1.17(a)' }],
  },
  {
    id: 'eth-036',
    competency: 'IB',
    topic: 'Termination for nonpayment',
    stem: 'A private-practice client has stopped paying her bill. Under what conditions may the social worker end services?',
    options: [
      "If arrangements were clear, there is no danger, and consequences were discussed",
      "At any time without notice, since unpaid fees end the obligation to provide services",
      "Only after the unpaid balance has been sent to a collection agency for recovery",
      "Never, because ending services for nonpayment is always considered unethical",
    ],
    answer: 0,
    rationale:
      'Fee-for-service clients may be terminated for unpaid balances only if the financial arrangements were clear, the client poses no imminent danger, and the clinical and other consequences have been addressed and discussed.',
    refs: [{ s: 'nasw', at: '1.17(c)' }],
  },
  {
    id: 'eth-037',
    competency: 'IB',
    topic: 'Leaving an agency',
    stem: 'A social worker is leaving her agency for a new job. What is her obligation to current clients?',
    options: [
      "Inform clients of their options for continuing services",
      "Invite clients to follow her to her new private practice for continuity",
      "Leave without telling clients, to avoid upsetting them before she goes",
      "Transfer all clients to her replacement without discussing other options",
    ],
    answer: 0,
    rationale:
      'Social workers leaving an employment setting inform clients of their options for continuing services and the benefits and risks of each. Soliciting agency clients for private practice may also violate employer commitments.',
    refs: [{ s: 'nasw', at: '1.17(f)' }, { s: 'nasw', at: '3.09(a)' }],
  },
  {
    id: 'eth-038',
    competency: 'IB',
    topic: 'Impact of government policy',
    stem: "A state budget change will reduce Medicaid-funded home care hours for many of an agency's clients. What is the social worker's BEST course of action?",
    options: [
      "Inform clients, help them plan, and advocate for policy change",
      "Wait for clients to notice the change and then help them adjust",
      "Explain to clients that policy changes are outside social work's role",
    ],
    answer: 0,
    rationale:
      'Social workers help clients navigate policy changes that affect services and also engage in social and political action to expand access to resources.',
    refs: [{ s: 'nasw', at: '6.04(a)' }, { s: 'nasw', at: '1.01' }],
  },
  {
    id: 'eth-039',
    competency: 'IB',
    topic: 'Confidentiality in groups',
    stem: 'At the first meeting of a support group, what should the social worker tell members about confidentiality?',
    options: [
      "Members are asked to keep confidentiality, but it cannot be guaranteed",
      "Everything shared in the group is legally guaranteed to remain private",
      "Confidentiality rules do not apply in a group, so members should share carefully",
    ],
    answer: 0,
    rationale:
      'In group work, the social worker seeks agreement among members to respect confidentiality, and informs them that the social worker cannot guarantee all participants will honor it.',
    refs: [{ s: 'nasw', at: '1.07(f)' }],
  },
  {
    id: 'eth-040',
    competency: 'IB',
    topic: 'Family confidentiality waiver (NJ)',
    stem: "A New Jersey social worker is seeing a family: two parents and their 15- and 12-year-old children. The parents want the social worker to share session information with the older child's school counselor. Under NJ Board rules, whose written waiver is required?",
    options: [
      "Each family member who is 14 or older, including the 15-year-old",
      "Only the parents, since they are the legal guardians of both children",
      "Every family member, including the 12-year-old, must sign",
      "No waiver, since school personnel are part of the care team",
    ],
    answer: 0,
    rationale:
      'N.J.A.C. 13:44G-12.3(a)(7) provides that when more than one family member receives services, each member aged 14 or older must agree to a written waiver. Without it, information from any family member may not be disclosed.',
    refs: [{ s: 'njac', at: '13:44G-12.3(a)(7)' }],
  },
  {
    id: 'eth-041',
    competency: 'IB',
    topic: 'Substance use records (42 CFR Part 2)',
    stem: "A client's employer calls a substance use disorder treatment program to ask whether the client is attending. The client has not signed a consent. What should the social worker say?",
    options: [
      'Confirm attendance but share no other details',
      'Neither confirm nor deny that the person is a client',
      'Share attendance records, since the employer has a legitimate interest',
    ],
    answer: 1,
    rationale:
      'Federal confidentiality rules for SUD programs prohibit disclosing, without written consent, even that a person is a patient. Acknowledging attendance would itself be a disclosure.',
    refs: [{ s: 'cfr42part2', at: '§ 2.13' }, { s: 'nasw', at: '1.07(b)' }],
  },

  // ───────────── IC. Diversity and social justice ─────────────
  {
    id: 'int-012',
    competency: 'IC',
    topic: 'Language access and interpreters',
    stem: 'A client with limited English proficiency arrives with her 10-year-old son to interpret for a session about family stressors. What should the social worker do?',
    options: [
      'Proceed with the son interpreting, since the client chose him',
      'Arrange for a qualified professional interpreter',
      'Conduct the session in English as slowly as possible',
    ],
    answer: 1,
    rationale:
      'Using a child to interpret puts him in an inappropriate role, compromises confidentiality, and risks inaccurate interpretation. The Code calls for qualified interpreters when needed, and the social worker speaks directly to the client.',
    refs: [{ s: 'nasw', at: '1.03(b)' }, { s: 'naswCulture' }],
  },
  {
    id: 'eth-042',
    competency: 'IC',
    topic: 'Anti-oppressive practice',
    stem: "An agency's intake form only allows clients to check 'male' or 'female' and lists 'husband/wife' as the only partner options. What is the social worker's BEST action?",
    options: [
      "Advocate within the agency to revise the forms to be inclusive",
      "Tell clients to cross out any options that do not describe them",
      "Complete the form for clients based on the social worker's observations",
    ],
    answer: 0,
    rationale:
      'Anti-oppressive practice addresses structural barriers, not just individual interactions. Social workers work to improve agency policies and to provide culturally informed services that do not marginalize clients.',
    refs: [{ s: 'nasw', at: '1.05(b)' }, { s: 'nasw', at: '3.09(b)' }],
  },
  {
    id: 'eth-043',
    competency: 'IC',
    topic: 'Microaggressions',
    stem: "A social worker tells a U.S.-born Asian American client, 'Your English is really good.' The client becomes quiet and guarded. What should the social worker do?",
    options: [
      "Acknowledge the comment may have hurt, apologize, and invite a response",
      "Move on, since the comment was intended as a compliment to the client",
      "Explain the positive intent behind the comment so the client understands",
    ],
    answer: 0,
    rationale:
      'The comment is a microaggression: it implies the client is foreign. Acknowledging the impact, taking responsibility, and inviting dialogue repairs the relationship. Defending intent does not.',
    refs: [{ s: 'sue' }, { s: 'nasw', at: '1.05(c)' }],
  },
  {
    id: 'eth-044',
    competency: 'IC',
    topic: 'Implicit bias',
    stem: 'A social worker realizes she consistently rates Black adolescent clients as more "threatening" than white clients with similar behaviors. What should she do FIRST?',
    options: [
      "Engage in critical self-reflection and bring the pattern to supervision",
      "Stop accepting Black adolescents on her caseload to avoid causing harm",
      "Assume her ratings are objective, since they are based on observed behavior",
    ],
    answer: 0,
    rationale:
      "Cultural humility requires critical self-reflection about one's own biases and seeking consultation to correct them. Avoiding clients does not address the bias.",
    refs: [{ s: 'nasw', at: '1.05(c)' }, { s: 'naswCulture' }],
  },
  {
    id: 'eth-045',
    competency: 'IC',
    topic: 'Neurodiversity and accessibility',
    stem: 'An autistic adult client says bright lights and verbal-only conversations make sessions exhausting, and he communicates best in writing. What is the BEST response?',
    options: [
      "Adjust the lighting and add written communication to sessions",
      "Encourage him to practice tolerating the office environment over time",
      "Refer him to a specialist, since the agency cannot accommodate him",
    ],
    answer: 0,
    rationale:
      'Accessibility includes adapting communication and the environment to neurodivergent clients. Reasonable accommodations respect the client and support engagement.',
    refs: [{ s: 'ada' }, { s: 'aswb', at: 'Outline IC — accessibility' }],
  },
  {
    id: 'eth-046',
    competency: 'IC',
    topic: 'Human trafficking indicators',
    stem: 'At a clinic, a young woman is accompanied by an older man who answers every question for her, holds her ID, and refuses to leave the room. What should the social worker do?',
    options: [
      'Ask the woman in front of the man whether she is being trafficked',
      'Find a way to speak with the woman privately to assess her safety',
      'Call the police immediately without speaking to her',
      'Proceed with the appointment, since there is no proof of a problem',
    ],
    answer: 1,
    rationale:
      'Control of documents, being unable to speak for oneself, and constant monitoring are indicators of trafficking. Screening must happen privately and safely, because asking in front of a possible trafficker can increase danger.',
    refs: [{ s: 'aswb', at: 'Outline IC — exploitation' }],
  },
  {
    id: 'eth-047',
    competency: 'IC',
    topic: 'Missing and Murdered Indigenous Women',
    stem: "An Indigenous client is distraught because her cousin has been missing for two weeks and she feels police are not taking it seriously. What is the social worker's BEST response?",
    options: [
      "Validate her concern and connect her with tribal and advocacy resources",
      "Reassure her that police handle all missing persons cases the same way",
      "Encourage her to wait for the police investigation before taking action",
      "Help her file a complaint against the police department right away",
    ],
    answer: 0,
    rationale:
      'Missing and Murdered Indigenous Women (MMIW) reflects documented systemic neglect. Validating the client, naming the context, and connecting her with culturally grounded advocacy is an anti-oppressive response.',
    refs: [{ s: 'aswb', at: 'Outline IC — MMIW' }, { s: 'nasw', at: '1.05(b)' }],
  },
  {
    id: 'eth-048',
    competency: 'IC',
    topic: 'Immigration status',
    stem: 'An undocumented mother tells a social worker she is afraid to seek food assistance for her U.S.-citizen children because she fears deportation. What should the social worker do FIRST?',
    options: [
      "Explain confidentiality and her children's possible eligibility",
      "Report the mother's immigration status to the appropriate federal authorities",
      "Advise her that undocumented families cannot receive public assistance",
      "Suggest she wait until her immigration status is resolved to apply",
    ],
    answer: 0,
    rationale:
      'Fear related to immigration status is a real barrier to services. Social workers protect confidentiality, provide accurate information about eligibility (children may qualify even when parents do not), and connect families to legal resources.',
    refs: [{ s: 'aswb', at: 'Outline IC — immigration' }, { s: 'nasw', at: '1.07(a)' }],
  },
  {
    id: 'eth-049',
    competency: 'IC',
    topic: 'Acculturation',
    stem: 'A refugee family reports constant conflict because the teenage children have quickly adopted American customs and English, while the parents hold to their home culture. Which concept BEST describes this?',
    options: ['Assimilation', 'Acculturation gap', 'Enculturation'],
    answer: 1,
    rationale:
      'An acculturation gap (dissonant acculturation) occurs when children acculturate faster than their parents, which often reverses family roles and creates intergenerational conflict.',
    refs: [{ s: 'portes' }],
  },
  {
    id: 'eth-050',
    competency: 'IC',
    topic: 'Restorative practices',
    stem: 'A school wants to respond to a fight between two students without suspension. Which approach reflects restorative practice?',
    options: [
      "A facilitated meeting to discuss the harm and agree on repairs",
      "A mandatory anger-management video for both of the students",
      "Separating the students for the rest of the school year",
      "A written apology from each student placed in their school file",
    ],
    answer: 0,
    rationale:
      'Restorative practices focus on repairing harm and relationships by bringing together those responsible and those affected. The goal is accountability rather than punishment alone.',
    refs: [{ s: 'zehr' }],
  },
  {
    id: 'eth-051',
    competency: 'IC',
    topic: 'Intersectionality',
    stem: 'Which statement BEST describes intersectionality?',
    options: [
      "Overlapping identities combine to create unique experiences of oppression",
      "Each identity, such as race or gender, affects a person independently",
      "People from the same racial group share the same experiences of oppression",
    ],
    answer: 0,
    rationale:
      'Intersectionality, a concept introduced by Kimberlé Crenshaw, holds that race, gender, class, sexuality, and other identities interact. Their combined effect cannot be understood by examining each one alone.',
    refs: [{ s: 'crenshaw' }, { s: 'nasw', at: '1.05(d)' }],
  },
  {
    id: 'eth-052',
    competency: 'IC',
    topic: 'Internalized oppression',
    stem: "A client from a marginalized racial group says, 'People like me just aren't smart enough for good jobs.' Which concept does this MOST reflect?",
    options: ['Internalized oppression', 'Learned helplessness', 'Cognitive dissonance'],
    answer: 0,
    rationale:
      "Internalized oppression happens when members of an oppressed group accept society's negative messages about their group as true about themselves.",
    refs: [{ s: 'aswb', at: 'Outline IC — internalized inferiority' }, { s: 'sue' }],
  },
  {
    id: 'eth-053',
    competency: 'IC',
    topic: 'Environmental justice',
    stem: 'A low-income neighborhood of color located next to a waste-processing plant has childhood asthma rates far above the city average. Which concept BEST describes this situation?',
    options: ['Environmental injustice', 'Gentrification', 'Social exclusion'],
    answer: 0,
    rationale:
      'Environmental injustice refers to the disproportionate burden of environmental hazards on low-income communities and communities of color.',
    refs: [{ s: 'aswb', at: 'Outline IC — environmental justice' }],
  },
  {
    id: 'eth-054',
    competency: 'IC',
    topic: 'Power differential',
    stem: 'A child welfare social worker begins working with a family who is openly distrustful. What is the BEST way to address the power differential?',
    options: [
      "Acknowledge her authority openly and involve the family in decisions",
      "Avoid mentioning her authority so the family feels more comfortable",
      "Remind the family that cooperation is required to keep their children",
    ],
    answer: 0,
    rationale:
      'Naming the power difference honestly and maximizing the family\'s voice in decisions builds trust and reflects anti-oppressive practice. Hiding authority or leading with threats undermines engagement.',
    refs: [{ s: 'aswb', at: 'Outline IC — power differential' }, { s: 'nasw', at: '1.03(d)' }],
  },
];
