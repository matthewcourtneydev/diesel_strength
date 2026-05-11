<template>
  <SectionWrapper size="lg">
    <section class="free-resources">
      <div class="free-resources__heading fade-up">
        <p class="eyebrow">
          Free Resources
        </p>

        <h2>
          Start Training Smarter Today
        </h2>

        <p>
          Sample workouts, training templates, mobility circuits, and performance resources from the Diesel ecosystem.
        </p>
      </div>

      <div class="free-resources__grid">
        <article
          v-for="resource in resources"
          :key="resource.title"
          class="resource-card hover-lift"
        >
          <div class="resource-card__media">
            <div class="resource-card__image-placeholder"></div>
          </div>

          <div class="resource-card__content">
            <span>
              {{ resource.type }}
            </span>

            <h3>
              {{ resource.title }}
            </h3>

            <p>
              {{ resource.description }}
            </p>

            <router-link
              :to="resource.link"
              class="resource-card__link"
            >
              Get It Free
            </router-link>
          </div>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './free-resources.scss'

const resources = [
  {
    type: 'Free Workout',
    title: 'Upper Body Strength Session',
    description: 'A sample upper body training session built around strength, control, and volume.',
    link: '/free-workouts',
  },
  {
    type: 'Free Template',
    title: 'Mobility Reset Circuit',
    description: 'A quick mobility flow to improve movement quality before training.',
    link: '/free-workouts',
  },
  {
    type: 'Free Guide',
    title: 'Conditioning Finisher',
    description: 'A simple conditioning finisher designed to build work capacity without overcomplication.',
    link: '/free-workouts',
  },
]
</script>