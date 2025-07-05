"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ProductCard } from "./ProductCard"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

export function FeaturedProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-200px" })
  const featuredProducts = products.slice(0, 3)

  const [currentIndex, setCurrentIndex] = useState(0)
  // Remove: const [isPlaying, setIsPlaying] = useState(true)

  const SLIDE_DURATION = 45000 // 45 seconds per product

  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % featuredProducts.length)
    }, SLIDE_DURATION)

    return () => clearInterval(interval)
  }, [isInView, featuredProducts.length])

  const scrollToProducts = () => {
    const element = document.getElementById("products")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const nextProduct = () => {
    setCurrentIndex((current) => (current + 1) % featuredProducts.length)
  }

  const prevProduct = () => {
    setCurrentIndex((current) => (current - 1 + featuredProducts.length) % featuredProducts.length)
  }

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/5 via-amber-500/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-yellow-600/5 via-orange-500/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 text-cinematic">
            <span className="text-luxury">Featured AI Agents</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-white/60 max-w-4xl mx-auto leading-relaxed">
            Discover our most sophisticated AI agents, each designed to revolutionize different aspects of your digital
            workflow with unprecedented elegance and intelligence.
          </p>
        </motion.div>

        {/* Horizontal Product Showcase */}
        <div className="relative mb-16">
          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevProduct}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-yellow-500/25 to-amber-500/25 backdrop-blur-sm border border-yellow-500/35 rounded-full flex items-center justify-center text-yellow-400 hover:border-yellow-500/55 transition-all duration-300 shadow-lg shadow-yellow-500/15"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextProduct}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-yellow-500/25 to-amber-500/25 backdrop-blur-sm border border-yellow-500/35 rounded-full flex items-center justify-center text-yellow-400 hover:border-yellow-500/55 transition-all duration-300 shadow-lg shadow-yellow-500/15"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Single Product Display */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <ProductCard product={featuredProducts[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Product Navigation Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center items-center gap-3 mb-16"
        >
          {/* Navigation Dots */}
          {featuredProducts.map((product, index) => (
            <motion.button
              key={product.id}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-yellow-400 to-amber-500 scale-125 glow-gold-soft shadow-lg"
                  : "bg-yellow-500/30 hover:bg-yellow-500/50"
              }`}
              aria-label={`Go to ${product.name}`}
            >
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-yellow-400/50"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  aria-hidden="true"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Current Product Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`info-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-light text-luxury mb-4">{featuredProducts[currentIndex].name}</h3>
              <p className="text-white/70 leading-relaxed mb-6">{featuredProducts[currentIndex].description}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {featuredProducts[currentIndex].capabilities.map((capability) => (
                  <span
                    key={capability}
                    className="px-4 py-2 glass-card rounded-full text-xs text-yellow-400 font-light tracking-wide"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="btn-luxury px-12 py-6 rounded-2xl text-lg font-light text-white border-0 glow-gold-soft hover:glow-gold-intense"
            >
              <span className="flex items-center gap-3">
                View All Agents
                <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
