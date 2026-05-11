<template>
  <div class="footer-newsletter">
    <h3>
      Join The Diesel Dispatch
    </h3>

    <p>
      Weekly training insight, coaching systems, podcast updates, and performance education.
    </p>

    <form
      class="footer-newsletter__form"
      @submit.prevent
    >
      <input
        type="email"
        placeholder="Email address"
      >

      <button type="submit">
        Subscribe
      </button>
    </form>
  </div>
</template>

<script setup>
import './footer-newsletter.scss'
</script>