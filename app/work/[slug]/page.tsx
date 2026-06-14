import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, FileText, Github } from "lucide-react"
import { Button } from "@/components/design-system/components/Button"
import { Layout } from "@/components/design-system/components/Layout"
import { ThemeToggle } from "@/components/theme-toggle"
import { SiteFooter } from "@/components/site-footer"
import { getProject, projects, type Project } from "@/lib/projects"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.name} | Nikolay Valev`,
    description: project.tagline ?? project.description,
  }
}

const STATUS_LABELS: Record<Project["status"], string> = {
  live: "Live",
  demo: "Demo",
  wip: "Work in progress",
}

const TYPE_LABELS: Record<Project["type"], string> = {
  game: "Game",
  library: "Library",
  app: "App",
  finance: "Finance",
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const cover = project.cover ?? `/projects/${project.slug}/cover.svg`
  const screenshots = project.screenshots ?? [
    `/projects/${project.slug}/01.svg`,
    `/projects/${project.slug}/02.svg`,
  ]
  const overview = project.overview ?? project.description

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-serif text-lg transition-opacity hover:opacity-80">
              Nikolay Valev
            </Link>
            <nav className="hidden items-center gap-5 text-sm text-muted-foreground sm:flex">
              <Link href="/recruiters" className="transition-colors hover:text-foreground">Recruiters</Link>
              <Link href="/engineers" className="transition-colors hover:text-foreground">Engineers</Link>
              <Link href="/work" className="text-foreground">Work</Link>
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 md:px-6 md:py-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Work
        </Link>

        {/* Title block */}
        <div className="mt-6 max-w-3xl">
          <div className="mb-5 h-px w-16 bg-[var(--vde-color-accent)]" />
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span className="text-[var(--vde-color-accent)]">{STATUS_LABELS[project.status]}</span>
            <span aria-hidden>·</span>
            <span>{TYPE_LABELS[project.type]}</span>
            <span aria-hidden>·</span>
            <span>{project.year}</span>
          </div>
          <h1 className="mt-4 font-serif text-4xl tracking-tight md:text-6xl">{project.name}</h1>
          <p className="mt-4 text-base text-foreground/80 md:text-lg">{project.tagline ?? project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button size="sm" className="gap-1.5">
                  <ExternalLink className="size-3.5" />
                  Visit live
                </Button>
              </Link>
            )}
            {project.sourceUrl && (
              <Link href={project.sourceUrl} target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Github className="size-3.5" />
                  Source
                </Button>
              </Link>
            )}
            {project.aboutUrl && (
              <Link href={project.aboutUrl} target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <FileText className="size-3.5" />
                  Write-up
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Cover */}
        <div className="mt-10 overflow-hidden rounded-md border border-border/60">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cover}
            alt={`${project.name} — cover`}
            className="block aspect-[16/10] w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Body */}
        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Overview</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85 md:text-base">{overview}</p>
            </section>

            {project.highlights && project.highlights.length > 0 && (
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Highlights</h2>
                <ul className="mt-4 space-y-2.5 text-sm text-foreground/85 md:text-base">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2.5">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--vde-color-accent)]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Aside: at a glance */}
          <aside className="md:col-span-1">
            <Layout heading="Tech">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-border/60 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <dl className="mt-5 space-y-2.5 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">Status</dt>
                  <dd className="text-foreground/85">{STATUS_LABELS[project.status]}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">Type</dt>
                  <dd className="text-foreground/85">{TYPE_LABELS[project.type]}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">Year</dt>
                  <dd className="text-foreground/85">{project.year}</dd>
                </div>
              </dl>
            </Layout>
          </aside>
        </div>

        {/* Gallery */}
        {/* TODO: replace the placeholder SVGs in public/projects/<slug>/ with real
            screenshots, then add a click-to-zoom lightbox here (deferred for now). */}
        {screenshots.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Screens</h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {screenshots.map((src, i) => (
                <div key={src} className="overflow-hidden rounded-md border border-border/60">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${project.name} — screen ${i + 1}`}
                    className="block aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
