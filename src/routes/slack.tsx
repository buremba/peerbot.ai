import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

function SlackRedirect() {
  useEffect(() => {
    const slackOAuthUrl = 'https://slack.com/oauth/v2/authorize?client_id=9171119466245.9283126478193&scope=app_mentions:read,assistant:write,channels:history,channels:read,chat:write,chat:write.public,groups:history,groups:read,im:history,im:read,im:write,mpim:read,reactions:read,reactions:write,users:read,commands&user_scope='
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