<template>
  <div class="page-shell certifications-page">
    <SiteHeader />

    <main>
      <PageHero
        eyebrow="Certified Physical Preparation Specialist"
        title="Elite Strength & Conditioning Education For Coaches"
        description="Practical, field-tested coaching education for trainers, performance professionals, and coaches who want real-world systems."
      >
        <template #actions>
          <router-link
            to="/contact"
            class="btn btn--primary"
          >
            Become Certified
          </router-link>

          <router-link
            to="/certifications#curriculum"
            class="btn btn--secondary"
          >
            Explore Curriculum
          </router-link>
        </template>
      </PageHero>

      <CertificationOverview />

      <CertificationPaths />

      <CurriculumOverview />

      <SeminarExperience />

      <FounderSpotlight />

      <CertificationFAQ />

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

import CertificationOverview from '../../components/certifications/CertificationOverview/CertificationOverview.vue'
import CertificationPaths from '../../components/certifications/CertificationPaths/CertificationPaths.vue'
import CurriculumOverview from '../../components/certifications/CurriculumOverview/CurriculumOverview.vue'
import SeminarExperience from '../../components/certifications/SeminarExperience/SeminarExperience.vue'
import FounderSpotlight from '../../components/certifications/FounderSpotlight/FounderSpotlight.vue'
import CertificationFAQ from '../../components/certifications/CertificationFAQ/CertificationFAQ.vue'

import './certifications.scss'
</script>