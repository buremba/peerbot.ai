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
          
          <div className="flex items-center gap-4">
            <span className="inline-block rounded-full bg-pink-500/20 px-3 py-1 text-sm font-medium text-pink-400 border border-pink-500/30">
              Alpha
            </span>
            <a
              href="https://github.com/buremba/peerbot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-zinc-100 cursor-pointer" 
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
          
        </div>
      </div>
    </header>
  )
}