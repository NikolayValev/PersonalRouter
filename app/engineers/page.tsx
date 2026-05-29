import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { AudienceShell, AudienceIntro } from "@/components/audience-page"
import { Layout } from "@/components/design-system/components/Layout"
import { audiences } from "@/lib/audiences"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Engineers | Nikolay Valev",
  description: "How I build, with the tradeoffs left in — plus notes on the projects where the interesting decisions live.",
}

const annotatedProjects = projects.filter((project) => project.engineerNote)

export default function EngineersPage() {
  return (
    <AudienceShell>
      <AudienceIntro audience={audiences.engineers} />

      {annotatedProjects.length > 0 && (
        <div className="mt-16">
          <h2 className="font-serif text-2xl tracking-tight md:text-3xl">Under the hood</h2>
          <div className="mt-6 space-y-4">
            {annotatedProjects.map((project) => (
              <Layout key={project.slug}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-serif text-xl">{project.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                      >
                        <ExternalLink className="size-3.5" />
                        Live
                      </Link>
                    )}
                    {project.sourceUrl && (
                      <Link
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                      >
                        <Github className="size-3.5" />
                        Source
                      </Link>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{project.engineerNote}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-border/60 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Layout>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12">
        <Layout heading="Something cool">
          <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
            This whole site runs on a design system I built where components never hardcode colors — they read
            CSS custom properties. The terracotta accent and warm neutrals you&apos;re looking at are a handful
            of variable overrides on top of the package&apos;s defaults; swapping a theme is swapping a set of
            tokens, not rewriting components.
          </p>
        </Layout>
      </div>
    </AudienceShell>
  )
}
