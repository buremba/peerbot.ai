import { Copy, Check, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface CopyButtonProps {
  text: string
}

function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="rounded p-1.5 transition-colors hover:bg-white/10"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4 text-zinc-400" />
      )}
    </button>
  )
}

export function Installation() {
  return (
    <section id="install" className="px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-zinc-100">
            Installation
          </h2>
          <p className="text-xl text-zinc-400">
            Get started with peerbot in seconds
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-0 text-">
        

          {/* npm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="installation-section"
          >
            <h3 className="text-lg sm:text-xl">
              <Download className="mb-0.5 mr-1 inline-block h-5 w-5 text-zinc-400" />
              npm
            </h3>
            <div className="text-sm text-zinc-400 md:pt-0.5 md:text-base">
              <p className="mb-3">Install via npm:</p>
              <div className="flex items-center gap-4">
                <code className="text-zinc-100">npx peerbot-ai@latest run slack                 </code>
                <CopyButton text="npx peerbot-ai@latest run slack" />
              </div>  
            </div>
          </motion.div>

    

          {/* GitHub Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="installation-section"
          >
            <h3 className="text-lg sm:text-xl">
              <Download className="mb-0.5 mr-1 inline-block h-5 w-5 text-zinc-400" />
              GitHub Actions
            </h3>
            <div className="text-sm text-zinc-400 md:pt-0.5 md:text-base">
              <p className="mb-3">Use in CI/CD workflows. Add this to your <code>.github/workflows/peerbot.yml</code>:</p>
              <div className="relative">
                <pre className="rounded-lg bg-zinc-900 p-4 text-xs text-zinc-300 overflow-x-auto">
                  <code>{`name: PeerBot CI
on: [push, pull_request]

jobs:
  peerbot:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
    - name: Run PeerBot
      run: npx peerbot-ai@latest run slack --peers devops
      env:
        SLACK_BOT_TOKEN: \${{ secrets.SLACK_BOT_TOKEN }}
        SLACK_APP_TOKEN: \${{ secrets.SLACK_APP_TOKEN }}`}</code>
                </pre>
                <div className="absolute right-2 top-2">
                  <CopyButton text={`name: PeerBot CI
on: [push, pull_request]

jobs:
  peerbot:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
    - name: Run PeerBot
      run: npx peerbot-ai@latest run slack --peers devops
      env:
        SLACK_BOT_TOKEN: \${{ secrets.SLACK_BOT_TOKEN }}
        SLACK_APP_TOKEN: \${{ secrets.SLACK_APP_TOKEN }}`} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}