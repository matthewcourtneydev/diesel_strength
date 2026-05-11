<template>
  <div class="page-shell search-page">
    <SiteHeader />

    <main>
      <SearchHero />

      <SearchSuggestions />

      <SearchResults />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from '../../components/layout/SiteHeader/SiteHeader.vue'
import SiteFooter from '../../components/layout/SiteFooter/SiteFooter.vue'

import SearchHero from '../../components/search/SearchHero/SearchHero.vue'
import SearchSuggestions from '../../components/search/SearchSuggestions/SearchSuggestions.vue'
import SearchResults from '../../components/search/SearchResults/SearchResults.vue'

import './search.scss'
</script>