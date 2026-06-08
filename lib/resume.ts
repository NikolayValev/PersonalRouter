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
  location: "New York City, USA",
  summary:
    "Software engineer focused on full-stack web development with TypeScript, React, and Next.js. I build and ship side projects end to end and I'm actively working toward senior-level depth.",
  skills: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "HTML", "CSS", "Python", "SQL"],
    },
    {
      label: "Frameworks",
      items: ["Vue.js","React", "Next.js", "Node.js", "Tailwind CSS",],
    },
    {
      label: "Tools",
      items: [ "Vite","Webpack","Jest","Playwright","Git"],
    },
    {
      label: "Platforms",
      items: ["Vercel", "Supabase", "Capacitor"],
    },
  ],
  experience: [
    {
      role: "Software Developer",
      org: "Medscape",
      period: "2022 – Now",
      location: "TODO: Location / Remote",
      bullets: [
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
      credential: "B.S. in Computer Science and minor in Mathematics",
      institution: "Ramapo College of New Jersey",
      period: "2018-2022",
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
