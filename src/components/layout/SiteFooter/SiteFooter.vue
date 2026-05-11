<template>
  <footer class="site-footer">
    <div class="container">
      <div class="site-footer__top">
        <div class="site-footer__brand fade-up">
          <router-link
            to="/"
            class="site-footer__logo"
            aria-label="Diesel Strength home"
          >
            <img
              src="../../../assets/images/diesel-transparent-logo.png"
              alt="Diesel Strength"
            >
          </router-link>

          <p class="site-footer__description">
            Strength systems, coaching education, performance insight, and
            long-term training resources built for athletes, coaches, and
            lifters.
          </p>
        </div>

        <FooterNav />

        <FooterNewsletter />
      </div>

      <FooterBottom />
    </div>
  </footer>
</template>

<script setup>
import FooterNav from '../FooterNav/FooterNav.vue'
import FooterNewsletter from '../FooterNewsletter/FooterNewsletter.vue'
import FooterBottom from '../FooterBottom/FooterBottom.vue'

import './site-footer.scss'
</script>