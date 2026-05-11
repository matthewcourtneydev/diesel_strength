<template>
  <SectionWrapper size="lg">
    <section class="featured-article">
      <div class="featured-article__media fade-up">
        <div class="featured-article__image-placeholder"></div>
      </div>

      <div class="featured-article__content fade-up">
        <span class="featured-article__category">
          Featured Article
        </span>

        <h2>
          Why Most Lifters Break Down Before They Reach Their Potential
        </h2>

        <p class="featured-article__description">
          Strength isn’t just about intensity. Long-term performance requires movement quality,
          intelligent progression, recovery strategy, and sustainable training systems.
        </p>

        <div class="featured-article__meta">
          <span>Performance</span>
          <span>12 Min Read</span>
          <span>Diesel Journal</span>
        </div>

        <router-link
          to="/articles/longevity-strength"
          class="featured-article__link"
        >
          Read Article
        </router-link>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './featured-article.scss'
</script>