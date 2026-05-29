import type { Metadata } from "next"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { WorkGrid } from "@/components/work-grid"
import { SiteFooter } from "@/components/site-footer"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Work | Nikolay Valev",
  description: "Projects, demos, and libraries built by Nikolay Valev.",
}

export default function WorkPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-serif text-lg transition-opacity hover:opacity-80">Nikolay Valev</Link>
            <nav className="hidden items-center gap-5 text-sm text-muted-foreground sm:flex">
              <Link href="/recruiters" className="transition-colors hover:text-foreground">Recruiters</Link>
              <Link href="/engineers" className="transition-colors hover:text-foreground">Engineers</Link>
              <Link href="/work" className="text-foreground">Work</Link>
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 md:px-6 md:py-16">
        <div className="mb-10 md:mb-14">
          <div className="mb-6 h-px w-16 bg-[var(--vde-color-accent)]" />
          <h1 className="font-serif text-4xl tracking-tight md:text-6xl">Work</h1>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Projects, demos, and libraries.
          </p>
        </div>

        <WorkGrid projects={projects} />
      </main>

      <SiteFooter />
    </div>
  )
}
