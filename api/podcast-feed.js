const PODCAST_FEED_URL =
  'https://rss.libsyn.com/shows/388172/destinations/3192377.xml'

function stripHtml(value = '') {
  return value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

function truncate(value = '', limit = 160) {
  return value.length > limit ? `${value.slice(0, limit).trim()}...` : value
}

function getText(item, tagName) {
  const match = item.match(
    new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)</${tagName}>`, 'i')
  )

  return match ? match[1].trim() : ''
}

function getImage(item) {
  const imageMatch = item.match(/<itunes:image[^>]+href="([^"]+)"/i)
  return imageMatch?.[1] || ''
}

function formatDate(value = '') {
  if (!value) return ''

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}

export default async function handler(request, response) {
  try {
    const feedResponse = await fetch(PODCAST_FEED_URL)

    if (!feedResponse.ok) {
      throw new Error(`Podcast feed failed: ${feedResponse.status}`)
    }

    const xml = await feedResponse.text()
    const items = xml.match(/<item>[\s\S]*?<\/item>/gi) || []

    const episodes = items.slice(0, 4).map((item) => ({
      category: 'Podcast',
      title: stripHtml(getText(item, 'title')),
      description: truncate(stripHtml(getText(item, 'description')), 170),
      publishedAt: formatDate(stripHtml(getText(item, 'pubDate'))),
      duration: stripHtml(getText(item, 'itunes:duration')),
      image: getImage(item),
      link: stripHtml(getText(item, 'link')),
      ctaLabel: 'Listen Now',
    }))

    response.status(200).json(episodes)
  } catch (error) {
    response.status(500).json({
      error: 'Unable to load podcast feed',
      message: error.message,
    })
  }
}