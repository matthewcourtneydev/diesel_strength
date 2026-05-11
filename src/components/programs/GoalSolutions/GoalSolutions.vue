<template>
  <SectionWrapper
    size="lg"
    dark
  >
    <section class="goal-solutions">
      <div class="goal-solutions__heading fade-up">
        <p class="eyebrow">
          Find Your Path
        </p>

        <h2>
          Training Solutions For Every Goal
        </h2>

        <p>
          Whether you are chasing strength, better movement, improved conditioning,
          or long-term performance, the Diesel ecosystem gives you a clear place to start.
        </p>
      </div>

      <div class="goal-solutions__grid">
        <article
          v-for="goal in goals"
          :key="goal.title"
          class="goal-card hover-lift"
        >
          <div class="goal-card__icon">
            {{ goal.icon }}
          </div>

          <h3>
            {{ goal.title }}
          </h3>

          <p>
            {{ goal.description }}
          </p>

          <router-link
            :to="goal.link"
            class="goal-card__link"
          >
            Explore
          </router-link>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './goal-solutions.scss'

const goals = [
  {
    icon: '▰',
    title: 'Build Strength',
    description: 'Structured systems for building muscle, power, and real-world strength.',
    link: '/programs',
  },
  {
    icon: '✚',
    title: 'Move Pain-Free',
    description: 'Mobility and movement quality systems for training harder with less wear and tear.',
    link: '/programs',
  },
  {
    icon: '⌁',
    title: 'Improve Conditioning',
    description: 'Performance-focused conditioning methods to build work capacity and durability.',
    link: '/programs',
  },
  {
    icon: '▣',
    title: 'Coach Better',
    description: 'Education-driven systems for coaches, trainers, and performance professionals.',
    link: '/certifications',
  },
  {
    icon: '⌛',
    title: 'Train For Longevity',
    description: 'Sustainable training methods designed to help you stay strong for life.',
    link: '/programs',
  },
]
</script>