import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "How does PeerBot compare to using Claude Code directly?",
    answer: "We use Claude Code SDK and Slack Bolt SDK to build PeerBot. \
    It's identical to using Claude Code in the terminal, it just adds Slack integration so that you can collaborate with your colleagues and use Claude Code on mobile."
  },
  {
    question: "How does PeerBot handle Git operations and pull requests?",
    answer: "Whenever Claude Code wants to change files, we have a hook that detects the current GIT status. PeerBot asks you if you want to create/switch a worktree that are not active (no Claude Code running on it). Once the task is done, it commits/pushes the changes to the origin, creates previews from your deployment setup so it's just one click to create a PR."
  },
  {
    question: "Is PeerBot secure for enterprise use?",
    answer: "Yes, PeerBot is designed with security in mind. It uses the Slack Bolt SDK in socket mode with end-to-end encryption between your Slack workspace and local environment. Your code never leaves your infrastructure, and all communications are encrypted. PeerBot can be deployed on your own servers or cloud infrastructure."
  },
  {
    question: "Can I create custom AI peers with different capabilities?",
    answer: "Absolutely! PeerBot allows you to define multiple peers, each with their own role, expertise, and AI model. For example, you can have a 'Senior Developer' peer for complex architecture decisions, a 'QA Engineer' peer for testing, and a 'DevOps' peer for deployment tasks. The right peer is automatically selected based on the conversation context. Roles can be attached to models either in Claude or Ollama (coming soon)."
  },
  {
    question: "Can PeerBot work with my existing development workflow?",
    answer: "Peerbot is not opinionated, if you want to push directly to main, you can do it with caution. We recommend using worktrees to make changes and then push to main. Peerbot is a helper, not a replacement for your current setup."
  },
  {
    question: "How much does PeerBot cost?",
    answer: "PeerBot itself is open-source and free to use."
  }
]

interface FAQItemProps {
  question: string
  answer: string
  index: number
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-zinc-800"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-pink-400"
      >
        <h3 className="pr-8 text-lg font-medium text-zinc-200">{question}</h3>
        <ChevronDown 
          className={`h-5 w-5 flex-shrink-0 text-zinc-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-zinc-400 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  )
}

export function FAQ() {
  return (
    <section className="px-8 py-24" id="faq">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-zinc-100">
            Frequently Asked Questions
          </h2>
          <p className="mb-16 text-xl text-zinc-400">
            Everything you need to know about PeerBot and Claude Code integration
          </p>
        </motion.div>
        
        <div className="divide-y divide-zinc-800">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-400">
            Still have questions?{' '}
            <a
              href="https://join.slack.com/t/peerbot/shared_invite/zt-391o8tyw2-iyupjTG1xHIz9Og8C7JOnw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              Join our Slack community
            </a>
            {' '}or{' '}
            <a
              href="https://github.com/peerbot/peerbot/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              open an issue on GitHub
            </a>
          </p>
        </motion.div>
      </div>
      
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  )
}