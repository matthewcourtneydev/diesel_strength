<template>
  <SectionWrapper
    size="xl"
    dark
  >
    <section class="podcast-spotlight">
      <div class="podcast-spotlight__heading fade-up">
        <p class="eyebrow">
          Podcast & Media
        </p>

        <h2>
          Conversations Around Strength, Longevity & High Performance
        </h2>

        <p>
          Coaching insight, training philosophy, mindset, recovery, and
          performance conversations from the Diesel ecosystem.
        </p>
      </div>

      <div class="podcast-spotlight__layout">
        <article class="featured-episode hover-lift">
          <div class="featured-episode__image image-zoom">
            <img
              :src="featuredEpisode.image"
              :alt="featuredEpisode.title"
            >

            <div class="featured-episode__overlay"></div>
          </div>

          <div class="featured-episode__content">
            <span class="featured-episode__category">
              {{ featuredEpisode.category }}
            </span>

            <span
              v-if="featuredEpisode.publishedAt"
              class="featured-episode__meta"
            >
              {{ featuredEpisode.publishedAt }}
              <template v-if="featuredEpisode.duration">
                · {{ featuredEpisode.duration }}
              </template>
            </span>

            <h3>
              {{ featuredEpisode.title }}
            </h3>

            <p>
              {{ featuredEpisode.description }}
            </p>

            <div class="featured-episode__actions">
              <a
                :href="featuredEpisode.link"
                class="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ featuredEpisode.ctaLabel }}
              </a>

              <router-link
                to="/subscribe"
                class="btn btn--secondary"
              >
                Subscribe
              </router-link>
            </div>
          </div>
        </article>

        <div class="podcast-spotlight__sidebar">
          <article
            v-for="item in sidebarEpisodes"
            :key="item.title"
            class="media-card hover-lift"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="media-card__image"
            >

            <div class="media-card__overlay"></div>

            <div class="media-card__visual">
              <div class="media-card__icon">
                ▶
              </div>
            </div>

            <div class="media-card__content">
              <span>
                {{ item.category }}
              </span>

              <small v-if="item.publishedAt">
                {{ item.publishedAt }}
              </small>

              <h4>
                {{ item.title }}
              </h4>
            </div>
          </article>
        </div>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import { getPodcastEpisodes } from '../../../services/podcastService'

import {
  featuredPodcastEpisode,
  podcastEpisodes,
} from '../../../data/podcastData'

import './podcast-spotlight.scss'

const liveEpisodes = ref([])

const fallbackEpisodes = [
  featuredPodcastEpisode,
  ...podcastEpisodes,
]

function normalizeEpisode(episode, index) {
  const fallback = fallbackEpisodes[index] || featuredPodcastEpisode

  return {
    category: episode.category || 'Podcast',
    title: episode.title || fallback.title,
    description: episode.description || fallback.description || 'A Becoming Ronin podcast episode from the Diesel ecosystem.',
    image: episode.image || fallback.image,
    link: episode.link || fallback.link || '/podcast',
    publishedAt: episode.publishedAt || '',
    duration: episode.duration || '',
    ctaLabel: episode.ctaLabel || 'Listen Now',
  }
}

const episodes = computed(() => {
  const activeEpisodes = liveEpisodes.value.length
    ? liveEpisodes.value
    : fallbackEpisodes

  return activeEpisodes.map(normalizeEpisode)
})

const featuredEpisode = computed(() => episodes.value[0])

const sidebarEpisodes = computed(() => episodes.value.slice(1, 4))

onMounted(async () => {
  try {
    liveEpisodes.value = await getPodcastEpisodes()
  } catch (error) {
    console.warn('Using fallback podcast episodes because RSS failed:', error)
  }
})
</script>