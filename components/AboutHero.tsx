"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Play, Pause, Github, Linkedin, Twitter } from "lucide-react"

const aiAgents = [
  {
    id: 1,
    name: "Nexus AI",
    title: "Conversational Intelligence",
    description:
      "Advanced natural language processing agent that understands context, maintains conversation flow, and adapts to user preferences in real-time. Perfect for customer service, content creation, and intelligent automation across any industry.",
    color: "from-yellow-400 via-amber-500 to-yellow-600",
    accent: "text-yellow-400",
  },
  {
    id: 2,
    name: "Quantum Assistant",
    title: "Advanced Analytics Engine",
    description:
      "Harness quantum-inspired algorithms for complex problem solving and data analysis. Processes massive datasets, identifies invisible patterns, and provides actionable insights for strategic decision-making in milliseconds.",
    color: "from-amber-400 via-yellow-500 to-orange-500",
    accent: "text-amber-400",
  },
  {
    id: 3,
    name: "Cyber Guardian",
    title: "Security Intelligence",
    description:
      "Enterprise-grade AI security agent that monitors, detects, and responds to cyber threats in real-time. Learns from attack patterns, adapts to new threats, and provides proactive protection for your digital infrastructure.",
    color: "from-yellow-500 via-amber-600 to-yellow-400",
    accent: "text-yellow-500",
  },
  {
    id: 4,
    name: "Creative Spark",
    title: "Design Intelligence",
    description:
      "AI-powered creative assistant that generates ideas, assists with design workflows, and enhances artistic projects. Understands design principles, color theory, and creative trends to bring your vision to life.",
    color: "from-amber-500 via-yellow-400 to-amber-600",
    accent: "text-amber-500",
  },
  {
    id: 5,
    name: "Code Companion",
    title: "Development Intelligence",
    description:
      "Advanced AI programming assistant for code generation, debugging, and optimization across multiple languages. Understands your coding style, suggests improvements, and accelerates development workflows.",
    color: "from-yellow-600 via-amber-500 to-yellow-500",
    accent: "text-yellow-600",
  },
]

export function AboutHero() {
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

  const nextAgent = () => {
    setCurrentIndex((current) => (current + 1) % aiAgents.length)
    setProgress(0)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const currentAgent = aiAgents[currentIndex]

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Video - Always Visible */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-70">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nova-Y5vNr7fwi06sUdisNWBVLOFtqADhvd.webm" type="video/webm" />
        </video>
        {/* Minimal overlay for text readability without blocking background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-transparent to-black/20" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-yellow-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
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
        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 max-w-xs md:max-w-md lg:max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAgent.id}
              initial={{ opacity: 0, x: 50, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -30, y: -20 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-right"
            >
              {/* Agent Name - Bold Serif/Techno Font */}
              <motion.h1
                className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 bg-gradient-to-r ${currentAgent.color} bg-clip-text text-transparent leading-tight`}
                style={{ fontFamily: "serif" }}
                animate={{
                  textShadow: [
                    "0 0 20px rgba(251, 191, 36, 0.3)",
                    "0 0 40px rgba(251, 191, 36, 0.5)",
                    "0 0 20px rgba(251, 191, 36, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                {currentAgent.name}
              </motion.h1>

              {/* Agent Title */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className={`text-lg md:text-xl lg:text-2xl font-light ${currentAgent.accent} opacity-90 tracking-wide`}
              >
                {currentAgent.title}
              </motion.h2>

              {/* Floating Accent Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className={`h-0.5 bg-gradient-to-l ${currentAgent.color} mt-4 ml-auto opacity-60`}
                style={{ maxWidth: "200px" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom-Left: Agent Description - Positioned to avoid background overlap */}
        <div className="absolute bottom-20 md:bottom-24 left-6 md:left-8 z-20 max-w-xs md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`desc-${currentAgent.id}`}
              initial={{ opacity: 0, x: -50, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 30, y: 30 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-gradient-to-tr from-black/70 via-black/50 to-black/30 backdrop-blur-xl border border-yellow-500/25 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/60"
            >
              {/* Description Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-yellow-400/95 text-sm md:text-base lg:text-lg leading-relaxed font-light tracking-wide mb-6"
              >
                {currentAgent.description}
              </motion.p>

              {/* Progress and Controls */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                {/* Progress Indicator */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-1 max-w-xs h-1 bg-yellow-500/25 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${currentAgent.color} rounded-full`}
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                  <span className="text-yellow-400/80 text-xs md:text-sm font-medium whitespace-nowrap">
                    {currentIndex + 1} / {aiAgents.length}
                  </span>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={togglePlayPause}
                    className="w-10 h-10 bg-gradient-to-r from-yellow-500/25 to-amber-500/25 backdrop-blur-sm border border-yellow-500/35 rounded-full flex items-center justify-center text-yellow-400 hover:border-yellow-500/55 transition-all duration-300 shadow-lg shadow-yellow-500/15"
                    aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextAgent}
                    className="px-4 py-2 bg-gradient-to-r from-yellow-500/25 to-amber-500/25 backdrop-blur-sm border border-yellow-500/35 rounded-full flex items-center gap-2 text-yellow-400 hover:border-yellow-500/55 transition-all duration-300 shadow-lg shadow-yellow-500/15"
                    aria-label="Next AI Agent"
                  >
                    <span className="text-sm font-medium">Next Agent</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom-Right: Social Links */}
        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col gap-3"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-r from-yellow-500/25 to-amber-500/25 backdrop-blur-sm border border-yellow-500/35 rounded-full flex items-center justify-center text-yellow-400 hover:border-yellow-500/55 transition-all duration-300 shadow-lg shadow-yellow-500/15"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots - Center Bottom */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-2"
          >
            {aiAgents.map((agent, index) => (
              <motion.button
                key={agent.id}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  setCurrentIndex(index)
                  setProgress(0)
                }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${agent.color} scale-125 shadow-lg shadow-yellow-500/30`
                    : "bg-yellow-500/30 hover:bg-yellow-500/50"
                }`}
                aria-label={`Go to ${agent.name}`}
              />
            ))}
          </motion.div>
        </div>

        {/* Ambient Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
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
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/8 via-amber-500/4 to-transparent rounded-full blur-3xl"
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
            className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-tl from-amber-500/8 via-yellow-500/4 to-transparent rounded-full blur-3xl"
          />
        </div>
      </div>
    </section>
  )
}
