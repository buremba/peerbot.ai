import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'
import { SlackConversation } from './SlackConversation'

// Slack Logo SVG Component
function SlackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.521-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.523 2.521h-2.521V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.523v-2.521h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
    </svg>
  )
}

export function Hero() {
  const scrollToInstall = () => {
    document.getElementById('install')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden px-8 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative grid lg:grid-cols-2 gap-8 items-center">
          {/* Background - exact structure from sshx.io */}
          <div className="absolute -z-10 scale-150 md:left-[180px] md:top-[-200px] md:w-[1000px] md:scale-100">
            <img className="select-none" src="/landing-background.svg" alt="" />
          </div>
          
          {/* Text content - left side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              <span className="gradient-title">Scale your</span>
              <br />
              <span className="text-zinc-400 text-md">dev team 10x</span>
              <br />
            </h1>
            
            <div className="mb-8 max-w-xl space-y-3">
              <p className="text-zinc-300 lg:text-lg">
                <span className="text-pink-400">Empower </span>product managers, marketers, and sales teams to validate ideas and develop features with an agent — directly from Slack.
              </p>
            
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                              href="https://join.slack.com/t/peerbot/shared_invite/zt-391o8tyw2-iyupjTG1xHIz9Og8C7JOnw"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-pink-700 px-8 py-2 text-lg font-medium text-white transition-all hover:bg-pink-600 active:ring-4 active:ring-pink-500/50"
              >
                                <MessageSquare className="h-5 w-5" />

                Try it now
              </a>
              <a
                              href="https://slack.com/oauth/v2/authorize?client_id=9171119466245.9176167386695&scope=app_mentions:read,channels:history,chat:write,chat:write.public,im:history,im:read,im:write,users:read,reactions:read,reactions:write,channels:read,groups:read&user_scope="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-600 bg-zinc-800/50 px-8 py-2 text-lg font-medium text-white transition-all hover:bg-zinc-700/50 hover:border-zinc-500"
              >
                                <SlackIcon className="h-5 w-5" />
 
                Add to your Slack
              </a>
            </div>
          </motion.div>
          
          {/* Slack Conversation on the right */}
          <div className="relative lg:pl-8 w-full max-w-full overflow-hidden">
            <SlackConversation />
          </div>
        </div>
      </div>
    </section>
  )
}