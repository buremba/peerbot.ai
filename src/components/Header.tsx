import { Link } from '@tanstack/react-router'
import { Github } from 'lucide-react'

export function Header() {
  return (
    <header className="relative w-full px-8 py-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center text-2xl font-bold">
            <span className="gradient-title">PeerBot</span>
          </Link>
          
          <a
            href="https://github.com/buremba/peerbot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  )
}