import featuredEpisode from '../assets/images/podcast/featured-episode.png'
import mindsetEpisode from '../assets/images/podcast/mindset-episode.png'
import cppsPhilosophyEpisode from '../assets/images/podcast/cpps-philosophy-episode.png'
import athleticStrengthEpisode from '../assets/images/podcast/athletic-strength-episode.png'

export const featuredPodcastEpisode = {
  category: 'Latest Episode',
  title: 'Training For Longevity Without Losing Strength',
  description:
    'Smitty breaks down performance longevity, pain-free training, movement quality, and how to keep building strength over decades.',
  image: featuredEpisode,
  link: '/podcast',
  ctaLabel: 'Listen Now',
}

export const podcastEpisodes = [
  {
    category: 'Mindset',
    title: 'Mindset & Discipline For Lifelong Progress',
    image: mindsetEpisode,
    link: '/podcast',
  },
  {
    category: 'Coaching',
    title: 'Inside The CPPS Coaching Philosophy',
    image: cppsPhilosophyEpisode,
    link: '/podcast',
  },
  {
    category: 'Performance',
    title: 'Building Athletic Strength That Lasts',
    image: athleticStrengthEpisode,
    link: '/podcast',
  },
]