export type AudienceSlug = "recruiters" | "engineers"

export interface AudienceConfig {
  slug: AudienceSlug
  title: string
  subtitle: string
  localPath: string
  hero: {
    eyebrow: string
    heading: string
    summary: string
    highlights: string[]
  }
  sections: Array<{
    title: string
    points: string[]
  }>
}

export const audiences: Record<AudienceSlug, AudienceConfig> = {
  recruiters: {
    slug: "recruiters",
    title: "For recruiters",
    subtitle: "The resume, the stack, and the projects worth a look.",
    localPath: "/recruiters",
    hero: {
      eyebrow: "Resume + selected projects",
      heading: "Ships full-stack, end to end.",
      summary:
        "Web apps in TypeScript, React, and Next.js — and a habit of taking side projects from idea to deployed.",
      highlights: [
        "Owns features end to end — data model to deployed UI.",
        "Six projects live in production, from idle games to a bond-pricing terminal.",
        "Software developer at Medscape since 2022.",
      ],
    },
    // Intentionally empty: the resume and selected-projects grid below carry the
    // detail, so the hero stays scannable instead of repeating itself.
    sections: [],
  },
  engineers: {
    slug: "engineers",
    title: "For engineers",
    subtitle: "How I build, and the decisions I'd defend in review.",
    localPath: "/engineers",
    hero: {
      eyebrow: "Architecture notes",
      heading: "How I build, tradeoffs included.",
      summary: "Boring, well-understood tools by default; complexity only when it earns its keep.",
      highlights: [
        "Deterministic, testable cores where it matters — seeded sims, token systems.",
        "Stable interfaces, swappable internals; types that make wrong states unrepresentable.",
        "Readable, reversible changes over cleverness.",
      ],
    },
    // The "Under the hood" project notes below do the talking — no filler sections.
    sections: [],
  },
}

export const audienceList = [audiences.recruiters, audiences.engineers]
