<template>
  <SectionWrapper size="lg">
    <section class="founder-spotlight">
      <div class="founder-spotlight__content fade-up">
        <p class="eyebrow">
          Founder & Coach
        </p>

        <h2>
          Built From Decades Of Coaching Experience
        </h2>

        <p class="founder-spotlight__description">
          Jim “Smitty” Smith has spent decades coaching athletes, lifters, and coaches through real-world strength and conditioning systems. The certification pathway reflects that experience — practical, direct, and built around application.
        </p>

        <div class="founder-spotlight__credentials">
          <div>
            <strong>20+</strong>
            <span>Years Coaching</span>
          </div>

          <div>
            <strong>CPPS</strong>
            <span>Co-Founder</span>
          </div>

          <div>
            <strong>Real</strong>
            <span>World Systems</span>
          </div>
        </div>

        <div class="founder-spotlight__actions">
          <router-link
            to="/about"
            class="btn btn--primary"
          >
            About Smitty
          </router-link>

          <router-link
            to="/podcast"
            class="btn btn--secondary"
          >
            Listen To Podcast
          </router-link>
        </div>
      </div>

      <div class="founder-spotlight__visual fade-up">
        <div class="founder-spotlight__image-placeholder"></div>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './founder-spotlight.scss'
</script>