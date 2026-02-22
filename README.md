# skyhit — mohit kumar's portfolio

Personal portfolio and blog of **Mohit Kumar**, a Senior Software Engineer with 5+ years building digital products across React, React Native, and Next.js. Currently Staff Software Engineer at Xurrent IMR.

---

## What's inside

### Live integrations

- **Spotify Now Playing** — a widget that shows the track currently playing on Spotify in real time, with animated bars and album art. Falls back gracefully when nothing is playing.
- **GitHub Activity** — pulls the latest public commit from GitHub and surfaces it as a "Hacking on [repo]" widget so the page always reflects current work.
- **Contact form → Firebase** — the "Let's Talk" modal validates with Zod + React Hook Form and writes submissions directly to Firestore.

### Blog

10 technical posts written in MDX, covering:

- React patterns (compound components, advanced hooks, `useEffect` dependencies)
- React Native deep dives (Reanimated 2, native modules, custom theming)
- React 19 exploration
- Realtime collaboration with React
- Project retrospectives — _SubXtract_ and the rebuild into _Petal_

Code blocks use Shiki with Catppuccin Latte, including diff notation support via `@shikijs/transformers`.

### Featured project — Petal

A subscription tracker mobile app built with React Native, Expo, Zustand, Reanimated, and MMKV. Linked directly from the homepage with a CTA to the live app and a blog post telling the story behind it.

### Work timeline

Three roles shown in detail:

| Company     | Role                     | Stack                                           |
| ----------- | ------------------------ | ----------------------------------------------- |
| Xurrent IMR | Staff Software Engineer  | Expo · React Native · Django · TypeScript       |
| Fijit       | Senior Software Developer | React Native · Next.js                         |
| Streak      | Senior Software Developer | React.js · React Native · Next.js · Node.js · Go |

Each entry links to the company site and shows tenure duration.

---

## Design and tech highlights

- **Dark theme** — near-black background (`#050505`), warm off-white text, orange/coral primary accent
- **Typography** — Bricolage Grotesque for display, Instrument Sans for body, JetBrains Mono for code
- **Animated hero** — staggered fade-in content, drifting gradient lines, floating dots, a rotating crosshair, all orchestrated with pure CSS animations
- **Grain overlay** — subtle full-page film grain texture for depth
- **Sticky header** with backdrop blur and a mobile sheet nav
- **Fully typed** — TypeScript throughout, Zod schemas at form boundaries
- **Performance** — Vercel Analytics + Speed Insights baked in

---

## Stack

Next.js 14 · React 18 · TypeScript · Tailwind CSS · Radix UI · shadcn/ui · Firebase · Spotify Web API · GitHub API · Vercel
