"use client"

import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import { ShoppingCart, Zap, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AgentModel } from "./3d/AgentModel"
import { SubscriptionModal } from "./SubscriptionModal"
import { useCartStore } from "@/lib/store"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

function ModelFallback() {
  return (
    <mesh>
      <sphereGeometry args={[0.5]} />
      <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} />
    </mesh>
  )
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)
  const [modelLoaded, setModelLoaded] = useState(false)
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddToCart = () => {
    addToCart(product)
  }

  const handleSubscribe = () => {
    setShowSubscriptionModal(true)
  }

  return (
    <>
      <motion.div
        className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 w-full"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* 3D Model Section - Made Horizontal */}
        <div className="relative h-80 bg-gradient-to-br from-gray-800/50 to-gray-900/50 overflow-hidden">
          {/* Loading State */}
          {!modelLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full animate-pulse" />
            </div>
          )}

          <Canvas
            camera={{ position: [0, 0, 4], fov: 50 }}
            onCreated={() => setModelLoaded(true)}
            style={{ width: "100%", height: "100%" }}
          >
            <Suspense fallback={<ModelFallback />}>
              <Environment preset="city" />
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={1.2} color="#3b82f6" />
              <directionalLight position={[-5, 5, 5]} intensity={0.8} color="#8b5cf6" />
              <pointLight position={[0, 0, 5]} intensity={0.5} color="#06b6d4" />
              <AgentModel modelPath={product.modelPath || `/models/${product.id}.glb`} />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={1.5}
                maxPolarAngle={Math.PI / 1.8}
                minPolarAngle={Math.PI / 2.5}
              />
            </Suspense>
          </Canvas>

          {/* Overlay Badges */}
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">AI Agent</Badge>
            {product.featured && (
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
          </div>

          {/* Price Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-3 py-1">
              <span className="text-green-300 font-bold">₹{product.price}/mo</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              Key Features:
            </h4>
            <ul className="space-y-1">
              {product.features?.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-xs text-gray-400 flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-700/50">
            <div>
              <div className="text-xs text-gray-500">Category</div>
              <div className="text-sm text-gray-300 font-medium">{product.category}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Rating</div>
              <div className="text-sm text-gray-300 font-medium flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                {product.rating || 4.8}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleAddToCart}
              variant="outline"
              size="sm"
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 bg-transparent"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <Button
              onClick={handleSubscribe}
              size="sm"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 group"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />
      </motion.div>

      {/* Subscription Modal */}
      <SubscriptionModal
        product={product}
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
      />
    </>
  )
}
