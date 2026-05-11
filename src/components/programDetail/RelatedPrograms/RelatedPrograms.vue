<template>
  <SectionWrapper
    size="lg"
    dark
  >
    <section class="related-programs">
      <div class="related-programs__heading fade-up">
        <p class="eyebrow">
          Keep Building
        </p>

        <h2>
          Related Training Systems
        </h2>

        <p>
          Explore additional Diesel systems that pair well with this program.
        </p>
      </div>

      <div class="related-programs__grid">
        <article
          v-for="program in relatedPrograms"
          :key="program.title"
          class="related-program-card hover-lift"
        >
          <div class="related-program-card__media">
            <div class="related-program-card__image-placeholder"></div>
          </div>

          <div class="related-program-card__content">
            <span>
              {{ program.category }}
            </span>

            <h3>
              {{ program.title }}
            </h3>

            <p>
              {{ program.description }}
            </p>

            <router-link
              :to="program.link"
              class="related-program-card__link"
            >
              View System
            </router-link>
          </div>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './related-programs.scss'

const relatedPrograms = [
  {
    category: 'Strength',
    title: 'Strength Foundation',
    description: 'Build the base strength, muscle, and movement quality needed for long-term progress.',
    link: '/programs/strength-foundation',
  },
  {
    category: 'Mobility',
    title: 'Pain-Free Performance',
    description: 'Improve warm-ups, mobility, and movement preparation before hard training.',
    link: '/programs/pain-free-performance',
  },
  {
    category: 'Conditioning',
    title: 'Athletic Conditioning',
    description: 'Add work capacity and conditioning without compromising strength development.',
    link: '/programs/athletic-conditioning',
  },
]
</script>