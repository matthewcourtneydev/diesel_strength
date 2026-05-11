<template>
  <SectionWrapper size="lg" dark>
    <section class="brand-pillar-grid">
      <div class="brand-pillar-grid__heading fade-up">
        <p class="eyebrow">The Diesel Ecosystem</p>

        <h2>Strength. Longevity. Education. Mindset.</h2>
      </div>

      <div class="brand-pillar-grid__grid">
        <article
          v-for="pillar in brandPillars"
          :key="pillar.title"
          class="brand-pillar-card hover-lift"
          :class="`brand-pillar-card--${pillar.slug}`"
        >
          <img
            :src="pillar.image"
            :alt="pillar.title"
            class="brand-pillar-card__image"
          />

          <div class="brand-pillar-card__overlay"></div>

          <img
            v-if="pillar.logo"
            :src="pillar.logo"
            :alt="`${pillar.title} logo`"
            class="brand-pillar-card__logo"
          />

          <div class="brand-pillar-card__content">
            <h3>
              {{ pillar.title }}
            </h3>

            <p>
              {{ pillar.description }}
            </p>

            <router-link :to="pillar.link" class="brand-pillar-card__link">
              Explore
            </router-link>
          </div>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../../layout/SectionWrapper/SectionWrapper.vue";

import { brandPillars } from "../../../data/homeData";

import "./brand-pillar-grid.scss";
</script>
