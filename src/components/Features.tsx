import { Shield, Zap, Users, Lock, Globe, Code } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Best Agentic Coding Assistant',
    description: 'PeerBot is build on Claude Code, the best agentic coding assistant.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'No data is stored',
    description: 'PeerBot runs as Slack app, so no data is stored on servers.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Multi-User Support',
    description: 'You can define multiple peers which are auto-selected based on the context of the message.',
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: 'Secure by Default',
    description: 'Only you can access the PeerBot app on your Slack.',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Works Anywhere',
    description: 'Access Claude Code runing on your machineon your Slack',
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Open Source',
    description: 'Fully open source and available on GitHub for transparency.',
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
            Everything you need for secure terminal sharing
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