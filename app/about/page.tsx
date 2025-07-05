import { AboutSection } from "@/components/AboutSection"
import { TechnologySection } from "@/components/TechnologySection"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "About Arc-Tech | The Future of AI",
  description:
    "Learn about Arc-Tech's mission to create intelligent digital agents that enhance human capabilities through advanced AI technology.",
}

export default function AboutPage() {
  return (
    <div>
      <AboutSection />
      <TechnologySection />
      <Footer />
    </div>
  )
}
