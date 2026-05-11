import dieselStrengthCard from "../assets/images/diesel-sc-brand-pillar-card.png";
import agelessAthleteCard from "../assets/images/ageless-athlete-pillar-card.png";
import cppsCard from "../assets/images/cpps-brand-pillar-card.png";
import roninCard from "../assets/images/ronin-brand-pillar-card.png";

import dieselStrengthLogo from "../assets/images/diesel-transparent-logo.png";
import agelessAthleteLogo from "../assets/images/ageless-athlete-transparent-logo.png";
import cppsLogo from "../assets/images/cpps-transparent-logo.png";
import roninLogo from "../assets/images/becoming-ronin-transparent-logo.png";

import ageless5 from '../assets/images/programs/ageless-5.png'
import blackBook from '../assets/images/programs/black-book.png'
import ageless4 from '../assets/images/programs/ageless-4.png'

export const brandPillars = [
  {
    title: "Diesel Strength",
    description:
      "Proven strength, conditioning, and performance systems for athletes and lifters.",
    image: dieselStrengthCard,
    logo: dieselStrengthLogo,
    link: "/programs",
    slug: "diesel-strength",
  },

  {
    title: "Ageless Athlete",
    description:
      "Pain-free training, mobility, and longevity systems built for life.",
    image: agelessAthleteCard,
    logo: agelessAthleteLogo,
    link: "/ageless-athlete",
    slug: "ageless-athlete",
  },

  {
    title: "CPPS",
    description: "Elite coach education and certifications trusted worldwide.",
    image: cppsCard,
    logo: cppsLogo,
    link: "/cpps",
    slug: "cpps",
  },

  {
    title: "Becoming Ronin",
    description:
      "Mindset, discipline, and performance conversations for lifelong growth.",
    image: roninCard,
    logo: roninLogo,
    link: "/podcast",
    slug: "becoming-ronin",
  },
];

export const featuredPrograms = [
  {
    title: 'Ageless Athlete 5.0',
    category: 'Longevity',
    description:
      'A 12-week training system built to improve strength, power, mobility, and movement quality with guided warm-ups and app-based video demos.',
    image: ageless5,
    link: '/programs/ageless-athlete-5',
  },
  {
    title: 'Diesel Black Book',
    category: 'Strength',
    description:
      'Straightforward, repeatable training programs designed to build serious strength, add lean muscle, and keep hard training sustainable.',
    image: blackBook,
    link: '/programs/diesel-black-book',
  },
  {
    title: 'Ageless Athlete 4.0',
    category: 'Performance',
    description:
      'A complete 12-week progression system blending strength, muscle, mobility, and recovery so lifters can keep progressing without breaking down.',
    image: ageless4,
    link: '/programs/ageless-athlete-4',
  },
]

export const featuredArticles = [
  {
    title: "The Longevity Training System",
    category: "Longevity",
  },

  {
    title: "Pain-Free Squatting",
    category: "Mobility",
  },

  {
    title: "Building Real-World Strength",
    category: "Strength",
  },
];
