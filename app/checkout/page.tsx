"use client"

import { useCartStore } from "@/lib/store"
import { PaymentSection } from "@/components/PaymentSection"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 pb-12 flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="w-24 h-24 mx-auto mb-6 text-gray-600" />
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-400 mb-8">Add some AI agents to get started</p>
          <Link href="/products">
            <Button className="bg-gradient-to-r from-yellow-400 to-amber-600 hover:from-yellow-500 hover:to-amber-700 text-black">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/cart">
            <Button variant="ghost" size="sm" className="btn-luxury">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cart
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-light text-luxury mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-4 border-b border-yellow-500/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-lg">🤖</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{item.name}</h3>
                        <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-white">${(item.price * item.quantity).toFixed(2)}</div>
                      <div className="text-sm text-gray-400">${item.price}/month each</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-yellow-500/10">
                <div className="flex justify-between text-lg">
                  <span className="text-white/70">Subtotal</span>
                  <span className="text-white">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-white/70">Setup Fee</span>
                  <span className="text-white">Free</span>
                </div>
                <div className="flex justify-between text-xl font-semibold pt-3 border-t border-yellow-500/10">
                  <span className="text-luxury">Total</span>
                  <span className="text-luxury">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <PaymentSection />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
