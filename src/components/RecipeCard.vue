<script>
import { store } from "../store/index";
export default {
  data() {
    return {
      store,
    };
  },
  props: {
    recipe: {
      type: Object,
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
  },

  computed: {
    recipeImage() {
      return "../../assets/" + this.recipe.image;
    },

    cuisineName() {
      const cuisine = this.cuisines.find((c) => c.id === this.recipe.cuisineId);
      return cuisine ? "#" + cuisine.name : "Unknown";
    },
    dietName() {
      const diet = this.diets.find((d) => d.id === this.recipe.dietId);
      return diet ? diet.name : "Unknown";
    },
    difficultyName() {
      const difficulty = this.difficulties.find(
        (d) => d.id === this.recipe.difficultyId
      );
      return difficulty ? difficulty.name : "Unknown";
    },

    filteredComments() {
      return this.comments.filter(
        (comment) => comment.recipeId === this.recipe.id
      );
    },
    averageRating() {
      const ratings = this.filteredComments.map((comment) => comment.rating);
      if (ratings.length === 0) return 0;
      const sum = ratings.reduce((a, b) => a + b, 0);
      return (sum / ratings.length).toFixed(1);
    },
  },
  methods: {},
};
</script>

<template>
  <div class="card">
    <div class="row g-2 d-flex">
      <div class="col">
        <div class="img-wrapper">
          <img class="card-img-top" :src="recipeImage" :alt="recipe.name" />
        </div>
      </div>
      <div class="col">
        <div class="detail-wrapper">
          <h3 class="h5">{{ recipe.name }}</h3>
          <p>{{ dietName }}</p>
          <p>
            Only <strong>{{ recipe.ingredients.length }}</strong> Ingredients
          </p>
          <span class="badge rounded-pill">
            {{ cuisineName }}
          </span>
        </div>
      </div>
      <div class="col ms-auto">
        <div class="control-wrapper">
          <span><strong>Difficulty: </strong>{{ difficultyName }}</span>
          <div class="rating-container mt-2">
            <span class="rating me-2" v-if="averageRating >= 4.5"
              >Highly rated</span
            >
            <span
              class="badge rounded-pill"
              :style="{
                backgroundColor: averageRating >= 4.5 && 'orangered',
                color: averageRating >= 4.5 && 'white',
                borderColor: averageRating >= 4.5 && 'white',
              }"
            >
              {{ averageRating }}
            </span>
          </div>
          <router-link
            :to="{ name: 'recipes.show', params: { id: recipe.id } }"
            class="btn btn-orange rounded-pill mt-auto"
            >View Details</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  border-radius: 2rem;
  height: auto;
  -webkit-box-shadow: -2px 10px 24px -3px rgba(0, 0, 0, 0.1);
  box-shadow: -2px 10px 24px -3px rgba(0, 0, 0, 0.1);
  border: none;
  margin-bottom: 1rem;
  .row {
    height: auto;
    .col {
      height: auto;
    }
    p,
    .rating {
      font-size: 1rem;
      margin: 0;
      color: rgb(175, 175, 175);
    }
    .rating-container {
      display: flex;
      align-items: flex-start;
    }
    .img-wrapper {
      width: 100%;
      aspect-ratio: 1/1;
      overflow: hidden;
      border-radius: 1rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    .detail-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .recipe-title {
        font: 2.5rem;
      }
    }
    .badge {
      border: 1px solid rgb(25, 25, 25);
      color: rgb(25, 25, 25);
      margin-top: auto;
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
    }

    .btn-orange {
      padding-inline: 1rem;
    }

    .control-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      button {
        width: 100%;
      }
    }
  }
}
</style>
