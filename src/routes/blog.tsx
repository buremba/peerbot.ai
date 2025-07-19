import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SEO } from '../components/SEO'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})

// Sample blog posts - in production, these would come from a CMS or markdown files
const blogPosts = [
  {
    id: 'introducing-peerbot',
    title: 'Introducing PeerBot: Claude Code Meets Slack',
    excerpt: 'Today we\'re excited to announce PeerBot, a revolutionary way to bring AI-powered coding assistance directly into your Slack workspace. Learn how PeerBot transforms team collaboration with intelligent AI peers.',
    author: 'PeerBot Team',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['announcement', 'claude-code', 'slack-integration'],
    featured: true,
  },
  {
    id: 'git-worktrees-explained',
    title: 'How PeerBot Uses Git Worktrees for Safe Code Changes',
    excerpt: 'Discover how PeerBot leverages Git worktrees to make code changes without disrupting your main branch. This innovative approach ensures clean, reviewable pull requests every time.',
    author: 'Engineering Team',
    date: '2024-01-10',
    readTime: '8 min read',
    tags: ['technical', 'git', 'best-practices'],
  },
  {
    id: 'team-collaboration-ai',
    title: 'The Future of Team Collaboration: AI Peers in Your Workspace',
    excerpt: 'Explore how AI coding assistants are changing the way development teams collaborate. From code reviews to pair programming, see real examples of teams using PeerBot.',
    author: 'Product Team',
    date: '2024-01-08',
    readTime: '6 min read',
    tags: ['team-collaboration', 'ai', 'productivity'],
  },
  {
    id: 'security-first-approach',
    title: 'Building PeerBot with Security in Mind',
    excerpt: 'Security is at the core of PeerBot\'s design. Learn about our end-to-end encryption, local-first architecture, and how we keep your code safe while enabling AI assistance.',
    author: 'Security Team',
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['security', 'encryption', 'architecture'],
  },
  {
    id: 'custom-ai-peers',
    title: 'Creating Custom AI Peers for Your Team\'s Needs',
    excerpt: 'Learn how to define and configure custom AI peers with specific roles, models, and capabilities. From QA engineers to DevOps specialists, tailor PeerBot to your team.',
    author: 'Engineering Team',
    date: '2023-12-28',
    readTime: '7 min read',
    tags: ['customization', 'configuration', 'ai-models'],
  },
]

interface BlogPostCardProps {
  post: typeof blogPosts[0]
  index: number
}

function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`panel group p-8 transition-all hover:translate-y-[-4px] ${
        post.featured ? 'ring-2 ring-pink-500/50' : ''
      }`}
    >
      {post.featured && (
        <div className="mb-4">
          <span className="rounded-full bg-pink-500/10 px-3 py-1 text-sm font-medium text-pink-400">
            Featured
          </span>
        </div>
      )}
      
      <h2 className="mb-3 text-2xl font-bold text-zinc-100 transition-colors group-hover:text-pink-400">
        <a href={`/blog/${post.id}`} className="block">
          {post.title}
        </a>
      </h2>
      
      <p className="mb-4 text-zinc-400 line-clamp-3">{post.excerpt}</p>
      
      <div className="mb-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
          >
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between text-sm text-zinc-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>
        
        <a
          href={`/blog/${post.id}`}
          className="flex items-center gap-1 text-pink-400 transition-colors hover:text-pink-300"
        >
          Read more
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  )
}

function BlogPage() {
  return (
    <>
      <SEO
        title="Blog - AI Coding Assistant Insights"
        description="Stay updated with the latest news, tutorials, and insights about PeerBot and Claude Code integration. Learn best practices for AI-powered development in Slack."
        keywords="PeerBot blog, Claude Code tutorials, AI coding assistant news, Slack bot development, team collaboration AI"
        url="https://peerbot.ai/blog"
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
              Blog & Updates
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-zinc-400">
              Insights, tutorials, and updates from the PeerBot team about AI-powered development and team collaboration
            </p>
          </motion.div>
          
          {/* Newsletter signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="panel mx-auto max-w-2xl p-8 text-center">
              <h3 className="mb-2 text-xl font-semibold text-zinc-200">
                Stay in the loop
              </h3>
              <p className="mb-6 text-zinc-400">
                Get the latest updates about PeerBot and AI coding assistants
              </p>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-pink-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-pink-700 px-6 py-3 font-medium text-white transition-colors hover:bg-pink-600"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
          
          {/* Blog posts grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </div>
          
          Load more
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button className="inline-flex items-center gap-2 rounded-full border border-zinc-600 bg-zinc-800/50 px-8 py-3 font-medium text-white transition-all hover:border-zinc-500 hover:bg-zinc-700/50">
              Load More Posts
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}