import Link from "next/link"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/design-system/components/Card"
import { Button } from "@/components/design-system/components/Button"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isPortrait = project.imageOrientation === "portrait"

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-colors hover:border-[var(--vde-color-accent)]">
      {project.cover && (
        <div
          aria-hidden
          className={
            isPortrait
              ? "flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border/60 bg-muted/40 p-4"
              : "block overflow-hidden border-b border-border/60"
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.cover}
            alt=""
            className={
              isPortrait
                ? "h-full w-auto max-w-full rounded-sm object-contain shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
                : "block aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            }
            loading="lazy"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          {/* Stretched link: makes the whole card open the detail page, while the
              Live/Source buttons below stay independently clickable (z-10). */}
          <CardTitle className="font-serif text-xl">
            <Link
              href={`/work/${project.slug}`}
              className="transition-colors after:absolute after:inset-0 group-hover:text-[var(--vde-color-accent)]"
            >
              {project.name}
            </Link>
          </CardTitle>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:text-[var(--vde-color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="flex flex-1 flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-border/60 px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {(project.liveUrl || project.sourceUrl) && (
          <div className="relative z-10 flex gap-2">
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1">
                <Button size="sm" className="w-full gap-1.5">
                  <ExternalLink className="size-3.5" />
                  View
                </Button>
              </Link>
            )}
            {project.sourceUrl && (
              <Link href={project.sourceUrl} target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Github className="size-3.5" />
                  Source
                </Button>
              </Link>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
