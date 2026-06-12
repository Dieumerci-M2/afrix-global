import Link from "next/link"
import { Mail, Globe, Link2, Share } from "lucide-react"

const footerNav = [
  {
    title: "Ecosystem",
    links: [
      { href: "/programs", label: "Programs" },
      { href: "/talent-4-startups", label: "Talent 4 Startups" },
      { href: "/services", label: "Services" },
      { href: "/innovation-hub", label: "Innovation Hub" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/impact", label: "Impact" },
      { href: "/partners", label: "Partners" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/programs", label: "Apply Now" },
      { href: "/partners", label: "Become a Partner" },
      { href: "/services", label: "Start a Project" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary">
                <span className="font-mono text-sm font-bold text-primary-foreground">A</span>
              </div>
              <span className="text-base font-bold tracking-tight text-foreground">Afrix Global</span>
            </Link>
            <p className="mt-6 text-2xl font-bold leading-tight tracking-tight text-foreground text-balance">
              We train. We create. We connect.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Building Africa&apos;s next generation of digital talent and startups through real-world international
              projects.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Globe, Link2, Share, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">Social link</span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{col.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground/80 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Afrix Global. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Talent · Innovation · Opportunity</p>
        </div>
      </div>
    </footer>
  )
}
