import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";

import RecipePage from "./pages/RecipePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },

    {
      path: "/recipes",
      name: "recipes",
      component: RecipePage,
    },
  ],
});

export { router };
