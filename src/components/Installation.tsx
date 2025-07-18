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
  const [selectedMethod, setSelectedMethod] = useState<'npm' | 'docker' | 'github'>('npm')
  const [selectedOption, setSelectedOption] = useState<'own' | 'public'>('own')
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
          <div className="mb-4 flex items-center justify-center gap-3">
            <h2 className="text-4xl font-bold text-zinc-100">
              Installation
            </h2>
            <span className="inline-block rounded-full bg-pink-500/20 px-3 py-1 text-sm font-medium text-pink-400 border border-pink-500/30">
              Alpha
            </span>
          </div>
          <p className="text-xl text-zinc-400">
            Get started with PeerBot in seconds
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-0">
          {/* Environment Setup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className="w-full mb-12"
          >
            <h3 className="text-lg sm:text-xl mb-4 text-center">
              <Download className="mb-0.5 mr-1 inline-block h-5 w-5 text-zinc-400" />
              Environment Setup
            </h3>
            <div className="text-sm text-zinc-400 md:pt-0.5 md:text-base">
              <p className="mb-6 text-center">First, set up your Slack bot credentials (environment variables):</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-zinc-900 p-6">
                  <h4 className="text-zinc-200 font-medium mb-3 text-lg flex items-center gap-3">
                    <input
                      type="radio"
                      name="setup-option"
                      value="own"
                      checked={selectedOption === 'own'}
                      onChange={() => setSelectedOption('own')}
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                    />
                    Option 1: Create your own Slack bot
                  </h4>
                  <div className="flex items-center gap-4 mb-3">
                    <code className="text-zinc-100 text-sm">
                      {selectedMethod === 'npm' && 'npx peerbot-ai@latest hire slack'}
                      {selectedMethod === 'docker' && 'docker run -it peerbot/peerbot-ai:latest hire slack'}
                      {selectedMethod === 'github' && 'npx peerbot-ai@latest hire slack'}
                    </code>
                    <CopyButton text={
                      selectedMethod === 'npm' ? 'npx peerbot-ai@latest hire slack' :
                      selectedMethod === 'docker' ? 'docker run -it peerbot/peerbot-ai:latest hire slack' :
                      'npx peerbot-ai@latest hire slack'
                    } />
                  </div>
                  <p className="text-sm text-zinc-500">Walks you through creating a bot on your Slack workspace</p>
                </div>
                <div className="rounded-lg bg-zinc-900 p-6">
                  <h4 className="text-zinc-200 font-medium mb-3 text-lg flex items-center gap-3">
                    <input
                      type="radio"
                      name="setup-option"
                      value="public"
                      checked={selectedOption === 'public'}
                      onChange={() => setSelectedOption('public')}
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500"
                    />
                    Option 2: Try on our public Slack
                  </h4>
                  <div className="flex items-center gap-4 mb-3">
                    <code className="text-zinc-100 text-sm">
                      {selectedMethod === 'npm' && 'npx peerbot-ai@latest hire public'}
                      {selectedMethod === 'docker' && 'docker run -it peerbot/peerbot-ai:latest hire public'}
                      {selectedMethod === 'github' && 'npx peerbot-ai@latest hire public'}
                    </code>
                    <CopyButton text={
                      selectedMethod === 'npm' ? 'npx peerbot-ai@latest hire public' :
                      selectedMethod === 'docker' ? 'docker run -it peerbot/peerbot-ai:latest hire public' :
                      'npx peerbot-ai@latest hire public'
                    } />
                  </div>
                  <p className="text-sm text-zinc-500">Hire temporary bot (valid for 1h) on our public Slack</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* npm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="installation-section"
          >
            <h3 className="text-lg sm:text-xl flex items-center gap-3">
              <input
                type="radio"
                name="installation-method"
                value="npm"
                checked={selectedMethod === 'npm'}
                onChange={() => setSelectedMethod('npm')}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500"
              />
              <span className="flex items-center">
                <Download className="mb-0.5 mr-1 inline-block h-5 w-5 text-zinc-400" />
                npm
              </span>
            </h3>
            <div className="text-sm text-zinc-400 md:pt-0.5 md:text-base">
              <p className="mb-3">Quick start with npm:</p>
              <div className="relative">
                <pre className="rounded-lg bg-zinc-900 p-4 text-xs text-zinc-300 overflow-x-auto">
                  <code>{selectedOption === 'own' ? `SLACK_BOT_TOKEN=\${SLACK_BOT_TOKEN} \\
SLACK_APP_TOKEN=\${SLACK_APP_TOKEN} \\
SLACK_SIGNING_SECRET=\${SLACK_SIGNING_SECRET} \\
npx peerbot-ai@latest run slack` : `PEERBOT_TOKEN=\${PEERBOT_TOKEN} \\
npx peerbot-ai@latest run slack`}</code>
                </pre>
                <div className="absolute right-2 top-2">
                  <CopyButton text={selectedOption === 'own' ? `SLACK_BOT_TOKEN=\${SLACK_BOT_TOKEN} SLACK_APP_TOKEN=\${SLACK_APP_TOKEN} SLACK_SIGNING_SECRET=\${SLACK_SIGNING_SECRET} npx peerbot-ai@latest run slack` : `PEERBOT_TOKEN=\${PEERBOT_TOKEN} npx peerbot-ai@latest run slack`} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Docker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className="installation-section"
          >
            <h3 className="text-lg sm:text-xl flex items-center gap-3">
              <input
                type="radio"
                name="installation-method"
                value="docker"
                checked={selectedMethod === 'docker'}
                onChange={() => setSelectedMethod('docker')}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500"
              />
              <span className="flex items-center">
                <Download className="mb-0.5 mr-1 inline-block h-5 w-5 text-zinc-400" />
                Docker
              </span>
            </h3>
            <div className="text-sm text-zinc-400 md:pt-0.5 md:text-base">
              <p className="mb-3">Deploy with Docker:</p>
              <div className="relative">
                <pre className="rounded-lg bg-zinc-900 p-4 text-xs text-zinc-300 overflow-x-auto">
                  <code>{selectedOption === 'own' ? `docker run -d \\
  --name peerbot \\
  -e SLACK_BOT_TOKEN=\${SLACK_BOT_TOKEN} \\
  -e SLACK_APP_TOKEN=\${SLACK_APP_TOKEN} \\
  -e SLACK_SIGNING_SECRET=\${SLACK_SIGNING_SECRET} \\
  -v \${PWD}/.peerbot:/app/.peerbot \\
  peerbot/peerbot-ai:latest run slack` : `docker run -d \\
  --name peerbot \\
  -e PEERBOT_TOKEN=\${PEERBOT_TOKEN} \\
  -v \${PWD}/.peerbot:/app/.peerbot \\
  peerbot/peerbot-ai:latest run slack`}</code>
                </pre>
                <div className="absolute right-2 top-2">
                  <CopyButton text={selectedOption === 'own' ? `docker run -d \\
  --name peerbot \\
  -e SLACK_BOT_TOKEN=\${SLACK_BOT_TOKEN} \\
  -e SLACK_APP_TOKEN=\${SLACK_APP_TOKEN} \\
  -e SLACK_SIGNING_SECRET=\${SLACK_SIGNING_SECRET} \\
  -v \${PWD}/.peerbot:/app/.peerbot \\
  peerbot/peerbot-ai:latest run slack` : `docker run -d \\
  --name peerbot \\
  -e PEERBOT_TOKEN=\${PEERBOT_TOKEN} \\
  -v \${PWD}/.peerbot:/app/.peerbot \\
  peerbot/peerbot-ai:latest run slack`} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* GitHub Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
            className="installation-section"
          >
            <h3 className="text-lg sm:text-xl flex items-center gap-3">
              <input
                type="radio"
                name="installation-method"
                value="github"
                checked={selectedMethod === 'github'}
                onChange={() => setSelectedMethod('github')}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500"
              />
              <span className="flex items-center">
                <Download className="mb-0.5 mr-1 inline-block h-5 w-5 text-zinc-400" />
                GitHub Actions
              </span>
            </h3>
            <div className="text-sm text-zinc-400 md:pt-0.5 md:text-base">
              <p className="mb-3">Integrate with CI/CD. Add this to your <code>.github/workflows/peerbot.yml</code>:</p>
              <div className="relative">
                <pre className="rounded-lg bg-zinc-900 p-4 text-xs text-zinc-300 overflow-x-auto">
                  <code>{selectedOption === 'own' ? `name: PeerBot CI
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
        SLACK_SIGNING_SECRET: \${{ secrets.SLACK_SIGNING_SECRET }}
        SLACK_APP_TOKEN: \${{ secrets.SLACK_APP_TOKEN }}` : `name: PeerBot CI
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
        PEERBOT_TOKEN: \${{ secrets.PEERBOT_TOKEN }}`}</code>
                </pre>
                <div className="absolute right-2 top-2">
                  <CopyButton text={selectedOption === 'own' ? `name: PeerBot CI
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
        SLACK_SIGNING_SECRET: \${{ secrets.SLACK_SIGNING_SECRET }}
        SLACK_APP_TOKEN: \${{ secrets.SLACK_APP_TOKEN }}` : `name: PeerBot CI
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
        PEERBOT_TOKEN: \${{ secrets.PEERBOT_TOKEN }}`} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}