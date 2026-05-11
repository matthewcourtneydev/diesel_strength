<template>
  <SectionWrapper size="lg">
    <section class="about-story">
      <div class="about-story__visual fade-up">
        <div class="about-story__image-placeholder"></div>
      </div>

      <div class="about-story__content fade-up">
        <p class="eyebrow">
          The Story
        </p>

        <h2>
          Coaching Built From The Gym Floor Up
        </h2>

        <p>
          Diesel Strength was built around practical coaching, hard training,
          movement quality, and systems that work in real-world environments.
        </p>

        <p>
          The mission is simple: help lifters, athletes, and coaches train smarter,
          move better, build strength, and stay in the game for the long term.
        </p>

        <div class="about-story__actions">
          <router-link
            to="/programs"
            class="btn btn--primary"
          >
            View Programs
          </router-link>

          <router-link
            to="/podcast"
            class="btn btn--secondary"
          >
            Listen To Podcast
          </router-link>
        </div>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './about-story.scss'
</script>