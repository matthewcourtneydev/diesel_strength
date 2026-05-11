<template>
  <SectionWrapper size="lg">
    <section class="ecosystem-timeline">
      <div class="ecosystem-timeline__heading fade-up">
        <p class="eyebrow">
          The Diesel Ecosystem
        </p>

        <h2>
          Built Through Years Of Coaching, Education & Performance Development
        </h2>

        <p>
          Diesel Strength has evolved into a connected ecosystem of programs,
          certifications, educational content, and coaching systems.
        </p>
      </div>

      <div class="timeline">
        <article
          v-for="item in timelineItems"
          :key="item.year"
          class="timeline-item fade-up"
        >
          <div class="timeline-item__year">
            {{ item.year }}
          </div>

          <div class="timeline-item__content">
            <h3>
              {{ item.title }}
            </h3>

            <p>
              {{ item.description }}
            </p>
          </div>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './ecosystem-timeline.scss'

const timelineItems = [
  {
    year: 'Early Years',
    title: 'Diesel Strength Foundation',
    description: 'The beginning of Diesel Strength through practical coaching, athlete development, and real-world strength systems.',
  },
  {
    year: 'Growth',
    title: 'Educational Systems & Content',
    description: 'Expansion into articles, educational resources, coaching systems, and online performance content.',
  },
  {
    year: 'CPPS',
    title: 'Certification Development',
    description: 'Creation of practical coaching certifications focused on strength, movement quality, and athlete preparation.',
  },
  {
    year: 'Today',
    title: 'The Full Diesel Ecosystem',
    description: 'Programs, certifications, media, educational systems, and coaching tools designed for long-term performance.',
  },
]
</script>