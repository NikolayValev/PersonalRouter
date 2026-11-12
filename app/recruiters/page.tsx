import type { Metadata } from "next"
import { PageShell } from "@/components/site-header"
import { Resume } from "@/components/resume"
import { ProjectCard } from "@/components/project-card"
import { featuredProjects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Resume | Nikolay Valev",
  description: "Resume, skills, and projects.",
}

export default function RecruitersPage() {
  return (
    <PageShell current="/recruiters">
      <Resume />

      <section className="mt-16">
        <h2 className="font-serif text-2xl tracking-tight md:text-3xl">Projects</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </PageShell>
  )
}
