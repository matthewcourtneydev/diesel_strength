<template>
  <SectionWrapper
    size="lg"
    dark
  >
    <section class="certification-faq">
      <div class="certification-faq__heading fade-up">
        <p class="eyebrow">
          Certification FAQ
        </p>

        <h2>
          Common Questions About Getting Certified
        </h2>

        <p>
          A quick overview of what coaches can expect from the certification process.
        </p>
      </div>

      <div class="certification-faq__list">
        <article
          v-for="item in faqItems"
          :key="item.question"
          class="cert-faq-item"
          :class="{ 'cert-faq-item--active': activeQuestion === item.question }"
        >
          <button
            type="button"
            class="cert-faq-item__question"
            @click="toggleQuestion(item.question)"
          >
            <span>
              {{ item.question }}
            </span>

            <span class="cert-faq-item__icon">
              {{ activeQuestion === item.question ? '−' : '+' }}
            </span>
          </button>

          <transition name="cert-faq-expand">
            <div
              v-if="activeQuestion === item.question"
              class="cert-faq-item__answer"
            >
              <p>
                {{ item.answer }}
              </p>
            </div>
          </transition>
        </article>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import { ref } from 'vue'

import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import './certification-faq.scss'

const faqItems = [
  {
    question: 'Who is this certification for?',
    answer: 'This certification is designed for coaches, trainers, gym owners, performance professionals, and anyone who wants practical systems for strength and conditioning.',
  },
  {
    question: 'Is this certification hands-on?',
    answer: 'Yes. The certification experience is built around practical coaching, movement preparation, strength systems, and real-world application.',
  },
  {
    question: 'Do I need prior coaching experience?',
    answer: 'Prior experience helps, but the systems are structured so motivated coaches and trainers can apply the material at different levels.',
  },
  {
    question: 'Can facilities host a seminar?',
    answer: 'Yes. Facilities, teams, and organizations can inquire about hosting private or public seminar experiences.',
  },
  {
    question: 'How do I get started?',
    answer: 'The easiest next step is to reach out through the contact page or join the newsletter for certification updates and announcements.',
  },
]

const activeQuestion = ref(faqItems[0].question)

function toggleQuestion(question) {
  activeQuestion.value =
    activeQuestion.value === question
      ? ''
      : question
}
</script>