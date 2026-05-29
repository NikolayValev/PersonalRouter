import type { Metadata } from "next"
import { AudienceShell, AudienceIntro } from "@/components/audience-page"
import { Resume } from "@/components/resume"
import { ProjectCard } from "@/components/project-card"
import { audiences } from "@/lib/audiences"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Recruiters | Nikolay Valev",
  description: "Resume, skills, and selected projects — the short version, built to scan.",
}

const selectedProjects = projects.filter((project) => project.recruiterHighlight)

export default function RecruitersPage() {
  return (
    <AudienceShell>
      <AudienceIntro audience={audiences.recruiters} />

      <div className="mt-16">
        <Resume />
      </div>

      {selectedProjects.length > 0 && (
        <div className="mt-16">
          <h2 className="font-serif text-2xl tracking-tight md:text-3xl">Selected projects</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}
    </AudienceShell>
  )
}
