"use client"

import { motion } from "framer-motion"

export default function SuccessLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white text-lg">Processing your subscription...</p>
        <p className="text-gray-400 text-sm mt-2">Please wait while we confirm your payment</p>
      </motion.div>
    </div>
  )
}
