import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/site-header"
import { Resume } from "@/components/resume"
import { featuredProjects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Resume | Nikolay Valev",
  description: "Resume and projects.",
}

export default function ResumePage() {
  return (
    <PageShell current="/resume">
      <Resume />

      <section className="mt-10">
        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Projects</h3>
        <ul className="mt-4 space-y-2.5 text-sm">
          {featuredProjects.map((project) => (
            <li key={project.slug} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
              <Link
                href={`/projects/${project.slug}`}
                className="w-48 shrink-0 font-medium text-foreground transition-colors hover:text-[var(--vde-color-accent)]"
              >
                {project.name}
              </Link>
              <span className="text-foreground/75">{project.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  )
}
