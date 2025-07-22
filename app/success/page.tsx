"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Mail, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const [paymentDetails, setPaymentDetails] = useState<any>(null)

  useEffect(() => {
    const paymentId = searchParams.get("payment_id")
    const orderId = searchParams.get("order_id")
    const email = searchParams.get("email")

    if (paymentId && orderId) {
      setPaymentDetails({
        paymentId,
        orderId,
        email,
      })
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-white" />
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscription Successful! 🎉</h1>
          <p className="text-xl text-gray-300 mb-6">
            Thank you for subscribing to Arc-Tech AI. Your AI agent is being prepared!
          </p>
        </motion.div>

        {/* Payment Details */}
        {paymentDetails && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 rounded-lg p-6 mb-8 text-left"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              Payment Confirmed
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Payment ID:</span>
                <span className="text-white font-mono">{paymentDetails.paymentId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Order ID:</span>
                <span className="text-white font-mono">{paymentDetails.orderId}</span>
              </div>
              {paymentDetails.email && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white">{paymentDetails.email}</span>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-400" />
            What Happens Next?
          </h3>
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                1
              </div>
              <div>
                <p className="text-white font-medium">AI Agent Customization</p>
                <p className="text-gray-400 text-sm">Our specialists will customize your AI agent within 24-48 hours</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                2
              </div>
              <div>
                <p className="text-white font-medium">Setup Instructions</p>
                <p className="text-gray-400 text-sm">
                  You'll receive detailed setup instructions and access credentials
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                3
              </div>
              <div>
                <p className="text-white font-medium">Agent Deployment</p>
                <p className="text-gray-400 text-sm">Your AI agent will be deployed and ready for use</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Email Notification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-8"
        >
          <div className="flex items-center gap-2 text-yellow-400 mb-2">
            <Mail className="w-5 h-5" />
            <span className="font-medium">Check Your Email</span>
          </div>
          <p className="text-gray-300 text-sm">
            A confirmation email with detailed instructions has been sent to your email address. Please check your inbox
            (and spam folder) for next steps.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/" className="flex-1">
            <Button
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
            >
              Back to Home
            </Button>
          </Link>
          <Link href="/dashboard" className="flex-1">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
              Go to Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* Support Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 pt-6 border-t border-gray-700"
        >
          <p className="text-gray-400 text-sm">
            Need help? Contact our support team at{" "}
            <a href="mailto:arctechhh@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
              arctechhh@gmail.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
