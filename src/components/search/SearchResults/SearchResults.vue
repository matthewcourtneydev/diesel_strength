<template>
  <SectionWrapper
    size="lg"
    dark
  >
    <section class="search-results">
      <div class="search-results__heading fade-up">
        <p class="eyebrow">
          Search Results
        </p>

        <h2>
          Featured Results
        </h2>

        <p>
          A mixed feed of programs, articles, podcast episodes, and certification resources.
        </p>
      </div>

      <div class="search-results__list">
        <article
          v-for="result in results"
          :key="result.title"
          class="search-result-card hover-lift"
        >
          <div class="search-result-card__type">
            {{ result.type }}
          </div>

          <div class="search-result-card__content">
            <h3>
              {{ result.title }}
            </h3>

            <p>
              {{ result.description }}
            </p>

            <div class="search-result-card__meta">
              <span>{{ result.category }}</span>
              <span>{{ result.label }}</span>
            </div>
          </div>

          <router-link
            :to="result.link"
            class="search-result-card__link"
          >
            View
          </router-link>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './search-results.scss'

const results = [
  {
    type: 'Program',
    title: 'Longevity Strength System',
    description: 'A training system designed to build strength, improve movement quality, and support long-term performance.',
    category: 'Longevity',
    label: 'Training System',
    link: '/programs/longevity-strength-system',
  },
  {
    type: 'Article',
    title: 'The Longevity Training System',
    description: 'How strength, recovery, and movement quality combine to create sustainable training progress.',
    category: 'Longevity',
    label: '12 Min Read',
    link: '/articles/longevity-training-system',
  },
  {
    type: 'Podcast',
    title: 'Training For Longevity Without Losing Strength',
    description: 'A conversation about sustainable performance, recovery, and strength over the long term.',
    category: 'Podcast',
    label: '54 Min',
    link: '/podcast/training-for-longevity',
  },
  {
    type: 'Certification',
    title: 'CPPS Level 1',
    description: 'Practical coaching education for strength, movement quality, and athlete preparation.',
    category: 'Certification',
    label: 'Coach Education',
    link: '/certifications/cpps-level-1',
  },
]
</script>