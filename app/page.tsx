import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/design-system/components/Card"
import { Button } from "@/components/design-system/components/Button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProjectCard } from "@/components/project-card"
import { audienceList } from "@/lib/audiences"
import { featuredProjects } from "@/lib/projects"

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="border-b border-border/70">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div>
            <p className="font-serif text-lg">Nikolay Valev</p>
            <p className="text-xs text-muted-foreground">Software Engineer - Technical Consultant</p>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-5 text-sm text-muted-foreground sm:flex">
              <Link href="/work" className="hover:text-foreground">Work</Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 md:px-6 md:py-14">
        <div className="w-full">

          {/* Audience router */}
          <div className="mb-8 text-center md:mb-14">
            <h1 className="font-serif text-4xl tracking-tight md:text-6xl lg:text-7xl">Choose your path</h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
              One audience per page. No mixed messaging.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {audienceList.map((audience) => (
              <Card key={audience.slug} className="h-full">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">{audience.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{audience.subtitle}</p>
                </CardHeader>

                <CardContent className="flex h-full flex-col gap-5">
                  <ul className="flex-1 space-y-2 text-sm text-foreground/80">
                    {audience.hero.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <Link href={audience.localPath} className="block">
                      <Button className="w-full">Open local page</Button>
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      Continue to {audience.externalUrl.replace("https://", "")} from there.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured work */}
          <div className="mt-20 md:mt-28">
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="font-serif text-2xl tracking-tight md:text-3xl">Work</h2>
              <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>

        </div>
      </main>

      <footer className="mt-16 border-t border-border/70 py-5">
        <div className="mx-auto flex w-full max-w-7xl justify-center gap-8 px-4 text-sm text-muted-foreground md:px-6">
          <Link href="https://github.com/nikolayvalev" className="hover:text-foreground" target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/nikolayvalev" className="hover:text-foreground" target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
          <Link href="mailto:hello@nikolayvalev.com" className="hover:text-foreground">
            Email
          </Link>
        </div>
      </footer>
    </div>
  )
}
