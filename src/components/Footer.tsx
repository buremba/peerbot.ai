import { Github, MessageSquare } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-8 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-zinc-400">
              Built with ❤️ by{' '}
              <a
                href="https://github.com/buremba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-100 hover:underline"
              >
                buremba
              </a>
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              © 2025 peerbot. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/buremba/peerbot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-zinc-100"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://join.slack.com/t/peerbot/shared_invite/zt-391o8tyw2-iyupjTG1xHIz9Og8C7JOnw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors hover:text-zinc-100"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}