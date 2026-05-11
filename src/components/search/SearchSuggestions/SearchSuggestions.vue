<template>
  <SectionWrapper size="lg">
    <section class="search-suggestions">
      <div class="search-suggestions__heading fade-up">
        <p class="eyebrow">
          Explore Topics
        </p>

        <h2>
          Popular Searches Across The Diesel Ecosystem
        </h2>

        <p>
          Browse trending training concepts, podcast themes, coaching systems, and educational resources.
        </p>
      </div>

      <div class="search-suggestions__grid">
        <article
          v-for="group in suggestionGroups"
          :key="group.title"
          class="suggestion-group hover-lift"
        >
          <span class="suggestion-group__label">
            {{ group.label }}
          </span>

          <h3>
            {{ group.title }}
          </h3>

          <div class="suggestion-group__tags">
            <button
              v-for="item in group.items"
              :key="item"
              type="button"
              class="suggestion-tag"
            >
              {{ item }}
            </button>
          </div>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './search-suggestions.scss'

const suggestionGroups = [
  {
    label: 'Training',
    title: 'Popular Strength Topics',
    items: [
      'Strength Systems',
      'Conditioning',
      'Athletic Performance',
      'Program Design',
    ],
  },
  {
    label: 'Recovery',
    title: 'Mobility & Longevity',
    items: [
      'Recovery',
      'Warm-Ups',
      'Movement Quality',
      'Longevity',
    ],
  },
  {
    label: 'Education',
    title: 'Coaching Resources',
    items: [
      'CPPS',
      'Coaching',
      'Podcast',
      'Articles',
    ],
  },
]
</script>