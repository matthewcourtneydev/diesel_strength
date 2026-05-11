<template>
  <SectionWrapper size="lg">
    <section class="episode-grid-section">
      <div class="episode-grid-section__heading fade-up">
        <p class="eyebrow">
          Latest Episodes
        </p>

        <h2>
          Conversations On Strength, Coaching & Longevity
        </h2>

        <p>
          Browse podcast episodes, interviews, coaching conversations, and media features from the Diesel ecosystem.
        </p>
      </div>

      <div
        v-if="filteredEpisodes.length"
        class="episode-grid-wrapper"
      >
        <TransitionGroup
          name="episode-card-fade"
          tag="div"
          class="episode-grid"
        >
          <article
            v-for="episode in filteredEpisodes"
            :key="episode.title"
            class="episode-card hover-lift"
            :class="{ 'episode-card--featured': episode.featured }"
          >
            <div class="episode-card__media">
              <div class="episode-card__image-placeholder">
                <span class="episode-card__play">
                  ▶
                </span>
              </div>
            </div>

            <div class="episode-card__content">
              <span class="episode-card__category">
                {{ episode.category }}
              </span>

              <h3>
                {{ episode.title }}
              </h3>

              <p>
                {{ episode.description }}
              </p>

              <div class="episode-card__meta">
                <span>{{ episode.duration }}</span>
                <span>{{ episode.type }}</span>
              </div>

              <router-link
                :to="episode.link"
                class="episode-card__link"
              >
                Listen Now
              </router-link>
            </div>
          </article>
        </TransitionGroup>
      </div>

      <div
        v-else
        class="episode-grid-empty fade-up"
      >
        <span class="episode-grid-empty__eyebrow">
          No Episodes Yet
        </span>

        <h3>
          More Conversations Are Coming Soon
        </h3>

        <p>
          We’re actively building new media for this category.
          Check back soon for additional episodes and interviews.
        </p>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import { computed } from 'vue'

import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './episode-grid.scss'

const props = defineProps({
  activeTopic: {
    type: String,
    default: 'All Episodes',
  },
})

const episodes = [
  {
    featured: true,
    category: 'Longevity',
    title: 'Training For Longevity Without Losing Strength',
    description: 'A deeper conversation on sustainable performance, movement quality, and long-term strength.',
    duration: '54 Min',
    type: 'Podcast',
    link: '/podcast/training-for-longevity',
  },
  {
    category: 'Coaching',
    title: 'Building Better Warm-Ups',
    description: 'How coaches can create better preparation systems for athletes and lifters.',
    duration: '42 Min',
    type: 'Coaching',
    link: '/podcast/better-warm-ups',
  },
  {
    category: 'Strength',
    title: 'Real-World Strength Principles',
    description: 'Training ideas that build strength that actually transfers outside the gym.',
    duration: '48 Min',
    type: 'Podcast',
    link: '/podcast/real-world-strength',
  },
  {
    category: 'Recovery',
    title: 'Recovery, Readiness & Training Decisions',
    description: 'How to manage fatigue and make better decisions inside a training week.',
    duration: '36 Min',
    type: 'Discussion',
    link: '/podcast/recovery-readiness',
  },
  {
    category: 'Mindset',
    title: 'Consistency Over Motivation',
    description: 'Why discipline, systems, and environment matter more than motivation spikes.',
    duration: '31 Min',
    type: 'Podcast',
    link: '/podcast/consistency',
  },
  {
    category: 'Interviews',
    title: 'Inside The CPPS Coaching Philosophy',
    description: 'A conversation around coaching education, practical systems, and athlete preparation.',
    duration: '61 Min',
    type: 'Interview',
    link: '/podcast/cpps-philosophy',
  },
]

const filteredEpisodes = computed(() => {
  if (props.activeTopic === 'All Episodes') {
    return episodes
  }

  return episodes.filter((episode) => episode.category === props.activeTopic)
})
</script>