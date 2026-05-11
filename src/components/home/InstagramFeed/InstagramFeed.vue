<template>
  <SectionWrapper
    size="lg"
    dark
  >
    <section class="instagram-feed">
      <div class="instagram-feed__heading">
        <div>
          <p class="eyebrow">
            Follow Along
          </p>

          <h2>
            @SmittyDiesel On Instagram
          </h2>
        </div>

        <a
          href="https://www.instagram.com/smittydiesel/"
          target="_blank"
          rel="noopener noreferrer"
          class="instagram-feed__link"
        >
          Follow On Instagram
        </a>
      </div>

      <div class="instagram-feed__grid">
        <a
          v-for="post in posts"
          :key="post.title"
          :href="post.link"
          target="_blank"
          rel="noopener noreferrer"
          class="instagram-tile"
        >
          <img
            :src="post.image"
            :alt="post.title"
          >

          <div class="instagram-tile__overlay">
            <span>
              View Post
            </span>
          </div>
        </a>
      </div>
    </section>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from '../../layout/SectionWrapper/SectionWrapper.vue'

import featuredDieselStrengthCard from '../../../assets/images/featured-diesel-strength-card.png'
import featuredAgelessAthleteCard from '../../../assets/images/featured-ageless-athlete-card.png'
import featuredCppsProfile from '../../../assets/images/featured-cpps-profile.png'
import featuredBecomingRoninCard from '../../../assets/images/featured-becoming-ronin-card.png'
import agelessFive from '../../../assets/images/programs/ageless-5.png'
import blackBook from '../../../assets/images/programs/black-book.png'

import './instagram-feed.scss'

const posts = [
  {
    title: 'Diesel Strength training post',
    image: featuredDieselStrengthCard,
    link: 'https://www.instagram.com/smittydiesel/',
  },
  {
    title: 'Ageless Athlete training post',
    image: featuredAgelessAthleteCard,
    link: 'https://www.instagram.com/smittydiesel/',
  },
  {
    title: 'CPPS coaching post',
    image: featuredCppsProfile,
    link: 'https://www.instagram.com/smittydiesel/',
  },
  {
    title: 'Becoming Ronin podcast post',
    image: featuredBecomingRoninCard,
    link: 'https://www.instagram.com/smittydiesel/',
  },
  {
    title: 'Ageless Athlete program post',
    image: agelessFive,
    link: 'https://www.instagram.com/smittydiesel/',
  },
  {
    title: 'Diesel Black Book program post',
    image: blackBook,
    link: 'https://www.instagram.com/smittydiesel/',
  },
]
</script>