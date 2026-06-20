import type { Metadata } from "next"
import { PageHero, Section } from "@/components/site"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, MapPin, Globe, Link2, Share } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact — Afrix Global",
  description: "Get in touch with Afrix Global. Train, hire talent, start a project, or become a partner.",
}

const info = [
  { icon: Mail, title: "Email", lines: ["hello@afrixglobal.com", "partnerships@afrixglobal.com"] },
  { icon: MapPin, title: "Office", lines: ["Innovation Hub, Tech District", "Open Mon–Fri, 9am–6pm"] },
]

const socials = [
  { icon: Globe, label: "LinkedIn" },
  { icon: Link2, label: "GitHub" },
  { icon: Share, label: "X" },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something together"
        description="Whether you want to train, hire talent, start a project, or partner with us — we'd love to hear from you."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          <ContactForm />

          <div className="flex flex-col gap-8">
            {info.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-border">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm text-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Follow us</h3>
              <div className="mt-3 flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-sm border border-border bg-card p-6">
              <p className="text-base font-bold tracking-tight text-foreground">We train. We create. We connect.</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Building Africa&apos;s next generation of digital talent and innovation.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
