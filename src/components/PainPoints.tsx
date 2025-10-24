import { motion } from 'framer-motion'

const painPoints = [
  {
    icon: "⏱️",
    title: "One-off and recurring tasks",
    description: "That urgent copy update for your campaign? It's sitting in the backlog behind 47 other tickets. Your competitors just launched while you're still waiting."
  },
  {
    icon: "☁️", 
    title: "On your infrastructure",
    description: "You can run Peerbot locally or in your own cloud instances using Docker + gVisor for secure sandboxing."
  },
  {
    icon: "🧩",
    title: "With any MCP servers", 
    description: "Your senior engineers spending countless hours on button color changes and copy updates. That's $100/hour talent doing $10/hour work."
  },
  {
    icon: "🔮",
    title: "Using best-in-class agents",
    description: "Peerbot uses Claude Code from Anthropic, the best agentic coding assistant. "
  }
]

export function PainPoints() {
  return (
    <section className="p-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-2xl hover:bg-zinc-800/70 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="mb-4 text-3xl">
                {point.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-zinc-100">
                {point.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}