<template>
  <transition name="mobile-menu-fade">
    <aside
      v-if="isOpen"
      class="mobile-menu"
    >
      <button
        class="mobile-menu__close"
        @click="$emit('close')"
      >
        Close
      </button>

      <nav class="mobile-menu__nav">
        <router-link to="/" @click="$emit('close')">Home</router-link>
        <router-link to="/programs" @click="$emit('close')">Programs</router-link>
        <router-link to="/certifications" @click="$emit('close')">Certifications</router-link>
        <router-link to="/articles" @click="$emit('close')">Articles</router-link>
        <router-link to="/podcast" @click="$emit('close')">Podcast</router-link>
        <router-link to="/shop" @click="$emit('close')">Shop</router-link>
        <router-link to="/about" @click="$emit('close')">About</router-link>
        <router-link to="/contact" @click="$emit('close')">Contact</router-link>
      </nav>
    </aside>
  </transition>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
})

defineEmits(['close'])

import './mobile-menu.scss'
</script>