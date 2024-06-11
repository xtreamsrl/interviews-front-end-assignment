<script>
import axios from "axios";
import { store, api } from "../store/index";
import RecipeCard from "./RecipeCard.vue";

export default {
  data() {
    return {};
  },

  components: {
    RecipeCard,
  },

  props: {
    recipes: {
      type: Array,
      required: true,
    },
    comments: {
      type: Array,
      required: true,
    },
    cuisines: {
      type: Array,
      required: true,
    },
    diets: {
      type: Array,
      required: true,
    },
    difficulties: {
      type: Array,
      required: true,
    },
    filtersActive: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["openFilterCard"],
  methods: {
    openFilterCard() {
      this.$emit("openFilterCard");
    },
  },

  created() {},
};
</script>

<template>
  <div class="top-list d-flex align-items-end mb-3">
    <div class="title-container">
      <p>Result for</p>
      <h2>Recipes found for your search criteria</h2>
    </div>
    <div
      class="btn btn-orange rounded-pill ms-auto"
      v-if="!filtersActive"
      @click="openFilterCard()"
    >
      Filter
    </div>
  </div>
  <RecipeCard
    v-for="recipe of recipes"
    :recipe="recipe"
    :comments="comments"
    :cuisines="cuisines"
    :diets="diets"
    :difficulties="difficulties"
    :key="recipe.id"
  />
</template>

<style scoped></style>
