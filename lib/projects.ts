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
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
