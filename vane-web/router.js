import { createRouter, createWebHistory } from "vue-router";
import TheHome from "./src/pages/TheHome.vue";
import FAQ from "./src/components/FAQ.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },
    { path: "/faq", component: FAQ },
  ],
});
