<template>
  <SectionWrapper
    size="lg"
    dark
  >
    <section class="subscriber-quotes">
      <div class="subscriber-quotes__heading fade-up">
        <p class="eyebrow">
          Reader Feedback
        </p>

        <h2>
          Built For Coaches, Lifters & Performance Professionals
        </h2>

        <p>
          The Diesel newsletter focuses on practical education, useful coaching insight, and training systems that actually transfer into the real world.
        </p>
      </div>

      <div class="subscriber-quotes__grid">
        <article
          v-for="quote in quotes"
          :key="quote.name"
          class="subscriber-quote-card hover-lift"
        >
          <span class="subscriber-quote-card__mark">
            ”
          </span>

          <p class="subscriber-quote-card__quote">
            {{ quote.quote }}
          </p>

          <div class="subscriber-quote-card__author">
            <span class="subscriber-quote-card__name">
              {{ quote.name }}
            </span>

            <span class="subscriber-quote-card__role">
              {{ quote.role }}
            </span>
          </div>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './subscriber-quotes.scss'

const quotes = [
  {
    name: 'Performance Coach',
    role: 'Strength & Conditioning',
    quote: 'One of the few newsletters that consistently delivers practical coaching insight without unnecessary fluff.',
  },
  {
    name: 'Long-Term Subscriber',
    role: 'Strength Athlete',
    quote: 'The training concepts are simple, actionable, and actually sustainable long term.',
  },
  {
    name: 'Gym Owner',
    role: 'Performance Facility',
    quote: 'The combination of coaching education, movement systems, and real-world application makes Diesel stand out.',
  },
]
</script>