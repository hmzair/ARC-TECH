import { HeroSection } from "@/components/HeroSection"
import { FeaturedProducts } from "@/components/FeaturedProducts"
import { TechSpecs } from "@/components/TechSpecs"
import { ProductGrid } from "@/components/ProductGrid"
import { AboutSection } from "@/components/AboutSection"
import { TechnologySection } from "@/components/TechnologySection"
import { CheckoutSection } from "@/components/CheckoutSection"
import { Footer } from "@/components/Footer"
import { products } from "@/lib/data"

export default function HomePage() {
  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen">
      {/* Hero Section */}
      <section id="home" className="snap-start min-h-screen">
        <HeroSection />
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="snap-start min-h-screen">
        <FeaturedProducts />
      </section>

      {/* Tech Specs Section */}
      <section id="tech" className="snap-start min-h-screen">
        <TechSpecs />
      </section>

      {/* Products Section */}
      <section id="products" className="snap-start min-h-screen">
        <div className="min-h-screen pt-20 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
                AI Agent Collection
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover our range of intelligent digital agents, each designed for specific tasks and enhanced with
                advanced AI capabilities.
              </p>
            </div>
            <ProductGrid products={products} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="snap-start min-h-screen">
        <AboutSection />
      </section>

      {/* Technology Section */}
      <section id="technology" className="snap-start min-h-screen">
        <TechnologySection />
      </section>

      {/* Checkout Section */}
      <section id="checkout" className="snap-start min-h-screen">
        <CheckoutSection />
      </section>

      {/* Footer Section */}
      <section id="footer" className="snap-start min-h-screen">
        <Footer />
      </section>
    </main>
  )
}
