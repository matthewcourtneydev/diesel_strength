<template>
  <SectionWrapper size="lg">
    <section class="contact-methods">
      <div class="contact-methods__heading fade-up">
        <p class="eyebrow">
          Contact Channels
        </p>

        <h2>
          Reach Out To The Right Team
        </h2>

        <p>
          Whether you have questions about programs, certifications, partnerships, or media, we’ll help direct you to the appropriate resources.
        </p>
      </div>

      <div class="contact-methods__grid">
        <article
          v-for="method in methods"
          :key="method.title"
          class="contact-method-card hover-lift"
        >
          <span class="contact-method-card__label">
            {{ method.label }}
          </span>

          <h3>
            {{ method.title }}
          </h3>

          <p>
            {{ method.description }}
          </p>

          <a
            :href="method.href"
            class="contact-method-card__link"
          >
            {{ method.action }}
          </a>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './contact-methods.scss'

const methods = [
  {
    label: 'General',
    title: 'General Questions',
    description: 'Questions about the Diesel ecosystem, resources, or where to get started.',
    action: 'hello@dieselstrength.com',
    href: 'mailto:hello@dieselstrength.com',
  },
  {
    label: 'Programs',
    title: 'Training Programs',
    description: 'Questions about program selection, training systems, or coaching resources.',
    action: 'programs@dieselstrength.com',
    href: 'mailto:programs@dieselstrength.com',
  },
  {
    label: 'CPPS',
    title: 'Certifications',
    description: 'Certification information, educational pathways, and coaching development.',
    action: 'certifications@dieselstrength.com',
    href: 'mailto:certifications@dieselstrength.com',
  },
  {
    label: 'Media',
    title: 'Podcast & Media',
    description: 'Media requests, podcast appearances, interviews, or collaborations.',
    action: 'media@dieselstrength.com',
    href: 'mailto:media@dieselstrength.com',
  },
]
</script>