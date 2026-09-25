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

## Adding or updating content

- **Questions:** `src/data/questions.ts`. Add objects with `domain`, `topic`, `stem`, `options` (3 or 4), `answer` (the index), and `rationale`. Options are shuffled when shown, so don't use "all of the above."
- **Study guide:** `src/data/studyGuide.ts`
- **Blueprint and weights:** `src/data/exam.ts`. Bump `contentVersion` when you update content.

For a larger question bank (the goal should be 300 or more), write items against the official **ASWB Exam Guidebook**
content outline. Do not copy questions from commercial prep products.

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
