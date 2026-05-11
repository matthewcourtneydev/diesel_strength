<template>
  <SectionWrapper size="xl">
    <section class="certification-spotlight">
      <div class="certification-spotlight__layout">
        <div class="certification-spotlight__visual fade-up">
          <div class="certification-spotlight__image">
            <img
              src="../../../assets/images/cpps-brand-pillar-card.png"
              alt="CPPS coaching education"
            >

            <div class="certification-spotlight__overlay"></div>

            <div class="certification-spotlight__badge">
              <img
                src="../../../assets/images/cpps-transparent-logo.png"
                alt="CPPS"
              >
            </div>
          </div>
        </div>

        <div class="certification-spotlight__content fade-up">
          <p class="eyebrow">
            Coaching Education
          </p>

          <h2>
            Certified Physical Preparation Specialist
          </h2>

          <p class="certification-spotlight__description">
            Practical, performance-driven coaching education built to help coaches develop stronger, more resilient athletes in real-world training environments.
          </p>

          <div class="certification-spotlight__stats">
            <div class="certification-stat">
              <strong>Global</strong>
              <span>Coaching Community</span>
            </div>

            <div class="certification-stat">
              <strong>Elite</strong>
              <span>Performance Education</span>
            </div>

            <div class="certification-stat">
              <strong>Real-World</strong>
              <span>Training Systems</span>
            </div>
          </div>

          <div class="certification-spotlight__actions">
            <router-link
              to="/certifications"
              class="btn btn--primary"
            >
              Explore CPPS
            </router-link>

            <router-link
              to="/contact"
              class="btn btn--secondary"
            >
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './certification-spotlight.scss'
</script>