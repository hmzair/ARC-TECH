"use client"

import { motion } from "framer-motion"
import { Brain, Database, Shield, Cpu, Network, Zap } from "lucide-react"

const technologies = [
  {
    icon: Brain,
    title: "Neural Networks",
    description:
      "Advanced deep learning architectures including transformers, CNNs, and RNNs for complex pattern recognition and decision making.",
    features: ["GPT-4 Integration", "Custom Model Training", "Real-time Learning"],
  },
  {
    icon: Database,
    title: "Data Processing",
    description:
      "Sophisticated data pipelines that handle massive datasets with real-time processing and intelligent caching mechanisms.",
    features: ["Big Data Analytics", "Stream Processing", "Smart Caching"],
  },
  {
    icon: Shield,
    title: "Security Framework",
    description:
      "Enterprise-grade security with end-to-end encryption, zero-trust architecture, and compliance with global standards.",
    features: ["End-to-End Encryption", "Zero-Trust Security", "GDPR Compliant"],
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description:
      "Distributed computing infrastructure that brings AI processing closer to users for minimal latency and maximum performance.",
    features: ["Global CDN", "Edge Optimization", "Auto-scaling"],
  },
  {
    icon: Network,
    title: "API Integration",
    description:
      "Seamless integration capabilities with RESTful APIs, GraphQL, and webhook support for maximum compatibility.",
    features: ["REST & GraphQL", "Webhook Support", "SDK Libraries"],
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimized for speed with intelligent resource allocation, predictive scaling, and sub-millisecond response times.",
    features: ["Sub-ms Response", "Predictive Scaling", "Resource Optimization"],
  },
]

export function TechnologySection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built on cutting-edge technologies and industry best practices to deliver unparalleled AI agent performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-8 hover:glow-purple transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <tech.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{tech.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{tech.description}</p>

              <div className="space-y-2">
                {tech.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
