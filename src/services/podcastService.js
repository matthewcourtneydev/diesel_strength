export async function getPodcastEpisodes() {
    const response = await fetch('/api/podcast-feed')
  
    if (!response.ok) {
      throw new Error('Unable to fetch podcast feed')
    }
  
    return response.json()
  }