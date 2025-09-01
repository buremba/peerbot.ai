import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "Can dev team override or review Peerbot's changes?",
    answer: "Absolutely! Every change Peerbot can create a pull request in configured Git repository. Developers can review, modify, or reject changes just like any other PR. You can also set up approval workflows requiring dev sign-off for certain types of changes."
  },
  {
    question: "What happens if Peerbot makes a mistake?",
    answer: "All changes are reversible. Peerbot maintains a complete audit trail and you can rollback any change instantly. Plus, with staging previews, you'll catch any issues before they reach production. We also have safeguards preventing Peerbot from modifying critical system files or security configurations."
  },
  {
    question: "How does Peerbot handle merge conflicts?",
    answer: "Peerbot intelligently detects potential conflicts before making changes. If a conflict is detected, it notifies you in Slack and can either wait for the conflict to be resolved or create a separate branch for later merging. For simple conflicts, Peerbot can suggest resolutions."
  },
  {
    question: "Can I create custom AI peers with different capabilities?",
    answer: "Absolutely! PeerBot allows you to define multiple peers, each with their own role, expertise, and AI model. For example, you can have a 'Senior Developer' peer for complex architecture decisions, a 'QA Engineer' peer for testing, and a 'DevOps' peer for deployment tasks. The right peer is automatically selected based on the conversation context. Roles can be attached to models either in Claude or Ollama (coming soon)."
  },
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