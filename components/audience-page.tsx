import Link from "next/link"
import { Layout } from "@/components/design-system/components/Layout"
import { ThemeToggle } from "@/components/theme-toggle"
import { SiteFooter } from "@/components/site-footer"
import type { AudienceConfig } from "@/lib/audiences"

interface AudienceShellProps {
  children: React.ReactNode
}

/**
 * Shared chrome for the /recruiters and /engineers routes: a slim header with
 * a back link + theme toggle, a constrained main column, and the site footer.
 * Each route supplies its own body.
 */
export function AudienceShell({ children }: AudienceShellProps) {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            ← Nikolay Valev
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 md:px-6 md:py-16">{children}</main>

      <SiteFooter />
    </div>
  )
}

interface AudienceIntroProps {
  audience: AudienceConfig
}

/** Shared hero + section blocks rendered from an AudienceConfig. */
export function AudienceIntro({ audience }: AudienceIntroProps) {
  return (
    <>
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--vde-color-accent)]">{audience.hero.eyebrow}</p>
        <h1 className="mt-3 font-serif text-3xl tracking-tight md:text-5xl">{audience.hero.heading}</h1>
        <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-base">{audience.hero.summary}</p>
        <ul className="mt-5 space-y-1.5 text-sm text-foreground/75">
          {audience.hero.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-[var(--vde-color-accent)]" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {audience.sections.length > 0 && (
        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
          {audience.sections.map((section) => (
            <Layout key={section.title} heading={section.title}>
              <ul className="space-y-2 text-sm text-foreground/80">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Layout>
          ))}
        </div>
      )}
    </>
  )
}
