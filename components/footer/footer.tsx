"use client";

import Link from "next/link";
import { Globe, Link2, Mail, Share } from "lucide-react";
import { useScopedI18n } from "@/locales/client";

export function Footer() {
  const t = useScopedI18n("footer");

  const footerNav = [
    {
      title: t("ecosystem"),
      links: [
        { href: "/programs", label: t("programs") },
        { href: "/talent-4-startups", label: t("talent4Startups") },
        { href: "/services", label: t("services") },
        { href: "/innovation-hub", label: t("innovationHub") },
      ],
    },
    {
      title: t("company"),
      links: [
        { href: "/about", label: t("about") },
        { href: "/projects", label: t("projects") },
        { href: "/impact", label: t("impact") },
        { href: "/partners", label: t("partners") },
      ],
    },
    {
      title: t("connect"),
      links: [
        { href: "/contact", label: t("contact") },
        { href: "/programs", label: t("applyNow") },
        { href: "/partners", label: t("becomePartner") },
        { href: "/services", label: t("startProject") },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Globe,
      href: "#",
      label: "Website",
    },
    {
      icon: Link2,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: Share,
      href: "#",
      label: "Facebook",
    },
    {
      icon: Mail,
      href: "mailto:contact@afrixglobal.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
                <span className="font-bold text-primary-foreground">A</span>
              </div>

              <span className="text-lg font-bold text-foreground">
                Afrix Global
              </span>
            </Link>

            <h2 className="mt-6 text-2xl font-bold leading-tight text-balance">
              {t("headline")}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t("description")}
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded border border-border transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {section.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
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

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Afrix Global. {t("rights")}
          </p>

          <p className="text-sm text-muted-foreground">{t("footerTagline")}</p>
        </div>
      </div>
    </footer>
  );
}
