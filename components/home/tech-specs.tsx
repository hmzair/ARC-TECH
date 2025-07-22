import { Cpu, MemoryStick, Database, ShieldCheck, Zap, BrainCircuit } from "lucide-react"

const specs = [
  {
    icon: BrainCircuit,
    title: "Proprietary AI Core",
    description: "Our in-house developed AI core provides a 40% performance uplift over standard models.",
  },
  {
    icon: Cpu,
    title: "Advanced Processing Units",
    description: "Leveraging state-of-the-art TPUs and GPUs for unparalleled processing speed and efficiency.",
  },
  {
    icon: MemoryStick,
    title: "High-Throughput Memory",
    description: "Equipped with high-bandwidth memory to handle large datasets and complex models without bottlenecks.",
  },
  {
    icon: Database,
    title: "Scalable Vector Databases",
    description:
      "Utilizing optimized vector databases for lightning-fast similarity searches and information retrieval.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Encryption",
    description: "All data, both in transit and at rest, is protected with military-grade AES-256 encryption.",
  },
  {
    icon: Zap,
    title: "Low-Latency Infrastructure",
    description: "Globally distributed infrastructure ensures sub-10ms response times for a seamless user experience.",
  },
]

export function TechSpecs() {
  return (
    <section id="tech-specs" className="py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">Under the Hood</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Our platform is built on a foundation of cutting-edge technology to deliver performance, reliability, and
            security.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="p-8 bg-gray-900/50 border border-yellow-500/20 rounded-2xl transition-all duration-300 hover:border-yellow-500/50 hover:bg-gray-900 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl">
                <spec.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{spec.title}</h3>
              <p className="text-gray-400">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
