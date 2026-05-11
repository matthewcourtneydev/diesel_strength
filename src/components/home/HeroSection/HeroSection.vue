<template>
  <PageHero
    class="home-hero"
    eyebrow="26+ Years Of Strength & Conditioning Experience"
    title="Strength. Longevity. Performance."
    description="Training systems built for strength, longevity, and real-world performance."
    :background-image="heroPrimary"
    background
    :show-visual="false"
  >
    <template #actions>
      <router-link
        to="/programs"
        class="btn btn--primary"
      >
        Explore Programs
      </router-link>

      <router-link
        to="/subscribe"
        class="btn btn--secondary home-hero__secondary"
      >
        Join Newsletter
      </router-link>
    </template>
  </PageHero>
</template>

<script setup>
import PageHero from '../../layout/PageHero/PageHero.vue'
import heroPrimary from '../../../assets/images/hero-primary.png'

import './hero-section.scss'
</script>