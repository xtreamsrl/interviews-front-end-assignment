import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";

import RecipePage from "./pages/RecipePage.vue";
import RecipeDetailPage from "./pages/RecipeDetailPage.vue";

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
      name: "recipes.index",
      component: RecipePage,
    },
    {
      path: "/recipes/:id",
      name: "recipes.show",
      component: RecipeDetailPage,
    },
  ],
});

export { router };
