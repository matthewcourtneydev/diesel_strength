<template>
  <div class="page-shell contact-page">
    <SiteHeader />

    <main>
      <PageHero
        eyebrow="Contact"
        title="Get In Touch With The Diesel Team"
        description="Questions about programs, certifications, coaching, partnerships, or educational resources? Reach out and we’ll point you in the right direction."
      >
        <template #actions>
          <router-link
            to="/programs"
            class="btn btn--primary"
          >
            Explore Programs
          </router-link>

          <router-link
            to="/certifications"
            class="btn btn--secondary"
          >
            View Certifications
          </router-link>
        </template>
      </PageHero>

      <ContactMethods />

      <ContactForm />

      <ContactFAQ />

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

import ContactMethods from '../../components/contact/ContactMethods/ContactMethods.vue'
import ContactForm from '../../components/contact/ContactForm/ContactForm.vue'
import ContactFAQ from '../../components/contact/ContactFAQ/ContactFAQ.vue'

import './contact.scss'
</script>