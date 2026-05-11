<template>
  <SectionWrapper size="lg">
    <section class="media-authority">
      <div class="media-authority__content fade-up">
        <p class="eyebrow">
          Media & Educational Reach
        </p>

        <h2>
          Education, Coaching & Performance Content Across Multiple Platforms
        </h2>

        <p class="media-authority__description">
          Diesel Strength has expanded beyond training programs into a broader ecosystem of articles, coaching education, certifications, seminars, podcasts, and performance media.
        </p>

        <div class="media-authority__actions">
          <router-link
            to="/articles"
            class="btn btn--primary"
          >
            Read Articles
          </router-link>

          <router-link
            to="/podcast"
            class="btn btn--secondary"
          >
            Listen To Podcast
          </router-link>
        </div>
      </div>

      <div class="media-authority__stack fade-up">
        <article
          v-for="item in authorityItems"
          :key="item.title"
          class="authority-item"
        >
          <span class="authority-item__label">
            {{ item.label }}
          </span>

          <div class="authority-item__content">
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

import './media-authority.scss'

const authorityItems = [
  {
    label: 'Podcast',
    title: 'Long-Form Coaching Conversations',
    description: 'Discussions on strength, longevity, coaching systems, and performance development.',
  },
  {
    label: 'Articles',
    title: 'Performance Education Library',
    description: 'Training systems, movement education, recovery strategies, and practical coaching insight.',
  },
  {
    label: 'Certifications',
    title: 'Coach Development Systems',
    description: 'Practical educational pathways for trainers, coaches, and performance professionals.',
  },
  {
    label: 'Seminars',
    title: 'Hands-On Learning Experiences',
    description: 'Live coaching environments focused on movement, strength systems, and athlete preparation.',
  },
]
</script>