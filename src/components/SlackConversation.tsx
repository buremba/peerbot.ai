import { motion } from 'framer-motion'

export function SlackConversation() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full max-w-full"
    >
      <div className="bg-zinc-900 rounded-2xl shadow-2xl p-6 border border-zinc-800">
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-zinc-800">
          <span className="text-zinc-400">💬 #product-updates</span>
        </div>
        
        <div className="bg-zinc-800/50 p-4 rounded-lg mb-4">
          <strong className="text-zinc-200">@sarah_pm:</strong> <span className="text-zinc-300">@Peerbot can you update the homepage headline to "Transform Your Business with AI" and make the CTA button green?</span>
        </div>
        
        <div className="bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 p-4 rounded-lg border-l-4 border-pink-500">
          <strong className="text-zinc-200">🤖 Peerbot:</strong> <span className="text-zinc-300">I'll update the homepage for you!</span>
          <br />
          <span className="text-green-400">✅ Changed headline to "Transform Your Business with AI"</span>
          <br />
          <span className="text-green-400">✅ Updated CTA button color to green</span>
          <br />
          🔗 Preview: 
          <a
            href="https://pr-5.peerbot-ai.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >https://pr-5.peerbot-ai.pages.dev/
          </a>
        </div>
      </div>
    </motion.div>
  )
}