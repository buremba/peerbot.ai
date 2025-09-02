import { motion } from 'framer-motion'

const painPoints = [
  {
    icon: "⏱️",
    title: "6-Week Sprint Cycles for Simple Changes",
    description: "That urgent copy update for your campaign? It's sitting in the backlog behind 47 other tickets. Your competitors just launched while you're still waiting."
  },
  {
    icon: "🔄", 
    title: "Lost in Translation",
    description: "PM writes specs → Designer creates mockups → Dev interprets differently → QA finds issues → Back to square one. Sound familiar?"
  },
  {
    icon: "💸",
    title: "$200k+ Dev Time on Non-Dev Tasks", 
    description: "Your senior engineers spending hours on button color changes and copy updates. That's $100/hour talent doing $10/hour work."
  },
  {
    icon: "🔮",
    title: "Best-in-class agents",
    description: "Peerbot uses Claude Code from Anthropic, the best agentic coding assistant, to create features and validate ideas."
  }
]

export function PainPoints() {
  return (
    <section className="px-8 py-24 bg-zinc-900/50">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold text-zinc-100">
            Scale your team 10x
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Peerbot is a Slack bot which runs in a secure sandbox environment, a mirror of your production. You can create preview URLs and create Pull Requests to your codebase.
          </p>
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