<template>
  <SectionWrapper size="lg">
    <section class="certification-overview">
      <div class="certification-overview__heading fade-up">
        <p class="eyebrow">
          Why CPPS
        </p>

        <h2>
          Practical Coaching Education, Not Theory-Only Certification
        </h2>

        <p>
          Built for coaches who need systems they can apply immediately with real clients, athletes, and training environments.
        </p>
      </div>

      <div class="certification-overview__grid">
        <article
          v-for="item in differentiators"
          :key="item.title"
          class="cert-difference-card hover-lift"
        >
          <span class="cert-difference-card__number">
            {{ item.number }}
          </span>

          <h3>
            {{ item.title }}
          </h3>

          <p>
            {{ item.description }}
          </p>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './certification-overview.scss'

const differentiators = [
  {
    number: '01',
    title: 'Hands-On Systems',
    description: 'Learn practical methods for warm-ups, assessment, strength training, movement quality, and performance preparation.',
  },
  {
    number: '02',
    title: 'Built For Coaches',
    description: 'Designed for trainers and coaches who need repeatable systems they can use with real people in real facilities.',
  },
  {
    number: '03',
    title: 'Real Athlete Application',
    description: 'Focused on coaching decisions, exercise selection, regressions, progressions, and applying systems under real constraints.',
  },
]
</script>