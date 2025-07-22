"use client"

import { useState, useEffect, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ArrowRight, Star } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei"
import { AgentModel } from "../3d/AgentModel"
import { featuredProducts } from "@/lib/data"
import Link from "next/link"

function ModelFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-yellow-400/50 border-t-yellow-400 rounded-full animate-spin" />
    </div>
  )
}

export function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNavigation("next")
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const handleNavigation = (direction: "next" | "prev") => {
    if (isAnimating) return
    setIsAnimating(true)
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length)
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredProducts.length) % featuredProducts.length)
    }
  }

  const goToProduct = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
  }

  const currentProduct = featuredProducts[currentIndex]

  return (
    <section className="relative min-h-screen bg-black py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-yellow-400/30 text-yellow-400">
            Featured AI Agents
          </Badge>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6 text-balance">
            Premium <span className="text-yellow-400">Intelligence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-balance">
            Discover our most advanced AI agents, each designed to revolutionize your workflow
          </p>
        </motion.div>

        <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleNavigation("prev")}
            className="w-12 h-12 rounded-full border-yellow-400/30 bg-black/50 backdrop-blur-md hover:bg-yellow-400/10 hover:border-yellow-400/50"
          >
            <ChevronLeft className="w-6 h-6 text-yellow-400" />
          </Button>
        </div>

        <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleNavigation("next")}
            className="w-12 h-12 rounded-full border-yellow-400/30 bg-black/50 backdrop-blur-md hover:bg-yellow-400/10 hover:border-yellow-400/50"
          >
            <ChevronRight className="w-6 h-6 text-yellow-400" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full max-w-lg mx-auto"
          >
            <div className="relative h-full w-full bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-yellow-400/20 backdrop-blur-md overflow-hidden">
              <Suspense fallback={<ModelFallback />}>
                <Canvas className="w-full h-full">
                  <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
                  <ambientLight intensity={0.4} />
                  <directionalLight position={[10, 10, 5]} intensity={0.8} color="#fbbf24" />
                  <directionalLight position={[-10, -10, -5]} intensity={0.4} color="#3b82f6" />
                  <pointLight position={[0, 5, 0]} intensity={0.6} color="#8b5cf6" />
                  <AgentModel modelPath={currentProduct.modelPath} />
                  <Environment preset="studio" />
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={1}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 3}
                  />
                </Canvas>
              </Suspense>
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-yellow-400/50" />
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-yellow-400/50" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-yellow-400/50" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-yellow-400/50" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md rounded-lg p-4 border border-yellow-400/20">
              <h4 className="text-yellow-400 font-medium mb-1">{currentProduct.name}</h4>
              <p className="text-gray-300 text-sm">{currentProduct.shortDescription}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-6"
              >
                <div>
                  <Badge variant="outline" className="mb-3 border-yellow-400/30 text-yellow-400">
                    {currentProduct.category}
                  </Badge>
                  <h3 className="text-4xl md:text-5xl font-light text-white mb-4 text-balance">
                    {currentProduct.name}
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed text-balance">{currentProduct.description}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-yellow-400 mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentProduct.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-xl p-6 border border-yellow-400/20">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-yellow-400">₹{currentProduct.price.toLocaleString()}</p>
                      <p className="text-gray-400 text-sm">Monthly subscription</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 font-medium">4.9</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/checkout" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-medium">
                        Subscribe Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href="/about">
                      <Button
                        variant="outline"
                        className="w-full border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 bg-transparent"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="flex justify-center items-center space-x-3 mt-12">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProduct(index)}
              aria-label={`Go to product ${index + 1}`}
              className={`transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? "w-8 h-2 bg-yellow-400 rounded-full"
                  : "w-2 h-2 bg-gray-600 rounded-full hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
