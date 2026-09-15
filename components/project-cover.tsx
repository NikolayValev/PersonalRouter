import type { Project } from "@/lib/projects"

interface ProjectCoverProps {
  project: Project
}

/** Initials used by the typographic fallback: "Bond Visualizer" -> "BV". */
function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
}

/**
 * Card cover art. Projects with a screenshot get the screenshot; the rest get
 * a typographic panel drawn from design tokens, so a project without imagery
 * (Ralph has no UI to screenshot) still holds its place in the grid instead of
 * leaving a ragged hole.
 */
export function ProjectCover({ project }: ProjectCoverProps) {
  const src = project.cardImage ?? project.cover

  if (src) {
    return (
      <div aria-hidden className="overflow-hidden border-b border-border/60 bg-muted/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          className="block aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div
      aria-hidden
      className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-border/60 bg-muted/40"
    >
      {/* Faint diagonal rule, the same hairline motif used under page headings. */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_45%,var(--vde-color-accent)_50%,transparent_55%)] opacity-[0.07]" />
      <span className="font-serif text-6xl leading-none tracking-tight text-foreground/15 transition-colors duration-500 group-hover:text-foreground/25">
        {initials(project.name)}
      </span>
    </div>
  )
}
