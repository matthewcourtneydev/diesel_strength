const SUBSTACK_FEED_URL = 'https://dieselsc.substack.com/feed'

function stripHtml(value = '') {
  return value
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function truncate(value = '', limit = 160) {
  if (!value) return ''

  return value.length > limit
    ? `${value.slice(0, limit).trim()}...`
    : value
}

function formatDate(value = '') {
  if (!value) return ''

  try {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(value))
  } catch {
    return ''
  }
}

function getText(item, tagName) {
  const match = item.match(
    new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)</${tagName}>`, 'i')
  )

  return match ? match[1].trim() : ''
}

function getImage(item) {
  const enclosureMatch = item.match(/<enclosure[^>]+url="([^"]+)"/i)
  if (enclosureMatch?.[1]) return enclosureMatch[1]

  const mediaMatch = item.match(/<media:content[^>]+url="([^"]+)"/i)
  if (mediaMatch?.[1]) return mediaMatch[1]

  const imageMatch = item.match(/<img[^>]+src="([^"]+)"/i)
  if (imageMatch?.[1]) return imageMatch[1]

  return ''
}

export default async function handler(request, response) {
  try {
    const feedResponse = await fetch(SUBSTACK_FEED_URL)

    if (!feedResponse.ok) {
      throw new Error(`Substack feed failed: ${feedResponse.status}`)
    }

    const xml = await feedResponse.text()
    const items = xml.match(/<item>[\s\S]*?<\/item>/gi) || []

    const articles = items.slice(0, 5).map((item) => {
      const rawDescription = stripHtml(getText(item, 'description'))
      const rawDate = stripHtml(getText(item, 'pubDate'))

      return {
        category: 'Diesel',
        source: 'Substack',
        title: stripHtml(getText(item, 'title')),
        description: truncate(rawDescription, 155),
        link: stripHtml(getText(item, 'link')),
        publishedAt: formatDate(rawDate),
        image: getImage(item),
        cta: 'Read Article',
      }
    })

    response.status(200).json(articles)
  } catch (error) {
    response.status(500).json({
      error: 'Unable to load Substack feed',
      message: error.message,
    })
  }
}