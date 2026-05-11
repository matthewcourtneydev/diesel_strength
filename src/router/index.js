import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home/Home.vue";
import Programs from "../pages/Programs/Programs.vue";
import ProgramDetail from "../pages/ProgramDetail/ProgramDetail.vue";
import Certifications from "../pages/Certifications/Certifications.vue";
import Articles from "../pages/Articles/Articles.vue";
import About from "../pages/About/About.vue";
import Podcast from "../pages/Podcast/Podcast.vue";
import Shop from "../pages/Shop/Shop.vue";
import Subscribe from "../pages/Subscribe/Subscribe.vue";
import Contact from "../pages/Contact/Contact.vue";
import Search from "../pages/Search/Search.vue";
import AgelessAthletePage from "../pages/ageless-athlete/AgelessAthletePage.vue";
import CppsPage from "../pages/cpps/CppsPage.vue";
import PrivacyPage from "../pages/privacy/PrivacyPage.vue";
import TermsPage from "../pages/terms/TermsPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/programs", component: Programs },
  { path: "/programs/:slug", component: ProgramDetail },
  { path: "/certifications", component: Certifications },
  { path: "/articles", component: Articles },
  { path: "/about", component: About },
  { path: "/podcast", component: Podcast },
  { path: "/shop", component: Shop },
  { path: "/subscribe", component: Subscribe },
  { path: "/contact", component: Contact },
  { path: "/search", component: Search },
  {
    path: "/ageless-athlete",
    component: AgelessAthletePage,
  },
  {
    path: "/cpps",
    component: CppsPage,
  },
  {
    path: "/privacy",
    component: PrivacyPage,
  },
  {
    path: "/terms",
    component: TermsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 96,
        behavior: "smooth",
      };
    }

    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
