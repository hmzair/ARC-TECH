"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "./ProductCard"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate products every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [products.length])

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const goToProduct = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      {/* Main Product Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevProduct}
          className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Product Indicators */}
        <div className="flex gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProduct(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextProduct}
          className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Product Counter */}
      <div className="text-center">
        <span className="text-gray-400 text-sm">
          {currentIndex + 1} of {products.length}
        </span>
      </div>
    </div>
  )
}
