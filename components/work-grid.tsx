"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import type { Project, ProjectType } from "@/lib/projects"

type Filter = "all" | ProjectType

const FILTER_LABELS: Record<Filter, string> = {
  all: "All",
  app: "Apps",
  game: "Games",
  library: "Libraries",
  tool: "Tooling",
  finance: "Finance",
}

/** Canonical filter order, so the row doesn't reshuffle when projects are reordered. */
const FILTER_ORDER: ProjectType[] = ["app", "game", "library", "tool", "finance"]

interface WorkGridProps {
  projects: Project[]
}

export function WorkGrid({ projects }: WorkGridProps) {
  const [active, setActive] = useState<Filter>("all")

  const present = new Set(projects.map((p) => p.type))
  const filters: Filter[] = ["all", ...FILTER_ORDER.filter((type) => present.has(type))]
  const countOf = (filter: Filter) =>
    filter === "all" ? projects.length : projects.filter((p) => p.type === filter).length

  const visible = active === "all" ? projects : projects.filter((p) => p.type === active)

  return (
    <div>
      {/* A quiet segmented row rather than filled buttons: the cards carry the
          colour, so the control that sits above them shouldn't compete. */}
      <div className="mb-8 flex flex-wrap items-center gap-x-1 gap-y-2 border-b border-border/60 pb-3">
        {filters.map((filter) => {
          const isActive = active === filter
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={isActive}
              className={`relative inline-flex items-baseline gap-1.5 rounded-sm px-2.5 py-1.5 text-sm transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              }`}
            >
              <span className={isActive ? "font-medium" : ""}>{FILTER_LABELS[filter]}</span>
              <span
                className={`text-[11px] tabular-nums ${
                  isActive ? "text-[var(--vde-color-accent)]" : "text-muted-foreground/60"
                }`}
              >
                {countOf(filter)}
              </span>
              {isActive && (
                <span
                  aria-hidden
                  className="absolute -bottom-[13px] left-0 h-px w-full bg-[var(--vde-color-accent)]"
                />
              )}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
