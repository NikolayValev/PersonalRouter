"use client"

import { useState } from "react"
import { Button } from "@/components/design-system/components/Button"
import { ProjectCard } from "@/components/project-card"
import type { Project, ProjectType } from "@/lib/projects"

type Filter = "all" | ProjectType

const FILTER_LABELS: Record<Filter, string> = {
  all: "All",
  game: "Games",
  library: "Libraries",
  app: "Apps",
}

interface WorkGridProps {
  projects: Project[]
}

export function WorkGrid({ projects }: WorkGridProps) {
  const [active, setActive] = useState<Filter>("all")

  const types = Array.from(new Set(projects.map((p) => p.type))) as ProjectType[]
  const filters: Filter[] = ["all", ...types]

  const visible = active === "all" ? projects : projects.filter((p) => p.type === active)

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={active === filter ? "default" : "outline"}
            size="sm"
            onClick={() => setActive(filter)}
          >
            {FILTER_LABELS[filter]}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
