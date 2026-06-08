export type ProjectType = "game" | "library" | "app" | "finance"
export type ProjectStatus = "live" | "demo" | "wip"

export interface Project {
  slug: string
  name: string
  description: string
  type: ProjectType
  status: ProjectStatus
  year: number
  tags: string[]
  liveUrl?: string
  sourceUrl?: string
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
    description: "Token-driven React component library with intent-based recipes, multiple visual themes, and Tailwind CSS presets.",
    type: "library",
    status: "live",
    year: 2026,
    tags: ["TypeScript", "React", "Tailwind", "Storybook"],
    liveUrl: "https://designsystem.nikolayvalev.com/",
    featured: true,
    engineerNote:
      // TODO: refine — this site itself consumes the package
      "A token-driven component library: components never hardcode colors, they read CSS custom properties, so a whole theme is a swap of variables. This very site is built on it.",
  },
  {
    slug: "idle-dungeon-life",
    name: "Idle Dungeon Life",
    description: "Mobile-first idle game with progressive dungeon mechanics, playthrough archiving, and cross-platform builds via Capacitor.",
    type: "game",
    status: "live",
    year: 2026,
    tags: ["TypeScript", "Phaser 3", "Capacitor", "Vite"],
    liveUrl: "https://dungeonlife.nikolayvalev.com/",
    sourceUrl: "https://github.com/NikolayValev/IdleDungeonLife",
    featured: true,
    recruiterHighlight: true,
    engineerNote:
      // TODO: refine with the real interesting bits (save format, tick loop, etc.)
      "Built on Phaser 3 with a fixed-timestep idle loop, so progression stays consistent whether the tab is focused or backgrounded. Cross-platform builds (web + native) come from one TypeScript codebase via Capacitor.",
  },
  {
    slug: "mandate-zero",
    name: "Mandate Zero",
    description: "Deterministic turn-based crisis simulation with seeded runs, multilingual support, and optional authentication.",
    type: "game",
    status: "live",
    year: 2026,
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    liveUrl: "https://mandate-zero.nikolayvalev.com/",
    sourceUrl: "https://github.com/NikolayValev/mandate-zero",
    featured: true,
    recruiterHighlight: true,
    engineerNote:
      // TODO: refine with the real interesting bits (seeding, replay, i18n approach)
      "Fully deterministic: the same seed always produces the same run, which makes the simulation reproducible and testable. Adds multilingual support and optional auth on top without compromising that determinism.",
  },
  {
    slug:"bondviz",
    name:"Bond Visualizer",
    description:"Live U.S. Treasury data to visualize the yield curve and price bonds — present value, duration, convexity and parallel-shift scenarios, with hand-rolled D3 charts.",
    type:"finance",
    status: "live",
    year : 2026,
    tags: ["TypeScript", "React", "Tailwind","Python", "Pandas", "Matplotlib", "CPP"],
    liveUrl:"https://bondviz.nikolayvalev.com/",
    sourceUrl:"https://github.com/NikolayValev/bondviz",
    featured: true,
    recruiterHighlight: true,

  },
  {
    slug:"secondbrain",
    name:"Second Brain",
    description:"My personal knowledge management system powered by AI. Organize, search, and query your notes with intelligence.",
    type:"finance",
    status: "live",
    year : 2026,
    tags: ["RAG", "Obsidian","Elastic Search", "LLM"],
    liveUrl:"https://secondbrain.nikolayvalev.com/",
    sourceUrl:"https://github.com/NikolayValev/second-brain-ui",
    featured: true,
    recruiterHighlight: true,
  },
  {
    slug: "quitting-smoking-tracker",
    name: "Quitting Smoking Tracker",
    // TODO: refine the description with the real feature set
    description: "A tracker that helps you quit smoking — logging streaks, milestones, and progress over time.",
    type: "app",
    status: "live",
    year: 2025,
    tags: ["TypeScript", "React"], // TODO: real stack
    liveUrl: "https://smoking.nikolayvalev.com/",
    sourceUrl: "https://github.com/NikolayValev/quitting-smoking-tracker",
    featured: true,
    recruiterHighlight: true,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
