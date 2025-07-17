import { motion } from 'framer-motion'
import { useState } from 'react'

export function Terminal() {
  const [activeTab, setActiveTab] = useState<'terminal' | 'config'>('terminal')

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="terminal-window rounded-lg overflow-hidden shadow-2xl"
    >
      <div className="bg-zinc-900 border border-zinc-800">
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/50 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 ml-4">
            <div className="flex items-center gap-0">
              <button
                onClick={() => setActiveTab('terminal')}
                className={`px-3 py-1 text-xs transition-colors ${
                  activeTab === 'terminal'
                    ? 'bg-zinc-900 text-zinc-100 border-t border-l border-r border-zinc-700 -mb-px'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Terminal
              </button>
              <button
                onClick={() => setActiveTab('config')}
                className={`px-3 py-1 text-xs transition-colors ${
                  activeTab === 'config'
                    ? 'bg-zinc-900 text-zinc-100 border-t border-l border-r border-zinc-700 -mb-px'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                peerbot.yaml
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-4 font-mono text-xs h-[400px] overflow-hidden">
          {activeTab === 'terminal' ? (
            <>
              <div className="flex items-center gap-2 text-green-400">
                <span>$</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  npx peerbot-ai@latest run slack --peers soham
                </motion.span>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-2 text-zinc-400"
              >
                <div className="text-yellow-400">⚡️ PeerBot is running!</div>
                <div className="text-zinc-500 mt-1">─────────────────────────────────────</div>
                <div className="mt-1">Owner: <span className="text-cyan-400">@buremba</span></div>
                <div>Peers: <span className="text-green-400">2</span></div>
                
                <div className="mt-2 text-zinc-300">Available Peers:</div>
                <div className="ml-2">
                  <div className="text-green-400">● soham <span className="text-zinc-500">(@soham)</span></div>
                  <div className="ml-4 text-zinc-500">MCPs: filesystem</div>
                  <div className="ml-4 text-zinc-500">Permissions: 4 allowed, 2 denied</div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="mt-3"
                >
                  <div className="text-blue-400">[INFO] Starting SlackHandler...</div>
                  <div className="text-green-400 mt-1">🚀 Starting peer: soham</div>
                  <div className="text-zinc-400">🤖 Peer ready: soham (@soham)</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="mt-3 flex items-center gap-2 text-green-400"
                >
                  <span>✅ Listening for Slack events</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-3 bg-green-400"
                  />
                </motion.div>
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-zinc-300"
            >
              <div className="text-zinc-500"># peerbot.yaml</div>
              <div className="mt-3">
                <span className="text-pink-400">peers</span>:
              </div>
              <div className="ml-2">
                - <span className="text-pink-400">name</span>: <span className="text-green-400">soham</span>
              </div>
              <div className="ml-4">
                <span className="text-pink-400">handle</span>: <span className="text-green-400">@soham</span>
              </div>
              <div className="ml-4">
                <span className="text-pink-400">model</span>: <span className="text-yellow-400">claude-3-5-sonnet-latest</span>
              </div>
              <div className="ml-4">
                <span className="text-pink-400">instructions</span>: |
              </div>
              <div className="ml-6 text-zinc-400">
                You are Soham, a senior engineer who
              </div>
              <div className="ml-6 text-zinc-400">
                specializes in React and TypeScript.
              </div>
              <div className="ml-6 text-zinc-400">
                Help the team with code reviews and
              </div>
              <div className="ml-6 text-zinc-400">
                architectural decisions.
              </div>
              <div className="ml-4 mt-2">
                <span className="text-pink-400">mcps</span>:
              </div>
              <div className="ml-6">
                - <span className="text-yellow-400">filesystem</span>
              </div>
              <div className="ml-4 mt-2">
                <span className="text-pink-400">permissions</span>:
              </div>
              <div className="ml-6">
                <span className="text-pink-400">allow</span>: [<span className="text-green-400">"read"</span>, <span className="text-green-400">"write"</span>, <span className="text-green-400">"edit"</span>]
              </div>
              <div className="ml-6">
                <span className="text-pink-400">deny</span>: [<span className="text-red-400">"delete"</span>, <span className="text-red-400">"execute"</span>]
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}