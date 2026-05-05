# Categories — Taxonomy for AI Agents

> **Purpose**: This file is the machine-readable source of truth for where projects go. An AI agent reading this repo should consult this file before adding a new project, to pick the correct category folder and match the existing structure.

## Repo conventions

- **One project per folder.** Each project lives at `<category>/<project-slug>/` and has an `index.html` as its entry point.
- **Slugs**: lowercase, hyphenated, concise. Examples: `brain-gym`, `total-recall`, `ai-evolution-timeline`.
- **Assets co-located.** Project dependencies (CSS, JS, images, audio) live alongside `index.html` or in subfolders like `assets/`, `css/`, `js/`. Never reference files outside the project folder using `../`.
- **No cross-project dependencies.** Each project must be independently hostable.
- **External-only projects don't get a folder here.** They go into `SOLUTIONS.md` as outbound links instead.

## Two sides, six categories

The repo has two thematic sides. When adding a project, first decide which side it belongs to, then pick a category within it.

### 🤖 AI side

| Category | Folder | When to put a project here |
|---|---|---|
| **Autonomous-AI** | `Autonomous-AI/` | Agentic systems where AI *acts* — multi-agent portals, swarms, AI workers, autonomous decision-makers. The user describes a goal; the AI takes the actions. Example: SAaaS. |
| **Learn-AI** | `Learn-AI/` | Educational / exploratory experiences *about* AI — tutorials, timelines, career guides, prompt engineering courses. The user is learning *about* AI itself. Example: AI Evolution Timeline. |
| **Misc** | `Misc/` | AI-adjacent projects that don't fit cleanly in Autonomous-AI or Learn-AI. Prediction engines, speculation tools, experimental hybrids. Prefer one of the other two categories when possible. |

### 🪷 Inner Intelligence side

| Category | Folder | When to put a project here |
|---|---|---|
| **mind** | `mind/` | Cognition, memory, focus, sound frequency, brainwave entrainment, book quizzes, meditation games. Anything that trains or modifies mental state. Example: Brain Gym, Binaural Beats, Total Recall. |
| **body** | `body/` | Breath, movement, physical wellness, nostril dominance, posture. Bodily wisdom. Example: Breathing Circle (if brought in). |
| **soul** | `soul/` | Spirituality, consciousness, chakras, numerology, sacred geometry, ego dissolution. Inner spiritual exploration. Example: Ego Death Simulation. |

## Decision guide (flowchart in text)

```
Is the project hosted somewhere else (Canva, Prezi, separate GH Pages repo)?
├─ Yes → add to SOLUTIONS.md, do not create a folder here
└─ No  → continue

Is the project about AI or about inner growth?
├─ AI     → pick Autonomous-AI | Learn-AI | Misc
└─ Inner  → pick mind | body | soul
```

## Keywords to match (fuzzy)

If you're an agent deciding which category fits, match on these keywords in the project's description or README:

| Folder | Keywords |
|---|---|
| `Autonomous-AI` | agent, agentic, autonomous, multi-agent, swarm, workflow, orchestration, automation |
| `Learn-AI` | learn, tutorial, course, guide, timeline, history, career, prompt engineering, education |
| `Misc` | prediction, speculation, experimental, evolution, bio-computing |
| `mind` | cognition, memory, focus, brain, neuro, quiz, recall, binaural, solfeggio, frequency, meditation, IQ, attention |
| `body` | breath, breathing, posture, movement, body, physical, wellness, pranayama, swar, nostril |
| `soul` | soul, spirit, consciousness, chakra, numerology, sacred, ego, awakening, divine, geometry |

## Project entry checklist

When an agent adds a new project, the following must be true after the operation:

1. **Folder exists at `<category>/<slug>/`** with lowercase-hyphenated slug.
2. **`index.html` is the entry point** at the project root.
3. **No `../` references** leave the project folder (to external repo paths).
4. **`MAPPING.md` updated** with a new row mapping source → destination → status.
5. **Category README updated** to list the new project in its Projects table.
6. **Root `README.md` unchanged** — it only names categories, not individual projects.
7. **Landing `index.html` updated** — new entry added to the `CATEGORIES` array in the matching category's `internal` list, with `name`, `sub`, `icon`, and `href`.

## Machine-readable category spec

```yaml
categories:
  Autonomous-AI:
    side: ai
    icon: "🤖"
    folder: Autonomous-AI
    tagline: Agentic systems where AI acts on its own.
    keywords: [agent, agentic, autonomous, swarm, orchestration]
  Learn-AI:
    side: ai
    icon: "🎓"
    folder: Learn-AI
    tagline: Educational and exploratory experiences about AI.
    keywords: [learn, tutorial, course, timeline, prompt-engineering, career]
  Misc:
    side: ai
    icon: "🧩"
    folder: Misc
    tagline: Catch-all for AI-adjacent projects.
    keywords: [prediction, speculation, experimental, evolution]
  mind:
    side: inner
    icon: "🧠"
    folder: mind
    tagline: Cognition, memory, and frequency apps.
    keywords: [cognition, memory, focus, binaural, solfeggio, meditation, quiz, neuro]
  body:
    side: inner
    icon: "💪"
    folder: body
    tagline: Physical wellness and breath.
    keywords: [breath, pranayama, posture, body, swar, nostril]
  soul:
    side: inner
    icon: "🕉️"
    folder: soul
    tagline: Spiritual and consciousness experiences.
    keywords: [soul, consciousness, chakra, numerology, sacred, ego, awakening]
```
