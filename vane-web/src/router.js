import { createRouter, createWebHistory } from "vue-router";
import TheHome from "./pages/TheHome.vue";
import FAQ from "./components/FAQ.vue";
import AboutMe from "./components/AboutMe.vue";
import TerapyTypes from "./components/TerapyTypes.vue";
import TheContact from "./pages/TheContact.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },
    { path: "/faq", component: FAQ },
    { path: "/about", component: AboutMe },
    { path: "/info", component: TerapyTypes },
    { path: "/contact", component: TheContact },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});
