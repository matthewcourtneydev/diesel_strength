<template>
  <SectionWrapper size="lg">
    <section class="program-includes">
      <div class="program-includes__heading fade-up">
        <p class="eyebrow">
          {{ program.includesEyebrow }}
        </p>

        <h2>
          {{ program.includesTitle }}
        </h2>

        <p>
          {{ program.includesDescription }}
        </p>
      </div>

      <div class="program-includes__grid">
        <article
          v-for="item in program.includedItems"
          :key="item.title"
          class="include-card hover-lift"
        >
          <span class="include-card__icon">
            {{ item.icon }}
          </span>

          <h3>
            {{ item.title }}
          </h3>

          <p>
            {{ item.description }}
          </p>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './program-includes.scss'

defineProps({
  program: {
    type: Object,
    required: true,
  },
})
</script>