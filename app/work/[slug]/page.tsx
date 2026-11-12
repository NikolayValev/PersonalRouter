import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/design-system/components/Button"
import { Layout } from "@/components/design-system/components/Layout"
import { PageShell } from "@/components/site-header"
import { getProject, projects, STATUS_LABELS, TYPE_LABELS } from "@/lib/projects"

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
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const cover = project.cover
  // The cover is already shown above, so leave it out of the gallery.
  const screenshots = (project.screenshots ?? []).filter((src) => src !== cover)
  const isPortrait = project.imageOrientation === "portrait"

  return (
    <PageShell current="/work">
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Work
      </Link>

        <div className="mt-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <span className="text-[var(--vde-color-accent)]">{STATUS_LABELS[project.status]}</span>
          <span aria-hidden>·</span>
          <span>{TYPE_LABELS[project.type]}</span>
          {project.active && (
            <>
              <span aria-hidden>·</span>
              <span>Active</span>
            </>
          )}
        </div>
        <h1 className="mt-4 font-serif text-4xl tracking-tight md:text-6xl">{project.name}</h1>
        <p className="mt-4 text-base text-foreground/80 md:text-lg">{project.description}</p>

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
        </div>
      </div>

      {cover ? (
        <div
          className={
            isPortrait
              ? "mt-10 flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-md border border-border/60 bg-muted/40 p-6"
              : "mt-10 overflow-hidden rounded-md border border-border/60"
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cover}
            alt={`${project.name} screenshot`}
            className={
              isPortrait
                ? "block h-full w-auto max-w-full rounded-sm object-contain shadow-sm"
                : "block aspect-[16/10] w-full object-cover"
            }
            loading="lazy"
          />
        </div>
      ) : null}

      {/* Body */}
      <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
        <div className="md:col-span-2 space-y-10">
          {project.overview && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Overview</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85 md:text-base">{project.overview}</p>
            </section>
          )}

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
          <Layout heading="Built with">
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
                <dd className="text-foreground/85">
                  {STATUS_LABELS[project.status]}
                  {project.active && ", active"}
                </dd>
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

      {screenshots.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Screenshots</h2>
          <div className="-mx-4 mt-5 overflow-x-auto px-4 pb-3 md:-mx-6 md:px-6 [scrollbar-width:thin]">
            <ul className="flex snap-x snap-mandatory gap-4 md:gap-6">
              {screenshots.map((src, i) => (
                <li
                  key={src}
                  className="shrink-0 snap-start overflow-hidden rounded-md border border-border/60"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${project.name} screenshot ${i + 2}`}
                    className={
                      isPortrait
                        ? "block h-[420px] w-auto object-cover md:h-[520px]"
                        : "block h-[240px] w-auto object-cover md:h-[300px]"
                    }
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </PageShell>
  )
}
