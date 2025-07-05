"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product, CartItem } from "./types"

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
  toggleCart: () => void
  selectedPaymentMethod: "upi" | "bank" | null
  paymentConfirmed: boolean
  setPaymentMethod: (method: "upi" | "bank") => void
  confirmPayment: () => void
  resetPayment: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      selectedPaymentMethod: null,
      paymentConfirmed: false,

      addToCart: (product) => {
        const items = get().items
        const existingItem = items.find((item) => item.id === product.id)

        if (existingItem) {
          set({
            items: items.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
          })
        } else {
          set({
            items: [...items, { ...product, quantity: 1 }],
          })
        }
      },

      removeFromCart: (productId) => {
        set({
          items: get().items.filter((item) => item.id !== productId),
        })
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId)
          return
        }

        set({
          items: get().items.map((item) => (item.id === productId ? { ...item, quantity } : item)),
        })
      },

      clearCart: () => {
        set({ items: [] })
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      toggleCart: () => {
        set({ isOpen: !get().isOpen })
      },

      setPaymentMethod: (method) => {
        set({ selectedPaymentMethod: method })
      },

      confirmPayment: () => {
        set({ paymentConfirmed: true })
      },

      resetPayment: () => {
        set({ selectedPaymentMethod: null, paymentConfirmed: false })
      },
    }),
    {
      name: "arc-tech-cart",
      partialize: (state) => ({ items: state.items }),
    },
  ),
)
