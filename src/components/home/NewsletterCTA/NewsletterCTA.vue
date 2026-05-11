<template>
  <SectionWrapper size="xl">
    <section class="newsletter-cta">

      <div class="newsletter-cta__spacer"></div>

      <div class="newsletter-cta__content fade-up">
        <h2>
          Get Weekly Training Insight Delivered To Your Inbox
        </h2>

        <p>
          Strength training, mobility systems, conditioning, coaching insight,
          and more from the Diesel Strength ecosystem.
        </p>
      </div>

      <form class="newsletter-cta__form fade-up">

        <div class="newsletter-cta__field-row">

          <input
            type="email"
            placeholder="Enter your email"
          >

          <button
            type="submit"
            class="btn btn--primary"
          >
            Subscribe
          </button>

        </div>

        <span>
          15k+ readers and growing
        </span>

      </form>

    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './newsletter-cta.scss'
</script>