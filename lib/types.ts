export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  modelPath: string
  features: string[]
  capabilities: string[]
  popular: boolean
  featured: boolean
  rating?: number
}

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export interface User {
  id: string
  email: string
  name: string
  subscriptions: Subscription[]
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: "pending" | "processing" | "completed" | "cancelled"
  createdAt: Date
  updatedAt: Date
}

export interface Subscription {
  id: string
  productId: string
  productName: string
  price: number
  status: "active" | "cancelled" | "expired"
  startDate: string
  nextBilling: string
  paymentId?: string
}
