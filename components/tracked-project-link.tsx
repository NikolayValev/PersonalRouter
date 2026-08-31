"use client"

import type React from "react"
import Link from "next/link"
import posthog from "posthog-js"

interface TrackedProjectLinkProps {
  href: string
  /** Project slug, so the event can be grouped per project. */
  project: string
  /** Which of the card's two outbound buttons was used. */
  destination: "live" | "source"
  className?: string
  children: React.ReactNode
}

/**
 * Outbound project link that reports the click to PostHog.
 *
 * Kept as its own client component so ProjectCard stays server-renderable --
 * it is imported from both server pages (app/page.tsx, app/recruiters/page.tsx)
 * and a client one (components/work-grid.tsx).
 */
export function TrackedProjectLink({
  href,
  project,
  destination,
  className,
  children,
}: TrackedProjectLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={() => posthog.capture("project_link_clicked", { project, destination, url: href })}
    >
      {children}
    </Link>
  )
}
