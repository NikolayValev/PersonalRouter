export type ProjectType = "game" | "library" | "app"
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
    slug: "idle-dungeon-life",
    name: "Idle Dungeon Life",
    description: "Mobile-first idle game with progressive dungeon mechanics, playthrough archiving, and cross-platform builds via Capacitor.",
    type: "game",
    status: "live",
    year: 2026,
    tags: ["TypeScript", "Phaser 3", "Capacitor", "Vite"],
    liveUrl: "https://www.idledungeonlife.nikolayvalev.com",
    sourceUrl: "https://github.com/nikolayvalev/IdleDungeonLife",
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
    liveUrl: "https://www.mandate-zero.nikolayvalev.com",
    sourceUrl: "https://github.com/nikolayvalev/mandate-zero",
    featured: true,
    recruiterHighlight: true,
    engineerNote:
      // TODO: refine with the real interesting bits (seeding, replay, i18n approach)
      "Fully deterministic: the same seed always produces the same run, which makes the simulation reproducible and testable. Adds multilingual support and optional auth on top without compromising that determinism.",
  },
  {
    slug: "design-system",
    name: "Design System",
    description: "Token-driven React component library with intent-based recipes, multiple visual themes, and Tailwind CSS presets.",
    type: "library",
    status: "live",
    year: 2026,
    tags: ["TypeScript", "React", "Tailwind", "Storybook"],
    liveUrl: "https://www.design-system.nikolayvalev.com",
    featured: true,
    engineerNote:
      // TODO: refine — this site itself consumes the package
      "A token-driven component library: components never hardcode colors, they read CSS custom properties, so a whole theme is a swap of variables. This very site is built on it.",
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
