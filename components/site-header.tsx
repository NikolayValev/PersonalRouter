import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"
import { SiteFooter } from "@/components/site-footer"

const nav = [
  { href: "/work", label: "Work" },
  { href: "/recruiters", label: "Resume" },
  { href: "/engineers", label: "Engineering" },
]

export function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="border-b border-border/60">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href="/" aria-label="Home" className="text-lg transition-opacity hover:opacity-80">
          <span className="sm:hidden">
            <Logo markOnly />
          </span>
          <span className="hidden sm:inline">
            <Logo />
          </span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <nav className="flex items-center gap-4 text-sm text-muted-foreground sm:gap-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current === item.href ? "page" : undefined}
                className={current === item.href ? "text-foreground" : "transition-colors hover:text-foreground"}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

/** Header, a centered main column, and the footer. */
export function PageShell({ current, children }: { current?: string; children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <SiteHeader current={current} />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 md:px-6 md:py-16">{children}</main>
      <SiteFooter />
    </div>
  )
}
