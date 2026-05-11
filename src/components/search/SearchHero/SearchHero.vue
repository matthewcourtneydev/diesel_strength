<template>
  <SectionWrapper size="lg">
    <section class="search-hero">
      <div class="search-hero__content fade-up">
        <p class="eyebrow">
          Search Diesel
        </p>

        <h1>
          Explore Training, Coaching & Performance Content
        </h1>

        <p>
          Search articles, podcast episodes, programs, certifications, and educational resources across the Diesel ecosystem.
        </p>
      </div>

      <div class="search-hero__search fade-up">
        <div class="search-input">
          <span class="search-input__icon">
            ⌕
          </span>

          <input
            type="text"
            placeholder="Search articles, podcast episodes, programs..."
          >
        </div>

        <FilterTabs
          :items="filters"
          :active-item="activeFilter"
          @change="activeFilter = $event"
        />

        <div class="search-hero__tags">
          <button
            v-for="tag in quickTags"
            :key="tag"
            type="button"
            class="search-tag"
          >
            {{ tag }}
          </button>
        </div>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import { ref } from 'vue'

import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'
import FilterTabs from '../../ui/FilterTabs/FilterTabs.vue'

import './search-hero.scss'

const filters = [
  'All',
  'Articles',
  'Podcast',
  'Programs',
  'Certifications',
]

const quickTags = [
  'Strength',
  'Mobility',
  'Recovery',
  'Longevity',
  'Warm-Ups',
  'Coaching',
]

const activeFilter = ref('All')
</script>