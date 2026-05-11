<template>
  <div class="page-shell program-detail-page">
    <SiteHeader />

    <main v-if="program">
      <ProgramHero :program="program" />

      <ProgramOverview :program="program" />

      <ProgramBenefits :program="program" />

      <ProgramIncludes :program="program" />

      <ProgramPreview :program="program" />

      <ProgramFAQ :program="program" />

      <RelatedPrograms :current-slug="program.slug" :programs="programs" />

      <NewsletterCTA />
    </main>

    <main v-else class="program-detail-page__not-found">
      <PageHero
        eyebrow="Program Not Found"
        title="Training System Unavailable"
        description="The program you are looking for could not be found."
        compact
      >
        <template #actions>
          <router-link to="/programs" class="btn btn--primary">
            View Programs
          </router-link>
        </template>
      </PageHero>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import SiteHeader from "../../components/layout/SiteHeader/SiteHeader.vue";
import SiteFooter from "../../components/layout/SiteFooter/SiteFooter.vue";
import PageHero from "../../components/layout/PageHero/PageHero.vue";

import NewsletterCTA from "../../components/home/NewsletterCTA/NewsletterCTA.vue";

import ProgramOverview from "../../components/programDetail/ProgramOverview/ProgramOverview.vue";
import ProgramBenefits from "../../components/programDetail/ProgramBenefits/ProgramBenefits.vue";
import ProgramIncludes from "../../components/programDetail/ProgramIncludes/ProgramIncludes.vue";
import ProgramPreview from "../../components/programDetail/ProgramPreview/ProgramPreview.vue";
import ProgramFAQ from "../../components/programDetail/ProgramFAQ/ProgramFAQ.vue";
import RelatedPrograms from "../../components/programDetail/RelatedPrograms/RelatedPrograms.vue";
import ProgramHero from "../../components/programDetail/ProgramHero/ProgramHero.vue";

import { programs } from "../../data/programData";

import "./program-detail.scss";

const route = useRoute();

const program = computed(() =>
  programs.find((item) => item.slug === route.params.slug)
);
</script>
