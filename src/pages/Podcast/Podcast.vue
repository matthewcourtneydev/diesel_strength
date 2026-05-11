<template>
  <div class="page-shell podcast-page">
    <SiteHeader />

    <main>
      <PageHero
        eyebrow="Podcast & Media"
        title="Coaching Conversations, Training Insight & Performance Education"
        description="Long-form discussions on strength, athlete development, coaching systems, recovery, longevity, and real-world performance."
      >
        <template #actions>
          <router-link
            to="/subscribe"
            class="btn btn--primary"
          >
            Subscribe
          </router-link>

          <router-link
            to="/articles"
            class="btn btn--secondary"
          >
            Read Articles
          </router-link>
        </template>
      </PageHero>

      <PodcastPlatforms />

      <FeaturedEpisode />

      <MediaTopics
        :active-topic="activeTopic"
        @change="activeTopic = $event"
      />

      <EpisodeGrid :active-topic="activeTopic" />

      <NewsletterCTA />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import SiteHeader from '../../components/layout/SiteHeader/SiteHeader.vue'
import SiteFooter from '../../components/layout/SiteFooter/SiteFooter.vue'
import PageHero from '../../components/layout/PageHero/PageHero.vue'

import NewsletterCTA from '../../components/home/NewsletterCTA/NewsletterCTA.vue'

import PodcastPlatforms from '../../components/podcast/PodcastPlatforms/PodcastPlatforms.vue'
import FeaturedEpisode from '../../components/podcast/FeaturedEpisode/FeaturedEpisode.vue'
import MediaTopics from '../../components/podcast/MediaTopics/MediaTopics.vue'
import EpisodeGrid from '../../components/podcast/EpisodeGrid/EpisodeGrid.vue'

import './podcast.scss'

const activeTopic = ref('All Episodes')
</script>