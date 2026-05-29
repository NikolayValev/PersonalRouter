import type { Metadata } from "next"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { WorkGrid } from "@/components/work-grid"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Work | Nikolay Valev",
  description: "Projects, demos, and libraries built by Nikolay Valev.",
}

export default function WorkPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="border-b border-border/70">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-serif text-lg hover:opacity-80">Nikolay Valev</Link>
            <nav className="hidden items-center gap-5 text-sm text-muted-foreground sm:flex">
              <Link href="/work" className="text-foreground">Work</Link>
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 md:py-14">
        <div className="mb-10 md:mb-14">
          <h1 className="font-serif text-4xl tracking-tight md:text-6xl">Work</h1>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Projects, demos, and libraries.
          </p>
        </div>

        <WorkGrid projects={projects} />
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
