import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SEO } from '../components/SEO'
import { motion } from 'framer-motion'
import { Book, Terminal, Shield, Zap, GitBranch, Users } from 'lucide-react'

export const Route = createFileRoute('/docs')({
  component: DocsPage,
})

const sections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: <Zap className="h-5 w-5" />,
    content: [
      {
        title: 'Installation',
        description: 'Install PeerBot CLI globally using npm:',
        code: 'npm install -g peerbot',
      },
      {
        title: 'Initialize PeerBot',
        description: 'Set up PeerBot in your project directory:',
        code: 'peerbot init',
      },
      {
        title: 'Connect to Slack',
        description: 'Add PeerBot to your Slack workspace:',
        code: 'peerbot connect slack',
      },
    ],
  },
  {
    id: 'configuration',
    title: 'Configuration',
    icon: <Terminal className="h-5 w-5" />,
    content: [
      {
        title: 'Environment Variables',
        description: 'Configure your AI model API keys:',
        code: `# .env file
CLAUDE_API_KEY=your_claude_api_key
OPENAI_API_KEY=your_openai_api_key
SLACK_BOT_TOKEN=your_slack_bot_token`,
      },
      {
        title: 'Peer Configuration',
        description: 'Define custom peers in peerbot.config.js:',
        code: `module.exports = {
  peers: [
    {
      id: 'senior-dev',
      name: 'Senior Developer',
      model: 'claude-3-opus',
      role: 'Expert in architecture and code reviews',
      capabilities: ['code-review', 'architecture', 'refactoring']
    },
    {
      id: 'qa-engineer',
      name: 'QA Engineer',
      model: 'gpt-4',
      role: 'Testing and quality assurance specialist',
      capabilities: ['testing', 'bug-detection', 'test-writing']
    }
  ]
}`,
      },
    ],
  },
  {
    id: 'slack-integration',
    title: 'Slack Integration',
    icon: <Users className="h-5 w-5" />,
    content: [
      {
        title: 'Basic Commands',
        description: 'Interact with PeerBot in Slack:',
        code: `# Direct message
Hey @PeerBot, can you review this PR?

# Channel mention
@PeerBot help me debug this error

# Hire a specific peer
@PeerBot hire senior-dev`,
      },
      {
        title: 'Team Collaboration',
        description: 'PeerBot can work with your entire team:',
        code: `# Team member asks for help
@PeerBot how do I implement authentication?

# PeerBot creates a worktree and shows code
# You review and approve before merging`,
      },
    ],
  },
  {
    id: 'git-workflow',
    title: 'Git Workflow',
    icon: <GitBranch className="h-5 w-5" />,
    content: [
      {
        title: 'Automatic Worktrees',
        description: 'PeerBot creates isolated worktrees for changes:',
        code: `# PeerBot automatically:
1. Creates a new worktree
2. Makes requested changes
3. Commits with descriptive message
4. Pushes to a feature branch
5. Creates a pull request`,
      },
      {
        title: 'PR Management',
        description: 'Review and manage pull requests:',
        code: `@PeerBot show my PRs
@PeerBot update PR #123 with feedback
@PeerBot merge PR #123`,
      },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    icon: <Shield className="h-5 w-5" />,
    content: [
      {
        title: 'End-to-End Encryption',
        description: 'All communication is encrypted:',
        code: `# Socket mode ensures secure connection
# Your code never leaves your infrastructure
# API keys are stored locally and encrypted`,
      },
      {
        title: 'Access Control',
        description: 'Control who can use PeerBot:',
        code: `# peerbot.config.js
module.exports = {
  access: {
    allowedUsers: ['user1', 'user2'],
    allowedChannels: ['#dev', '#engineering'],
    requireApproval: true
  }
}`,
      },
    ],
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    icon: <Book className="h-5 w-5" />,
    content: [
      {
        title: 'CLI Commands',
        description: 'Complete list of PeerBot CLI commands:',
        code: `peerbot init          # Initialize PeerBot
peerbot connect       # Connect to Slack
peerbot hire [peer]   # Start a peer session
peerbot list          # List available peers
peerbot config        # Manage configuration
peerbot logs          # View activity logs
peerbot update        # Update PeerBot`,
      },
      {
        title: 'Programmatic API',
        description: 'Use PeerBot in your Node.js applications:',
        code: `const { PeerBot } = require('peerbot');

const bot = new PeerBot({
  slackToken: process.env.SLACK_BOT_TOKEN,
  peers: ['senior-dev', 'qa-engineer']
});

// Handle messages programmatically
bot.on('message', async (event) => {
  const response = await bot.process(event.text);
  await bot.reply(event.channel, response);
});`,
      },
    ],
  },
]

function DocsPage() {
  return (
    <>
      <SEO
        title="Documentation"
        description="Complete documentation for PeerBot - Learn how to install, configure, and use PeerBot with Claude Code in your Slack workspace. Includes API reference, security guide, and best practices."
        keywords="PeerBot documentation, Claude Code Slack setup, AI coding assistant guide, Slack bot configuration, PeerBot API reference"
        url="https://peerbot.ai/docs"
      />
      <Header />
      
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-6 text-5xl font-bold text-white">
              Documentation
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-zinc-400">
              Everything you need to know to get started with PeerBot and integrate Claude Code into your Slack workspace
            </p>
          </motion.div>
          
          {/* Quick navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="panel flex items-center gap-4 p-6 transition-all hover:translate-y-[-2px]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400">
                  {section.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-200">{section.title}</h3>
                  <p className="text-sm text-zinc-400">{section.content.length} topics</p>
                </div>
              </a>
            ))}
          </motion.div>
          
          {/* Documentation sections */}
          <div className="space-y-24">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-8">
                  {section.content.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="panel p-8"
                    >
                      <h3 className="mb-4 text-xl font-semibold text-zinc-200">
                        {item.title}
                      </h3>
                      <p className="mb-6 text-zinc-400">{item.description}</p>
                      <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4">
                        <code className="text-sm text-zinc-300">{item.code}</code>
                      </pre>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Help section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <h2 className="mb-4 text-2xl font-bold text-white">Need Help?</h2>
            <p className="mb-8 text-zinc-400">
              Can't find what you're looking for? We're here to help.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://github.com/peerbot/peerbot/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-zinc-600 bg-zinc-800/50 px-8 py-3 font-medium text-white transition-all hover:border-zinc-500 hover:bg-zinc-700/50"
              >
                Report an Issue
              </a>
              <a
                href="https://join.slack.com/t/peerbot/shared_invite/zt-391o8tyw2-iyupjTG1xHIz9Og8C7JOnw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-pink-700 px-8 py-3 font-medium text-white transition-all hover:bg-pink-600"
              >
                Join Our Community
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}