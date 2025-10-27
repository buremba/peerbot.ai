import { motion } from 'framer-motion'
import { CalendarIcon, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "How is it different compared to other agent systems?",
    answer: "Peerbot uses Claude Code as the agent, Codex and Gemini support is in progress with Agent Client Protocol. We don't build our own agent system but rather make use of the best in class agents."
  },
  {
    question: "How can I make sure Peerbot is secure?",
    answer: "Agents run in a sandbox environment and they can only take actions based on your agent definitions. You only whitelist the actions you want agents to perform."
  },
  {
    question: "How can I trust the agent not leaking our company data?",
    answer: "You can restrict network access, they can only upload data to the Slack threads. Also, you can make Peerbot only available in direct messages so no data leaks in Slack public/private channels."
  },
  {
    question: "Do you help developing custom agents?",
    answer: "Of course! Feel free to schedule a call and we can work with you to offload work to Peerbot to save your team's time."
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
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-pink-400 cursor-pointer"
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

        <div className="text-center mt-8">
          <a
            href="https://slack.com/oauth/v2/authorize?client_id=9171119466245.9283126478193&scope=app_mentions:read,assistant:write,channels:history,channels:read,chat:write,chat:write.public,groups:history,groups:read,im:history,im:read,im:write,mpim:read,reactions:read,reactions:write,users:read,commands&user_scope="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-600 bg-zinc-800/50 px-8 py-2 text-lg font-medium text-white transition-all hover:bg-zinc-700/50 hover:border-zinc-500"
          >
            <CalendarIcon className="h-5 w-5" />
            Schedule a call
          </a>
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