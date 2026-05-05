# Project → Category Mapping

Source paths are relative to the `sameerai` repo unless an external URL is given. Destination paths are relative to the root of this (`innovative-solutions`) repo.

Status legend: **moved** = copied into this repo | **link** = external, not moved | **retired** = empty / duplicate in source, not carried over.

---

## 🤖 Autonomous-AI/

Agentic systems where AI acts on its own.

| Project | Source | Destination | Status |
|---|---|---|---|
| SAaaS — landing | `sameerai/02development/SAaaSIndex.html`, `SAaaSAppLogo.png` | `Autonomous-AI/saaas/index.html`, `SAaaSAppLogo.png` | moved |
| SAaaS — portal | `sameerai/02development/SAaaS.html` | `Autonomous-AI/saaas/saaas.html` | moved |
| SAaaS — AWS variant | `sameerai/02development/SAaaS-AWS.html` | `Autonomous-AI/saaas/saaas-aws.html` | moved |
| Agentic AI Systems | Canva deck | — | link |
| Vibe Coding | Canva site | — | link |
| My Agentic Army | `sameerai/02development/myagenticarmy.html` | — | retired (empty source) |

## 🎓 Learn-AI/

Educational and exploratory experiences to learn about AI.

| Project | Source | Destination | Status |
|---|---|---|---|
| AI Evolution Timeline | `sameerai/pages/ai-evolution-timeline.html`, `sameerai/assets/clicksound/portal-entry-sound.mp3` | `Learn-AI/ai-evolution-timeline/index.html`, `assets/clicksound/portal-entry-sound.mp3` | moved |
| AI Career Explorer | `sameerai/pages/ai_career_explorer.html` | `Learn-AI/ai-career-explorer/index.html` | moved |
| Cultivate Inner Intelligence Using AI | `https://updatemind.space/bookreader.html` | — | link |
| GenAI Gym for Employees | Canva link | — | link |
| Creative Prompt Engineering | `https://sameer-goel.github.io/learn_creative_prompt_engineering/` | — | link |
| Emotional Intelligence at Workplace | Prezi link | — | link |

## 🧩 Misc/

Catch-all for AI-adjacent projects that don't fit cleanly under Autonomous-AI or Learn-AI.

| Project | Source | Destination | Status |
|---|---|---|---|
| Prediction | `sameerai/pages/prediction.html` | `Misc/prediction/index.html` | moved |
| Human Evolution | Canva link | — | link |
| Bio Computing | Canva site | — | link |
| Work Dashboard | `sameerai/pages/work.html` | — | retired (portal page, not a standalone app) |
| Digital Consciousness story | `sameerai/00about/index.html` | — | link (kept in `sameerai` as portal intro) |

## 🧠 mind/

| Project | Source | Destination | Status |
|---|---|---|---|
| Brain Gym | `sameer-goel/BrainTrain` (repo, `BrainGym/` subdir) | `mind/brain-gym/` (index.html, assets/, css/, js/, debug.html) | moved (consolidated from separate repo 2026-05-05) |
| Total Recall | `sameer-goel/total-recall` (repo) | `mind/total-recall/` (index.html, style.css, script.js) | moved (consolidated from separate repo 2026-05-05) |
| Binaural Beats (current) | `sameerai/04mind/BinuralBeatsApp.html`, `BinuralBeatsAppLogo.png` | `mind/binaural-beats/index.html`, `logo.png` | moved |
| Binaural Beats Generator (older iteration) | `sameerai/pages/binuralbeatsgen.html` | `mind/binaural-beats-generator/index.html` | moved |
| Solfeggio Frequency | `sameerai/04mind/SolfeggioFrequencyApp.html`, `SolfeggioFrequencyAppLogo.png` | `mind/solfeggio-frequency/index.html`, `logo.png` | moved |
| Meditation Game | `sameerai/pages/meditation-game.html` | `mind/meditation-game/index.html` | moved |
| Meditation Visualization | `sameerai/pages/meditation-visualization.html` | — | retired (0 bytes) |
| Total Recall (external) | `https://sameer-goel.github.io/total-recall/` | — | superseded by local copy above |
| Left Brain Right Brain | `https://meet.sameerai.com/apps/LeftBrainRightBrain.html` | — | link |

## 💪 body/

| Project | Source | Destination | Status |
|---|---|---|---|
| Swar Science | Canva link | — | link |

> No internal apps. Folder has README-only placeholder.

## 🕉 soul/

| Project | Source | Destination | Status |
|---|---|---|---|
| Ego Death Simulation | `sameerai/assets/inner-intelligence/ego-death.html` | `soul/ego-death-simulation/index.html` | moved |
| Numerology | Canva link | — | link |
| Chakra Wise Goal Planning | Canva link | — | link |
| Science of Shapes | Canva link | — | link |

---

## Summary counts

| Category | Moved | Linked | Retired |
|---|---:|---:|---:|
| Autonomous-AI | 1 project (3 files) | 2 | 1 |
| Learn-AI | 2 | 4 | 0 |
| Misc | 1 | 2 | 2 |
| mind | 6 | 1 | 1 |
| body | 0 | 1 | 0 |
| soul | 1 | 3 | 0 |
| **Total** | **11 projects** | **13** | **4** |

## Path fixups applied during the move

- `Autonomous-AI/saaas/index.html`: rewrote internal hrefs from `SAaaS.html` to `saaas.html` (lowercase) for case-sensitive hosting.
- `Learn-AI/ai-evolution-timeline/`: co-located the referenced `assets/clicksound/portal-entry-sound.mp3` so the `new Audio('assets/clicksound/portal-entry-sound.mp3')` call resolves from the app's own directory.
- Logos for `BinuralBeatsApp` and `SolfeggioFrequencyApp` were renamed to `logo.png` alongside each app (the apps don't reference their own logos; kept for branding).

## Originals

Nothing in `sameerai` has been modified or removed. All moves are copies.
