<template>
  <div class="footer-bottom">
    <div class="footer-bottom__copyright">
      © 2026 Diesel Strength. All rights reserved.
    </div>

    <div class="footer-bottom__links">
      <router-link to="/privacy">
        Privacy
      </router-link>

      <router-link to="/terms">
        Terms
      </router-link>

      <router-link to="/contact">
        Contact
      </router-link>
    </div>

    <div class="footer-bottom__social">
      <a
        href="/"
        aria-label="Instagram"
      >
        IG
      </a>

      <a
        href="/"
        aria-label="YouTube"
      >
        YT
      </a>

      <a
        href="/"
        aria-label="Spotify"
      >
        SP
      </a>
    </div>
  </div>
</template>

<script setup>
import './footer-bottom.scss'
</script>