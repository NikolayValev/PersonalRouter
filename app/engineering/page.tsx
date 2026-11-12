import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/site-header"
import { projects, TYPE_LABELS } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Engineering | Nikolay Valev",
  description: "How each project is built.",
}

const annotatedProjects = projects.filter((project) => project.engineerNote)

export default function EngineersPage() {
  return (
    <PageShell current="/engineering">
      <div className="max-w-2xl">
        <h1 className="font-serif text-4xl tracking-tight md:text-5xl">Engineering</h1>
      </div>

      <div className="mt-12 divide-y divide-border/60 border-t border-border/60">
        {annotatedProjects.map((project) => (
          <article key={project.slug} className="py-8 md:grid md:grid-cols-[13rem_1fr] md:gap-8">
            <div>
              <h2 className="font-serif text-xl">
                <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-[var(--vde-color-accent)]">
                  {project.name}
                </Link>
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {TYPE_LABELS[project.type]}
              </p>
              <div className="mt-3 flex gap-4 text-sm text-muted-foreground">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">
                    Live
                  </a>
                )}
                {project.sourceUrl && (
                  <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">
                    Source
                  </a>
                )}
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm leading-relaxed text-foreground/85 md:text-base">{project.engineerNote}</p>
              <p className="mt-3 text-xs text-muted-foreground">{project.tags.join(" · ")}</p>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  )
}
