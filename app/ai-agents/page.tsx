"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Bot, Sparkles, Zap, Shield, Brain, Code, MessageSquare } from "lucide-react"
import { useRouter } from "next/navigation"

const agentTypes = [
  {
    id: "customer-service",
    name: "Customer Service Agent",
    description: "Handle customer inquiries, support tickets, and provide 24/7 assistance",
    icon: MessageSquare,
    features: ["24/7 Availability", "Multi-language Support", "Ticket Management", "Live Chat Integration"],
  },
  {
    id: "sales-assistant",
    name: "Sales Assistant",
    description: "Lead qualification, product recommendations, and sales process automation",
    icon: Sparkles,
    features: ["Lead Scoring", "Product Matching", "Price Negotiation", "CRM Integration"],
  },
  {
    id: "data-analyst",
    name: "Data Analysis Agent",
    description: "Process data, generate insights, and create automated reports",
    icon: Brain,
    features: ["Data Processing", "Predictive Analytics", "Report Generation", "Visualization"],
  },
  {
    id: "code-assistant",
    name: "Code Assistant",
    description: "Code review, debugging, documentation, and development support",
    icon: Code,
    features: ["Code Review", "Bug Detection", "Documentation", "Testing Automation"],
  },
  {
    id: "security-agent",
    name: "Security Agent",
    description: "Monitor threats, analyze security logs, and respond to incidents",
    icon: Shield,
    features: ["Threat Detection", "Log Analysis", "Incident Response", "Compliance Monitoring"],
  },
  {
    id: "automation-agent",
    name: "Process Automation",
    description: "Automate workflows, integrate systems, and optimize business processes",
    icon: Zap,
    features: ["Workflow Automation", "System Integration", "Process Optimization", "Task Scheduling"],
  },
]

export default function AIAgentsPage() {
  const router = useRouter()
  const [selectedAgent, setSelectedAgent] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    requirements: "",
    budget: "",
    timeline: "",
    features: [] as string[],
  })

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      features: checked ? [...prev.features, feature] : prev.features.filter((f) => f !== feature),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", { selectedAgent, ...formData })
    // You can integrate with your backend here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-luxury border-b border-yellow-500/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Button
              variant="ghost"
              onClick={() => router.push("/")}
              className="flex items-center space-x-2 text-white/70 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl flex items-center justify-center glow-gold-soft">
                <span className="text-black font-medium text-sm">AT</span>
              </div>
              <span className="text-2xl font-extralight text-luxury tracking-wide">Arc-Tech</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center justify-center mb-6">
                <Bot className="w-16 h-16 text-yellow-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-extralight text-luxury">Custom AI Agents</h1>
              </div>
              <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
                Get a personalized AI agent tailored to your specific business needs. Tell us your requirements and
                we'll create the perfect solution for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Agent Types */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-center text-luxury mb-12">Choose Your Agent Type</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {agentTypes.map((agent) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: agentTypes.indexOf(agent) * 0.1 }}
                >
                  <Card
                    className={`glass-luxury border-yellow-500/20 cursor-pointer transition-all duration-300 hover:border-yellow-400/40 ${
                      selectedAgent === agent.id ? "border-yellow-400 glow-gold-soft" : ""
                    }`}
                    onClick={() => setSelectedAgent(agent.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        <agent.icon className="w-8 h-8 text-yellow-400" />
                        <CardTitle className="text-luxury">{agent.name}</CardTitle>
                      </div>
                      <CardDescription className="text-white/60">{agent.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {agent.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                            <span className="text-sm text-white/70">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Form */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <Card className="glass-luxury border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-2xl text-luxury text-center">Tell Us Your Requirements</CardTitle>
                <CardDescription className="text-center text-white/60">
                  Provide details about your needs and we'll create a custom AI agent for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/80">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        className="glass-input"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/80">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="glass-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white/80">
                        Company
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                        className="glass-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-white/80">
                        Industry
                      </Label>
                      <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}>
                        <SelectTrigger className="glass-input">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements" className="text-white/80">
                      Detailed Requirements
                    </Label>
                    <Textarea
                      id="requirements"
                      value={formData.requirements}
                      onChange={(e) => setFormData((prev) => ({ ...prev, requirements: e.target.value }))}
                      className="glass-input min-h-32"
                      placeholder="Describe your specific needs, use cases, and any special requirements..."
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-white/80">
                        Budget Range
                      </Label>
                      <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}>
                        <SelectTrigger className="glass-input">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="over-100k">Over $100,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-white/80">
                        Timeline
                      </Label>
                      <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}>
                        <SelectTrigger className="glass-input">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="3-months">Within 3 months</SelectItem>
                          <SelectItem value="6-months">Within 6 months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {selectedAgent && (
                    <div className="space-y-4">
                      <Label className="text-white/80">Additional Features</Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {agentTypes
                          .find((a) => a.id === selectedAgent)
                          ?.features.map((feature) => (
                            <div key={feature} className="flex items-center space-x-2">
                              <Checkbox
                                id={feature}
                                checked={formData.features.includes(feature)}
                                onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                              />
                              <Label htmlFor={feature} className="text-white/70 text-sm">
                                {feature}
                              </Label>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  <Button type="submit" className="w-full btn-luxury text-lg py-6" disabled={!selectedAgent}>
                    Submit Requirements
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
