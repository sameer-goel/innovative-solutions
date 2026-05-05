# Innovative Solutions

A collection of small, self-contained HTML/JavaScript apps by [Sameer Goel](https://sameerai.com), organized into six categories across two sides: **AI** and **Inner Intelligence**.

Each project lives in its own folder and can be opened directly by loading its `index.html`.

## Categories

### 🤖 AI

| Folder | What's inside |
|---|---|
| [`Autonomous-AI/`](Autonomous-AI/) | Agentic systems where AI acts on its own |
| [`Learn-AI/`](Learn-AI/) | Educational and exploratory experiences about AI |
| [`Misc/`](Misc/) | Catch-all for AI-adjacent projects |

### 🪷 Inner Intelligence

| Folder | What's inside |
|---|---|
| [`mind/`](mind/) | Sound, frequency, and memory-focused apps |
| [`body/`](body/) | Physical wellness explorations |
| [`soul/`](soul/) | Spiritual and consciousness experiences |

## Relationship to `sameerai`

The portal site at [sameerai.com](https://sameerai.com) (source: [`sameer-goel/sameerai`](https://github.com/sameer-goel/sameerai)) is the landing page that links to each of these projects. This repo is where the actual apps live.

Projects that live outside this repo (Canva decks, Prezi presentations, other GitHub Pages sites) are linked from the `sameerai` portal but are not mirrored here. See `MAPPING.md` for the full source-to-destination table and the list of external-only projects.

## Repo layout

```
innovative-solutions/
├── README.md
├── PLAN.md
├── MAPPING.md
├── Autonomous-AI/
├── Learn-AI/
├── Misc/
├── mind/
├── body/
└── soul/
```

## How to run a project locally

Because these are pure static pages:

```bash
# from the repo root
python3 -m http.server 8000
# then browse to http://localhost:8000/mind/binaural-beats/
```

No build step, no dependencies to install.
