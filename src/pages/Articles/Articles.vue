<template>
  <div class="page-shell articles-page">
    <SiteHeader />

    <main>
      <PageHero
        eyebrow="Diesel Journal"
        title="Strength, Performance & Coaching Articles"
        description="Training systems, performance education, coaching insight, and practical strategies from the Diesel Strength ecosystem."
      >
        <template #actions>
          <router-link
            to="/programs"
            class="btn btn--primary"
          >
            Explore Programs
          </router-link>

          <router-link
            to="/subscribe"
            class="btn btn--secondary"
          >
            Join Newsletter
          </router-link>
        </template>
      </PageHero>

      <FeaturedArticle />

      <ArticleCategories
        :active-category="activeCategory"
        @change="activeCategory = $event"
      />

      <ArticleGrid :active-category="activeCategory" />

      <PopularTopics />

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

import FeaturedArticle from '../../components/articles/FeaturedArticle/FeaturedArticle.vue'
import ArticleCategories from '../../components/articles/ArticleCategories/ArticleCategories.vue'
import ArticleGrid from '../../components/articles/ArticleGrid/ArticleGrid.vue'
import PopularTopics from '../../components/articles/PopularTopics/PopularTopics.vue'

import './Articles.scss'

const activeCategory = ref('All Articles')
</script>