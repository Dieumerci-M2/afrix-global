import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

/* ---------- Section ---------- */
export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn("border-b border-border py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

/* ---------- Eyebrow ---------- */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-sm bg-primary" />
      <span className="text-xs font-semibold uppercase tracking-widest text-primary">{children}</span>
    </div>
  )
}

/* ---------- SectionHeading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

/* ---------- Button-like Link ---------- */
export function ActionLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: "primary" | "outline"
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-sm px-5 py-2.5 text-sm font-semibold transition-all",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:opacity-90"
          : "border border-border text-foreground hover:bg-secondary",
        className,
      )}
    >
      {children}
    </Link>
  )
}

/* ---------- MediaZone ---------- */
export function MediaZone({
  src,
  alt,
  className,
  aspect = "aspect-[4/3]",
  caption,
}: {
  src: string
  alt: string
  className?: string
  aspect?: string
  caption?: string
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-sm border border-border bg-card", aspect, className)}>
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      {caption ? (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
          <p className="text-sm font-medium text-foreground">{caption}</p>
        </div>
      ) : null}
    </div>
  )
}

/* ---------- PageHero ---------- */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">{description}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}

/* ---------- CTA band ---------- */
export function CtaBand({
  title,
  description,
  primary,
  secondary,
}: {
  title: string
  description: string
  primary: { href: string; label: string }
  secondary?: { href: string; label: string }
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-sm border border-border bg-card p-10 sm:p-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ActionLink href={primary.href}>{primary.label}</ActionLink>
              {secondary ? (
                <ActionLink href={secondary.href} variant="outline">
                  {secondary.label}
                </ActionLink>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
