export interface Product {
  id: string
  name: string
  description: string
  price: number
  modelPath: string
  capabilities: string[]
  category: string
  featured?: boolean
}

export interface CartItem extends Product {
  quantity: number
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}
