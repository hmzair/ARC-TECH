import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "1",
    name: "Nexus AI",
    description:
      "Advanced conversational AI agent with natural language processing capabilities. Perfect for customer service, content creation, and intelligent automation.",
    price: 99,
    modelPath: "/models/nexus-ai.glb",
    capabilities: ["Automation", "Intelligence", "Communication"],
    category: "Conversational",
    featured: true,
  },
  {
    id: "2",
    name: "Quantum Assistant",
    description:
      "Quantum-powered AI agent specialized in complex problem solving and data analysis. Ideal for research, analytics, and strategic planning.",
    price: 149,
    modelPath: "/models/quantum-assistant.glb",
    capabilities: ["Analytics", "Intelligence", "Research"],
    category: "Analytics",
    featured: true,
  },
  {
    id: "3",
    name: "Cyber Guardian",
    description:
      "Security-focused AI agent that monitors, detects, and responds to cyber threats in real-time. Essential for enterprise security.",
    price: 199,
    modelPath: "/models/cyber-guardian.glb",
    capabilities: ["Security", "Monitoring", "Protection"],
    category: "Security",
    featured: true,
  },
  {
    id: "4",
    name: "Creative Spark",
    description:
      "AI agent designed for creative professionals. Generates ideas, assists with design, and enhances creative workflows.",
    price: 79,
    modelPath: "/models/creative-spark.glb",
    capabilities: ["Creativity", "Design", "Innovation"],
    category: "Creative",
  },
  {
    id: "5",
    name: "Data Miner",
    description: "Specialized AI agent for data extraction, processing, and insights generation from large datasets.",
    price: 129,
    modelPath: "/models/data-miner.glb",
    capabilities: ["Data Processing", "Analytics", "Insights"],
    category: "Data",
  },
  {
    id: "6",
    name: "Code Companion",
    description:
      "AI programming assistant that helps with code generation, debugging, and optimization across multiple languages.",
    price: 89,
    modelPath: "/models/code-companion.glb",
    capabilities: ["Programming", "Debugging", "Optimization"],
    category: "Development",
  },
]
