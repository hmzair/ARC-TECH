"use client"

import { useRef } from "react"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { motion, useInView } from "framer-motion"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer ref={ref} className="border-t border-yellow-500/10 glass-luxury relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/3 via-amber-500/2 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl flex items-center justify-center glow-gold-soft">
                <span className="text-black font-medium text-sm">AT</span>
              </div>
              <span className="text-2xl font-extralight text-luxury tracking-wide">Arc-Tech</span>
            </div>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Pioneering the future of AI-powered digital agents. Built with passion and precision by Hamza Alnasir.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-white/60 hover:text-yellow-400 transition-all duration-500"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-white font-light mb-6 text-lg tracking-wide">Products</h3>
            <ul className="space-y-4 text-sm font-light">
              {["AI Agents", "Enterprise", "API Access", "Custom Solutions"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-white font-light mb-6 text-lg tracking-wide">Company</h3>
            <ul className="space-y-4 text-sm font-light">
              {["About", "Careers", "Blog", "Press"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-white font-light mb-6 text-lg tracking-wide">Support</h3>
            <ul className="space-y-4 text-sm font-light">
              {["Documentation", "Help Center", "Contact", "Status"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-yellow-500/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/40 text-sm font-light">
            © 2024 Arc-Tech. All rights reserved. Designed by Hamza Alnasir.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/40 hover:text-white text-sm font-light transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
