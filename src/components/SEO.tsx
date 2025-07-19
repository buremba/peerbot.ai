import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

export function SEO({
  title,
  description,
  keywords,
  image = 'https://peerbot.ai/images/logo.jpg',
  url = 'https://peerbot.ai',
  type = 'website',
  author = 'PeerBot',
  publishedTime,
  modifiedTime
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | PeerBot - AI Coding Assistant for Slack`
    
    // Update meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attr}="${property}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attr, property)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    }
    
    // Primary meta tags
    updateMetaTag('description', description)
    if (keywords) {
      updateMetaTag('keywords', keywords)
    }
    updateMetaTag('author', author)
    
    // Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:type', type, true)
    
    // Twitter tags
    updateMetaTag('twitter:title', title, true)
    updateMetaTag('twitter:description', description, true)
    updateMetaTag('twitter:image', image, true)
    
    // Article specific tags
    if (type === 'article') {
      if (publishedTime) {
        updateMetaTag('article:published_time', publishedTime, true)
      }
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, true)
      }
      updateMetaTag('article:author', author, true)
    }
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', url)
    
  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime])
  
  return null
}