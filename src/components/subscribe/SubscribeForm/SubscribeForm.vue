<template>
  <SectionWrapper
    size="lg"
    dark
  >
    <section class="subscribe-form-section">
      <div class="subscribe-form-section__content fade-up">
        <p class="eyebrow">
          Join The Diesel Newsletter
        </p>

        <h2>
          Get The Next Training Dispatch
        </h2>

        <p>
          No spam. Just practical training insight, coaching education, podcast updates,
          and performance resources from the Diesel ecosystem.
        </p>
      </div>

      <form
        class="subscribe-form fade-up"
        @submit.prevent
      >
        <div class="subscribe-form__fields">
          <div class="subscribe-field">
            <label for="subscribe-name">
              Name
            </label>

            <input
              id="subscribe-name"
              type="text"
              placeholder="Your name"
            >
          </div>

          <div class="subscribe-field">
            <label for="subscribe-email">
              Email
            </label>

            <input
              id="subscribe-email"
              type="email"
              placeholder="you@example.com"
            >
          </div>
        </div>

        <button
          type="submit"
          class="btn btn--primary subscribe-form__button"
        >
          Subscribe
        </button>

        <p class="subscribe-form__note">
          Join the list for weekly training notes, coaching ideas, and Diesel content updates.
        </p>
      </form>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './subscribe-form.scss'
</script>