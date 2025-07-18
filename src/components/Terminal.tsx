import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronRight, File, Folder } from 'lucide-react'

export function Terminal() {
  const [activeTab, setActiveTab] = useState<'terminal' | 'directory' | 'buremba' | 'devops' | 'frontend' | 'marketing'>('terminal')

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="terminal-window rounded-lg overflow-hidden shadow-2xl"
    >
      <div className="bg-zinc-900 border border-zinc-800">
        <div className="flex items-center justify-between px-4 pt-2 bg-zinc-800/50 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 ml-4">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab('terminal')}
                className={`px-3 py-2 text-sm rounded-t-md transition-all cursor-pointer ${
                  activeTab === 'terminal'
                    ? 'bg-zinc-900 text-zinc-100 border-t border-l border-r border-zinc-700'
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'
                }`}
              >
                Terminal
              </button>
              <button
                onClick={() => setActiveTab('directory')}
                className={`px-3 py-2 text-sm rounded-t-md transition-all cursor-pointer ${
                  activeTab === 'directory'
                    ? 'bg-zinc-900 text-zinc-100 border-t border-l border-r border-zinc-700'
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'
                }`}
              >
                .peerbot/peers
              </button>
              {activeTab !== 'terminal' && activeTab !== 'directory' && (
                <button
                  onClick={() => setActiveTab(activeTab)}
                  className="px-3 py-2 text-sm rounded-t-md transition-all cursor-pointer bg-zinc-900 text-zinc-100 border-t border-l border-r border-zinc-700"
                >
                  {activeTab}.md
                </button>
              )}
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
                  peerbot run slack
                </motion.span>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-2 text-zinc-400"
              >
                <div className="mt-2"></div>
                <div className="text-yellow-400">⚡️ PeerBot is running! Peers loaded from <span className="underline cursor-pointer hover:text-yellow-300" onClick={() => setActiveTab('directory')}>.peerbot/peers</span></div>
                <div className="text-zinc-500">────────────────────────────────────────────────────────────────────────────────</div>
                <div>Owner: <span className="text-zinc-500">@buremba</span></div>
                <div>Peers: <span className="text-green-400">4</span></div>
                
                <div className="mt-2 text-zinc-300">Available Peers:</div>
                <pre className="text-xs whitespace-pre overflow-x-auto">
                  <span className="text-zinc-500">  Name        User             Role                          Exec  MCPs</span>
                  <span className="text-zinc-500">{'\n'}  ────────────────────────────────────────────────────────────────────</span>
                  <span>{'\n'}  </span><span className="text-zinc-300 hover:text-cyan-400 cursor-pointer hover:underline" onClick={() => setActiveTab('buremba')}>buremba</span><span>     </span><span className="text-cyan-400">@buremba-ai</span><span>      ceo                           </span><span className="text-green-400">✓</span><span>     ∅</span>
                  <span>{'\n'}  </span><span className="text-zinc-300 hover:text-cyan-400 cursor-pointer hover:underline" onClick={() => setActiveTab('devops')}>devops</span><span>      </span><span className="text-cyan-400">@k8s</span><span>             devops engineer spec...       </span><span className="text-green-400">✓</span><span>     ∅</span>
                  <span>{'\n'}  </span><span className="text-zinc-300 hover:text-cyan-400 cursor-pointer hover:underline" onClick={() => setActiveTab('frontend')}>frontend</span><span>    </span><span className="text-cyan-400">@slack-peer-bot</span><span>  senior frontend eng...        </span><span className="text-green-400">✓</span><span>     ∅</span>
                  <span>{'\n'}  </span><span className="text-zinc-300 hover:text-cyan-400 cursor-pointer hover:underline" onClick={() => setActiveTab('marketing')}>marketing</span><span>   </span><span className="text-cyan-400">@lorena</span><span>          technical marketing...        </span><span className="text-red-400">✗</span><span>     ∅</span>
                </pre>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="mt-3"
                >
                  <div className="text-blue-400">[INFO] Connected to Slack, sessions will be powered by Claude Code</div>
                  <div className="text-zinc-400">[INFO] 🔄 Peers will be selected dynamically per conversation</div>
                  <div className="mt-1 flex items-center gap-1">
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-green-400"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </>
          ) : activeTab === 'directory' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-zinc-300"
            >
              <div className="text-zinc-500">tree</div>
              <div className="mt-3">
                <div className="flex items-center gap-2">
                  <Folder className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400">.peerbot</span>
                </div>
                <div className="ml-4 mt-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-zinc-500" />
                    <Folder className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400">peers</span>
                  </div>
                  <div className="ml-8 mt-1">
                    {['buremba', 'devops', 'frontend', 'marketing'].map((peer) => (
                      <div key={peer} className="flex items-center gap-2 py-1">
                        <File className="w-4 h-4 text-zinc-400" />
                        <span 
                          className="text-zinc-300 hover:text-cyan-400 cursor-pointer hover:underline"
                          onClick={() => setActiveTab(peer as any)}
                        >
                          {peer}.md
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : activeTab === 'buremba' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-zinc-300"
            >
              <div className="text-zinc-500"># buremba.md</div>
              <pre className="mt-3 text-sm text-zinc-300 whitespace-pre-wrap">{`---
user: "@buremba-ai"
editor: cursor
allow_execution: true
role: "ceo"
---

You're a serial entrepreneur and a perfectionist developer.
You quickly create MVPs and iterate on them.`}</pre>
            </motion.div>
          ) : activeTab === 'devops' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-zinc-300"
            >
              <div className="text-zinc-500"># devops.md</div>
              <pre className="mt-3 text-sm text-zinc-300 whitespace-pre-wrap">{`---
user: "@k8s"
editor: vscode
allow_execution: true
role: "devops engineer"
---

You are a DevOps engineer specializing in Kubernetes,
Docker, CI/CD pipelines, and cloud infrastructure.`}</pre>
            </motion.div>
          ) : activeTab === 'frontend' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-zinc-300"
            >
              <div className="text-zinc-500"># frontend.md</div>
              <pre className="mt-3 text-sm text-zinc-300 whitespace-pre-wrap">{`---
user: "@slack-peer-bot"
editor: cursor
allow_execution: true
role: "senior frontend engineer"
---

You are a senior frontend engineer specializing in
React, TypeScript, and modern web development.`}</pre>
            </motion.div>
          ) : activeTab === 'marketing' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-zinc-300"
            >
              <div className="text-zinc-500"># marketing.md</div>
              <pre className="mt-3 text-sm text-zinc-300 whitespace-pre-wrap">{`---
user: "@lorena"
editor: vscode
allow_execution: false
role: "technical marketing expert"
---

You are a technical marketing expert specializing
in developer relations and technical content.`}</pre>
            </motion.div>
          ) : null}
        </div>
      </div>
    </motion.div>
  )
}