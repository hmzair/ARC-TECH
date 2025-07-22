import { AboutSection } from "@/components/AboutSection"
import { TechnologySection } from "@/components/TechnologySection"
import { AboutHero } from "@/components/AboutHero"

export default function AboutPage() {
  return (
    <main className="flex-1 bg-black">
      <AboutHero />
      <AboutSection />
      <TechnologySection />
    </main>
  )
}
