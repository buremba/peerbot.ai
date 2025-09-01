import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { PainPoints } from '../components/PainPoints'
import { Video } from '../components/Video'
import { Features } from '../components/Features'
import { Installation } from '../components/Installation'
import { FAQ } from '../components/FAQ'
import { Footer } from '../components/Footer'
import { SEO } from '../components/SEO'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <SEO
        title="Claude Code AI Coding Assistant for Slack"
        description="Transform your Slack workspace with PeerBot - the best AI coding assistant powered by Claude Code. Build intelligent AI peers that work alongside your team. Smart Git worktrees, team collaboration, and secure by design."
        keywords="Claude Code Slack integration, AI coding assistant Slack, Slack bot for developers, AI peer programming, Claude Code alternative, team coding assistant"
      />
      <Header />
      <Hero />
      <PainPoints />
      <Video />
      <Features />
      <FAQ />
      <Installation />
      <Footer />
    </>
  )
}