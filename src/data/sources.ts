// Registry of citable sources. Questions and study topics reference these by id,
// optionally with a locator (section, chapter). Primary sources (ASWB, NASW, NJ law,
// federal law, DSM) are preferred; foundational texts are cited for theory/models.

export interface Source {
  /** Short label shown in the app, e.g. "NASW Code of Ethics" */
  short: string;
  /** Full citation */
  full: string;
  url?: string;
  kind: 'exam' | 'ethics' | 'nj-law' | 'federal' | 'clinical' | 'text';
}

export const SOURCES = {
  // Exam blueprint
  aswb: {
    short: 'ASWB Exam Guidebook (2026)',
    full: 'Association of Social Work Boards. (2026). ASWB Examination Guidebook — Masters exam content outline (effective Aug. 3, 2026).',
    url: 'https://www.aswb.org/exam/getting-ready-for-the-exam/aswb-examination-guidebook/',
    kind: 'exam',
  },

  // Ethics standards
  nasw: {
    short: 'NASW Code of Ethics',
    full: 'National Association of Social Workers. (2021). Code of Ethics of the National Association of Social Workers.',
    url: 'https://www.socialworkers.org/About/Ethics/Code-of-Ethics/Code-of-Ethics-English',
    kind: 'ethics',
  },
  naswTech: {
    short: 'NASW/ASWB/CSWE/CSWA Technology Standards',
    full: 'NASW, ASWB, CSWE, & CSWA. (2017). Standards for Technology in Social Work Practice.',
    url: 'https://www.socialworkers.org/Practice/NASW-Practice-Standards-Guidelines/Standards-for-Technology-in-Social-Work-Practice',
    kind: 'ethics',
  },
  naswCulture: {
    short: 'NASW Cultural Competence Standards',
    full: 'National Association of Social Workers. (2015). Standards and Indicators for Cultural Competence in Social Work Practice.',
    kind: 'ethics',
  },

  // New Jersey law
  njac: {
    short: 'N.J.A.C. 13:44G (NJ Board rules)',
    full: 'N.J. Admin. Code tit. 13, ch. 44G — State Board of Social Work Examiners.',
    url: 'https://www.law.cornell.edu/regulations/new-jersey/title-13/chapter-44G',
    kind: 'nj-law',
  },
  njAbuse: {
    short: 'N.J.S.A. 9:6-8.10',
    full: 'N.J. Stat. Ann. § 9:6-8.10 — Report of child abuse.',
    url: 'https://law.justia.com/codes/new-jersey/title-9/section-9-6-8-10/',
    kind: 'nj-law',
  },
  njWarn: {
    short: 'N.J.S.A. 2A:62A-16',
    full: 'N.J. Stat. Ann. § 2A:62A-16 — Duty to warn and protect (licensed psychology, psychiatry, medicine, nursing, clinical social work, marriage and family therapy).',
    url: 'https://law.justia.com/codes/new-jersey/title-2a/section-2a-62a-16/',
    kind: 'nj-law',
  },

  // Federal law
  hipaa: {
    short: 'HIPAA Privacy Rule',
    full: 'Health Insurance Portability and Accountability Act Privacy Rule, 45 C.F.R. Parts 160 and 164.',
    url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/index.html',
    kind: 'federal',
  },
  cfr42part2: {
    short: '42 C.F.R. Part 2',
    full: 'Confidentiality of Substance Use Disorder Patient Records, 42 C.F.R. Part 2.',
    url: 'https://www.ecfr.gov/current/title-42/chapter-I/subchapter-A/part-2',
    kind: 'federal',
  },
  psda: {
    short: 'Patient Self-Determination Act',
    full: 'Patient Self-Determination Act of 1990, 42 U.S.C. § 1395cc(f).',
    kind: 'federal',
  },
  asfa: {
    short: 'Adoption and Safe Families Act',
    full: 'Adoption and Safe Families Act of 1997, Pub. L. 105-89.',
    kind: 'federal',
  },
  icwa: {
    short: 'Indian Child Welfare Act',
    full: 'Indian Child Welfare Act of 1978, 25 U.S.C. §§ 1901–1963.',
    kind: 'federal',
  },
  mckinney: {
    short: 'McKinney-Vento Act',
    full: 'McKinney-Vento Homeless Assistance Act, Education for Homeless Children and Youths, 42 U.S.C. § 11431 et seq.',
    kind: 'federal',
  },
  idea: {
    short: 'IDEA',
    full: 'Individuals with Disabilities Education Act, 20 U.S.C. § 1400 et seq.',
    kind: 'federal',
  },
  ada: {
    short: 'Americans with Disabilities Act',
    full: 'Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq.',
    kind: 'federal',
  },
  hospice: {
    short: 'Medicare hospice benefit',
    full: 'Medicare hospice certification of terminal illness, 42 C.F.R. § 418.22.',
    kind: 'federal',
  },

  // Clinical references
  dsm: {
    short: 'DSM-5-TR',
    full: 'American Psychiatric Association. (2022). Diagnostic and Statistical Manual of Mental Disorders (5th ed., text rev.).',
    kind: 'clinical',
  },
  samhsaTic: {
    short: "SAMHSA Trauma-Informed Approach",
    full: "SAMHSA. (2014). SAMHSA's Concept of Trauma and Guidance for a Trauma-Informed Approach (HHS Pub. No. SMA 14-4884).",
    kind: 'clinical',
  },
  samhsaHarm: {
    short: 'SAMHSA Harm Reduction Framework',
    full: 'SAMHSA. (2023). Harm Reduction Framework.',
    kind: 'clinical',
  },
  samhsaMoud: {
    short: 'SAMHSA TIP 63',
    full: 'SAMHSA. Treatment Improvement Protocol (TIP) 63: Medications for Opioid Use Disorder.',
    kind: 'clinical',
  },
  psychopharm: {
    short: 'Dziegielewski & Jacinto (2016)',
    full: 'Dziegielewski, S. F., & Jacinto, G. A. (2016). Social Work Practice and Psychopharmacology (3rd ed.). Springer.',
    kind: 'clinical',
  },
  phq9: {
    short: 'Kroenke et al. (2001) — PHQ-9',
    full: 'Kroenke, K., Spitzer, R. L., & Williams, J. B. W. (2001). The PHQ-9. Journal of General Internal Medicine, 16(9), 606–613.',
    kind: 'clinical',
  },

  // Foundational texts (ASWB reference list where available)
  hepworth: {
    short: 'Hepworth et al. (2023)',
    full: 'Hepworth, D. H., et al. (2023). Direct Social Work Practice: Theory and Skills (11th ed.). Cengage. [ASWB reference list]',
    kind: 'text',
  },
  reamer: {
    short: 'Reamer (2024)',
    full: 'Reamer, F. G. (2024). Social Work Values and Ethics (6th ed.). Columbia University Press. [ASWB reference list]',
    kind: 'text',
  },
  ashford: {
    short: 'Ashford, LeCroy & Rankin (2025)',
    full: 'Ashford, J. B., LeCroy, C. W., & Rankin, L. (2025). Human Behavior in the Social Environment (7th ed.). Cengage. [ASWB reference list]',
    kind: 'text',
  },
  corcoranWalsh: {
    short: 'Corcoran & Walsh (2023)',
    full: 'Corcoran, J., & Walsh, J. (2023). Clinical Assessment and Diagnosis in Social Work Practice (4th ed.). Oxford. [ASWB reference list]',
    kind: 'text',
  },
  miller: {
    short: 'Miller & Rollnick (2023)',
    full: 'Miller, W. R., & Rollnick, S. (2023). Motivational Interviewing: Helping People Change and Grow (4th ed.). Guilford. [ASWB reference list]',
    kind: 'text',
  },
  james: {
    short: 'James & Gilliland (2017)',
    full: 'James, R. K., & Gilliland, B. E. (2017). Crisis Intervention Strategies (8th ed.). Cengage. [ASWB reference list]',
    kind: 'text',
  },
  toseland: {
    short: 'Toseland & Rivas (2022)',
    full: 'Toseland, R. W., & Rivas, R. F. (2022). An Introduction to Group Work Practice (9th ed.). Pearson. [ASWB reference list]',
    kind: 'text',
  },
  yalom: {
    short: 'Yalom & Leszcz (2020)',
    full: 'Yalom, I. D., & Leszcz, M. (2020). The Theory and Practice of Group Psychotherapy (6th ed.). Basic Books.',
    kind: 'text',
  },
  rubin: {
    short: 'Rubin & Babbie (2025)',
    full: 'Rubin, A., & Babbie, E. R. (2025). Research Methods for Social Work (10th ed.). Cengage. [ASWB reference list]',
    kind: 'text',
  },
  bloom: {
    short: 'Bloom, Fischer & Orme',
    full: 'Bloom, M., Fischer, J., & Orme, J. G. Evaluating Practice: Guidelines for the Accountable Professional. Pearson.',
    kind: 'text',
  },
  prochaska: {
    short: 'Prochaska & DiClemente',
    full: 'Prochaska, J. O., & DiClemente, C. C. (1983). Stages and processes of self-change of smoking. Journal of Consulting and Clinical Psychology, 51(3), 390–395.',
    kind: 'text',
  },
  saleebey: {
    short: 'Saleebey — Strengths Perspective',
    full: 'Saleebey, D. The Strengths Perspective in Social Work Practice. Pearson.',
    kind: 'text',
  },
  kadushin: {
    short: 'Kadushin & Harkness',
    full: 'Kadushin, A., & Harkness, D. Supervision in Social Work. Columbia University Press.',
    kind: 'text',
  },
  naswAswbSup: {
    short: 'NASW/ASWB Supervision Standards (2013)',
    full: 'NASW & ASWB. (2013). Best Practice Standards in Social Work Supervision. [ASWB reference list]',
    kind: 'ethics',
  },
  familyText: {
    short: 'Collins et al. (2024)',
    full: 'Collins, D., Jordan, C., Coleman, H., Collins, T., & Cory, D. (2024). An Introduction to Family Social Work (5th ed.). Oxford. [ASWB reference list]',
    kind: 'text',
  },
  macro: {
    short: 'Netting et al. (2023)',
    full: 'Netting, F. E., Kettner, P. M., McMurtry, S. L., & Thomas, M. L. (2023). Social Work Macro Practice (7th ed.). Pearson. [ASWB reference list]',
    kind: 'text',
  },
  sue: {
    short: 'Sue, Rasheed & Rasheed (2016)',
    full: 'Sue, D. W., Rasheed, M. N., & Rasheed, J. M. (2016). Multicultural Social Work Practice (2nd ed.). Jossey-Bass. [ASWB reference list]',
    kind: 'text',
  },
  crenshaw: {
    short: 'Crenshaw (1989)',
    full: 'Crenshaw, K. (1989). Demarginalizing the intersection of race and sex. University of Chicago Legal Forum, 1989(1), 139–167.',
    kind: 'text',
  },
  kublerRoss: {
    short: 'Kübler-Ross (1969)',
    full: 'Kübler-Ross, E. (1969). On Death and Dying. Macmillan.',
    kind: 'text',
  },
  boss: {
    short: 'Boss (1999)',
    full: 'Boss, P. (1999). Ambiguous Loss: Learning to Live with Unresolved Grief. Harvard University Press.',
    kind: 'text',
  },
  linehan: {
    short: 'Linehan — DBT',
    full: 'Linehan, M. M. (2015). DBT Skills Training Manual (2nd ed.). Guilford.',
    kind: 'text',
  },
  zehr: {
    short: 'Zehr — Restorative Justice',
    full: 'Zehr, H. (2015). The Little Book of Restorative Justice (rev. ed.). Good Books.',
    kind: 'text',
  },
  braveHeart: {
    short: 'Brave Heart — Historical Trauma',
    full: 'Brave Heart, M. Y. H. (2003). The historical trauma response among Natives. Journal of Psychoactive Drugs, 35(1), 7–13.',
    kind: 'text',
  },
  cross: {
    short: 'Cross — Nigrescence Model',
    full: 'Cross, W. E., Jr. (1991). Shades of Black: Diversity in African-American Identity. Temple University Press.',
    kind: 'text',
  },
  annaFreud: {
    short: 'A. Freud (1936)',
    full: 'Freud, A. (1936). The Ego and the Mechanisms of Defence.',
    kind: 'text',
  },
  ecomap: {
    short: 'Hartman (1978) — Ecomap',
    full: 'Hartman, A. (1978). Diagrammatic assessment of family relationships. Social Casework, 59(8), 465–476.',
    kind: 'text',
  },
  expressedEmotion: {
    short: 'Leff & Vaughn (1985)',
    full: 'Leff, J., & Vaughn, C. (1985). Expressed Emotion in Families. Guilford.',
    kind: 'text',
  },
  rothman: {
    short: 'Rothman — Community Intervention',
    full: 'Rothman, J. Approaches to community intervention. In Strategies of Community Intervention. Peacock.',
    kind: 'text',
  },
  portes: {
    short: 'Portes & Rumbaut (2001)',
    full: 'Portes, A., & Rumbaut, R. G. (2001). Legacies: The Story of the Immigrant Second Generation. University of California Press.',
    kind: 'text',
  },
} satisfies Record<string, Source>;

export type SourceId = keyof typeof SOURCES;

export interface Ref {
  s: SourceId;
  /** Section, subsection, or chapter within the source */
  at?: string;
}

export function formatRef(ref: Ref): string {
  const src: Source = SOURCES[ref.s];
  if (!ref.at) return src.short;
  const sep = src.kind === 'ethics' || src.kind === 'nj-law' ? ' §' : ', ';
  return `${src.short}${sep}${ref.at}`;
}
