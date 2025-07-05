"use client"

import { useState } from "react"
import { useCartStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Check, Smartphone, Building2, ExternalLink, Mail, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const bankDetails = {
  bankName: "State Bank of India",
  accountHolder: "Arc-Tech Solutions Pvt Ltd",
  accountNumber: "1234567890123456",
  ifscCode: "SBIN0001234",
}

const upiDetails = {
  upiId: "arc-tech@paytm",
  merchantName: "Arc-Tech Solutions",
}

export function PaymentSection() {
  const { selectedPaymentMethod, paymentConfirmed, setPaymentMethod, confirmPayment, getTotalPrice } = useCartStore()

  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [email, setEmail] = useState("")

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const handlePaymentConfirmation = () => {
    if (email && selectedPaymentMethod) {
      confirmPayment()
    }
  }

  const openUPIApp = () => {
    const upiUrl = `upi://pay?pa=${upiDetails.upiId}&pn=${upiDetails.merchantName}&am=${getTotalPrice()}&cu=INR&tn=Arc-Tech AI Agent Purchase`
    window.open(upiUrl, "_blank")
  }

  if (paymentConfirmed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card rounded-3xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-white" />
        </motion.div>

        <h2 className="text-2xl font-light text-luxury mb-4">Payment Instructions Sent!</h2>
        <p className="text-white/70 mb-6 leading-relaxed">
          We've sent detailed payment instructions to <strong className="text-yellow-400">{email}</strong>. Please
          complete the payment using your selected method.
        </p>

        <div className="glass-luxury rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Mail className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Check your email for:</span>
          </div>
          <ul className="text-sm text-white/60 space-y-2">
            <li>• Complete payment details</li>
            <li>• Order confirmation</li>
            <li>• Setup instructions</li>
            <li>• Support contact information</li>
          </ul>
        </div>

        <p className="text-xs text-white/40">Order ID: AT-{Date.now().toString().slice(-8)}</p>
      </motion.div>
    )
  }

  return (
    <div className="glass-card rounded-3xl p-8">
      <h2 className="text-2xl font-light text-luxury mb-8">Choose Payment Method</h2>

      <div className="space-y-6">
        {/* UPI Payment Option */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setPaymentMethod("upi")}
          className={`cursor-pointer transition-all duration-500 ${
            selectedPaymentMethod === "upi" ? "glass-luxury glow-gold-intense" : "glass-card hover:glass-luxury"
          }`}
        >
          <Card className="bg-transparent border-0 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  selectedPaymentMethod === "upi"
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 glow-gold-soft"
                    : "bg-gradient-to-r from-yellow-500/20 to-amber-500/20"
                }`}
              >
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">UPI Payment</h3>
                <p className="text-sm text-white/60">Pay instantly using UPI apps</p>
              </div>
            </div>

            <AnimatePresence>
              {selectedPaymentMethod === "upi" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="border-t border-yellow-500/20 pt-6 mt-4"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* QR Code */}
                    <div className="text-center">
                      <div className="bg-white p-4 rounded-2xl inline-block mb-4">
                        <Image
                          src="/upi-qr-code.jpeg"
                          alt="UPI QR Code"
                          width={200}
                          height={200}
                          className="rounded-lg"
                        />
                      </div>
                      <p className="text-sm text-white/60 mb-4">Scan with any UPI app</p>
                      <Button onClick={openUPIApp} className="btn-luxury w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open in UPI App
                      </Button>
                    </div>

                    {/* UPI Details */}
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white/70 text-sm">UPI ID</Label>
                        <div className="flex items-center gap-2 mt-2">
                          <Input
                            value={upiDetails.upiId}
                            readOnly
                            className="bg-black/30 border-yellow-500/20 text-white"
                          />
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(upiDetails.upiId, "upiId")}
                            className="btn-luxury px-3"
                          >
                            {copiedField === "upiId" ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <div>
                        <Label className="text-white/70 text-sm">Amount</Label>
                        <Input
                          value={`₹${getTotalPrice().toFixed(2)}`}
                          readOnly
                          className="bg-black/30 border-yellow-500/20 text-white mt-2"
                        />
                      </div>

                      <div>
                        <Label className="text-white/70 text-sm">Merchant</Label>
                        <Input
                          value={upiDetails.merchantName}
                          readOnly
                          className="bg-black/30 border-yellow-500/20 text-white mt-2"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>

        {/* Bank Transfer Option */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setPaymentMethod("bank")}
          className={`cursor-pointer transition-all duration-500 ${
            selectedPaymentMethod === "bank" ? "glass-luxury glow-gold-intense" : "glass-card hover:glass-luxury"
          }`}
        >
          <Card className="bg-transparent border-0 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  selectedPaymentMethod === "bank"
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 glow-gold-soft"
                    : "bg-gradient-to-r from-yellow-500/20 to-amber-500/20"
                }`}
              >
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Bank Transfer</h3>
                <p className="text-sm text-white/60">NEFT/IMPS/RTGS transfer</p>
              </div>
            </div>

            <AnimatePresence>
              {selectedPaymentMethod === "bank" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="border-t border-yellow-500/20 pt-6 mt-4"
                >
                  <div className="grid gap-4">
                    {Object.entries({
                      "Bank Name": bankDetails.bankName,
                      "Account Holder": bankDetails.accountHolder,
                      "Account Number": bankDetails.accountNumber,
                      "IFSC Code": bankDetails.ifscCode,
                    }).map(([label, value]) => (
                      <div key={label}>
                        <Label className="text-white/70 text-sm">{label}</Label>
                        <div className="flex items-center gap-2 mt-2">
                          <Input value={value} readOnly className="bg-black/30 border-yellow-500/20 text-white" />
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(value, label.toLowerCase().replace(" ", ""))}
                            className="btn-luxury px-3"
                          >
                            {copiedField === label.toLowerCase().replace(" ", "") ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    ))}

                    <div className="glass-luxury rounded-2xl p-4 mt-4">
                      <p className="text-sm text-yellow-400 mb-2">Important:</p>
                      <ul className="text-xs text-white/60 space-y-1">
                        <li>• Transfer amount: ₹{getTotalPrice().toFixed(2)}</li>
                        <li>• Add "Arc-Tech Order" in transfer remarks</li>
                        <li>• Keep transaction receipt for reference</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>

        {/* Email Input and Confirmation */}
        {selectedPaymentMethod && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass-luxury rounded-2xl p-6"
          >
            <Label className="text-white/70 text-sm mb-3 block">Email for payment confirmation</Label>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black/30 border-yellow-500/20 text-white flex-1"
              />
              <Button
                onClick={handlePaymentConfirmation}
                disabled={!email || !selectedPaymentMethod}
                className="btn-luxury px-8 glow-gold-soft hover:glow-gold-intense"
              >
                Confirm Payment Method
              </Button>
            </div>
            <p className="text-xs text-white/40 mt-2">
              We'll send payment instructions and order details to this email
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
