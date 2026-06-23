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
  location: "New York metro area",
  summary:
    "Frontend-leaning software engineer with full-stack range. At Medscape I build and maintain a Vue 3 design system that spans a dozen sites; on my own time I ship side projects end to end — games, a fixed-income terminal, and the design system this site runs on.",
  skills: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "C/C++", "SQL", "HTML/CSS"],
    },
    {
      label: "Frameworks",
      items: ["Vue 3", "React", "Next.js", "Node.js", "Express", "Tailwind", "Sass"],
    },
    {
      label: "Tooling",
      items: ["Git", "GitLab CI/CD", "Webpack", "Vite", "Turborepo", "Jest", "REST", "gRPC", "WCAG"],
    },
    {
      label: "Cloud & data",
      items: ["AWS", "Firebase", "PostgreSQL", "MongoDB", "DynamoDB", "S3", "GraphQL"],
    },
    {
      label: "AI tooling",
      items: ["Cline", "MCP", "Claude API"],
    },
  ],
  experience: [
    {
      role: "Frontend Software Developer",
      org: "Medscape",
      period: "Oct 2022 – Present",
      location: "Newark, New Jersey",
      bullets: [
        "Architected a Vue 3 design system deployed across 3 affiliates and 12 sites with multi-CMS integration (Medscape, Univadis, JIM); slot-based components and cross-site theming cut content-integration time by 25%.",
        "Spearheaded a Vue 2 → Vue 3 migration across a large multi-site codebase, improving build performance, bundle size, and developer experience.",
        "Led a mobile infinite-scroll experience built on virtual scrolling and micro-frontend lazy loading, lifting user retention 20% and engagement 15%.",
        "Hardened quality and automated deploys via GitLab CI/CD with Jest, ESLint, and Prettier, reducing deployment errors 40%.",
      ],
    },
    {
      role: "Web Developer Intern",
      org: "Superfan",
      period: "May 2022 – Oct 2022",
      location: "Brooklyn, New York",
      bullets: [
        "Built the company's first recurring revenue stream — an affiliate ticketing integration across Ticketmaster, SeatGeek, and two more platforms — enabling client discount codes and a repeatable B2B sales channel.",
        "Shipped custom React components for creator-facing features, scoping and delivering with PMs inside sprint cycles.",
      ],
    },
    {
      role: "Network Support Technician",
      org: "Ramapo College of New Jersey",
      period: "Sep 2018 – May 2022",
      location: "Mahwah, New Jersey",
      bullets: [
        "Automated management of 20K+ network devices with PHP/Cisco CLI scripting, eliminating manual configuration across campus systems.",
        "Deployed campus-wide network infrastructure (APs, VLANs, DHCP) serving 6K+ users with 100% uptime over four years.",
      ],
    },
  ],
  education: [
    {
      credential: "B.S. Computer Science, Minor in Mathematics",
      institution: "Ramapo College of New Jersey",
      period: "2018 – 2022",
      note: "Cum Laude, GPA 3.5 · Dean's List · Presidential Scholar",
    },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/NikolayValev" },
    { label: "LinkedIn", href: "https://linkedin.com/in/nikolayvalev" },
    { label: "Email", href: "mailto:hello@nikolayvalev.com" },
  ],
  // Drop a resume PDF in /public and set its path here, e.g. "/nikolay-valev-resume.pdf"
  pdfUrl: null,
}
