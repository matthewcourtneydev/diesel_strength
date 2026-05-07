import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Programs from '../pages/Programs/Programs.vue'
import ProgramDetail from '../pages/ProgramDetail/ProgramDetail.vue'
import Certifications from '../pages/Certifications/Certifications.vue'
import Articles from '../pages/Articles/Articles.vue'
import About from '../pages/About/About.vue'
import Podcast from '../pages/Podcast/Podcast.vue'
import Shop from '../pages/Shop/Shop.vue'
import Subscribe from '../pages/Subscribe/Subscribe.vue'
import Contact from '../pages/Contact/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/programs', component: Programs },
  { path: '/programs/:slug', component: ProgramDetail },
  { path: '/certifications', component: Certifications },
  { path: '/articles', component: Articles },
  { path: '/about', component: About },
  { path: '/podcast', component: Podcast },
  { path: '/shop', component: Shop },
  { path: '/subscribe', component: Subscribe },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router