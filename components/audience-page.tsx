import Link from "next/link"
import { Layout } from "@/components/design-system/components/Layout"
import { Button } from "@/components/design-system/components/Button"
import { ThemeToggle } from "@/components/theme-toggle"
import type { AudienceConfig } from "@/lib/audiences"

interface AudiencePageProps {
  audience: AudienceConfig
}

export function AudiencePage({ audience }: AudiencePageProps) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="border-b border-border/70">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Back to router
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl space-y-6 px-4 py-8 md:px-6 md:py-12">
        <Layout>
          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{audience.hero.eyebrow}</p>
          <h1 className="mt-2 font-serif text-3xl tracking-tight md:text-5xl">{audience.hero.heading}</h1>
          <p className="mt-4 max-w-3xl text-sm text-foreground/85 md:text-base">{audience.hero.summary}</p>
          <ul className="mt-5 space-y-2 text-sm text-foreground/80">
            {audience.hero.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </Layout>

        {audience.sections.map((section) => (
          <Layout key={section.title} heading={section.title}>
            <ul className="space-y-2 text-sm text-foreground/85 md:text-base">
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Layout>
        ))}

        <Layout>
          <p className="font-serif text-2xl">{audience.title}</p>
          <p className="mt-2 text-sm text-muted-foreground">{audience.cta.primaryNote}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href={audience.externalUrl} target="_blank" rel="noreferrer" className="sm:flex-1">
              <Button className="w-full">{audience.cta.primaryLabel}</Button>
            </Link>
            <Link href="/" className="sm:flex-1">
              <Button variant="outline" className="w-full">
                {audience.cta.secondaryLabel}
              </Button>
            </Link>
          </div>
        </Layout>
      </main>
    </div>
  )
}
