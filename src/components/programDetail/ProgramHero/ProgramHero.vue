<template>
  <section class="program-hero">
    <div class="program-hero__background">
      <img
        v-if="program.heroImage || program.image"
        :src="program.heroImage || program.image"
        :alt="program.title"
      >
    </div>

    <div class="container program-hero__inner">
      <nav class="program-hero__breadcrumbs">
        <router-link to="/">Home</router-link>
        <span>›</span>
        <router-link to="/programs">Programs</router-link>
        <span>›</span>
        <span>{{ program.title }}</span>
      </nav>

      <div class="program-hero__content fade-up">
        <p class="eyebrow">
          {{ program.heroEyebrow || program.category }}
        </p>

        <h1>
          {{ program.title }}
        </h1>

        <p
          v-if="program.subtitle"
          class="program-hero__subtitle"
        >
          {{ program.subtitle }}
        </p>

        <p class="program-hero__description">
          {{ program.description }}
        </p>

        <div
          v-if="program.highlights?.length"
          class="program-hero__highlights"
        >
          <div
            v-for="item in program.highlights"
            :key="item"
            class="program-hero__highlight"
          >
            <span></span>
            {{ item }}
          </div>
        </div>

        <div class="program-hero__actions">
          <a
            :href="program.purchaseLink || '#purchase'"
            class="btn btn--primary"
          >
            {{ program.primaryCta || 'Start Training' }}
          </a>

          <a
            href="#overview"
            class="btn btn--secondary"
          >
            Preview Program
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import './program-hero.scss'

defineProps({
  program: {
    type: Object,
    required: true,
  },
})
</script>