import { createRouter, createWebHistory } from "vue-router";
import TheHome from "./pages/TheHome.vue";
import FAQ from "./components/FAQ.vue";
import AboutMe from "./components/AboutMe.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },
    { path: "/faq", component: FAQ },
    { path: "/about", component: AboutMe },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});
