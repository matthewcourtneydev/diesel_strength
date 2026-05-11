<template>
  <SectionWrapper
    id="preview"
    size="lg"
    dark
  >
    <section class="program-preview">
      <div class="program-preview__content fade-up">
        <p class="eyebrow">
          {{ program.previewEyebrow }}
        </p>

        <h2>
          {{ program.previewTitle }}
        </h2>

        <p>
          {{ program.previewDescription }}
        </p>

        <div
          v-if="program.previewMeta?.length"
          class="program-preview__meta"
        >
          <span
            v-for="item in program.previewMeta"
            :key="item"
          >
            {{ item }}
          </span>
        </div>

        <div class="program-preview__actions">
          <a
            :href="program.previewPrimaryLink || '#purchase'"
            class="btn btn--primary"
          >
            {{ program.previewPrimaryCta }}
          </a>

          <a
            :href="program.previewSecondaryLink || '#overview'"
            class="btn btn--secondary"
          >
            {{ program.previewSecondaryCta }}
          </a>
        </div>
      </div>

      <div class="program-preview__mockup fade-up">
        <article
          v-for="(panel, index) in program.previewPanels"
          :key="panel.title"
          class="preview-panel"
          :class="{ 'preview-panel--large': index === 0 }"
        >
          <span>
            {{ panel.label }}
          </span>

          <h3>
            {{ panel.title }}
          </h3>

          <div class="preview-panel__rows">
            <div
              v-for="line in panel.lines"
              :key="line"
              class="preview-line"
              :class="`preview-line--${line}`"
            ></div>
          </div>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './program-preview.scss'

defineProps({
  program: {
    type: Object,
    required: true,
  },
})
</script>