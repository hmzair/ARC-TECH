"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Zap, Shield, Globe, Clock, Cpu } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Advanced AI",
    description: "Powered by cutting-edge machine learning algorithms and neural networks that adapt and evolve.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with sub-second response times and real-time processing capabilities.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security protocols to protect your most sensitive data.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deployed across multiple regions for optimal performance and reliability worldwide.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Always-on agents that work around the clock without interruption or downtime.",
  },
  {
    icon: Cpu,
    title: "Smart Processing",
    description: "Intelligent resource allocation and adaptive learning capabilities that improve over time.",
  },
]

export function TechSpecs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-200px" })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/3 via-amber-500/2 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 text-cinematic">
            <span className="text-luxury">Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-white/60 max-w-4xl mx-auto leading-relaxed">
            Our AI agents are built on the latest technological foundations, ensuring superior performance, reliability,
            and innovation at every level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
              transition={{
                delay: index * 0.15,
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-3xl p-10 hover:glass-luxury transition-all duration-700 group glow-gold-soft hover:glow-gold-intense"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:glow-gold-soft transition-all duration-500"
              >
                <feature.icon className="w-8 h-8 text-yellow-400" />
              </motion.div>
              <h3 className="text-2xl font-light text-white mb-6 tracking-wide">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
