<template>
  <SectionWrapper size="lg">
    <section id="overview" class="program-overview">
      <div class="program-overview__content fade-up">
        <p class="eyebrow">
          {{ program.overviewEyebrow }}
        </p>

        <h2>
          {{ program.overviewTitle }}
        </h2>

        <p class="program-overview__description">
          {{ program.overviewDescription }}
        </p>

        <div class="program-overview__stats">
          <div
            v-for="stat in program.overviewStats"
            :key="stat.label"
            class="program-stat"
          >
            <span class="program-stat__label">
              {{ stat.label }}
            </span>

            <span class="program-stat__value">
              {{ stat.value }}
            </span>
          </div>
        </div>

        <div class="program-overview__actions">
          <a
            :href="program.purchaseLink"
            class="btn btn--primary"
          >
            {{ program.primaryCta }}
          </a>

          <a
            href="#preview"
            class="btn btn--secondary"
          >
            {{ program.previewCta || 'Preview Content' }}
          </a>
        </div>
      </div>

      <aside class="program-overview__purchase fade-up">
        <div class="purchase-card">
          <div class="purchase-card__media">
            <img
              :src="program.productImage"
              :alt="`${program.title} product preview`"
            >

            <div class="purchase-card__media-overlay"></div>
          </div>

          <div class="purchase-card__body">
            <span class="purchase-card__tag">
              {{ program.purchaseTag }}
            </span>

            <h3>
              {{ program.purchaseTitle }}
            </h3>

            <p>
              {{ program.purchaseDescription }}
            </p>

            <div class="purchase-card__price">
              {{ program.price }}
            </div>

            <ul class="purchase-card__features">
              <li
                v-for="feature in program.purchaseFeatures"
                :key="feature"
              >
                {{ feature }}
              </li>
            </ul>

            <a
              id="purchase"
              :href="program.checkoutLink"
              class="btn btn--primary purchase-card__button"
            >
              {{ program.purchaseButtonLabel }}
            </a>
          </div>
        </div>
      </aside>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './program-overview.scss'

defineProps({
  program: {
    type: Object,
    required: true,
  },
})
</script>