<template>
  <div class="page-shell">
    <SiteHeader />

    <main>
      <HeroSection />

      <BrandPillarGrid />

      <TrustedBy />

      <FeaturedPrograms />

      <ContentHub />

      <CertificationSpotlight />

      <PodcastSpotlight />

      <NewsletterCTA />

      <InstagramFeed />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from "../../components/layout/SiteHeader/SiteHeader.vue";
import SiteFooter from "../../components/layout/SiteFooter/SiteFooter.vue";

import HeroSection from "../../components/home/HeroSection/HeroSection.vue";
import BrandPillarGrid from "../../components/home/BrandPillarGrid/BrandPillarGrid.vue";
import FeaturedPrograms from "../../components/home/FeaturedPrograms/FeaturedPrograms.vue";
import ContentHub from "../../components/home/ContentHub/ContentHub.vue";
import CertificationSpotlight from "../../components/home/CertificationSpotlight/CertificationSpotlight.vue";
import PodcastSpotlight from "../../components/home/PodcastSpotlight/PodcastSpotlight.vue";
import NewsletterCTA from "../../components/home/NewsletterCTA/NewsletterCTA.vue";
import TrustedBy from "../../components/home/TrustedBy/TrustedBy.vue";
import InstagramFeed from "../../components/home/InstagramFeed/InstagramFeed.vue";

import "./Home.scss";
</script>

