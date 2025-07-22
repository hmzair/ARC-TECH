"use client"
import { useState, useEffect, Suspense } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { RobotModel } from "@/components/3d/RobotModel"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-center">
      <div className="absolute inset-0 z-0 bg-black">
        {mounted && (
          <Suspense fallback={null}>
            <Canvas
              camera={{ position: [0, 1, 8], fov: 45 }}
              style={{ cursor: "grab" }}
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

      <div className="relative z-10 container mx-auto px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full backdrop-blur-sm mb-8 w-fit"
        >
          <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">CREATED BY HAMZA ALNASIR</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-tight tracking-tight text-white"
        >
          The Future of <br />
          <span className="font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl font-light"
        >
          Experience the pinnacle of artificial intelligence with our{" "}
          <span className="text-yellow-400 font-medium">premium AI agents</span>. Crafted for enterprises that demand
          perfection, powered by revolutionary technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 mt-10"
        >
          <Link href="/products">
            <Button className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold px-10 py-6 text-lg rounded-2xl shadow-2xl shadow-yellow-500/25 group transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center">
                Explore Premium AI
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
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
      </div>
    </section>
  )
}
