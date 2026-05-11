<template>
  <SectionWrapper
    size="xl"
    dark
  >
    <section class="content-hub">
      <div class="content-hub__heading fade-up">
        <p class="eyebrow">
          Latest From Diesel
        </p>

        <div class="content-hub__heading-row">
          <h2>
            Training Insight, Coaching Systems & Performance Education
          </h2>

          <a
            href="https://dieselsc.substack.com/"
            class="content-hub__view-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Content
          </a>
        </div>
      </div>

      <div class="content-hub__layout">
        <article class="featured-article hover-lift">
          <div class="featured-article__image">
            <img
              :src="featuredArticle.image"
              :alt="featuredArticle.title"
            >
          </div>

          <div class="featured-article__overlay"></div>

          <div class="featured-article__content">
            <span class="featured-article__category">
              {{ featuredArticle.category }}
            </span>

            <span
              v-if="featuredArticle.publishedAt"
              class="featured-article__meta"
            >
              {{ featuredArticle.source }} · {{ featuredArticle.publishedAt }}
            </span>

            <h3>
              {{ featuredArticle.title }}
            </h3>

            <p>
              {{ featuredArticle.description }}
            </p>

            <a
              :href="featuredArticle.link"
              class="featured-article__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ featuredArticle.cta }}
            </a>
          </div>
        </article>

        <div class="content-hub__secondary">
          <article
            v-for="article in secondaryArticles"
            :key="article.title"
            class="content-card content-card--large hover-lift"
          >
            <div class="content-card__image">
              <img
                :src="article.image"
                :alt="article.title"
              >
            </div>

            <div class="content-card__overlay"></div>

            <div class="content-card__content">
              <span class="content-card__category">
                {{ article.category }}
              </span>

              <span
                v-if="article.publishedAt"
                class="content-card__meta"
              >
                {{ article.publishedAt }}
              </span>

              <h4>
                {{ article.title }}
              </h4>

              <a
                :href="article.link"
                class="content-card__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ article.cta }}
              </a>
            </div>
          </article>

          <div class="content-hub__mini-stack">
            <article
              v-for="article in miniArticles"
              :key="article.title"
              class="content-card content-card--mini hover-lift"
            >
              <div class="content-card__image">
                <img
                  :src="article.image"
                  :alt="article.title"
                >
              </div>

              <div class="content-card__overlay"></div>

              <div class="content-card__content">
                <span class="content-card__category">
                  {{ article.category }}
                </span>

                <span
                  v-if="article.publishedAt"
                  class="content-card__meta"
                >
                  {{ article.publishedAt }}
                </span>

                <h4>
                  {{ article.title }}
                </h4>

                <a
                  :href="article.link"
                  class="content-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ article.cta }}
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import { getSubstackArticles } from '../../../services/substackService'

import featuredDieselStrengthCard from '../../../assets/images/featured-diesel-strength-card.png'
import featuredAgelessAthleteCard from '../../../assets/images/featured-ageless-athlete-card.png'
import featuredBecomingRoninCard from '../../../assets/images/featured-becoming-ronin-card.png'
import featuredCppsProfile from '../../../assets/images/featured-cpps-profile.png'

import './content-hub.scss'

const substackArticles = ref([])

const fallbackArticles = [
  {
    category: 'Strength',
    source: 'Diesel',
    title: '5 Principles Of Built Not Bought Strength',
    description:
      'Simple, proven principles that build lifelong strength through intelligent training systems.',
    image: featuredDieselStrengthCard,
    link: '/articles',
    publishedAt: '',
    cta: 'Read Article',
  },
  {
    category: 'Mobility',
    source: 'Diesel',
    title: 'The Truth About Mobility Training',
    description:
      'Mobility systems, movement quality, and smarter preparation for long-term performance.',
    image: featuredAgelessAthleteCard,
    link: '/articles',
    publishedAt: '',
    cta: 'Read Article',
  },
  {
    category: 'Podcast',
    source: 'Diesel',
    title: 'Becoming Ronin #128 — Joe DeFranco',
    description:
      'A conversation on training, discipline, coaching, and long-term performance.',
    image: featuredBecomingRoninCard,
    link: '/podcast',
    publishedAt: '',
    cta: 'Watch / Listen',
  },
  {
    category: 'Conditioning',
    source: 'Diesel',
    title: 'Conditioning For Real Athletes',
    description:
      'Performance conditioning principles for athletes, lifters, and coaches.',
    image: featuredCppsProfile,
    link: '/articles',
    publishedAt: '',
    cta: 'Read',
  },
  {
    category: 'Coaching',
    source: 'Diesel',
    title: 'The Coach’s Guide To Program Design',
    description:
      'A practical framework for building programs that create lasting progress.',
    image: featuredDieselStrengthCard,
    link: '/articles',
    publishedAt: '',
    cta: 'Read',
  },
]

function normalizeArticle(article, index) {
  const fallbackImage = fallbackArticles[index]?.image || featuredDieselStrengthCard

  return {
    ...article,
    category: article.category || 'Diesel',
    source: article.source || 'Substack',
    description: article.description || 'Training insight from Diesel Strength.',
    image: article.image || fallbackImage,
    cta: article.cta || 'Read Article',
  }
}

const articles = computed(() => {
  const activeArticles = substackArticles.value.length
    ? substackArticles.value
    : fallbackArticles

  return activeArticles.map(normalizeArticle)
})

const featuredArticle = computed(() => articles.value[0])

const secondaryArticles = computed(() => articles.value.slice(1, 3))

const miniArticles = computed(() => articles.value.slice(3, 5))

onMounted(async () => {
  try {
    substackArticles.value = await getSubstackArticles()
  } catch (error) {
    console.warn('Using fallback articles because Substack RSS failed:', error)
  }
})
</script>