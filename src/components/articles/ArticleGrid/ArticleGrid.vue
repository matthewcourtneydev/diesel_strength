<template>
  <SectionWrapper size="lg">
    <section class="article-grid-section">
      <div class="article-grid-section__heading fade-up">
        <p class="eyebrow">
          Latest Articles
        </p>

        <h2>
          Training Notes, Coaching Systems & Performance Education
        </h2>

        <p>
          Practical articles on strength, mobility, conditioning, recovery, coaching, and long-term performance.
        </p>
      </div>

      <div
        v-if="filteredArticles.length"
        class="article-grid-wrapper"
      >
        <TransitionGroup
          name="article-card-fade"
          tag="div"
          class="article-grid"
        >
          <article
            v-for="article in filteredArticles"
            :key="article.title"
            class="article-card hover-lift"
            :class="{ 'article-card--featured': article.featured }"
          >
            <div class="article-card__media">
              <div class="article-card__image-placeholder"></div>
            </div>

            <div class="article-card__content">
              <span class="article-card__category">
                {{ article.category }}
              </span>

              <h3>
                {{ article.title }}
              </h3>

              <p>
                {{ article.description }}
              </p>

              <div class="article-card__meta">
                <span>{{ article.readTime }}</span>
                <span>{{ article.type }}</span>
              </div>

              <router-link
                :to="article.link"
                class="article-card__link"
              >
                Read Article
              </router-link>
            </div>
          </article>
        </TransitionGroup>
      </div>

      <div
        v-else
        class="article-grid-empty fade-up"
      >
        <span class="article-grid-empty__eyebrow">
          No Articles Yet
        </span>

        <h3>
          More Content Is Coming Soon
        </h3>

        <p>
          We’re actively building new articles for this category.
          Check back soon for additional training and coaching content.
        </p>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import { computed } from 'vue'

import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './article-grid.scss'

const props = defineProps({
  activeCategory: {
    type: String,
    default: 'All Articles',
  },
})

const articles = [
  {
    featured: true,
    category: 'Longevity',
    title: 'The Longevity Training System',
    description: 'How strength, movement quality, and recovery combine to create long-term performance.',
    readTime: '12 Min Read',
    type: 'Training System',
    link: '/articles/longevity-training-system',
  },
  {
    category: 'Mobility',
    title: 'Pain-Free Squatting',
    description: 'Simple adjustments to improve squat mechanics and reduce unnecessary joint stress.',
    readTime: '8 Min Read',
    type: 'Movement',
    link: '/articles/pain-free-squatting',
  },
  {
    category: 'Strength',
    title: 'Building Real-World Strength',
    description: 'Training principles for strength that transfers beyond the gym.',
    readTime: '10 Min Read',
    type: 'Strength',
    link: '/articles/real-world-strength',
  },
  {
    category: 'Coaching',
    title: 'Better Warm-Ups For Better Training',
    description: 'How to prepare athletes and lifters for more productive sessions.',
    readTime: '7 Min Read',
    type: 'Coaching',
    link: '/articles/better-warm-ups',
  },
  {
    category: 'Recovery',
    title: 'Recovery Is A Training Skill',
    description: 'Why recovery should be programmed with the same intent as strength work.',
    readTime: '6 Min Read',
    type: 'Recovery',
    link: '/articles/recovery-skill',
  },
  {
    category: 'Mindset',
    title: 'Consistency Beats Intensity',
    description: 'Why sustainable training systems outperform short bursts of motivation.',
    readTime: '5 Min Read',
    type: 'Mindset',
    link: '/articles/consistency',
  },
]

const filteredArticles = computed(() => {
  if (props.activeCategory === 'All Articles') {
    return articles
  }

  return articles.filter(
    (article) => article.category === props.activeCategory,
  )
})
</script>