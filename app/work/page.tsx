import type { Metadata } from "next"
import { PageShell } from "@/components/site-header"
import { WorkGrid } from "@/components/work-grid"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Work | Nikolay Valev",
  description: "Projects by Nikolay Valev.",
}

export default function WorkPage() {
  return (
    <PageShell current="/work">
      <h1 className="mb-10 font-serif text-4xl tracking-tight md:mb-12 md:text-5xl">Work</h1>
      <WorkGrid projects={projects} />
    </PageShell>
  )
}
