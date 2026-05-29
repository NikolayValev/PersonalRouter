import Link from "next/link"

const links = [
  { label: "GitHub", href: "https://github.com/nikolayvalev", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/nikolayvalev", external: true },
  { label: "Email", href: "mailto:hello@nikolayvalev.com", external: false },
]

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 py-6">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 text-sm text-muted-foreground md:px-6">
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
    </footer>
  )
}
