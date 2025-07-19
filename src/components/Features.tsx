import { Shield, Zap, Users, Lock, Globe, Code } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Smart GIT worktrees',
    description: 'When making code changes, PeerBot automatically creates worktrees and pushes them to create Pull Requests—all from Slack.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Team collaboration made easy',
    description: 'Your colleagues can ask questions directly to the bot instead of interrupting you. You review and approve before any action is taken.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Smart model selection',
    description: 'Define multiple peers, each with their own role and model. The right peer is automatically selected based on conversation context.',
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: 'Secure by design',
    description: 'Uses Slack Bolt SDK in socket mode with end-to-end encryption between your Slack workspace and local environment.',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Access from anywhere',
    description: 'Work with your AI peers from desktop, mobile, or web—wherever Slack is available.',
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Deploy anywhere',
    description: 'Simple CLI installation works on your local machine, CI/CD pipelines, or cloud providers like AWS, GCP, and Azure.',
  },
]

export function Features() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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