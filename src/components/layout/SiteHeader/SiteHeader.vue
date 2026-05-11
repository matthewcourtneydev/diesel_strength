<template>
  <header class="site-header" :class="{ 'site-header--scrolled': isScrolled }">
    <div class="container site-header__inner">
      <router-link to="/" class="site-header__logo">
        <img
          src="../../../assets/images/diesel-transparent-logo-no-text.png"
          alt="Diesel Strength"
          class="site-header__logo-mark"
        />

        <span class="site-header__logo-text"> DIESEL </span>
      </router-link>

      <nav class="site-header__nav">
        <router-link to="/programs">Programs</router-link>
        <router-link to="/certifications">Certifications</router-link>
        <router-link to="/articles">Articles</router-link>
        <router-link to="/podcast">Podcast</router-link>
        <router-link to="/shop">Shop</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>

      <div class="site-header__actions">
        <router-link
          to="/search"
          class="site-header__search"
          aria-label="Search"
        >
          Search
        </router-link>

        <router-link
          to="/subscribe"
          class="btn btn--primary site-header__subscribe"
        >
          Subscribe
        </router-link>

        <button
          type="button"
          class="site-header__menu-button"
          aria-label="Open navigation menu"
          @click="isMenuOpen = true"
        >
          Menu
        </button>
      </div>
    </div>

    <MobileNavOverlay :is-open="isMenuOpen" @close="isMenuOpen = false" />
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";

import MobileNavOverlay from "../../navigation/MobileNavOverlay/MobileNavOverlay.vue";

import "./site-header.scss";

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 24;
};

watch(isMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? "hidden" : "";
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>
