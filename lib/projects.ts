export type ProjectType = "game" | "library" | "app" | "finance"
export type ProjectStatus = "live" | "demo" | "wip"

export interface Project {
  slug: string
  name: string
  /** Short, card-length blurb. */
  description: string
  /** One line shown under the title on the project detail page (falls back to description). */
  tagline?: string
  /** 2–3 sentence "what & why" for the detail page (falls back to description). */
  overview?: string
  /** Punchy feature/decision bullets for the detail page. */
  highlights?: string[]
  type: ProjectType
  status: ProjectStatus
  year: number
  tags: string[]
  liveUrl?: string
  sourceUrl?: string
  /** A dedicated write-up / about page on the project's own site, if one exists. */
  aboutUrl?: string
  /**
   * Detail-page imagery. Both default by convention to
   * `/projects/<slug>/cover.svg` and `/projects/<slug>/01.svg`, `02.svg`,
   * so dropping real screenshots in that folder is all it takes. Set these
   * only to point somewhere else.
   */
  cover?: string
  screenshots?: string[]
  featured: boolean
  /** Surface this project in the recruiter "Selected projects" grid. */
  recruiterHighlight?: boolean
  /** A deeper technical note shown on /engineers. */
  engineerNote?: string
}

export const projects: Project[] = [
  {
    slug: "design-system",
    name: "Design System",
    description:
      "Token-driven React component library with intent-based recipes, multiple visual themes, and Tailwind CSS presets.",
    tagline: "A token-driven React component library that re-themes by swapping CSS variables.",
    overview:
      "A component library where nothing hardcodes color, type, or spacing — every component reads CSS custom properties, so an entire visual theme is a swap of variables rather than a rewrite. This site runs on it.",
    highlights: [
      "Intent-based recipes: components say what they are; tokens decide how they look.",
      "Multiple visual themes from one component set — swap variables, not components.",
      "Ships Tailwind CSS presets so the tokens drop into any project.",
      "Powers this very site, including the warm terracotta theme you're viewing.",
    ],
    type: "library",
    status: "live",
    year: 2026,
    tags: ["TypeScript", "React", "Tailwind", "Storybook"],
    liveUrl: "https://designsystem.nikolayvalev.com/",
    featured: true,
    engineerNote:
      "A token-driven component library: components never hardcode colors, they read CSS custom properties, so a whole theme is a swap of variables. This very site is built on it.",
  },
  {
    slug: "idle-dungeon-life",
    name: "Idle Dungeon Life",
    description:
      "Mobile-first idle game with progressive dungeon mechanics, playthrough archiving, and cross-platform builds via Capacitor.",
    tagline:
      "A browser & mobile idle RPG built entirely in TypeScript — pure reducer state, headless simulation, full test coverage.",
    overview:
      "A self-authored idle RPG: send a procedurally generated adventurer into ever-deeper dungeons, manage gear and resources, and carry permanent “legacy ash” across deaths and rebirths. The entire game state runs through a pure, event-sourced reducer with no UI framework in the core — so it's fully testable in headless Node and ships to web, Android, and iOS from one codebase.",
    highlights: [
      "Pure event-sourced reducer: every change is reduceGame(state, event) → state — no mutation, no side effects.",
      "Headless simulation layer batch-tests balance and verifies determinism across seeds.",
      "Seeded RNG + versioned save migrations keep runs reproducible and saves forward-compatible.",
      "50 items, 16 traits, 15 dungeons, three legacy paths, and up to 24h of offline progression.",
      "68 Vitest unit tests + Playwright e2e; one codebase to web & native via Capacitor.",
    ],
    type: "game",
    status: "live",
    year: 2026,
    tags: ["TypeScript", "Phaser 3", "Capacitor", "Vite", "Vitest", "Playwright"],
    liveUrl: "https://dungeonlife.nikolayvalev.com/",
    sourceUrl: "https://github.com/NikolayValev/IdleDungeonLife",
    aboutUrl: "https://dungeonlife.nikolayvalev.com/about",
    featured: true,
    recruiterHighlight: true,
    engineerNote:
      "All game state flows through a single pure reducer — reduceGame(state, event) → state — with no mutation or side effects, so it's testable in headless Node. A simulation layer batch-runs the engine without Phaser to verify balance and determinism across seeds, backed by seeded RNG and versioned save migrations.",
  },
  {
    slug: "mandate-zero",
    name: "Mandate Zero",
    description:
      "Deterministic turn-based crisis simulation with seeded runs, multilingual support, and optional authentication.",
    tagline: "A deterministic, turn-based crisis simulation — same seed, same run, every time.",
    overview:
      "A turn-based strategy simulation where you steer an escalating crisis. It's fully deterministic: the same seed always reproduces the same run, which keeps the simulation reproducible and testable. Multilingual support and optional auth sit on top without compromising that determinism.",
    highlights: [
      "Deterministic core: an identical seed always produces an identical run.",
      "Reproducible, replayable, and testable by construction.",
      "Multilingual support layered on without breaking determinism.",
      "Optional authentication for saved runs.",
    ],
    type: "game",
    status: "live",
    year: 2026,
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    liveUrl: "https://mandate-zero.nikolayvalev.com/",
    sourceUrl: "https://github.com/NikolayValev/mandate-zero",
    featured: true,
    recruiterHighlight: true,
    engineerNote:
      "Fully deterministic: the same seed always produces the same run, which makes the simulation reproducible and testable. Adds multilingual support and optional auth on top without compromising that determinism.",
  },
  {
    slug: "bondviz",
    name: "Bond Visualizer",
    description:
      "Live U.S. Treasury data to visualize the yield curve and price bonds — present value, duration, convexity, and parallel-shift scenarios, with hand-rolled D3 charts.",
    tagline: "A fixed-income research terminal: live Treasury data, the yield curve, and bond math from scratch.",
    overview:
      "Pulls live U.S. Treasury data to visualize the yield curve and price bonds — present value, duration, convexity, and parallel-shift scenarios — with hand-rolled D3 charts. A fixed-income and markets research terminal built on continuous-compounding analytics.",
    highlights: [
      "Live U.S. Treasury data drives the yield curve in real time.",
      "Bond pricing with present value, duration, convexity, and parallel-shift scenarios.",
      "Portfolio view plus PCA on the curve's principal movements.",
      "Hand-rolled D3 charts — no charting library.",
    ],
    type: "finance",
    status: "live",
    year: 2026,
    tags: ["TypeScript", "React", "Tailwind", "Python", "Pandas", "D3", "C++"],
    liveUrl: "https://bondviz.nikolayvalev.com/",
    sourceUrl: "https://github.com/NikolayValev/bondviz",
    featured: true,
    recruiterHighlight: true,
    engineerNote:
      "Bond math is hand-rolled on continuous-compounding analytics — present value, duration, convexity, and parallel-shift scenarios over live Treasury data — and every chart is drawn directly with D3 rather than a charting library, so the visualization stays exactly as expressive as the model.",
  },
  {
    slug: "secondbrain",
    name: "Second Brain",
    description:
      "An AI-powered personal knowledge base — capture notes, search everything, and ask questions answered from your own notes.",
    tagline: "An AI-powered personal knowledge base — capture, search, and ask your own notes.",
    overview:
      "A personal knowledge-management system powered by AI: capture notes to an inbox, search across everything, and ask questions that are answered from your own notes via retrieval-augmented generation over an Obsidian vault.",
    highlights: [
      "Ask your notes: a RAG pipeline answers questions from your own knowledge base.",
      "Full-text search over an Obsidian vault, backed by Elasticsearch.",
      "Inbox-to-knowledge capture flow with a unified dashboard.",
      "Authenticated and multi-device, with web and mobile layouts.",
    ],
    type: "app",
    status: "live",
    year: 2026,
    tags: ["Next.js", "RAG", "Obsidian", "Elasticsearch", "LLM"],
    liveUrl: "https://secondbrain.nikolayvalev.com/",
    sourceUrl: "https://github.com/NikolayValev/second-brain-ui",
    featured: true,
    recruiterHighlight: true,
  },
  {
    slug: "quitting-smoking-tracker",
    name: "Quitting Smoking Tracker",
    description:
      "A smoke-free companion: track your streak, hit health and savings milestones, and get through cravings.",
    tagline: "A smoke-free companion: track streaks, hit milestones, and get through cravings.",
    overview:
      "A tracker for quitting smoking — log your streak, celebrate milestones, and watch health and money recovered add up over time. Guided breathing exercises and wellness tips help get you through cravings.",
    highlights: [
      "Streak tracking with health and savings milestones over time.",
      "Guided breathing exercises for craving moments.",
      "Wellness tips and personalized encouragement.",
      "Accounts and sync so progress follows you across devices.",
    ],
    type: "app",
    status: "live",
    year: 2025,
    tags: ["Next.js", "TypeScript", "Tailwind", "Clerk"],
    liveUrl: "https://smoking.nikolayvalev.com/",
    sourceUrl: "https://github.com/NikolayValev/quitting-smoking-tracker",
    featured: true,
    recruiterHighlight: true,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
