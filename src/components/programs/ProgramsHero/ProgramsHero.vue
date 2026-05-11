<template>
  <PageHero
    eyebrow="Training Programs"
    title="Training Programs Built For Real-World Strength"
    description="Proven strength, mobility, conditioning, and longevity systems from the Diesel Strength ecosystem."
  >
    <template #actions>
      <router-link
        to="/programs"
        class="btn btn--primary"
      >
        Find Your Program
      </router-link>

      <router-link
        to="/free-workouts"
        class="btn btn--secondary"
      >
        View Free Workouts
      </router-link>
    </template>
  </PageHero>
</template>

<script setup>
import PageHero from '../../layout/PageHero/PageHero.vue'
</script>