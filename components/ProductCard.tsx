"use client"

import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store"
import { ShoppingCart, Zap, Brain, Shield } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { AgentModel } from "./3d/AgentModel"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleAddToCart = () => {
    addToCart(product)
  }

  const getCapabilityIcon = (capability: string) => {
    switch (capability.toLowerCase()) {
      case "automation":
        return <Zap className="w-4 h-4" />
      case "intelligence":
        return <Brain className="w-4 h-4" />
      case "security":
        return <Shield className="w-4 h-4" />
      default:
        return <Zap className="w-4 h-4" />
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card rounded-3xl overflow-hidden group hover:glass-luxury transition-all duration-700 glow-gold-soft hover:glow-gold-intense p-12"
      style={{ minHeight: "500px" }}
    >
      {/* Horizontal Layout Container */}
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {/* Top Section - Title & Description */}
        <div className="text-center space-y-4 max-w-2xl">
          <h3 className="text-4xl font-light text-luxury tracking-wide">{product.name}</h3>
          <p className="text-white/70 text-lg leading-relaxed font-light">{product.description}</p>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleAddToCart}
                className="btn-luxury px-8 py-3 rounded-2xl font-light text-white border-0 glow-gold-soft hover:glow-gold-intense"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="btn-luxury px-8 py-3 rounded-2xl font-light text-white/80 bg-transparent hover:text-white border border-yellow-500/30 hover:border-yellow-500/50"
              >
                <span className="text-2xl font-extralight text-luxury mr-2">${product.price}</span>
                /month
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Center Section - 3D Model */}
        <div className="relative w-full max-w-md h-64">
          <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
            <Suspense fallback={null}>
              <Environment preset="city" />
              <ambientLight intensity={0.3} />
              <directionalLight position={[5, 5, 5]} intensity={0.8} color="#d4af37" />
              <group scale={0.7}>
                <AgentModel modelPath={product.modelPath} />
              </group>
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
            </Suspense>
          </Canvas>

          {/* Floating Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute top-4 right-4 px-4 py-2 rounded-full glass-luxury text-xs font-light text-yellow-400 tracking-wide"
          >
            Premium AI
          </motion.div>
        </div>

        {/* Bottom Section - Capabilities */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-3">
            {product.capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-white/70 font-light tracking-wide"
              >
                {getCapabilityIcon(capability)}
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
