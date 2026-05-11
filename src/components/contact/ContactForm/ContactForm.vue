<template>
  <SectionWrapper
    size="lg"
    dark
  >
    <section class="contact-form-section">
      <div class="contact-form-section__heading fade-up">
        <p class="eyebrow">
          Send A Message
        </p>

        <h2>
          Let’s Start The Conversation
        </h2>

        <p>
          Reach out with questions about programs, certifications, coaching systems, partnerships, or educational resources.
        </p>
      </div>

      <form
        class="contact-form fade-up"
        @submit.prevent
      >
        <div class="contact-form__grid">
          <div class="form-field">
            <label for="name">
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Your name"
            >
          </div>

          <div class="form-field">
            <label for="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
            >
          </div>
        </div>

        <div class="form-field">
          <label for="inquiry">
            Inquiry Type
          </label>

          <select id="inquiry">
            <option>
              General Question
            </option>

            <option>
              Training Programs
            </option>

            <option>
              Certifications
            </option>

            <option>
              Podcast & Media
            </option>

            <option>
              Partnerships
            </option>
          </select>
        </div>

        <div class="form-field">
          <label for="message">
            Message
          </label>

          <textarea
            id="message"
            rows="7"
            placeholder="Tell us more about your question..."
          ></textarea>
        </div>

        <div class="contact-form__footer">
          <p class="contact-form__note">
            We typically respond within 1–2 business days.
          </p>

          <button
            type="submit"
            class="btn btn--primary"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './contact-form.scss'
</script>