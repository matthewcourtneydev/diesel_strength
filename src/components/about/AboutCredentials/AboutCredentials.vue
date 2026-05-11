<template>
  <SectionWrapper
    size="lg"
    dark
  >
    <section class="about-credentials">
      <div class="about-credentials__heading fade-up">
        <p class="eyebrow">
          Experience & Authority
        </p>

        <h2>
          Built Through Coaching, Education & Real-World Application
        </h2>

        <p>
          The Diesel ecosystem combines decades of coaching experience with practical educational systems for athletes, coaches, and performance professionals.
        </p>
      </div>

      <div class="about-credentials__grid">
        <article
          v-for="credential in credentials"
          :key="credential.label"
          class="credential-card fade-up"
        >
          <span class="credential-card__value">
            {{ credential.value }}
          </span>

          <span class="credential-card__label">
            {{ credential.label }}
          </span>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './about-credentials.scss'

const credentials = [
  {
    value: '20+',
    label: 'Years Coaching',
  },
  {
    value: '1K+',
    label: 'Coaches Educated',
  },
  {
    value: 'CPPS',
    label: 'Certification System',
  },
  {
    value: '100+',
    label: 'Educational Articles',
  },
  {
    value: 'Live',
    label: 'Seminars & Workshops',
  },
  {
    value: 'Real',
    label: 'Performance Systems',
  },
]
</script>