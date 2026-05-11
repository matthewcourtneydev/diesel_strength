<template>
  <SectionWrapper size="lg">
    <section class="featured-program">
      <div class="featured-program__visual fade-up">
        <div class="featured-program__image-placeholder"></div>
      </div>

      <div class="featured-program__content fade-up">
        <p class="eyebrow">
          Featured System
        </p>

        <h2>
          Longevity Strength System
        </h2>

        <p class="featured-program__description">
          A complete training system designed to help athletes, lifters, and coaches build strength, improve movement quality, and train pain-free for the long term.
        </p>

        <ul class="featured-program__benefits">
          <li>Build real-world strength</li>
          <li>Improve mobility and movement quality</li>
          <li>Train hard without beating up your joints</li>
        </ul>

        <div class="featured-program__actions">
          <router-link
            to="/programs/longevity-strength-system"
            class="btn btn--primary"
          >
            View System
          </router-link>

          <router-link
            to="/programs"
            class="btn btn--secondary"
          >
            Compare Programs
          </router-link>
        </div>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './featured-program.scss'
</script>