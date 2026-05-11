<template>
  <SectionWrapper
    size="lg"
    dark
  >
    <section class="coaching-philosophy">
      <div class="coaching-philosophy__heading fade-up">
        <p class="eyebrow">
          Coaching Philosophy
        </p>

        <h2>
          Strength Is Built Through Sustainable Systems
        </h2>

        <p>
          The Diesel philosophy centers around movement quality, intelligent progression,
          practical coaching, and training systems that support long-term performance.
        </p>
      </div>

      <div class="coaching-philosophy__grid">
        <article
          v-for="pillar in philosophyPillars"
          :key="pillar.title"
          class="philosophy-card hover-lift"
        >
          <span class="philosophy-card__number">
            {{ pillar.number }}
          </span>

          <h3>
            {{ pillar.title }}
          </h3>

          <p>
            {{ pillar.description }}
          </p>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './coaching-philosophy.scss'

const philosophyPillars = [
  {
    number: '01',
    title: 'Train For Longevity',
    description: 'Build strength and performance systems that can be sustained for years, not just short bursts.',
  },
  {
    number: '02',
    title: 'Movement Matters',
    description: 'Quality movement and preparation create the foundation for better performance and resilience.',
  },
  {
    number: '03',
    title: 'Real-World Application',
    description: 'Every system should transfer to real athletes, real coaches, and real training environments.',
  },
]
</script>