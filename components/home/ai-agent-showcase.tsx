"use client"

import { useState, useEffect, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Play, Pause, CheckCircle } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import Link from "next/link"
import { AgentModel } from "@/components/3d/AgentModel"

const agents = [
  {
    id: "nexus",
    name: "Nexus AI",
    modelPath: "nexus-ai",
    description: "Premium conversational AI with advanced natural language processing capabilities.",
    features: ["Natural conversations", "Context awareness", "Multilingual support", "Voice recognition"],
    color: "#4169e1",
    price: "₹75,000",
    category: "Conversational",
  },
  {
    id: "quantum",
    name: "Quantum Assistant",
    modelPath: "quantum-assistant",
    description: "Powerful analytical AI designed for complex data processing and insights generation.",
    features: ["Advanced analytics", "Predictive modeling", "Data visualization", "Automated reporting"],
    color: "#9c27b0",
    price: "₹95,000",
    category: "Analytics",
  },
  {
    id: "guardian",
    name: "Cyber Guardian",
    modelPath: "cyber-guardian",
    description: "Security-focused AI that protects your systems from threats and vulnerabilities.",
    features: ["Threat detection", "Real-time monitoring", "Automated response", "Security reporting"],
    color: "#e91e63",
    price: "₹85,000",
    category: "Security",
  },
  {
    id: "analyst",
    name: "Data Analyst",
    modelPath: "data-analyst",
    description: "Specialized AI for extracting insights and patterns from complex datasets.",
    features: ["Pattern recognition", "Anomaly detection", "Trend analysis", "Data cleaning"],
    color: "#00bcd4",
    price: "₹80,000",
    category: "Analytics",
  },
  {
    id: "creative",
    name: "Creative Spark",
    modelPath: "creative-ai",
    description: "AI designed for content generation, creative writing, and artistic assistance.",
    features: ["Content creation", "Style adaptation", "Image generation", "Creative suggestions"],
    color: "#ff9800",
    price: "₹70,000",
    category: "Creative",
  },
  {
    id: "automation",
    name: "Automation Bot",
    modelPath: "automation-bot",
    description: "Streamline your workflows and automate repetitive tasks with this efficient AI bot.",
    features: ["Workflow automation", "Task scheduling", "API integration", "Process optimization"],
    color: "#4caf50",
    price: "₹90,000",
    category: "Automation",
  },
]

export function AIAgentShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [mounted, setMounted] = useState(false)

  const currentAgent = agents[currentIndex]

  useEffect(() => {
    setMounted(true)
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % agents.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  const nextAgent = () => {
    setCurrentIndex((prev) => (prev + 1) % agents.length)
  }

  const prevAgent = () => {
    setCurrentIndex((prev) => (prev - 1 + agents.length) % agents.length)
  }

  const goToAgent = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <section id="ai-showcase" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Meet Our Premium AI Agents</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            A curated selection of specialized AI agents, engineered for excellence and ready to integrate into your
            workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[500px] rounded-2xl bg-black/20 border border-yellow-500/20 shadow-2xl shadow-yellow-500/10">
            <AnimatePresence>
              <motion.div
                key={currentAgent.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {mounted && (
                  <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight
                      position={[10, 10, 10]}
                      angle={0.15}
                      penumbra={1}
                      intensity={1}
                      color={currentAgent.color}
                    />
                    <pointLight position={[-10, -10, -10]} intensity={0.8} color={currentAgent.color} />
                    <Suspense fallback={null}>
                      <AgentModel modelPath={currentAgent.modelPath} color={currentAgent.color} />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
                    <Environment preset="city" />
                  </Canvas>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentAgent.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="bg-transparent border-none">
                  <CardHeader>
                    <Badge style={{ backgroundColor: currentAgent.color }} className="w-fit text-white mb-4">
                      {currentAgent.category}
                    </Badge>
                    <CardTitle className="text-4xl font-bold">{currentAgent.name}</CardTitle>
                    <CardDescription className="text-gray-300 text-lg mt-2">{currentAgent.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 my-6">
                      {currentAgent.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-3" style={{ color: currentAgent.color }} />
                          <span className="text-gray-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-3xl font-bold my-6">{currentAgent.price}</div>
                    <div className="flex items-center gap-4">
                      <Link href={`/products/${currentAgent.id}`}>
                        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                          Learn More
                        </Button>
                      </Link>
                      <Link href="/checkout">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
                        >
                          Subscribe Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="absolute -bottom-12 right-0 flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevAgent}
                className="rounded-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleAutoPlay}
                className="rounded-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
              >
                {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextAgent}
                className="rounded-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-20">
          {agents.map((_, index) => (
            <button
              key={index}
              onClick={() => goToAgent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-yellow-500 scale-125" : "bg-gray-600 hover:bg-gray-500"}`}
              aria-label={`Go to agent ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
