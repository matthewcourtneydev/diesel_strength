<template>
  <SectionWrapper size="lg">
    <section class="contact-faq">
      <div class="contact-faq__heading fade-up">
        <p class="eyebrow">
          Contact FAQ
        </p>

        <h2>
          Before You Reach Out
        </h2>

        <p>
          A few quick answers about response times, programs, certifications, and media inquiries.
        </p>
      </div>

      <div class="contact-faq__list">
        <article
          v-for="item in faqItems"
          :key="item.question"
          class="contact-faq-item"
          :class="{ 'contact-faq-item--active': activeQuestion === item.question }"
        >
          <button
            type="button"
            class="contact-faq-item__question"
            @click="toggleQuestion(item.question)"
          >
            <span>{{ item.question }}</span>

            <span class="contact-faq-item__icon">
              {{ activeQuestion === item.question ? '−' : '+' }}
            </span>
          </button>

          <transition name="contact-faq-expand">
            <div
              v-if="activeQuestion === item.question"
              class="contact-faq-item__answer"
            >
              <p>{{ item.answer }}</p>
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

import './contact-faq.scss'

const faqItems = [
  {
    question: 'How quickly should I expect a response?',
    answer: 'Most messages receive a response within 1–2 business days depending on the request type and current schedule.',
  },
  {
    question: 'Can you help me choose the right program?',
    answer: 'Yes. Send a short note about your goals, training history, and current limitations, and we can point you toward the best starting point.',
  },
  {
    question: 'Where should certification questions go?',
    answer: 'Use the Certifications inquiry option in the form or email the certifications contact listed above.',
  },
  {
    question: 'Do you accept podcast or media requests?',
    answer: 'Yes. Use the Podcast & Media inquiry option and include relevant details about the opportunity, timeline, and platform.',
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