"use client"

import React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Shield, Users, Globe } from "lucide-react"
import Link from "next/link"
import { RobotModel } from "@/components/3d/RobotModel"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { TechnologySection } from "@/components/TechnologySection"
import { FeaturedProducts } from "@/components/home/featured-products"
import { AIAgentShowcase } from "@/components/home/ai-agent-showcase"
import { TechSpecs } from "@/components/home/tech-specs"
import { AboutSection } from "@/components/AboutSection"

function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentFeature, setCurrentFeature] = useState(0)

  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Sub-millisecond response times" },
    { icon: Shield, title: "Enterprise Security", desc: "Military-grade encryption" },
    { icon: Sparkles, title: "Advanced AI", desc: "GPT-4 powered intelligence" },
    { icon: Globe, title: "Global Scale", desc: "Worldwide deployment ready" },
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive 3D Model Background */}
      <div className="absolute inset-0 z-0" style={{ pointerEvents: "auto" }}>
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

          {/* Floating Gold Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-yellow-500/20 to-transparent rounded-full blur-3xl pointer-events-none"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-yellow-600/15 to-transparent rounded-full blur-3xl pointer-events-none"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Interactive 3D Model Container */}
        {mounted && (
          <Suspense fallback={null}>
            <Canvas
              camera={{ position: [0, 1, 8], fov: 45 }}
              style={{
                cursor: "grab",
              }}
              onPointerDown={(e) => {
                if (e.target instanceof HTMLCanvasElement) e.target.style.cursor = "grabbing"
              }}
              onPointerUp={(e) => {
                if (e.target instanceof HTMLCanvasElement) e.target.style.cursor = "grab"
              }}
            >
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow color="#ffd700" />
              <pointLight position={[-10, -10, -10]} intensity={1.0} color="#ffd700" />
              <RobotModel />
              <OrbitControls
                enableZoom
                enablePan
                enableRotate
                zoomSpeed={0.5}
                panSpeed={0.5}
                rotateSpeed={0.4}
                minDistance={3}
                maxDistance={12}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI - Math.PI / 4}
                autoRotate={false}
                enableDamping
                dampingFactor={0.05}
              />
              <Environment preset="city" />
            </Canvas>
          </Suspense>
        )}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 lg:px-8 relative z-10" style={{ pointerEvents: "none" }}>
          <div className="min-h-screen py-20 flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full backdrop-blur-sm mb-10 w-fit"
              style={{ pointerEvents: "auto" }}
            >
              <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">
                CREATED BY HAMZA ALNASIR{" "}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6 mb-10"
            >
              <h1 className="text-6xl lg:text-8xl font-extralight leading-[0.9] tracking-tight">
                <motion.span
                  className="block text-left text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  The Future
                </motion.span>
                <motion.span
                  className="block text-white text-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  of{" "}
                </motion.span>
                <motion.span
                  className="block text-white text-right"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="relative">
                    Intelligence
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light"
              >
                Experience the pinnacle of artificial intelligence with our{" "}
                <span className="text-yellow-400 font-medium">premium AI agents</span>. Crafted for enterprises that
                demand perfection, powered by revolutionary technology.
              </motion.p>
            </motion.div>

            {/* Animated Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative h-20 mb-10"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center space-x-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-yellow-500/25">
                    {React.createElement(features[currentFeature].icon, {
                      className: "w-8 h-8 text-black",
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">{features[currentFeature].title}</h3>
                    <p className="text-gray-400 text-lg">{features[currentFeature].desc}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 mb-12"
              style={{ pointerEvents: "auto" }}
            >
              <Link href="/products">
                <Button className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold px-10 py-6 text-lg rounded-2xl shadow-2xl shadow-yellow-500/25 group transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Explore Premium AI
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </Link>
              <Link href="/custom">
                <Button
                  variant="outline"
                  className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-10 py-6 text-lg bg-transparent rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25"
                >
                  Custom Solutions
                </Button>
              </Link>
            </motion.div>

            {/* Premium Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-12 border-t border-yellow-500/20"
            >
              {[
                { value: "99.99%", label: "Uptime Guarantee", icon: Shield },
                { value: "<10ms", label: "Response Time", icon: Zap },
                { value: "24/7", label: "Elite Support", icon: Users },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-yellow-400 mr-2" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Interactive Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="absolute bottom-8 right-8 text-yellow-400/60 text-sm font-medium pointer-events-none"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span>Drag to interact with the AI model</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <FeaturedProducts />
      <AIAgentShowcase />
      <TechnologySection />
      <TechSpecs />
      <AboutSection />
    </main>
  )
}
