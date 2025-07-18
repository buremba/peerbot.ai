import { motion } from 'framer-motion'

export function Video() {
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
          Scale yourself 10x
          </h2>
          <p className="mb-16 text-xl text-zinc-400">
          Watch how we develop PeerBot <span className="text-pink-400 font-bold">with PeerBot</span> in a Slack workspace, join our Slack to experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl"
        >
          <div className="panel relative overflow-hidden rounded-2xl p-1">
            <div className="rounded-xl bg-zinc-950">
              {/* Browser chrome */}
              <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 px-8">
                  <div className="mx-auto max-w-md rounded-md bg-zinc-900 px-3 py-1 text-center text-sm text-zinc-400">
                    peerbot.slack.com
                  </div>
                </div>
                <div className="w-20" />
              </div>
              
              {/* Screenshot content */}
              <div className="relative aspect-video">
                <img
                  src="/images/screenshot.png"
                  alt="PeerBot demo"
                  className="h-full w-full object-cover"
                  width="2476"
                  height="1534"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}