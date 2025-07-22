"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Sparkles, CheckCircle, ArrowRight } from "lucide-react"

export default function CustomPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [step, setStep] = useState(1)
  const totalSteps = 3

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success("Your custom AI agent request has been submitted successfully!", {
        description: "We'll contact you within 24 hours to discuss your requirements.",
      })
      // Reset form or redirect
    } catch (error) {
      toast.error("Failed to submit your request", {
        description: "Please try again or contact our support team.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />
        <div className="absolute inset-0 bg-black/50" />

        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 text-yellow-400 mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Premium AI Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
              Custom <span className="text-yellow-400">AI Agent</span> Request
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tell us about your specific requirements, and we'll create a tailored AI solution for your business.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border border-yellow-500/20 bg-black/60 backdrop-blur-md text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-yellow-400">Request Form</CardTitle>
                    <CardDescription className="text-gray-400">All fields marked with * are required</CardDescription>
                  </div>
                  <div className="px-4 py-2 bg-yellow-400/10 rounded-full">
                    <span className="text-yellow-400 font-medium">₹50,000</span>
                    <span className="text-gray-400 ml-1">starting price</span>
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">
                      Step {step} of {totalSteps}
                    </span>
                    <span className="text-sm text-yellow-400">{Math.round((step / totalSteps) * 100)}% Complete</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-300"
                      style={{ width: `${(step / totalSteps) * 100}%` }}
                    />
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-medium text-white">Personal Information</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="text-gray-300">
                            Full Name *
                          </Label>
                          <Input
                            id="fullName"
                            placeholder="John Doe"
                            required
                            className="bg-gray-900/50 border-gray-700 text-white"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-300">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            className="bg-gray-900/50 border-gray-700 text-white"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-gray-300">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            placeholder="+91 98765 43210"
                            required
                            className="bg-gray-900/50 border-gray-700 text-white"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-gray-300">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            placeholder="Acme Inc."
                            className="bg-gray-900/50 border-gray-700 text-white"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Project Details */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-medium text-white">Project Details</h3>

                      <div className="space-y-2">
                        <Label htmlFor="projectName" className="text-gray-300">
                          Project Name *
                        </Label>
                        <Input
                          id="projectName"
                          placeholder="AI Assistant for Customer Support"
                          required
                          className="bg-gray-900/50 border-gray-700 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-300">AI Agent Type *</Label>
                        <RadioGroup
                          defaultValue="conversational"
                          className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2"
                        >
                          {[
                            { value: "conversational", label: "Conversational AI", desc: "Chat and support agents" },
                            { value: "analytics", label: "Analytics AI", desc: "Data processing and insights" },
                            { value: "automation", label: "Automation AI", desc: "Process automation" },
                            { value: "security", label: "Security AI", desc: "Threat detection and prevention" },
                            { value: "creative", label: "Creative AI", desc: "Content generation" },
                            { value: "technical", label: "Technical AI", desc: "Specialized domain expertise" },
                          ].map((type) => (
                            <Label
                              key={type.value}
                              htmlFor={type.value}
                              className="flex items-start space-x-3 p-4 rounded-lg border border-gray-700 bg-gray-800/50 cursor-pointer hover:bg-gray-800 transition-colors"
                            >
                              <RadioGroupItem value={type.value} id={type.value} className="mt-1" />
                              <div className="space-y-1">
                                <p className="font-medium text-white">{type.label}</p>
                                <p className="text-sm text-gray-400">{type.desc}</p>
                              </div>
                            </Label>
                          ))}
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="industry" className="text-gray-300">
                          Industry *
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-700 text-white">
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="timeline" className="text-gray-300">
                            Timeline
                          </Label>
                          <Select>
                            <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-gray-700 text-white">
                              <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                              <SelectItem value="standard">Standard (3-4 weeks)</SelectItem>
                              <SelectItem value="relaxed">Relaxed (1-2 months)</SelectItem>
                              <SelectItem value="longterm">Long-term project</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="budget" className="text-gray-300">
                            Budget Range
                          </Label>
                          <Select>
                            <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-gray-700 text-white">
                              <SelectItem value="standard">₹50,000 - ₹1,00,000</SelectItem>
                              <SelectItem value="premium">₹1,00,000 - ₹5,00,000</SelectItem>
                              <SelectItem value="enterprise">₹5,00,000+</SelectItem>
                              <SelectItem value="custom">Custom budget</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Requirements */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-medium text-white">Requirements</h3>

                      <div className="space-y-2">
                        <Label className="text-gray-300 block mb-2">Required Features</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            { id: "nlp", label: "Natural Language Processing" },
                            { id: "ml", label: "Machine Learning" },
                            { id: "vision", label: "Computer Vision" },
                            { id: "voice", label: "Voice Recognition" },
                            { id: "analytics", label: "Advanced Analytics" },
                            { id: "automation", label: "Process Automation" },
                            { id: "integration", label: "API Integration" },
                            { id: "dashboard", label: "Custom Dashboard" },
                          ].map((feature) => (
                            <div key={feature.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={feature.id}
                                className="border-gray-600 data-[state=checked]:bg-yellow-400 data-[state=checked]:text-black"
                              />
                              <Label htmlFor={feature.id} className="text-gray-300">
                                {feature.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-gray-300">
                          Project Description *
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="Please describe your project requirements in detail..."
                          required
                          className="bg-gray-900/50 border-gray-700 text-white min-h-[120px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo" className="text-gray-300">
                          Additional Information
                        </Label>
                        <Textarea
                          id="additionalInfo"
                          placeholder="Any other details you'd like to share..."
                          className="bg-gray-900/50 border-gray-700 text-white min-h-[80px]"
                        />
                      </div>

                      <div className="flex items-center space-x-2 pt-4">
                        <Checkbox
                          id="terms"
                          required
                          className="border-gray-600 data-[state=checked]:bg-yellow-400 data-[state=checked]:text-black"
                        />
                        <Label htmlFor="terms" className="text-gray-300 text-sm">
                          I agree to the terms and conditions and understand that my information will be used as
                          described in the privacy policy.
                        </Label>
                      </div>
                    </motion.div>
                  )}
                </form>
              </CardContent>

              <CardFooter className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-2">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                    >
                      Back
                    </Button>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  {step < totalSteps ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black"
                    >
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Submit Request
                          <CheckCircle className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Subscription Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-light text-white mb-4">Premium AI Agent Subscription</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our custom AI agents start at ₹50,000 and include comprehensive development, training, and deployment.
              Each solution is tailored to your specific requirements and includes 3 months of support and maintenance.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
