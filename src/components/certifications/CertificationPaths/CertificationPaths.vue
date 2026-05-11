<template>
  <SectionWrapper
    size="lg"
    dark
  >
    <section class="certification-paths">
      <div class="certification-paths__heading fade-up">
        <p class="eyebrow">
          Certification Tracks
        </p>

        <h2>
          Education Paths For Coaches & Performance Professionals
        </h2>

        <p>
          Explore certifications, seminars, and continuing education systems built around real-world coaching application.
        </p>
      </div>

      <div class="certification-paths__grid">
        <article
          v-for="path in certificationPaths"
          :key="path.title"
          class="cert-path-card hover-lift"
        >
          <div class="cert-path-card__media">
            <div class="cert-path-card__image-placeholder"></div>
          </div>

          <div class="cert-path-card__content">
            <span class="cert-path-card__category">
              {{ path.category }}
            </span>

            <h3>
              {{ path.title }}
            </h3>

            <p>
              {{ path.description }}
            </p>

            <ul class="cert-path-card__features">
              <li
                v-for="feature in path.features"
                :key="feature"
              >
                {{ feature }}
              </li>
            </ul>

            <router-link
              :to="path.link"
              class="cert-path-card__link"
            >
              Explore Certification
            </router-link>
          </div>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './certification-paths.scss'

const certificationPaths = [
  {
    category: 'Foundational',
    title: 'CPPS Level 1',
    description: 'Foundational strength, movement, and physical preparation systems for coaches and trainers.',
    features: [
      'Movement & Warm-Up Systems',
      'Strength Training Principles',
      'Athlete Preparation',
    ],
    link: '/certifications/cpps-level-1',
  },
  {
    category: 'Performance',
    title: 'Football Performance Certification',
    description: 'Performance systems focused on speed, power, durability, and football athlete development.',
    features: [
      'Performance Training',
      'Field Preparation',
      'Power Development',
    ],
    link: '/certifications/football-performance',
  },
  {
    category: 'Advanced Education',
    title: 'Continuing Education',
    description: 'Specialized educational systems for experienced coaches looking to deepen their coaching toolbox.',
    features: [
      'Advanced Coaching Concepts',
      'Programming Strategy',
      'Applied Systems',
    ],
    link: '/certifications/continuing-education',
  },
  {
    category: 'Team Experience',
    title: 'Private Team Seminar',
    description: 'Hands-on seminar experiences for coaching staffs, facilities, and organizations.',
    features: [
      'On-Site Coaching',
      'Hands-On Instruction',
      'Team Development',
    ],
    link: '/contact',
  },
]
</script>