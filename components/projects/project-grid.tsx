"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

const categories = ["All", "Client Projects", "Student Projects", "Startup Projects", "Innovation Prototypes"] as const
type Category = (typeof categories)[number]

const projects: { title: string; category: Exclude<Category, "All">; image: string; summary: string }[] = [
  { title: "PanAfri Pay", category: "Startup Projects", image: "/images/projects.png", summary: "A cross-border payments platform serving merchants across West Africa." },
  { title: "AgriConnect", category: "Client Projects", image: "/images/services.png", summary: "A supply-chain platform connecting smallholder farmers to global buyers." },
  { title: "EduReach Mobile", category: "Student Projects", image: "/images/training.png", summary: "An offline-first learning app built during the Baobab mobile track." },
  { title: "HealthLink NGO Portal", category: "Client Projects", image: "/images/community.png", summary: "A patient management system for a pan-African health NGO." },
  { title: "Voca AI", category: "Innovation Prototypes", image: "/images/hackathon.png", summary: "A multilingual voice assistant prototype for African languages." },
  { title: "MarketPulse", category: "Startup Projects", image: "/images/ecosystem.png", summary: "Real-time market intelligence dashboards for SMEs." },
  { title: "DevPortfolio Builder", category: "Student Projects", image: "/images/talent.png", summary: "A portfolio generator built by UI/UX track graduates." },
  { title: "GridScan", category: "Innovation Prototypes", image: "/images/innovation-hub.png", summary: "An IoT energy-monitoring prototype incubated at the Hub." },
]

export function ProjectGrid() {
  const [active, setActive] = useState<Category>("All")
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={cn(
              "rounded-sm border px-4 py-2 text-sm font-medium transition-colors",
              active === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-sm border border-border bg-card">
            <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
              <Image
                src={p.image || "/placeholder.svg"}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-primary">{p.category}</p>
              <div className="mt-2 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
