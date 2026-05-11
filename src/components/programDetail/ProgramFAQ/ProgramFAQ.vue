<template>
  <SectionWrapper size="lg">
    <section class="program-faq">
      <div class="program-faq__heading fade-up">
        <p class="eyebrow">
          Frequently Asked Questions
        </p>

        <h2>
          Common Questions About The System
        </h2>

        <p>
          Everything you need to know before starting the program.
        </p>
      </div>

      <div class="program-faq__list">
        <article
          v-for="item in faqItems"
          :key="item.question"
          class="faq-item"
          :class="{ 'faq-item--active': activeQuestion === item.question }"
        >
          <button
            type="button"
            class="faq-item__question"
            @click="toggleQuestion(item.question)"
          >
            <span>
              {{ item.question }}
            </span>

            <span class="faq-item__icon">
              {{ activeQuestion === item.question ? '−' : '+' }}
            </span>
          </button>

          <transition name="faq-expand">
            <div
              v-if="activeQuestion === item.question"
              class="faq-item__answer"
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

import './program-faq.scss'

const faqItems = [
  {
    question: 'Who is this program designed for?',
    answer: 'This system is designed for lifters, athletes, and coaches who want to build strength while improving movement quality and long-term durability.',
  },
  {
    question: 'Can beginners follow this program?',
    answer: 'Yes. The system includes scalable progressions and exercise substitutions for different experience levels.',
  },
  {
    question: 'What equipment do I need?',
    answer: 'Most of the training can be performed with standard gym equipment, with substitutions included when possible.',
  },
  {
    question: 'Is this delivered digitally?',
    answer: 'Yes. You receive immediate digital access after purchase.',
  },
  {
    question: 'How long does the program last?',
    answer: 'The base structure is built around a 12-week progression model with repeatable training phases.',
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