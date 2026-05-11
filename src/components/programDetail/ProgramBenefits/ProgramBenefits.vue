<template>
  <SectionWrapper
    size="lg"
    dark
  >
    <section class="program-benefits">
      <div class="program-benefits__heading fade-up">
        <p class="eyebrow">
          {{ program.benefitsEyebrow }}
        </p>

        <h2>
          {{ program.benefitsTitle }}
        </h2>

        <p>
          {{ program.benefitsDescription }}
        </p>
      </div>

      <div class="program-benefits__grid">
        <article
          v-for="benefit in program.benefits"
          :key="benefit.title"
          class="benefit-card hover-lift"
        >
          <div class="benefit-card__number">
            {{ benefit.number }}
          </div>

          <h3>
            {{ benefit.title }}
          </h3>

          <p>
            {{ benefit.description }}
          </p>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './program-benefits.scss'

defineProps({
  program: {
    type: Object,
    required: true,
  },
})
</script>