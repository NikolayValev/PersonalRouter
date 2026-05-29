import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/design-system/components/Button"
import { resume } from "@/lib/resume"

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm border border-border/60 px-2 py-0.5 text-xs text-muted-foreground">{children}</span>
  )
}

export function Resume() {
  return (
    <section className="space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-border/60 pb-5">
        <div>
          <h2 className="font-serif text-2xl tracking-tight md:text-3xl">{resume.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {resume.title} · {resume.location}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {resume.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
              {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {link.label}
            </Link>
          ))}
          {resume.pdfUrl && (
            <Link href={resume.pdfUrl} target="_blank" rel="noreferrer">
              <Button size="sm" className="gap-1.5">
                <Download className="size-3.5" />
                Resume PDF
              </Button>
            </Link>
          )}
        </div>
      </header>

      <p className="max-w-3xl text-sm leading-relaxed text-foreground/80 md:text-base">{resume.summary}</p>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Skills</h3>
        <div className="mt-4 space-y-3">
          {resume.skills.map((group) => (
            <div key={group.label} className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
              <span className="w-40 shrink-0 text-sm text-foreground/70">{group.label}</span>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Experience</h3>
        <div className="mt-4 space-y-6">
          {resume.experience.map((job) => (
            <div key={`${job.role}-${job.org}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="font-medium text-foreground">
                  {job.role} <span className="text-muted-foreground">· {job.org}</span>
                </p>
                <p className="text-xs text-muted-foreground">{job.period}</p>
              </div>
              {job.location && <p className="text-xs text-muted-foreground">{job.location}</p>}
              <ul className="mt-2 space-y-1.5 text-sm text-foreground/80">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-border" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {resume.education.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Education</h3>
          <div className="mt-4 space-y-3">
            {resume.education.map((edu) => (
              <div key={`${edu.credential}-${edu.institution}`} className="flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-sm text-foreground">
                  {edu.credential} <span className="text-muted-foreground">· {edu.institution}</span>
                  {edu.note && <span className="text-muted-foreground"> — {edu.note}</span>}
                </p>
                <p className="text-xs text-muted-foreground">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
