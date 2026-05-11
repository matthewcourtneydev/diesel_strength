<template>
  <div class="filter-tabs-wrap">
    <button
      class="filter-tabs-wrap__nav filter-tabs-wrap__nav--prev"
      type="button"
      aria-label="Scroll filters left"
      @click="scrollTabs('left')"
    >
      ‹
    </button>

    <div
      ref="tabsRef"
      class="filter-tabs"
    >
      <button
        v-for="item in items"
        :key="item"
        type="button"
        class="filter-tabs__button"
        :class="{ 'filter-tabs__button--active': item === activeItem }"
        @click="$emit('change', item)"
      >
        {{ item }}
      </button>
    </div>

    <button
      class="filter-tabs-wrap__nav filter-tabs-wrap__nav--next"
      type="button"
      aria-label="Scroll filters right"
      @click="scrollTabs('right')"
    >
      ›
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    required: true,
  },

  activeItem: {
    type: String,
    required: true,
  },
})

defineEmits(['change'])

const tabsRef = ref(null)

const scrollTabs = (direction) => {
  if (!tabsRef.value) return

  const scrollAmount = tabsRef.value.clientWidth * 0.72

  tabsRef.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth',
  })
}

import './filter-tabs.scss'
</script>