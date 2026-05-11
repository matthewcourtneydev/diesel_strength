<template>
  <SectionWrapper
    size="lg"
    dark
  >
    <section class="popular-topics">
      <div class="popular-topics__heading fade-up">
        <p class="eyebrow">
          Popular Topics
        </p>

        <h2>
          Explore The Diesel Training Library
        </h2>

        <p>
          Browse core themes across strength, mobility, recovery, coaching, and long-term performance.
        </p>
      </div>

      <div class="popular-topics__cloud">
        <router-link
          v-for="topic in topics"
          :key="topic"
          to="/articles"
          class="topic-pill"
        >
          {{ topic }}
        </router-link>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './popular-topics.scss'

const topics = [
  'Strength Training',
  'Athletic Performance',
  'Longevity',
  'Mobility',
  'Conditioning',
  'Recovery',
  'Coaching Systems',
  'Nutrition',
  'Mindset',
  'Program Design',
]
</script>