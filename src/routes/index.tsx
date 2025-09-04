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
        title="Scale your development team 10x with Enterprise Vibe Coding Assistant"
        description="Hire AI peers that work alongside your team on Slack. Empower your product managers, marketers, and sales teams to validate ideas and develop features with an agent — directly from Slack."
        keywords="Claude Code Slack integration, AI coding assistant Slack, Slack bot for product managers, AI peer programming"
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