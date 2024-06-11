<script>
import axios from "axios";
import { store, api } from "../store/index";
import RecipeCard from "./RecipeCard.vue";

export default {
  data() {
    return {
      recipes: [],
      comments: [],
      cuisines: [],
      difficulties: [],
      diets: [],
    };
  },

  components: {
    RecipeCard,
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
  <div class="container">
    <div class="row g-3">
      <div class="col-12" v-for="recipe of recipes">
        <RecipeCard
          :recipe="recipe"
          :comments="comments"
          :cuisines="cuisines"
          :diets="diets"
          :difficulties="difficulties"
          :key="recipe.id"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
