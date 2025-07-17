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
            See it in action
          </h2>
          <p className="mb-16 text-xl text-zinc-400">
            Watch how PeerBot helps boosting your productivity
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
                    peerbot.ai
                  </div>
                </div>
                <div className="w-20" />
              </div>
              
              {/* Video content */}
              <div className="relative aspect-video">
                <video
                  playsInline
                  muted
                  autoPlay
                  loop
                  controls
                  className="h-full w-full"
                  width="2476"
                  height="1534"
                >
                  <source 
                    src="https://sshx.s3.amazonaws.com/media/teaser-video.mp4" 
                    type='video/mp4; codecs="hvc1"'
                  />
                  <source 
                    src="https://sshx.s3.amazonaws.com/media/teaser-video.webm" 
                    type="video/webm"
                  />
                  <track kind="captions" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}