<template>
  <div class="page-shell subscribe-page">
    <SiteHeader />

    <main>
      <PageHero
        eyebrow="Newsletter"
        title="Strength, Coaching & Performance Insight Delivered Weekly"
        description="Get training systems, coaching ideas, mobility strategies, recovery insight, articles, and podcast updates from the Diesel ecosystem."
      >
        <template #actions>
          <router-link
            to="/articles"
            class="btn btn--primary"
          >
            Read Articles
          </router-link>

          <router-link
            to="/podcast"
            class="btn btn--secondary"
          >
            Listen To Podcast
          </router-link>
        </template>
      </PageHero>

      <NewsletterBenefits />

      <SubscribeForm />

      <ContentPreview />

      <SubscriberQuotes />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from '../../components/layout/SiteHeader/SiteHeader.vue'
import SiteFooter from '../../components/layout/SiteFooter/SiteFooter.vue'
import PageHero from '../../components/layout/PageHero/PageHero.vue'

import NewsletterBenefits from '../../components/subscribe/NewsletterBenefits/NewsletterBenefits.vue'
import SubscribeForm from '../../components/subscribe/SubscribeForm/SubscribeForm.vue'
import ContentPreview from '../../components/subscribe/ContentPreview/ContentPreview.vue'
import SubscriberQuotes from '../../components/subscribe/SubscriberQuotes/SubscriberQuotes.vue'

import './Subscribe.scss'
</script>