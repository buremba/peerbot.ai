import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

function SlackRedirect() {
  useEffect(() => {
    const slackOAuthUrl = 'https://slack.com/oauth/v2/authorize?client_id=9171119466245.9176167386695&scope=app_mentions:read,channels:history,chat:write,chat:write.public,im:history,im:read,im:write,users:read,reactions:read,reactions:write,channels:read,groups:read&user_scope='
    window.location.href = slackOAuthUrl
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-2xl mb-4">Redirecting to Slack...</h1>
        <p className="text-gray-400">You will be redirected to Slack authorization page.</p>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/slack')({
  component: SlackRedirect,
})