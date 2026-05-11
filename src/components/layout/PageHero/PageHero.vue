<template>
  <section
    class="page-hero"
    :class="[
      reverse ? 'page-hero--reverse' : '',
      compact ? 'page-hero--compact' : '',
      background ? 'page-hero--background' : '',
    ]"
  >
    <div class="page-hero__background">
      <img
        v-if="backgroundImage"
        :src="backgroundImage"
        :alt="imageAlt || title"
        class="page-hero__background-image"
      />
    </div>

    <div class="container page-hero__inner">
      <div class="page-hero__content fade-up">
        <p v-if="eyebrow" class="eyebrow">
          {{ eyebrow }}
        </p>

        <h1>
          {{ title }}
        </h1>

        <p v-if="description" class="page-hero__description">
          {{ description }}
        </p>

        <div v-if="$slots.actions" class="page-hero__actions">
          <slot name="actions"></slot>
        </div>
      </div>

      <div v-if="showVisual" class="page-hero__visual fade-up">
        <slot name="visual">
          <div class="page-hero__image-wrapper">
            <img
              v-if="image"
              :src="image"
              :alt="imageAlt || title"
              class="page-hero__image"
            />

            <div v-else class="page-hero__image-placeholder"></div>
          </div>
        </slot>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: "",
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: "",
  },

  showVisual: {
    type: Boolean,
    default: true,
  },

  reverse: {
    type: Boolean,
    default: false,
  },

  compact: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    default: "",
  },

  imageAlt: {
    type: String,
    default: "",
  },
  backgroundImage: {
    type: String,
    default: "",
  },

  background: {
    type: Boolean,
    default: false,
  },

  imageAlt: {
    type: String,
    default: "",
  },
});

import "./page-hero.scss";
</script>
