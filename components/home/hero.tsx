"use client";

import Image from "next/image";
import { ActionLink } from "@/components/site";
import { useScopedI18n } from "@/locales/client";

export function Hero() {
  const heroT = useScopedI18n("home.hero");

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-sm border border-border px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-sm bg-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              {heroT("badge")}
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            {heroT("title")}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {heroT("description")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href="/programs">{heroT("cta.joinProgram")}</ActionLink>

            <ActionLink href="/talent-4-startups" variant="outline">
              {heroT("cta.startups")}
            </ActionLink>

            <ActionLink href="/services" variant="outline">
              {heroT("cta.hireTalent")}
            </ActionLink>
          </div>

          <p className="mt-10 text-sm font-medium text-foreground">
            {heroT("tagline.train")}{" "}
            <span className="text-muted-foreground">
              {heroT("tagline.create")}
            </span>{" "}
            <span className="text-primary">{heroT("tagline.connect")}</span>
          </p>
        </div>

        <div className="relative aspect-[5/4] overflow-hidden rounded-sm border border-border lg:aspect-[4/3]">
          <Image
            src="/images/hero.jpg"
            alt={heroT("imageAlt")}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
