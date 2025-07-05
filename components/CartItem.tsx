"use client"

import { useCartStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Plus, Minus, Trash2 } from "lucide-react"
import type { CartItem as CartItemType } from "@/lib/types"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCartStore()

  return (
    <div className="flex items-center gap-4 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl">
      <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
        <span className="text-3xl">🤖</span>
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
        <p className="text-gray-400 text-sm">{item.description}</p>
        <p className="text-blue-400 font-medium mt-1">${item.price}/month</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-1">
          <Button variant="ghost" size="sm" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
            <Minus className="w-4 h-4" />
          </Button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <Button variant="ghost" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => removeFromCart(item.id)}
          className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>

      <div className="text-right">
        <div className="text-lg font-bold text-white">${(item.price * item.quantity).toFixed(2)}</div>
        <div className="text-sm text-gray-400">
          ${item.price} × {item.quantity}
        </div>
      </div>
    </div>
  )
}
