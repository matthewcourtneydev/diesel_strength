<template>
  <section
    class="section-wrapper"
    :class="[
      size ? `section-wrapper--${size}` : '',
      dark ? 'section-wrapper--dark' : '',
    ]"
  >
    <div class="container">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: 'md',
  },

  dark: {
    type: Boolean,
    default: false,
  },
})

import './section-wrapper.scss'
</script>