<template>
  <SectionWrapper size="sm">
    <section class="media-topics">
      <FilterTabs
        :items="topics"
        :active-item="activeTopic"
        @change="$emit('change', $event)"
      />
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'
import FilterTabs from '../../ui/FilterTabs/FilterTabs.vue'

import './media-topics.scss'

defineProps({
  activeTopic: {
    type: String,
    required: true,
  },
})

defineEmits(['change'])

const topics = [
  'All Episodes',
  'Strength',
  'Longevity',
  'Coaching',
  'Mobility',
  'Recovery',
  'Mindset',
  'Interviews',
]
</script>