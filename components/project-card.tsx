import Link from "next/link"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/design-system/components/Card"
import { ProjectCover } from "@/components/project-cover"
import { STATUS_LABELS, TYPE_LABELS, type Project } from "@/lib/projects"
import { TrackedProjectLink } from "@/components/tracked-project-link"

interface ProjectCardProps {
  project: Project
}

/** Tags past this point collapse into a "+N" chip, keeping the row to one line. */
const VISIBLE_TAGS = 3

/**
 * Status is carried by a single dot rather than a colored badge — the site runs
 * on one accent, so shape does the work colour would normally do: filled for
 * live, hollow for in-progress, muted for a demo.
 */
function StatusDot({ status }: { status: Project["status"] }) {
  const style =
    status === "live"
      ? "bg-[var(--vde-color-accent)]"
      : status === "wip"
        ? "border border-[var(--vde-color-accent)] bg-transparent"
        : "bg-muted-foreground/50"

  return <span aria-hidden className={`size-1.5 shrink-0 rounded-full ${style}`} />
}

export function ProjectCard({ project }: ProjectCardProps) {
  const extraTags = project.tags.length - VISIBLE_TAGS

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-colors hover:border-[var(--vde-color-accent)]">
      <ProjectCover project={project} />

      {/* One wrapper child so CardHeader's own space-y-1.5 never fights the
          margins below. */}
      <CardHeader>
        <div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <StatusDot status={project.status} />
            <span>{STATUS_LABELS[project.status]}</span>
            <span aria-hidden className="text-border">/</span>
            <span>{TYPE_LABELS[project.type]}</span>
            <span className="ml-auto tabular-nums">{project.year}</span>
          </div>

          <div className="mt-2.5 flex items-start justify-between gap-2">
            {/* Stretched link: makes the whole card open the detail page, while the
                Live/Source links below stay independently clickable (z-10). */}
            <CardTitle className="font-serif text-xl">
              <Link
                href={`/work/${project.slug}`}
                className="transition-colors after:absolute after:inset-0 group-hover:text-[var(--vde-color-accent)]"
              >
                {project.name}
              </Link>
            </CardTitle>
            <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-all group-hover:text-[var(--vde-color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
            {project.description}
          </p>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, VISIBLE_TAGS).map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-border/60 px-2 py-0.5 text-xs text-muted-foreground transition-colors group-hover:border-border"
            >
              {tag}
            </span>
          ))}
          {extraTags > 0 && (
            <span className="px-1 py-0.5 text-xs text-muted-foreground/70" title={project.tags.slice(VISIBLE_TAGS).join(", ")}>
              +{extraTags}
            </span>
          )}
        </div>

        {(project.liveUrl || project.sourceUrl) && (
          <div className="relative z-10 flex items-center gap-5 border-t border-border/60 pt-3.5 text-sm">
            {project.liveUrl && (
              <TrackedProjectLink
                href={project.liveUrl}
                project={project.slug}
                destination="live"
                className="inline-flex items-center gap-1.5 font-medium text-[var(--vde-color-accent)] transition-opacity hover:opacity-75"
              >
                <ExternalLink className="size-3.5" />
                Visit
              </TrackedProjectLink>
            )}
            {project.sourceUrl && (
              <TrackedProjectLink
                href={project.sourceUrl}
                project={project.slug}
                destination="source"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-3.5" />
                Source
              </TrackedProjectLink>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
