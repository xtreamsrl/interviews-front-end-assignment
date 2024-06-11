<script>
import axios from "axios";
import { store, api } from "../store/index";
import RecipeList from "./RecipeList.vue";
import RecipeFilter from "./RecipeFilter.vue";

export default {
  data() {
    return {
      recipes: [],
      comments: [],
      cuisines: [],
      difficulties: [],
      diets: [],
      filtersActive: false,
    };
  },

  components: {
    RecipeList,
    RecipeFilter,
  },

  methods: {
    fetchRecipes() {
      axios.get(api.recipes).then((response) => {
        console.log(response);
        this.recipes = response.data;
      });
    },

    fetchComments() {
      axios.get(api.comments).then((response) => {
        console.log(response);
        this.comments = response.data;
      });
    },
    fetchCuisines() {
      axios.get(api.cuisines).then((response) => {
        console.log(response);
        this.cuisines = response.data;
      });
    },
    fetchDifficulties() {
      axios.get(api.difficulties).then((response) => {
        console.log(response);
        this.difficulties = response.data;
      });
    },
    fetchDiets() {
      axios.get(api.diets).then((response) => {
        console.log(response);
        this.diets = response.data;
      });
    },

    handleFilterClick() {
      this.filtersActive = !this.filtersActive;
    },
  },

  created() {
    this.fetchRecipes();
    this.fetchComments();
    this.fetchCuisines();
    this.fetchDifficulties();
    this.fetchDiets();
  },
};
</script>

<template>
  <div class="container py-3">
    <div class="row justify-content-center g-3">
      <div :class="filtersActive ? 'col-8' : 'col-12'">
        <RecipeList
          :recipes="recipes"
          :comments="comments"
          :cuisines="cuisines"
          :diets="diets"
          :difficulties="difficulties"
          :filtersActive="filtersActive"
          @openFilterCard="handleFilterClick()"
        />
      </div>
      <div :class="filtersActive ? 'col-4' : ''">
        <RecipeFilter
          :recipes="recipes"
          :comments="comments"
          :cuisines="cuisines"
          :diets="diets"
          :difficulties="difficulties"
          v-if="filtersActive"
          @closeFilterCard="handleFilterClick()"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
