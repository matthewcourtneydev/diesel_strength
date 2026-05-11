export async function getSubstackArticles() {
    const response = await fetch('/api/substack-feed')
  
    if (!response.ok) {
      throw new Error('Unable to fetch Substack feed')
    }
  
    return response.json()
  }