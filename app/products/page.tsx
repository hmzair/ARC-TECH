import { ProductGrid } from "@/components/ProductGrid"
import { products } from "@/lib/data"

export const metadata = {
  title: "AI Agents | Arc-Tech",
  description:
    "Browse our collection of AI-powered digital agents. Each agent comes with unique capabilities and 3D visualization.",
}

export default function ProductsPage() {
  return (
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
  )
}
