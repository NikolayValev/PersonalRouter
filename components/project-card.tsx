import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/design-system/components/Card"
import { Button } from "@/components/design-system/components/Button"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="font-serif text-xl">{project.name}</CardTitle>
          <span className="shrink-0 text-xs text-muted-foreground">{project.year}</span>
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

        <div className="flex gap-2">
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
      </CardContent>
    </Card>
  )
}
