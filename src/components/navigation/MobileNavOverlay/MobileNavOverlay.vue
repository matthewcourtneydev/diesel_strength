<template>
  <transition name="mobile-nav-fade">
    <div
      v-if="isOpen"
      class="mobile-nav-overlay"
    >
      <button
        type="button"
        class="mobile-nav-overlay__backdrop"
        aria-label="Close navigation"
        @click="$emit('close')"
      ></button>

      <div class="mobile-nav-overlay__panel">
        <div class="mobile-nav-overlay__top">
          <router-link
            to="/"
            class="mobile-nav-overlay__logo"
            @click="$emit('close')"
          >
            <img
              src="../../../assets/images/diesel-transparent-logo-no-text.png"
              alt="Diesel Strength"
              class="mobile-nav-overlay__logo-mark"
            >

            <span>DIESEL</span>
          </router-link>

          <button
            type="button"
            class="mobile-nav-overlay__close"
            aria-label="Close navigation"
            @click="$emit('close')"
          >
            ×
          </button>
        </div>

        <div class="mobile-nav-overlay__content">
          <div
            v-for="group in navGroups"
            :key="group.title"
            class="mobile-nav-group"
          >
            <span class="mobile-nav-group__label">
              {{ group.title }}
            </span>

            <nav class="mobile-nav-group__links">
              <router-link
                v-for="link in group.links"
                :key="link.label"
                :to="link.to"
                @click="$emit('close')"
              >
                {{ link.label }}
              </router-link>
            </nav>
          </div>
        </div>

        <div class="mobile-nav-overlay__bottom">
          <router-link
            to="/search"
            class="btn btn--secondary"
            @click="$emit('close')"
          >
            Search
          </router-link>

          <router-link
            to="/subscribe"
            class="btn btn--primary"
            @click="$emit('close')"
          >
            Subscribe
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import './mobile-nav-overlay.scss'

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['close'])

const navGroups = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Programs', to: '/programs' },
      { label: 'Certifications', to: '/certifications' },
      { label: 'Shop', to: '/shop' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Education',
    links: [
      { label: 'Articles', to: '/articles' },
      { label: 'Podcast', to: '/podcast' },
      { label: 'Subscribe', to: '/subscribe' },
    ],
  },
]
</script>