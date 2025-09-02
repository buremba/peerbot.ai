import { motion } from 'framer-motion'

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
            Validate Ideas in a Trusted Production Environment
          </h2>
          <p className="mb-16 text-xl text-zinc-400">
            No tickets. No sprints. No waiting.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "1",
              title: "Install to Slack",
              description: "One-click installation. Peerbot connects securely to your codebase with read/write permissions you control."
            },
            {
              number: "2", 
              title: "Chat Your Changes",
              description: "Just @mention Peerbot and describe what you want. \"Update the pricing page header\" or \"Change button color to match brand.\""
            },
            {
              number: "3",
              title: "Review & Deploy", 
              description: "Peerbot shows you a preview that you can create a pull request to. Your engineers review, refactor if needed, and merge to ship production."
            },
            {
              number: "4",
              title: "Track Everything",
              description: "Full audit trail, rollback capability, and integration with your existing CI/CD pipeline. Stay in control."
            }
          ].map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-600 to-pink-700 text-white font-bold text-lg">
                {step.number}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-zinc-100">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {step.description}
              </p>
              {index < 3 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-pink-600 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}