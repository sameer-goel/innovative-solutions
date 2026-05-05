# Innovative Solutions — Consolidation Plan

## Context

- **Destination repo**: `github.com/sameer-goel/innovative-solutions` (currently empty, created today).
- **Source repo**: `github.com/sameer-goel/sameerai` (the Digital Consciousness site at sameerai.com).
- **Goal**: Bring individual, self-contained projects into this repo, grouped by category folder. Keep `sameerai` as the landing/portal site; this repo becomes the home for the actual apps.

## Category decisions

### Inner Intelligence side (unchanged)
- `mind/`
- `body/`
- `soul/`

### AI side — 3 categories
The legacy `research` / `development` / `ethics` split from `sameerai` is replaced with:

- `Autonomous-AI/` — agentic systems where AI acts on its own (SAaaS, Agentic AI Systems, Vibe Coding, My Agentic Army)
- `Learn-AI/` — educational and exploratory experiences about AI (AI Evolution Timeline, AI Career Explorer, GenAI Gym, Creative Prompt Engineering, etc.)
- `Misc/` — catch-all for AI-adjacent projects (Prediction, Human Evolution, Bio Computing)

Total categories across the repo: **6** (mind, body, soul, Autonomous-AI, Learn-AI, Misc).

> If you prefer "only 3 categories" to mean 3 AI categories and nothing else, say so and we'll drop mind/body/soul from this repo and keep them in `sameerai`.

## What gets moved vs what stays

- **Moved**: internal HTML apps that live inside `sameerai/` today (binaural beats, solfeggio, SAaaS, ego-death sim, etc.) and loose pages under `sameerai/pages/` that are actual apps (career explorer, evolution timeline, prediction, meditation game).
- **Not moved**: external links (Canva decks, Prezi, `sameer-goel.github.io/*` sub-sites, `updatemind.space`, `meet.sameerai.com`). These stay as outbound links — we just document them in the mapping so the `sameerai` portal can still point at them.
- **Not moved**: top-level portal (`index.html`), shared nav, favicon, category landing pages. Those belong to the portal and stay in `sameerai`.

## Repo layout (proposed)

```
innovative-solutions/
├── README.md
├── PLAN.md              ← this file
├── MAPPING.md           ← source → destination table (see below)
├── Autonomous-AI/
│   └── <project-folder>/
│       ├── index.html
│       └── assets/
├── Learn-AI/
│   └── <project-folder>/...
├── Misc/
│   └── <project-folder>/...
├── mind/
│   └── <project-folder>/...
├── body/
│   └── <project-folder>/...
└── soul/
    └── <project-folder>/...
```

Each project gets its own folder with an `index.html` entry point, so it can be opened directly and hosted standalone (useful if we later turn on GitHub Pages for this repo).

## Execution phases

1. **Confirm plan & mapping** (this step — waiting on your OK).
2. **Scaffold folders**: create the six category dirs with placeholder `README.md` files.
3. **Copy internal apps** from `sameerai` into their new homes. Rename to `index.html` + co-located assets.
4. **Fix relative paths** inside each copied app (logos, images, scripts, shared nav if used).
5. **Write per-category `README.md`** listing the projects in that category with one-line descriptions.
6. **Write top-level `README.md`** explaining the repo and linking to each category.
7. **Update `sameerai` category landing pages** to point at the new locations (either via `https://github.com/sameer-goel/innovative-solutions/tree/main/...` links or, if we enable Pages on this repo, the Pages URLs). This step is optional and we'll confirm before touching `sameerai`.
8. **Commit & push** using `gh` / https remote only. No raw `git push` to ssh.

## Open questions (please confirm before Phase 2)

1. ~~Are the 3 AI category names above OK?~~ **Decided**: `Autonomous-AI` / `Learn-AI` / `Misc`.
2. Should we move `sameerai`'s internal apps out of `sameerai` entirely (delete there after copy), or duplicate them (keep a copy in `sameerai` for now and have the authoritative version here)? Duplication is safer for rollback; removal is cleaner long-term.
3. Do you want GitHub Pages enabled on `innovative-solutions` so each project has a live URL? If yes, I'll add a minimal index at the root too.
4. For the external-only projects (Canva/Prezi/etc.) — just document them in `MAPPING.md` and leave them as outbound links, yes?

## Commit/push approach

- Remote already uses https (`Git operations protocol: https` confirmed via `gh auth status`).
- Commits pushed via `gh repo sync` or plain `git push` over https with the cached gh token. No ssh.
- Branch strategy: work on `main` directly for the initial import (empty repo, no history to protect), then switch to PR-based flow for subsequent changes.
