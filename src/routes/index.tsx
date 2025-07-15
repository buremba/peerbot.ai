import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Video } from '../components/Video'
import { Features } from '../components/Features'
import { Installation } from '../components/Installation'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Video />
      <Features />
      <Installation />
      <Footer />
    </>
  )
}