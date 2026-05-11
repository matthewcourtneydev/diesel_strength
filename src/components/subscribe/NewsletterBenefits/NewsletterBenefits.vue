<template>
  <SectionWrapper size="lg">
    <section class="newsletter-benefits">
      <div class="newsletter-benefits__heading fade-up">
        <p class="eyebrow">
          Why Subscribe
        </p>

        <h2>
          Weekly Insight For Stronger, Smarter Training
        </h2>

        <p>
          Get practical Diesel training ideas, coaching systems, mobility strategies, and new content updates directly in your inbox.
        </p>
      </div>

      <div class="newsletter-benefits__grid">
        <article
          v-for="benefit in benefits"
          :key="benefit.title"
          class="newsletter-benefit-card hover-lift"
        >
          <span class="newsletter-benefit-card__number">
            {{ benefit.number }}
          </span>

          <h3>
            {{ benefit.title }}
          </h3>

          <p>
            {{ benefit.description }}
          </p>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './newsletter-benefits.scss'

const benefits = [
  {
    number: '01',
    title: 'Training Systems',
    description: 'Strength, mobility, recovery, and conditioning ideas you can apply immediately.',
  },
  {
    number: '02',
    title: 'Coaching Insight',
    description: 'Practical coaching notes, cues, programming ideas, and performance education.',
  },
  {
    number: '03',
    title: 'New Content Updates',
    description: 'Get notified when new articles, podcast episodes, programs, and resources go live.',
  },
]
</script>