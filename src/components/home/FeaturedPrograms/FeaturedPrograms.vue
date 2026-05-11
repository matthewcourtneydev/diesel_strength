<template>
<SectionWrapper size="lg">
    <section class="featured-programs">
      <div class="featured-programs__heading fade-up">
        <p class="eyebrow">
          Featured Programs
        </p>

        <div class="featured-programs__heading-row">
          <div>
            <h2>
              Training Systems Built For Real-World Results
            </h2>

            <p>
              Strength, longevity, conditioning, and performance systems developed through decades of coaching experience.
            </p>
          </div>

          <router-link
            to="/programs"
            class="featured-programs__view-all"
          >
            View All Programs
          </router-link>
        </div>
      </div>

      <div class="featured-programs__grid">
        <article
          v-for="program in featuredPrograms"
          :key="program.title"
          class="program-card hover-lift"
        >
          <div class="program-card__image">
            <img
              :src="program.image"
              :alt="program.title"
            >
          </div>

          <div class="program-card__overlay"></div>

          <div class="program-card__content">
            <span class="program-card__category">
              {{ program.category }}
            </span>

            <h3>
              {{ program.title }}
            </h3>

            <p>
              {{ program.description }}
            </p>

            <router-link
              :to="program.link"
              class="program-card__link"
            >
              View Program
            </router-link>
          </div>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import { featuredPrograms } from '../../../data/homeData'

import './featured-programs.scss'
</script>