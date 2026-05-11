<template>
  <SectionWrapper size="lg">
    <section class="content-preview">
      <div class="content-preview__heading fade-up">
        <p class="eyebrow">
          Newsletter Preview
        </p>

        <h2>
          The Type Of Content You’ll Actually Want To Read
        </h2>

        <p>
          Practical training education, coaching insight, movement systems, and performance strategies delivered in a cleaner, more useful format.
        </p>
      </div>

      <div class="content-preview__grid">
        <article class="preview-card preview-card--featured hover-lift">
          <div class="preview-card__media">
            <div class="preview-card__image-placeholder"></div>
          </div>

          <div class="preview-card__content">
            <span class="preview-card__category">
              Weekly Dispatch
            </span>

            <h3>
              Why Most Lifters Plateau Long Before Their Potential
            </h3>

            <p>
              Movement quality, recovery systems, and training structure matter far more than most people realize.
            </p>

            <div class="preview-card__meta">
              <span>Training Systems</span>
              <span>6 Min Read</span>
            </div>
          </div>
        </article>

        <article class="preview-card hover-lift">
          <div class="preview-card__media">
            <div class="preview-card__image-placeholder"></div>
          </div>

          <div class="preview-card__content">
            <span class="preview-card__category">
              Podcast Notes
            </span>

            <h3>
              Recovery Is A Performance Skill
            </h3>

            <p>
              Better recovery decisions lead to better long-term strength and resilience.
            </p>
          </div>
        </article>

        <article class="preview-card hover-lift">
          <div class="preview-card__media">
            <div class="preview-card__image-placeholder"></div>
          </div>

          <div class="preview-card__content">
            <span class="preview-card__category">
              Coaching Insight
            </span>

            <h3>
              Smarter Warm-Ups For Better Sessions
            </h3>

            <p>
              How preparation systems influence movement quality and training output.
            </p>
          </div>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './content-preview.scss'
</script>