<template>
  <div class="page-shell programs-page">

    <SiteHeader />

    <main>
      <ProgramsHero />

      <FeaturedProgram />

      <section class="programs-page__filters">
        <div class="container">
          <FilterTabs
            :items="categories"
            :active-item="activeCategory"
            @change="activeCategory = $event"
          />
        </div>
      </section>

      <ProgramGrid :active-category="activeCategory" />

      <GoalSolutions />

      <FreeResources />

      <ProgramGuideCTA />

      <NewsletterCTA />
    </main>

    <SiteFooter />

  </div>
</template>

<script setup>
import { ref } from 'vue'

import SiteHeader from '../../components/layout/SiteHeader/SiteHeader.vue'
import SiteFooter from '../../components/layout/SiteFooter/SiteFooter.vue'
import NewsletterCTA from '../../components/home/NewsletterCTA/NewsletterCTA.vue'

import FilterTabs from '../../components/ui/FilterTabs/FilterTabs.vue'

import ProgramsHero from '../../components/programs/ProgramsHero/ProgramsHero.vue'
import FeaturedProgram from '../../components/programs/FeaturedProgram/FeaturedProgram.vue'
import ProgramGrid from '../../components/programs/ProgramGrid/ProgramGrid.vue'
import GoalSolutions from '../../components/programs/GoalSolutions/GoalSolutions.vue'
import FreeResources from '../../components/programs/FreeResources/FreeResources.vue'
import ProgramGuideCTA from '../../components/programs/ProgramGuideCTA/ProgramGuideCTA.vue'

import './Programs.scss'

const activeCategory = ref('All')

const categories = [
  'All',
  'Strength',
  'Mobility',
  'Longevity',
  'Conditioning',
  'Grip',
  'Athlete Performance',
  'Free Workouts',
]
</script>