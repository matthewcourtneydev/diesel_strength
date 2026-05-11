<template>
  <SectionWrapper size="lg">
    <section class="program-grid-section">
      <div class="program-grid-section__heading">
        <p class="eyebrow">
          Program Library
        </p>

        <h2>
          Choose Your Training System
        </h2>

        <p>
          Browse strength, mobility, conditioning, longevity, and education-based systems built for real-world performance.
        </p>
      </div>

      <TransitionGroup
        name="program-card-fade"
        tag="div"
        class="program-grid"
      >
        <article
          v-for="program in filteredPrograms"
          :key="program.title"
          class="program-card"
        >
          <div class="program-card__media">
            <div class="program-card__image-placeholder"></div>
          </div>

          <div class="program-card__content">
            <span class="program-card__category">
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
              class="program-card__link"
            >
              View System
            </router-link>
          </div>
        </article>
      </TransitionGroup>
    </section>
  </SectionWrapper>
</template>

<script setup>
import { computed } from 'vue'
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './program-grid.scss'

const props = defineProps({
  activeCategory: {
    type: String,
    default: 'All',
  },
})

const programs = [
  {
    title: 'Strength Foundation',
    category: 'Strength',
    description: 'A foundational strength system for building muscle, power, and resilient movement.',
    link: '/programs/strength-foundation',
  },
  {
    title: 'Longevity Strength System',
    category: 'Longevity',
    description: 'Joint-friendly training designed to help lifters stay strong and pain-free for life.',
    link: '/programs/longevity-strength-system',
  },
  {
    title: 'Pain-Free Performance',
    category: 'Mobility',
    description: 'Mobility, warm-up, and movement quality systems for better training sessions.',
    link: '/programs/pain-free-performance',
  },
  {
    title: 'Athletic Conditioning',
    category: 'Conditioning',
    description: 'Conditioning protocols built for performance, work capacity, and durability.',
    link: '/programs/athletic-conditioning',
  },
  {
    title: 'Grip Strength Blueprint',
    category: 'Grip',
    description: 'Specialized grip strength progressions for athletes, lifters, and coaches.',
    link: '/programs/grip-strength-blueprint',
  },
  {
    title: 'Mobility Reset',
    category: 'Mobility',
    description: 'A reset system for improving movement quality and reducing training limitations.',
    link: '/programs/mobility-reset',
  },
  {
    title: 'Coach Education System',
    category: 'Athlete Performance',
    description: 'Education-based systems for coaches who want better tools and better outcomes.',
    link: '/programs/coach-education-system',
  },
  {
    title: 'Free Workout Library',
    category: 'Free Workouts',
    description: 'Sample workouts, training templates, and entry-level resources from Diesel.',
    link: '/free-workouts',
  },
]

const filteredPrograms = computed(() => {
  if (props.activeCategory === 'All') {
    return programs
  }

  return programs.filter((program) => program.category === props.activeCategory)
})
</script>