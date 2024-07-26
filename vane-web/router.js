import { createRouter, createWebHistory } from "vue-router";
import TheHome from "./src/pages/TheHome.vue";

export const router = createRouter({
  history: createWebHistory,
  routes: [{ path: "/", component: TheHome }],
});
