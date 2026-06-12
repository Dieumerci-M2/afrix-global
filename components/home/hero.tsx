import Image from "next/image"
import { ActionLink } from "@/components/site"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-sm border border-border px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-sm bg-primary" />
            <span className="text-xs font-medium text-muted-foreground">Talent · Innovation · Opportunity Ecosystem</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Building Africa&apos;s Next Generation of Digital Talent & Innovation
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Afrix Global is a Talent, Innovation & Opportunity Ecosystem that trains, creates, and connects African
            digital talent to global opportunities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href="/programs">Join Baobab Program</ActionLink>
            <ActionLink href="/talent-4-startups" variant="outline">
              Talent 4 Startups
            </ActionLink>
            <ActionLink href="/services" variant="outline">
              Hire Our Talent
            </ActionLink>
          </div>
          <p className="mt-10 text-sm font-medium text-foreground">
            We train. <span className="text-muted-foreground">We create.</span>{" "}
            <span className="text-primary">We connect.</span>
          </p>
        </div>

        <div className="relative aspect-[5/4] overflow-hidden rounded-sm border border-border lg:aspect-[4/3]">
          <Image
            src="/images/hero-main.png"
            alt="Young African digital professionals collaborating in a modern tech office"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
