import { Shield, Zap, Users, Lock, Globe, Code } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Best Agentic Coding Assistant',
    description: 'PeerBot is build on Claude Code, the best agentic coding assistant. It can be whoever you want it to be.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Help your colleagues',
    description: 'Your colleagues can ask the bot questions instead of you, and once the bot has your confirmation, it can get things done for you. You can need to review & approve.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Pick best model for the task',
    description: 'You can define multiple peers (has its own role and 💰 model) which are auto-selected based on the context of the message.',
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: 'Secure by Design',
    description: 'It uses Slack Bolt SDK in socket mode, the messages are encrypted end to end with your Slack and your environment.',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Best for multi-tasking',
    description: 'You can access your peers from anywhere including desktop, mobile, and web thanks to Slack.',
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Works everywhere',
    description: 'Just install the CLI and run it on your machine, CI, or on cloud providers such as AWS, GCP, and Azure.',
  },
]

export function Features() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-zinc-100">
              Built for developers, by developers
          </h2>
          <p className="mb-16 text-xl text-zinc-400">
          PeerBot brings the power of Claude Code to your Slack workspace.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-block"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-100">
                {feature.title}
              </h3>
              <p className="text-zinc-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}