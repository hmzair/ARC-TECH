"use client"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0001-0069-GXWRvSr2kbJE8mDGT6ZU0QMLDI9FGz.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 hero-overlay" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gradient-to-r from-yellow-400/40 to-amber-500/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-luxury mb-12"
        >
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <span className="text-sm font-light text-yellow-400 tracking-wide">Created by Hamza Alnasir</span>
        </motion.div>

        {/* Main Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-extralight leading-none tracking-tighter text-cinematic"
            animate={{
              textShadow: [
                "0 0 40px rgba(212, 175, 55, 0.3)",
                "0 0 80px rgba(212, 175, 55, 0.5)",
                "0 0 40px rgba(212, 175, 55, 0.3)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <span className="text-luxury">ARC-TECH</span>
          </motion.h1>

          {/* Glow rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="w-[600px] h-[300px] border border-yellow-500/10 rounded-full"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 space-y-6"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight text-cinematic">
            <span className="text-white/90">Intelligence</span> <span className="text-luxury">Refined</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/60 max-w-4xl mx-auto leading-relaxed">
            Your AI-powered digital agents — sleek, smart, and stunning.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              onClick={() => {
                const element = document.getElementById("featured")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              size="lg"
              className="btn-luxury px-12 py-6 rounded-2xl text-lg font-light text-white border-0 glow-gold-soft hover:glow-gold-intense"
            >
              <span className="flex items-center gap-3">
                Explore AI Agents
                <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              onClick={() => {
                const element = document.getElementById("about")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              variant="outline"
              size="lg"
              className="btn-luxury px-12 py-6 rounded-2xl text-lg font-light text-white/80 bg-transparent hover:text-white"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            { value: "50+", label: "Premium Agents" },
            { value: "99.9%", label: "Precision Rate" },
            { value: "24/7", label: "Elite Support" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 2.4 + index * 0.2,
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center p-8 rounded-3xl glass-card hover:glass-luxury transition-all duration-700"
            >
              <div className="text-4xl md:text-5xl font-extralight text-luxury mb-3">{stat.value}</div>
              <div className="text-lg font-light text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4 text-yellow-400/60"
        >
          <span className="text-sm font-light tracking-wider">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
