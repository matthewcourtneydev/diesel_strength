<template>
  <nav class="footer-nav">
    <div
      v-for="group in navGroups"
      :key="group.title"
      class="footer-nav__group"
    >
      <h3>
        {{ group.title }}
      </h3>

      <ul>
        <li
          v-for="link in group.links"
          :key="link.label"
        >
          <router-link :to="link.to">
            {{ link.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import './footer-nav.scss'

const navGroups = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Programs', to: '/programs' },
      { label: 'Certifications', to: '/certifications' },
      { label: 'About', to: '/about' },
    ],
  },
  {
    title: 'Education',
    links: [
      { label: 'Articles', to: '/articles' },
      { label: 'Podcast', to: '/podcast' },
      { label: 'Subscribe', to: '/subscribe' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]
</script>