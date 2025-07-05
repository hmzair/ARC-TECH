"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Zap, Shield, Code, Palette, Database } from "lucide-react"

const aiAgents = [
  {
    id: 1,
    name: "NEXUS AI",
    title: "Conversational Intelligence",
    description:
      "Advanced natural language processing agent that understands context, maintains conversation flow, and adapts to user preferences in real-time. Perfect for customer service, content creation, and intelligent automation across any industry.",
    icon: Brain,
    color: "from-yellow-400 via-amber-500 to-yellow-600",
    accent: "text-yellow-400",
    glowColor: "shadow-yellow-500/30",
  },
  {
    id: 2,
    name: "QUANTUM CORE",
    title: "Advanced Analytics Engine",
    description:
      "Harness quantum-inspired algorithms for complex problem solving and data analysis. Processes massive datasets, identifies invisible patterns, and provides actionable insights for strategic decision-making in milliseconds.",
    icon: Zap,
    color: "from-amber-400 via-yellow-500 to-orange-500",
    accent: "text-amber-400",
    glowColor: "shadow-amber-500/30",
  },
  {
    id: 3,
    name: "CYBER GUARDIAN",
    title: "Security Intelligence",
    description:
      "Enterprise-grade AI security agent that monitors, detects, and responds to cyber threats in real-time. Learns from attack patterns, adapts to new threats, and provides proactive protection for your digital infrastructure.",
    icon: Shield,
    color: "from-yellow-500 via-amber-600 to-yellow-400",
    accent: "text-yellow-500",
    glowColor: "shadow-yellow-600/30",
  },
  {
    id: 4,
    name: "CREATIVE SPARK",
    title: "Design Intelligence",
    description:
      "AI-powered creative assistant that generates ideas, assists with design workflows, and enhances artistic projects. Understands design principles, color theory, and creative trends to bring your vision to life.",
    icon: Palette,
    color: "from-amber-500 via-yellow-400 to-amber-600",
    accent: "text-amber-500",
    glowColor: "shadow-amber-400/30",
  },
  {
    id: 5,
    name: "CODE COMPANION",
    title: "Development Intelligence",
    description:
      "Advanced AI programming assistant for code generation, debugging, and optimization across multiple languages. Understands your coding style, suggests improvements, and accelerates development workflows.",
    icon: Code,
    color: "from-yellow-600 via-amber-500 to-yellow-500",
    accent: "text-yellow-600",
    glowColor: "shadow-yellow-500/30",
  },
  {
    id: 6,
    name: "DATA MINER",
    title: "Information Intelligence",
    description:
      "Specialized AI agent for data extraction, processing, and insights generation from large datasets. Transforms raw information into actionable intelligence with advanced pattern recognition and predictive analytics.",
    icon: Database,
    color: "from-yellow-500 via-amber-400 to-yellow-600",
    accent: "text-yellow-500",
    glowColor: "shadow-yellow-400/30",
  },
]

export function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  const SLIDE_DURATION = 4000 // 4 seconds per slide

  useEffect(() => {
    if (!isPlaying) return

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % aiAgents.length)
          return 0
        }
        return prev + 100 / (SLIDE_DURATION / 50)
      })
    }, 50)

    return () => clearInterval(progressInterval)
  }, [isPlaying])

  const currentAgent = aiAgents[currentIndex]

  return (
    <section className="relative min-h-screen overflow-hidden bg-black" role="main" aria-label="Arc-Tech AI Agents">
      {/* Background Video - Always Visible */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-80" aria-hidden="true">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nova-Y5vNr7fwi06sUdisNWBVLOFtqADhvd.webm" type="video/webm" />
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        </video>
        {/* Minimal overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* HUD Elements Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top-Right: AI Agent Name/Title */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 lg:top-12 lg:right-12 z-20 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAgent.id}
              initial={{ opacity: 0, x: 100, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -50, y: -30 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-right"
            >
              {/* Creator Credit */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mb-6 px-4 py-2 rounded-full glass-luxury text-xs font-light text-yellow-400 tracking-wide inline-block"
              >
                Created by Hamza Alnasir
              </motion.div>

              {/* Agent Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${currentAgent.color} rounded-2xl mb-4 ml-auto ${currentAgent.glowColor} shadow-2xl`}
                aria-hidden="true"
              >
                <currentAgent.icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black" />
              </motion.div>

              {/* Agent Name - Bold Serif Font */}
              <motion.h1
                className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 bg-gradient-to-r ${currentAgent.color} bg-clip-text text-transparent leading-tight tracking-wide`}
                style={{ fontFamily: "serif" }}
                animate={{
                  textShadow: [
                    "0 0 20px rgba(212, 175, 55, 0.3)",
                    "0 0 40px rgba(212, 175, 55, 0.6)",
                    "0 0 20px rgba(212, 175, 55, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                {currentAgent.name}
              </motion.h1>

              {/* Agent Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`text-sm md:text-base lg:text-lg xl:text-xl font-light ${currentAgent.accent} opacity-90 tracking-wide uppercase`}
              >
                {currentAgent.title}
              </motion.h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom-Left: Agent Description - Natural Text */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 max-w-xs md:max-w-md lg:max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={`desc-${currentAgent.id}`}
              initial={{ opacity: 0, x: -100, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 50, y: 50 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Description Text - Natural, No Container */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-yellow-400/50 text-xs md:text-sm leading-relaxed font-light tracking-wide"
                style={{
                  textShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
                }}
              >
                {currentAgent.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Ambient Glow Effects */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <motion.div
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              opacity: [0.05, 0.12, 0.05],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-tl from-amber-500/10 via-yellow-500/5 to-transparent rounded-full blur-3xl"
          />
        </div>

        {/* Brand Watermark */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.03, scale: 1 }}
            transition={{ delay: 2, duration: 2 }}
            className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-yellow-500/5 tracking-wider select-none"
            style={{ fontFamily: "serif" }}
          >
            ARC-TECH
          </motion.div>
        </div>
      </div>
    </section>
  )
}
