import Link from "next/link"

const links = [
  { label: "GitHub", href: "https://github.com/nikolayvalev", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/nikolayvalev", external: true },
  { label: "Email", href: "mailto:hello@nikolayvalev.com", external: false },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-border/60 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row md:px-6">
        <p className="order-2 sm:order-1">© {year} Nikolay Valev</p>
        <div className="order-1 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:order-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-foreground"
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
