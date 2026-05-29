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
    subtitle: "Resume, skills, and the projects worth a look",
    localPath: "/recruiters",
    hero: {
      eyebrow: "Quick read",
      heading: "The short version, built to scan",
      summary:
        "A condensed view of what I do and where I'm headed. The full resume is on this page, and the projects below are the ones I'd point to first.",
      highlights: [
        "Full-stack web work with TypeScript, React, and Next.js",
        "Shipping side projects end to end, from idea to deployed",
        "Early-career and actively leveling up toward senior",
      ],
    },
    sections: [
      {
        title: "What I bring",
        points: [
          "Comfortable owning a feature from data model to UI.",
          "I write clearly and keep decisions easy to follow.",
          // TODO: replace with your real strongest 2-3 selling points
          "I learn fast and ask for the context I'm missing rather than guessing.",
        ],
      },
      {
        title: "How I work",
        points: [
          "Small, reviewable changes over big risky drops.",
          "I'd rather ship something honest and iterate than over-promise.",
          // TODO: tailor to how you actually like to collaborate
          "Direct, low-drama communication.",
        ],
      },
    ],
  },
  engineers: {
    slug: "engineers",
    title: "For engineers",
    subtitle: "How I build, and a few things I think are cool",
    localPath: "/engineers",
    hero: {
      eyebrow: "Technical read",
      heading: "How I build, with the tradeoffs left in",
      summary:
        "For people who want to look under the hood. Below is how I approach building things, plus notes on a few projects where the interesting decisions live.",
      highlights: [
        "Boring, well-understood tools first; complexity only when it earns its keep",
        "Deterministic, testable cores where it matters (seeded sims, token systems)",
        "Readable code and reversible changes over cleverness",
      ],
    },
    sections: [
      {
        title: "How I build",
        points: [
          "Reach for the simplest thing that meets the requirement, then harden it.",
          "Keep interfaces stable and the messy internals swappable.",
          "Lean on types to make wrong states hard to represent.",
        ],
      },
      {
        title: "What I'm sharpening",
        points: [
          // TODO: swap in what you're actually learning right now
          "Deeper systems work: performance, data modeling, and testing strategy.",
          "Writing more about the why behind decisions, not just the what.",
        ],
      },
    ],
  },
}

export const audienceList = [audiences.recruiters, audiences.engineers]
