import Link from "next/link"
import { Button } from "@/components/design-system/components/Button"
import { ProjectCard } from "@/components/project-card"
import { PageShell } from "@/components/site-header"
import { featuredProjects, HOME_PROJECT_COUNT } from "@/lib/projects"

export default function HomePage() {
  return (
    <PageShell>
      <section className="max-w-2xl md:pt-4">
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">Nikolay Valev</h1>
        <p className="mt-5 text-base text-foreground/80 md:text-lg">
          Software engineer in the New York area. I work on the frontend at Medscape and build my own projects on
          the side, most of which are live below.
        </p>
        <div className="mt-7 flex flex-wrap gap-2.5">
          <Link href="/recruiters">
            <Button size="sm">Resume</Button>
          </Link>
          <Link href="mailto:hello@nikolayvalev.com">
            <Button variant="outline" size="sm">
              hello@nikolayvalev.com
            </Button>
          </Link>
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl tracking-tight md:text-3xl">Projects</h2>
          <Link href="/work" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            All projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {featuredProjects.slice(0, HOME_PROJECT_COUNT).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </PageShell>
  )
}
