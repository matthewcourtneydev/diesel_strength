<template>
  <SectionWrapper size="lg">
    <section
      id="curriculum"
      class="curriculum-overview"
    >
      <div class="curriculum-overview__content fade-up">
        <p class="eyebrow">
          Certification Curriculum
        </p>

        <h2>
          A Structured System Built Around Real Coaching Application
        </h2>

        <p class="curriculum-overview__description">
          Learn the systems, progressions, and coaching strategies used to improve athlete preparation, movement quality, strength development, and long-term performance.
        </p>

        <div class="curriculum-modules">
          <article
            v-for="module in modules"
            :key="module.title"
            class="curriculum-module"
          >
            <span class="curriculum-module__number">
              {{ module.number }}
            </span>

            <div class="curriculum-module__content">
              <h3>
                {{ module.title }}
              </h3>

              <p>
                {{ module.description }}
              </p>
            </div>
          </article>
        </div>
      </div>

      <aside class="curriculum-overview__sidebar fade-up">
        <div class="curriculum-panel">
          <span class="curriculum-panel__eyebrow">
            Included Topics
          </span>

          <h3>
            Coaching Systems You Can Apply Immediately
          </h3>

          <ul class="curriculum-panel__topics">
            <li>Movement Preparation</li>
            <li>Strength Training Principles</li>
            <li>Warm-Up Systems</li>
            <li>Athlete Assessment</li>
            <li>Programming Strategy</li>
            <li>Recovery & Longevity</li>
            <li>Exercise Progressions</li>
            <li>Coaching Communication</li>
          </ul>

          <router-link
            to="/contact"
            class="btn btn--primary curriculum-panel__button"
          >
            Learn More
          </router-link>
        </div>
      </aside>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './curriculum-overview.scss'

const modules = [
  {
    number: '01',
    title: 'Movement & Preparation',
    description: 'Warm-ups, mobility systems, and preparation strategies for better movement quality.',
  },
  {
    number: '02',
    title: 'Strength Development',
    description: 'Principles for building strength, power, resilience, and sustainable progression.',
  },
  {
    number: '03',
    title: 'Program Design',
    description: 'Structuring sessions, training phases, and progression systems for athletes.',
  },
  {
    number: '04',
    title: 'Coaching Application',
    description: 'Real-world coaching systems, regressions, communication, and implementation.',
  },
]
</script>