import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/design-system/components/Card"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProjectCard } from "@/components/project-card"
import { SiteFooter } from "@/components/site-footer"
import { audienceList } from "@/lib/audiences"
import { featuredProjects } from "@/lib/projects"

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 md:px-6">
          <p className="font-serif text-lg">Nikolay Valev</p>
          <div className="flex items-center gap-5">
            <nav className="hidden items-center gap-5 text-sm text-muted-foreground sm:flex">
              <Link href="/recruiters" className="transition-colors hover:text-foreground">Recruiters</Link>
              <Link href="/engineers" className="transition-colors hover:text-foreground">Engineers</Link>
              <Link href="/work" className="transition-colors hover:text-foreground">Work</Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 md:px-6 md:py-20">
        {/* Hero */}
        <section className="max-w-3xl">
          <div className="mb-6 h-px w-16 bg-[var(--vde-color-accent)]" />
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Nikolay Valev
          </h1>
          <p className="mt-5 max-w-xl text-base text-foreground/80 md:text-lg">
            Software engineer building full-stack web apps with TypeScript, React, and Next.js — and shipping
            side projects end to end.
          </p>
        </section>

        {/* Audience entry */}
        <section className="mt-14 md:mt-20">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Start here</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {audienceList.map((audience) => (
              <Link key={audience.slug} href={audience.localPath} className="group block">
                <Card className="h-full transition-colors group-hover:border-[var(--vde-color-accent)]">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between font-serif text-2xl">
                      {audience.title}
                      <ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-[var(--vde-color-accent)]" />
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{audience.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/75">{audience.hero.summary}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured work */}
        <section className="mt-16 md:mt-24">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="font-serif text-2xl tracking-tight md:text-3xl">Selected work</h2>
            <Link href="/work" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
