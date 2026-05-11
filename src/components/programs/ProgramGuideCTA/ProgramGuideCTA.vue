<template>
  <SectionWrapper
    size="lg"
    dark
  >
    <section class="program-guide-cta">
      <div class="program-guide-cta__content fade-up">
        <p class="eyebrow">
          Need Direction?
        </p>

        <h2>
          Not Sure Where To Start?
        </h2>

        <p>
          Find the right starting point based on your goals, training age, injury history, and performance needs.
        </p>

        <div class="program-guide-cta__actions">
          <router-link
            to="/contact"
            class="btn btn--primary"
          >
            Help Me Choose
          </router-link>

          <router-link
            to="/programs"
            class="btn btn--secondary"
          >
            Compare Systems
          </router-link>
        </div>
      </div>

      <div class="program-guide-cta__visual fade-up">
        <div class="program-guide-cta__image-placeholder"></div>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './program-guide-cta.scss'
</script>