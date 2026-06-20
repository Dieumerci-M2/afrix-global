"use client";

import { PageHero, Section } from "@/components/site";
import { ContactForm } from "@/components/contact/contact-form";
import { Mail, MapPin, Globe, Link2, Share } from "lucide-react";
import { useScopedI18n } from "@/locales/client";

export default function ContactPage() {
  const t = useScopedI18n("contact");

  const info = [
    {
      icon: Mail,
      title: t("info.email.title"),
      lines: [
        "[hello@afrixglobal.com](mailto:hello@afrixglobal.com)",
        "[partnerships@afrixglobal.com](mailto:partnerships@afrixglobal.com)",
      ],
    },
    {
      icon: MapPin,
      title: t("info.office.title"),
      lines: [t("info.office.line1"), t("info.office.line2")],
    },
  ];

  const socials = [
    { icon: Globe, label: "LinkedIn" },
    { icon: Link2, label: "GitHub" },
    { icon: Share, label: "X" },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        description={t("hero.description")}
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
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {item.title}
                  </h3>

                  {item.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm text-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {t("socials.title")}
              </h3>

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
              <p className="text-base font-bold tracking-tight text-foreground">
                {t("card.title")}
              </p>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("card.description")}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
