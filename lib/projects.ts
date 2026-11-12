export type ProjectType = "game" | "library" | "app" | "finance" | "tool"
export type ProjectStatus = "live" | "wip"

export interface Project {
  slug: string
  name: string
  /** One or two sentences for the card and the detail-page lede. */
  description: string
  /** A short paragraph for the detail page. Falls back to description. */
  overview?: string
  highlights?: string[]
  type: ProjectType
  status: ProjectStatus
  /** Being worked on right now. */
  active?: boolean
  year: number
  tags: string[]
  liveUrl?: string
  sourceUrl?: string
  /** Detail-page cover. Projects without one get a typographic panel. */
  cover?: string
  /** Card image. Falls back to cover. */
  cardImage?: string
  screenshots?: string[]
  /** "portrait" for phone screenshots, so they are contained rather than cropped. */
  imageOrientation?: "landscape" | "portrait"
  /** Shown on the home page and the recruiters page. */
  featured: boolean
  /** Implementation notes for /engineers. */
  engineerNote?: string
}

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  live: "Live",
  wip: "In progress",
}

export const TYPE_LABELS: Record<ProjectType, string> = {
  game: "Game",
  library: "Library",
  app: "App",
  finance: "Finance",
  tool: "Tooling",
}

/** Order matters: the home page shows the first HOME_PROJECT_COUNT featured projects. */
export const projects: Project[] = [
  {
    slug: "agora",
    name: "Agora",
    description:
      "Short philosophy sessions on Plato and the Stoics. Read the passage, map the argument, then defend it to a tutor that can only quote the real text.",
    overview:
      "Each session takes ten to fifteen minutes. You read a public-domain translation, build an argument map from a deck of claim cards, and talk it through with a Socratic tutor. The cards then go into spaced review. The first track has nine sessions, from the Euthyphro to Marcus Aurelius. Built with Expo; the web version is live now.",
    highlights: [
      "The tutor quotes by citing a passage ID. The server checks every quote against that passage and repairs, re-cites, or removes it before the reader sees it.",
      "An adversarial model in CI fabricates quotes and leaks answers on purpose across 78 scenarios. None of its unsafe replies reach the screen.",
      "Works offline on SQLite, including in the browser via WebAssembly. Sync uses grow-only sets and last-writer-wins registers, so it cannot conflict.",
      "Review schedules are never synced. Each device replays the review log, so two phones that studied offline end up with the same schedule.",
      "About 210 tests, including the database migrations and row-level security run in PGlite.",
    ],
    type: "app",
    status: "live",
    active: true,
    year: 2026,
    tags: ["Expo", "React Native", "TypeScript", "FastAPI", "Supabase", "SQLite", "Claude"],
    liveUrl: "https://agora.nikolayvalev.com/",
    sourceUrl: "https://github.com/NikolayValev/Agora",
    cover: "/projects/agora/loop.png",
    screenshots: ["/projects/agora/loop.png", "/projects/agora/app.png", "/projects/agora/dark.png"],
    featured: true,
    engineerNote:
      "The model can only quote by citing a segment ID. Before a reply reaches the client, the server finds each quotation in the cited text and either keeps it, repairs it to the translation's wording, re-cites it, or strips it. Replies that give away a step the learner hasn't reached are retried once, then replaced by a scripted tutor. On the data side, every write goes to on-device SQLite first. Replicated tables are grow-only sets or last-writer-wins registers stamped with a hybrid logical clock, and review state is derived on each device from the event log rather than synced. A seeded randomised test runs three devices with skewed clocks through offline periods and checks that they converge.",
  },
  {
    slug: "cultivator",
    name: "Cultivator",
    description:
      "A cultivation game about one life at a time. Draw a technique you can't reroll, swear to a guild, and build up a sect that outlasts you.",
    overview:
      "Each life starts with a single draw from a pool of breathing techniques, ranked from Trash to Broken. Whatever you pull sets your stats and how fast you gather qi, and it can't be traded or rerolled. You then swear to a guild, which decides the resource you gather for the rest of that life. What you raise for one of seven sects stays standing after you die, so later lives build on earlier ones.",
    highlights: [
      "One technique per life, from Trash to Broken, with no rerolls. Draws bank up over real time, six at most.",
      "A technique you don't want can be recycled into fodder instead of played.",
      "Six guilds, each tied to one resource: spirit grain, ore, abyss catch, herbs, and more.",
      "Seven sects with permanent buildings that carry over between lives.",
      "Pixel-art scenes, built in Godot and exported to WebAssembly for the browser.",
    ],
    type: "game",
    status: "live",
    active: true,
    year: 2026,
    tags: ["Godot", "WebAssembly"],
    liveUrl: "https://cultivator.nikolayvalev.com/",
    cover: "/projects/cultivator/03-guild.png",
    cardImage: "/projects/cultivator/card.png",
    screenshots: [
      "/projects/cultivator/01-draw.png",
      "/projects/cultivator/02-technique.png",
      "/projects/cultivator/03-guild.png",
      "/projects/cultivator/04-legacy.png",
    ],
    imageOrientation: "portrait",
    featured: true,
  },
  {
    slug: "idle-dungeon-life",
    name: "Idle Dungeon Life",
    description:
      "An idle RPG where your adventurer ages in real time and keeps diving deeper until their lifespan runs out. Each death funds upgrades for the next life.",
    overview:
      "You send an adventurer into a chain of sixteen dungeons. They age, pick up traits, and push deeper until they die of old age. What they earn carries over as “legacy ash” for permanent unlocks. It runs in the browser and as a mobile app through Capacitor.",
    highlights: [
      "Health is lifespan. A run is one lifetime, and the character dies when it runs out, not from damage.",
      "Three legacy paths, each with its own talent tree.",
      "Offline progress is simulated on return, with a summary of what happened while you were away.",
      "A “Watch demo” mode plays a full lifetime in a sandbox that never touches your save.",
    ],
    type: "game",
    status: "live",
    year: 2026,
    tags: ["TypeScript", "Phaser 3", "Vite", "Capacitor", "Vitest", "Playwright"],
    liveUrl: "https://dungeonlife.nikolayvalev.com/",
    sourceUrl: "https://github.com/NikolayValev/IdleDungeonLife",
    cover: "/projects/idle-dungeon-life/02-early-chapel.png",
    cardImage: "/projects/idle-dungeon-life/card.png",
    screenshots: [
      "/projects/idle-dungeon-life/01-intro.png",
      "/projects/idle-dungeon-life/02-early-chapel.png",
      "/projects/idle-dungeon-life/03-mid-dungeon.png",
      "/projects/idle-dungeon-life/04-deep-dungeon.png",
      "/projects/idle-dungeon-life/05-talents.png",
      "/projects/idle-dungeon-life/06-codex.png",
      "/projects/idle-dungeon-life/07-subs.png",
      "/projects/idle-dungeon-life/08-death-legacy.png",
    ],
    imageOrientation: "portrait",
    featured: true,
    engineerNote:
      "All game logic is one pure, event-sourced reducer with no Phaser dependency, so it runs headless in Node. The RNG is seeded, which means the same seed and events always give the same result. That makes offline catch-up trustworthy and lets a balance simulator run the real game across many seeds and strategies. Saves are versioned and migrated field by field. There are 170+ Vitest unit tests and a Playwright suite, which also produces the screenshots on this page.",
  },
  {
    slug: "design-system",
    name: "Design System",
    description:
      "A React component library with twelve themes, published to npm with an MCP server so coding agents can install components. This site is built on it.",
    overview:
      "Components read every color, font, and spacing value from CSS variables, so a theme is a set of variables rather than a code change. There are twelve themes, each with its own light and dark palette. A hosted MCP server exposes the catalog, so Claude, Cursor, or Windsurf can find and install components directly.",
    highlights: [
      "Colors are defined in OKLCH, with aliases that match shadcn's variable names.",
      "Twelve themes, each with a hand-tuned light and dark palette, switchable at runtime.",
      "A hosted MCP server lets coding agents browse and install components.",
      "Turborepo and pnpm monorepo with Storybook visual-regression tests and semver releases.",
    ],
    type: "library",
    status: "live",
    year: 2026,
    tags: ["TypeScript", "React", "Tailwind", "Storybook", "Turborepo", "MCP"],
    liveUrl: "https://designsystem.nikolayvalev.com/",
    sourceUrl: "https://github.com/NikolayValev/design-system",
    cover: "/projects/design-system/card.png",
    screenshots: [],
    featured: true,
    engineerNote:
      "No component hardcodes a color. Everything reads semantic CSS variables defined in OKLCH, so switching between the twelve themes only swaps variables. Alongside the npm package, a hosted MCP server serves the component catalog so a coding agent can install components into a project. This site consumes the package and overrides a handful of variables for its own palette.",
  },
  {
    slug: "bondviz",
    name: "Bond Visualizer",
    description:
      "Plots the U.S. Treasury yield curve from live data and prices bonds: present value, duration, convexity, and parallel-shift scenarios.",
    overview:
      "A fixed-income research tool. It pulls live Treasury data, draws the yield curve, and prices bonds using continuous compounding. It also includes a portfolio view and a PCA breakdown of how the curve moves.",
    highlights: [
      "Live Treasury data drives the yield curve.",
      "Present value, duration, convexity, and parallel-shift scenarios.",
      "Portfolio view and PCA on the curve's main movements.",
      "Charts drawn directly in D3, without a charting library.",
    ],
    type: "finance",
    status: "live",
    year: 2026,
    tags: ["TypeScript", "React", "Python", "Pandas", "D3", "C++"],
    liveUrl: "https://bondviz.nikolayvalev.com/",
    sourceUrl: "https://github.com/NikolayValev/bondviz",
    cover: "/projects/bondviz/card.png",
    screenshots: [],
    featured: true,
    engineerNote:
      "The bond math is written by hand on continuous compounding: present value, duration, convexity, and parallel shifts over live Treasury data. The charts are drawn in D3 directly, so nothing in a charting library limits what the model can show.",
  },
  {
    slug: "ralph",
    name: "Ralph",
    description:
      "An agent that picks up Linear tickets on a schedule, makes one change per run, and opens a pull request. It is never allowed to merge.",
    overview:
      "Ralph watches a Linear backlog for tickets labelled autonomous-eligible. On each scheduled run it takes one ticket, makes one bounded change, opens a pull request, and stops. A human reviews and merges. Most of the code is about keeping it from doing damage when something goes wrong.",
    highlights: [
      "Never merges and never deploys. Every run ends with a PR waiting for review.",
      "Checks credentials and tooling before starting, and refuses to run if anything is off.",
      "A circuit breaker pauses the schedule after repeated failures.",
      "A local Ollama model triages tickets before any paid model is called.",
      "Posts each run to Slack. Runs on Windows under Task Scheduler, without WSL.",
    ],
    type: "tool",
    status: "wip",
    year: 2026,
    tags: ["Python", "Claude Code", "Linear", "Slack", "Ollama"],
    sourceUrl: "https://github.com/NikolayValev/Agentic-Ralph-runner",
    screenshots: [],
    featured: true,
    engineerNote:
      "The agent loop is simple. The work is in the limits around it: one change per run, a PR that always waits for a human, and no merge or deploy permissions. Before each run a preflight checks the credentials and tools and confirms the test command exits rather than watching. If anything fails, it doesn't start. After repeated failures a circuit breaker pauses the schedule. A local Ollama model does triage so the paid model is only called for real work.",
  },
  {
    slug: "quitting-smoking-tracker",
    name: "Quitting Smoking Tracker",
    description:
      "Tracks your smoke-free streak, health and savings milestones, and helps with cravings. There's a public demo that needs no account.",
    overview:
      "Log your streak and see the health and money you've recovered over time. When a craving hits, there are breathing exercises and step-by-step coping prompts. The same codebase runs a public demo with 90 days of seeded data and a signed-in mode backed by Postgres.",
    highlights: [
      "Public demo at /demo with the full interface on seeded data.",
      "Signed-in mode stores each user's logs in Neon Postgres, behind Clerk.",
      "Streaks, health milestones, and money saved.",
      "Breathing exercises and coping steps for cravings.",
    ],
    type: "app",
    status: "live",
    year: 2026,
    tags: ["Next.js", "TypeScript", "Drizzle", "Neon Postgres", "Clerk", "Playwright"],
    liveUrl: "https://smoking.nikolayvalev.com/",
    sourceUrl: "https://github.com/NikolayValev/quitting-smoking-tracker",
    cover: "/projects/quitting-smoking-tracker/card.png",
    screenshots: [],
    featured: true,
    engineerNote:
      "The demo and the real app share every component. Only the data source changes: a seeded fixture for /demo, user-scoped rows in Neon Postgres behind Clerk for signed-in users. That keeps the demo honest, since it is the product itself rather than a screenshot tour.",
  },
  {
    slug: "secondbrain",
    name: "Second Brain",
    description:
      "Search and ask questions over an Obsidian vault. Answers come from your own notes.",
    overview:
      "Capture notes to an inbox, search across everything, and ask questions answered from your own writing using retrieval over an Obsidian vault. A FastAPI service handles indexing and retrieval. The Next.js frontend's API client is generated from the service's OpenAPI schema.",
    highlights: [
      "Question answering over your own notes, with retrieval from the vault.",
      "Semantic search with embeddings stored in Postgres via pgvector.",
      "OpenAI, Anthropic, and Google models behind one interface.",
      "Typed frontend client generated from the backend's OpenAPI schema.",
    ],
    type: "app",
    status: "live",
    year: 2026,
    tags: ["Next.js", "FastAPI", "pgvector", "Obsidian", "OpenAPI"],
    liveUrl: "https://secondbrain.nikolayvalev.com/",
    sourceUrl: "https://github.com/NikolayValev/second-brain-ui",
    cover: "/projects/secondbrain/card.png",
    screenshots: [],
    featured: true,
    engineerNote:
      "A FastAPI service indexes the vault and stores embeddings in Postgres with pgvector. The Next.js client is generated from the service's OpenAPI schema, so an API change fails the build instead of failing in production. Model providers share one interface, so switching between OpenAI, Anthropic, and Google is a config change.",
  },
  {
    slug: "mandate-zero",
    name: "Mandate Zero",
    description:
      "A turn-based crisis simulation. Runs are seeded, so the same seed always plays out the same way.",
    overview:
      "You manage an escalating crisis one turn at a time. The simulation is deterministic: a seed fully decides a run, which makes runs replayable and the logic testable. It supports several languages and optional sign-in for saved runs.",
    highlights: [
      "Same seed, same run, every time.",
      "Multiple languages.",
      "Optional sign-in to save runs.",
    ],
    type: "game",
    status: "live",
    year: 2026,
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    liveUrl: "https://mandate-zero.nikolayvalev.com/",
    sourceUrl: "https://github.com/NikolayValev/mandate-zero",
    cover: "/projects/mandate-zero/card.png",
    screenshots: [],
    featured: true,
    engineerNote:
      "The simulation is deterministic: the same seed always produces the same run, which makes it replayable and easy to test. Translations and optional auth sit outside the simulation core, so neither can affect a run.",
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export const HOME_PROJECT_COUNT = 6

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
