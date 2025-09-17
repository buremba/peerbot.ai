import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SEO } from '../components/SEO'
import { motion } from 'framer-motion'
import { Code, Users, GitPullRequest, Bug, Rocket, Shield, Zap, MessageSquare } from 'lucide-react'

export const Route = createFileRoute('/use-cases')({
  component: UseCasesPage,
})

const useCases = [
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Code Reviews & Pull Requests',
    description: 'Accelerate your PR workflow with AI-powered code reviews',
    details: [
      'Automatic code review comments with suggestions',
      'Smart PR descriptions based on changes',
      'Identify potential bugs and security issues',
      'Suggest improvements and best practices',
    ],
    example: '@PeerBot review PR #123 and suggest improvements',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Team Knowledge Sharing',
    description: 'Turn your AI assistant into a team knowledge base',
    details: [
      'Answer technical questions instantly',
      'Document tribal knowledge automatically',
      'Onboard new team members faster',
      'Share coding patterns and conventions',
    ],
    example: '@PeerBot how do we handle authentication in our API?',
  },
  {
    icon: <GitPullRequest className="h-8 w-8" />,
    title: 'Automated Development Tasks',
    description: 'Delegate routine coding tasks to your AI peers',
    details: [
      'Generate boilerplate code automatically',
      'Refactor legacy code safely',
      'Write unit tests for existing code',
      'Update dependencies and fix breaking changes',
    ],
    example: '@PeerBot create unit tests for the UserService class',
  },
  {
    icon: <Bug className="h-8 w-8" />,
    title: 'Debugging & Troubleshooting',
    description: 'Get instant help debugging complex issues',
    details: [
      'Analyze error messages and stack traces',
      'Suggest debugging strategies',
      'Find similar issues and solutions',
      'Explain complex error scenarios',
    ],
    example: '@PeerBot help me debug this TypeError in production',
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: 'CI/CD & DevOps Support',
    description: 'Streamline your deployment and infrastructure tasks',
    details: [
      'Generate CI/CD pipeline configurations',
      'Troubleshoot deployment failures',
      'Optimize Docker configurations',
      'Create infrastructure as code',
    ],
    example: '@PeerBot create a GitHub Actions workflow for our Node.js app',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Security & Compliance',
    description: 'Enhance security with AI-powered analysis',
    details: [
      'Identify security vulnerabilities',
      'Suggest secure coding practices',
      'Review dependencies for CVEs',
      'Ensure compliance standards',
    ],
    example: '@PeerBot scan this code for security vulnerabilities',
  },
]

interface UseCaseCardProps {
  useCase: typeof useCases[0]
  index: number
}

function UseCaseCard({ useCase, index }: UseCaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="panel p-8"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
        {useCase.icon}
      </div>
      
      <h3 className="mb-3 text-2xl font-bold text-zinc-100">{useCase.title}</h3>
      <p className="mb-6 text-lg text-zinc-400">{useCase.description}</p>
      
      <div className="mb-6">
        <h4 className="mb-3 font-semibold text-zinc-200">Key Features:</h4>
        <ul className="space-y-2">
          {useCase.details.map((detail, i) => (
            <li key={i} className="flex items-start gap-2 text-zinc-400">
              <Zap className="mt-0.5 h-4 w-4 flex-shrink-0 text-pink-400" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6 rounded-lg bg-zinc-950 p-4">
        <div className="mb-2 flex items-center gap-2 text-sm text-zinc-500">
          <MessageSquare className="h-4 w-4" />
          <span>Example Command</span>
        </div>
        <code className="text-sm text-zinc-300">{useCase.example}</code>
      </div>
      
   
    </motion.div>
  )
}

function UseCasesPage() {
  return (
    <>
      <SEO
        title="Use Cases - How Teams Use PeerBot"
        description="Discover how development teams use PeerBot and Claude Code for code reviews, debugging, team collaboration, DevOps, and more. Real-world examples and benefits."
        keywords="PeerBot use cases, Claude Code examples, AI coding assistant benefits, Slack bot for developers use cases, team productivity AI"
        url="https://peerbot.ai/use-cases"
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
              Use Cases
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-zinc-400">
              See how teams are using PeerBot to transform their development workflow with AI-powered assistance in Slack
            </p>
          </motion.div>
        
          
          {/* Use cases grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} useCase={useCase} index={index} />
            ))}
          </div>
          
          {/* CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="panel p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Ready to Transform Your Workflow?
              </h2>
              <p className="mb-8 text-lg text-zinc-400">
                Join thousands of developers using PeerBot to build better software faster
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://slack.com/oauth/v2/authorize?client_id=9171119466245.9283126478193&scope=app_mentions:read,assistant:write,channels:history,channels:read,chat:write,chat:write.public,groups:history,groups:read,im:history,im:read,im:write,mpim:read,reactions:read,reactions:write,users:read,commands&user_scope="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-700 px-8 py-3 text-lg font-medium text-white transition-all hover:bg-pink-600"
                >
                  <MessageSquare className="h-5 w-5" />
                  Add to Slack
                </a>
                <a
                  href="/docs"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-600 bg-zinc-800/50 px-8 py-3 text-lg font-medium text-white transition-all hover:border-zinc-500 hover:bg-zinc-700/50"
                >
                  View Documentation
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}