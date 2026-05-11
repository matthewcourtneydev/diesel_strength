<template>
  <SectionWrapper size="sm">
    <section class="podcast-platforms">
      <p class="podcast-platforms__label">
        Listen / Watch On
      </p>

      <div class="podcast-platforms__list">
        <router-link
          v-for="platform in platforms"
          :key="platform"
          to="/podcast"
          class="platform-pill"
        >
          {{ platform }}
        </router-link>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './podcast-platforms.scss'

const platforms = [
  'Spotify',
  'Apple Podcasts',
  'YouTube',
  'Amazon Music',
  'RSS',
]
</script>