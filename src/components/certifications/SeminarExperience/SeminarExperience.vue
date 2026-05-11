<template>
  <SectionWrapper
    size="lg"
    dark
  >
    <section class="seminar-experience">
      <div class="seminar-experience__media fade-up">
        <div class="seminar-collage">
          <div class="seminar-collage__primary"></div>

          <div class="seminar-collage__secondary">
            <div class="seminar-collage__card"></div>
            <div class="seminar-collage__card"></div>
          </div>
        </div>
      </div>

      <div class="seminar-experience__content fade-up">
        <p class="eyebrow">
          Live Seminar Experience
        </p>

        <h2>
          Learn In Real Coaching Environments
        </h2>

        <p class="seminar-experience__description">
          Diesel seminars are designed around practical implementation,
          hands-on coaching, movement breakdowns, athlete preparation,
          and real-world performance application.
        </p>

        <ul class="seminar-experience__highlights">
          <li>Hands-on coaching demonstrations</li>
          <li>Movement assessments & corrections</li>
          <li>Live athlete preparation sessions</li>
          <li>Programming & exercise breakdowns</li>
          <li>Networking with coaches & trainers</li>
        </ul>

        <div class="seminar-experience__actions">
          <router-link
            to="/contact"
            class="btn btn--primary"
          >
            Host A Seminar
          </router-link>

          <router-link
            to="/certifications"
            class="btn btn--secondary"
          >
            View Certifications
          </router-link>
        </div>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './seminar-experience.scss'
</script>