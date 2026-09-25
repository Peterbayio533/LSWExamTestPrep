# NJ LSW Prep

An iPhone app (Expo / React Native) for preparing for the **ASWB Masters exam**, which is required for the
**New Jersey Licensed Social Worker (LSW)** license. Content follows the **2026 blueprint (effective Aug 3, 2026)**:
3 content areas, 122 questions (110 scored), a 4-hour limit, and a mix of 3- and 4-option items.

## Features

| Area | What it does |
|---|---|
| **Test prep** | Original vignette questions with rationales, tagged to Values & Ethics (~35%), Assessment & Planning (~33%), and Intervention & Practice (~32%). Includes a study guide with exam tips and NJ-specific practice notes. |
| **Practice modes** | Daily 10 (spaced repetition), practice by domain, Review Missed, and a timed Mock Exam weighted like the real blueprint (2 min per question) |
| **Gamification** | XP, 10 career-themed levels, daily goal bonus, streaks, and 13 badges |
| **Progress** | Blueprint-weighted readiness score, per-domain mastery and accuracy, 14-day activity chart, and mock exam history |
| **Reminders** | Daily study reminder at a time you choose, an 8 PM "streak saver" on days you haven't studied, and exam countdown alerts (60/30/14/7/3/1/0 days) |

All data is stored on the device (AsyncStorage). No account or server is needed.

## Run it on your iPhone (from Windows, no Mac needed)

1. Install **Node.js LTS** from https://nodejs.org
2. Install **Expo Go** on your iPhone from the App Store.
3. In this folder:
   ```bash
   npm install
   npx expo install --fix
   npx expo start
   ```
4. Scan the QR code with the iPhone Camera app. The app opens in Expo Go.

> If Expo Go says the project's SDK is unsupported, upgrade to the SDK version it supports:
> `npx expo install expo@latest` then `npx expo install --fix`.

## Publish to the App Store (still no Mac needed)

1. Join the Apple Developer Program ($99/yr).
2. Change `ios.bundleIdentifier` in `app.json` to your own identifier, e.g. `com.yourname.njlswprep`.
3. Build and submit in the cloud:
   ```bash
   npm install -g eas-cli
   eas login
   eas build -p ios
   eas submit -p ios
   ```
4. Add an app icon (`icon` in `app.json`, 1024×1024 PNG) before submitting.

## Content and sources

The bank has **165 original questions** (56 Values & Ethics, 54 Assessment & Planning, 55 Intervention & Practice).
Every question is tagged to a competency in the **official ASWB 2026 Masters content outline** (IA–IIID) and cites
the authority behind its answer: the NASW Code of Ethics (by section), NJ law (N.J.A.C. 13:44G, N.J.S.A. 9:6-8.10,
N.J.S.A. 2A:62A-16), federal law (HIPAA, 42 C.F.R. Part 2, ICWA, ASFA, and others), DSM-5-TR, or texts from ASWB's
own reference list. The app shows these citations after each answer, with links to the source where one exists.

- **Questions:** `src/data/questions/{ethics,assessment,intervention}.ts`. Each item has `id`, `competency`,
  `topic`, `stem`, `options` (3 or 4), `answer` (the index), `rationale`, and `refs`. Keep ids stable once
  published, since progress is stored by id. Options are shuffled when shown, so never use "all of the above."
  Keep the correct option from being the longest, because test-takers learn to spot that.
- **Sources:** `src/data/sources.ts` (citation registry) and `src/data/outline.ts` (ASWB competencies).
- **Study guide:** `src/data/studyGuide.ts`
- **Blueprint and weights:** `src/data/exam.ts`. Bump `contentVersion` when you update content.

Do not copy questions from commercial prep products, which are copyrighted. Write original items against the
ASWB outline and cite primary sources.

## Project layout

```
app/                  screens (expo-router)
  (tabs)/index.tsx    Home dashboard
  (tabs)/study.tsx    Study guide
  (tabs)/progress.tsx Readiness, stats, badges
  (tabs)/settings.tsx Exam date, goal, reminders
  quiz.tsx            Quiz / mock exam runner + results
src/data/             exam blueprint, questions, study guide
src/lib/              quiz selection, stats, gamification, notifications
src/state/            persisted progress store
```

*Not affiliated with ASWB or the NJ State Board of Social Work Examiners.*
