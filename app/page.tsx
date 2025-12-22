import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  const audiences = [
    {
      title: "Recruiters",
      subtitle: "Evaluating me for a role",
      bullets: ["Resume, scope, impact", "Availability and role fit"],
      href: "https://recruiters.nikolayvalev.com",
    },
    {
      title: "Engineers",
      subtitle: "Assessing my work",
      bullets: ["Architecture, writing, decisions", "Open-source and side projects"],
      href: "https://engineers.nikolayvalev.com",
    },
    {
      title: "Clients",
      subtitle: "Hiring me for consulting",
      bullets: ["Services and past engagements", "Process and contact"],
      href: "https://clients.nikolayvalev.com",
    },
  ]

  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <main className="flex-1 flex items-center justify-center px-4 py-6 md:px-6 md:py-12">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-8 md:mb-20 space-y-1 md:space-y-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight">Nikolay Valev</h1>
            <p className="text-sm md:text-lg text-muted-foreground font-normal">
              Software Engineer · Technical Consultant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 lg:gap-16">
            {audiences.map((audience) => (
              <Link key={audience.title} href={audience.href} className="group block">
                <div className="border border-border bg-card rounded-lg p-5 md:p-8 h-full flex flex-col transition-all duration-200 hover:border-foreground/20 hover:shadow-sm">
                  <div className="space-y-1.5 md:space-y-3 mb-4 md:mb-6">
                    <h2 className="text-xl md:text-2xl font-serif font-normal">{audience.title}</h2>
                    <p className="text-xs md:text-sm text-muted-foreground">{audience.subtitle}</p>
                  </div>

                  <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-8 flex-1 text-xs md:text-sm text-foreground/70">
                    {audience.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>

                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-normal text-sm">
                    Visit →
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-4 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center gap-6 md:gap-8 text-xs md:text-sm text-muted-foreground/50">
            <Link
              href="https://github.com/nikolayvalev"
              className="hover:text-muted-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/nikolayvalev"
              className="hover:text-muted-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link href="mailto:hello@nikolayvalev.com" className="hover:text-muted-foreground transition-colors">
              Email
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
