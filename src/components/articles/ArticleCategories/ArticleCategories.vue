<template>
  <SectionWrapper size="sm">
    <section class="article-categories">
      <FilterTabs
        :items="categories"
        :active-item="activeCategory"
        @change="$emit('change', $event)"
      />
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'
import FilterTabs from '../../ui/FilterTabs/FilterTabs.vue'

import './article-categories.scss'

defineProps({
  activeCategory: {
    type: String,
    required: true,
  },
})

defineEmits(['change'])

const categories = [
  'All Articles',
  'Strength',
  'Performance',
  'Mobility',
  'Longevity',
  'Coaching',
  'Recovery',
  'Nutrition',
  'Mindset',
]
</script>