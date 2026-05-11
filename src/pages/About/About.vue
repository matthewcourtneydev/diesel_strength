<template>
  <div class="page-shell about-page">
    <SiteHeader />

    <main>
      <PageHero
        eyebrow="About Diesel Strength"
        title="Built Around Real Coaching & Long-Term Performance"
        description="The Diesel Strength ecosystem was built to help athletes, coaches, and lifters develop strength, movement quality, resilience, and sustainable performance."
      >
        <template #actions>
          <router-link
            to="/programs"
            class="btn btn--primary"
          >
            Explore Programs
          </router-link>

          <router-link
            to="/certifications"
            class="btn btn--secondary"
          >
            View Certifications
          </router-link>
        </template>
      </PageHero>

      <AboutStory />

      <CoachingPhilosophy />

      <EcosystemTimeline />

      <AboutCredentials />

      <MediaAuthority />

      <NewsletterCTA />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from '../../components/layout/SiteHeader/SiteHeader.vue'
import SiteFooter from '../../components/layout/SiteFooter/SiteFooter.vue'
import PageHero from '../../components/layout/PageHero/PageHero.vue'

import NewsletterCTA from '../../components/home/NewsletterCTA/NewsletterCTA.vue'

import AboutStory from '../../components/about/AboutStory/AboutStory.vue'
import CoachingPhilosophy from '../../components/about/CoachingPhilosophy/CoachingPhilosophy.vue'
import EcosystemTimeline from '../../components/about/EcosystemTimeline/EcosystemTimeline.vue'
import AboutCredentials from '../../components/about/AboutCredentials/AboutCredentials.vue'
import MediaAuthority from '../../components/about/MediaAuthority/MediaAuthority.vue'

import './about.scss'
</script>