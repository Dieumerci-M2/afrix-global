import { Hero } from "@/components/home/hero"
import {
  ImpactMetrics,
  Ecosystem,
  ProgramsOverview,
  ServicesOverview,
  InnovationHubFeature,
  FeaturedProjects,
  SuccessStories,
  PartnersStrip,
} from "@/components/home/sections"
import { CtaBand } from "@/components/site"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactMetrics />
      <Ecosystem />
      <ProgramsOverview />
      <ServicesOverview />
      <InnovationHubFeature />
      <FeaturedProjects />
      <SuccessStories />
      <PartnersStrip />
      <CtaBand
        title="Ready to build Africa's digital future?"
        description="Whether you want to train, hire talent, or launch a startup — the Afrix Global ecosystem is your launchpad."
        primary={{ href: "/programs", label: "Join Baobab Program" }}
        secondary={{ href: "/contact", label: "Talk to us" }}
      />
    </>
  )
}
