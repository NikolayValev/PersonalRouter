// Structured resume data rendered on /recruiters by components/resume.tsx.
// Specifics flagged with TODO are placeholders — fill them with real values.

export interface ResumeExperience {
  role: string
  org: string
  period: string
  location?: string
  bullets: string[]
}

export interface ResumeEducation {
  credential: string
  institution: string
  period: string
  note?: string
}

export interface ResumeSkillGroup {
  label: string
  items: string[]
}

export interface ResumeLink {
  label: string
  href: string
}

export interface Resume {
  name: string
  title: string
  location: string
  summary: string
  skills: ResumeSkillGroup[]
  experience: ResumeExperience[]
  education: ResumeEducation[]
  links: ResumeLink[]
  /** Path to a downloadable PDF in /public, or null until one exists. */
  pdfUrl: string | null
}

export const resume: Resume = {
  name: "Nikolay Valev",
  title: "Software Engineer",
  // TODO: real location (or "Remote" / "City, Country")
  location: "TODO: City, Country",
  summary:
    "Software engineer focused on full-stack web development with TypeScript, React, and Next.js. I build and ship side projects end to end and I'm actively working toward senior-level depth.",
  skills: [
    {
      label: "Languages",
      // TODO: trim to what you'd defend in an interview
      items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      label: "Frameworks & tools",
      items: ["React", "Next.js", "Node.js", "Tailwind CSS", "Vite", "Git"],
    },
    {
      label: "Platforms",
      items: ["Vercel", "Supabase", "Capacitor"],
    },
  ],
  experience: [
    {
      // TODO: replace this entire entry with your real role(s)
      role: "TODO: Job Title",
      org: "TODO: Company",
      period: "TODO: Start – End",
      location: "TODO: Location / Remote",
      bullets: [
        "TODO: a concrete thing you built or shipped, with impact if you can quantify it.",
        "TODO: a second bullet — scope, ownership, or a measurable result.",
      ],
    },
    {
      role: "Independent projects",
      org: "Self-directed",
      period: "Ongoing",
      bullets: [
        "Designed, built, and deployed multiple web and game projects end to end (see Selected projects below).",
        "Maintain a reusable, token-driven design system across them.",
      ],
    },
  ],
  education: [
    {
      // TODO: replace with real education, or remove this entry
      credential: "TODO: Degree / Program",
      institution: "TODO: Institution",
      period: "TODO: Years",
    },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/nikolayvalev" },
    { label: "LinkedIn", href: "https://linkedin.com/in/nikolayvalev" },
    { label: "Email", href: "mailto:hello@nikolayvalev.com" },
  ],
  // TODO: drop a resume PDF in /public and set its path here, e.g. "/nikolay-valev-resume.pdf"
  pdfUrl: null,
}
