export type AudienceSlug = "recruiters" | "engineers" | "clients"

export interface AudienceConfig {
  slug: AudienceSlug
  title: string
  subtitle: string
  localPath: string
  externalUrl: string
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
  cta: {
    primaryLabel: string
    primaryNote: string
    secondaryLabel: string
  }
}

export const audiences: Record<AudienceSlug, AudienceConfig> = {
  recruiters: {
    slug: "recruiters",
    title: "Recruiters",
    subtitle: "Evaluating fit for a role",
    localPath: "/recruiters",
    externalUrl: "https://recruiters.nikolayvalev.com",
    hero: {
      eyebrow: "Hiring signal",
      heading: "Fast role-fit review without guesswork",
      summary:
        "This page is a short decision surface. It tells you what kind of problems I solve, how I work with teams, and when to move to the full recruiter-focused site.",
      highlights: [
        "Scope and impact at product and platform layers",
        "Hiring constraints: level, domain, and collaboration model",
        "Clear handoff to resume details and role-specific proof",
      ],
    },
    sections: [
      {
        title: "What You Can Validate Quickly",
        points: [
          "Delivery range: product features, platform reliability, and technical leadership.",
          "Communication style: direct written decisions, clear tradeoff framing, low noise.",
          "Ownership level: from execution-heavy contributions to cross-team technical direction.",
        ],
      },
      {
        title: "How I Operate In Teams",
        points: [
          "I optimize for sustained delivery over heroics.",
          "I de-risk roadmap work by making assumptions explicit early.",
          "I keep architecture discussions grounded in user and business impact.",
        ],
      },
      {
        title: "When To Continue",
        points: [
          "Move to the recruiter site if you need detailed work history.",
          "Use the full profile for role matching, availability, and compensation context.",
          "If the opening requires hybrid product and infrastructure ownership, continue now.",
        ],
      },
    ],
    cta: {
      primaryLabel: "Continue to recruiter profile",
      primaryNote: "Full resume, role alignment, and hiring context.",
      secondaryLabel: "Back to router",
    },
  },
  engineers: {
    slug: "engineers",
    title: "Engineers",
    subtitle: "Assessing technical depth",
    localPath: "/engineers",
    externalUrl: "https://engineers.nikolayvalev.com",
    hero: {
      eyebrow: "Technical signal",
      heading: "Architecture and execution, with explicit tradeoffs",
      summary:
        "This page is for peers who want to evaluate engineering quality. It highlights system design posture, implementation discipline, and where to review deeper technical material.",
      highlights: [
        "Production constraints considered before abstractions",
        "Decision logs that explain why, not only what",
        "Consistent attention to reliability, readability, and changeability",
      ],
    },
    sections: [
      {
        title: "Engineering Priorities",
        points: [
          "Prefer boring, well-understood building blocks where they meet the requirement.",
          "Use complexity only when it buys measurable resilience or velocity.",
          "Keep interfaces stable and internal mechanics replaceable.",
        ],
      },
      {
        title: "Delivery Mechanics",
        points: [
          "Small, reviewable increments with clear rollback boundaries.",
          "Testing strategy centered on behavior and failure modes, not coverage theater.",
          "Operational readiness treated as part of done, not post-launch cleanup.",
        ],
      },
      {
        title: "Where To Dive Deeper",
        points: [
          "Continue to the engineer site for project writeups and architecture notes.",
          "Review examples of how product constraints shaped implementation choices.",
          "Use the deeper content when you need code-level confidence, not surface claims.",
        ],
      },
    ],
    cta: {
      primaryLabel: "Continue to engineering profile",
      primaryNote: "Architecture notes, project detail, and technical writing.",
      secondaryLabel: "Back to router",
    },
  },
  clients: {
    slug: "clients",
    title: "Clients",
    subtitle: "Hiring for consulting outcomes",
    localPath: "/clients",
    externalUrl: "https://clients.nikolayvalev.com",
    hero: {
      eyebrow: "Engagement signal",
      heading: "Consulting built around outcomes, not activity",
      summary:
        "This page helps you decide if a consulting engagement makes sense. It outlines problem fit, engagement structure, and what to expect from collaboration.",
      highlights: [
        "Outcome-oriented scope definition and execution plans",
        "Direct communication cadence with clear accountability",
        "Pragmatic decisions that balance speed, quality, and future cost",
      ],
    },
    sections: [
      {
        title: "Best-Fit Engagements",
        points: [
          "Product teams needing senior execution plus technical direction.",
          "Early-stage systems that need stabilization without heavyweight process.",
          "Complex delivery where scope and architecture need to evolve together.",
        ],
      },
      {
        title: "Working Model",
        points: [
          "Start with constraints, risks, and success criteria before implementation.",
          "Translate strategy into weekly deliverables with visible progress.",
          "Provide concise written updates so decisions remain traceable.",
        ],
      },
      {
        title: "When To Continue",
        points: [
          "Continue to the client site for services, engagement options, and contact flow.",
          "Use that page when you are evaluating budget, timeline, and fit.",
          "If you need a partner who can ship while shaping direction, continue now.",
        ],
      },
    ],
    cta: {
      primaryLabel: "Continue to client profile",
      primaryNote: "Services, engagement models, and direct contact.",
      secondaryLabel: "Back to router",
    },
  },
}

export const audienceList = [audiences.recruiters, audiences.engineers, audiences.clients]
