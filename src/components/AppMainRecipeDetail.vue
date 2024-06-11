<script>
import axios from "axios";
import { store, api } from "../store/index";
export default {
  data() {
    return {};
  },

  props: {
    recipe: {
      type: Object,
      required: true,
    },
    comments: {
      type: Object,
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

    procedureArray() {
      const procedure = this.recipe.instructions;
      return procedure ? procedure.split(". ") : [];
    },
  },

  methods: {
    addComment() {
      axios.post(api.comments).then(() => {});
    },
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ recipe.name }}</h1>
    <div class="recipe-img-wrapper recipe">
      <img :src="recipeImage" alt="" />
    </div>
    <div class="row mt-5">
      <div class="col-6 h-100">
        <div class="card">
          <h5 class="">Ingredients</h5>
          <ul>
            <li v-for="ingredient in recipe.ingredients">{{ ingredient }}</li>
          </ul>
        </div>

        <div class="card my-3">
          <h5>Procedure</h5>
          <ul>
            <li v-for="step in procedureArray">{{ step }}</li>
          </ul>
        </div>
      </div>
      <div class="col-6 h-100">
        <div class="card">
          <h5 class="card-title">Cuisine</h5>
          <ul>
            <li v-for="cuisine in cuisines">{{ cuisine.name }}</li>
          </ul>
        </div>
        <div class="card my-3">
          <h5 class="card-title">Difficulty</h5>
          <ul>
            <li v-for="difficulty in difficulties">{{ difficulty.name }}</li>
          </ul>
        </div>
        <div class="card">
          <h5 class="card-title">Diets</h5>
          <ul>
            <li v-for="diet in diets">{{ diet.name }}</li>
          </ul>
        </div>
      </div>
      <div class="card my-3">
        <h5>User Review</h5>
        <ul class="review-list">
          <li
            v-for="comment in comments"
            class="d-flex align-items-center gap-3"
          >
            <span class="img-wrapper">
              <img src="https://picsum.photos/200" alt="" />
            </span>
            <span>
              <h5 class="mb-0 text-start">Name Surname</h5>
              <p>
                <i
                  class="fa-solid fa-star fa-sm"
                  v-for="star in comment.rating"
                ></i>
              </p>
              <p>{{ comment.comment }}</p>
            </span>
          </li>
        </ul>
        <div
          class="form-group d-flex flex-column justyfy-content-center align-items-end"
        >
          <input
            type="text"
            class="form-control rounded-pill"
            placeholder="Leave your review here"
          />

          <button type="button" class="btn btn-orange mt-3 rounded-pill">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.recipe-img-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  img {
    width: 100%;
    height: 500px;
    border-radius: 2rem;
    object-fit: cover;
    object-position: center;
  }
}
ul {
  list-style-type: none;
  padding-left: 0;
}

.col-6 {
  height: 100%;
  .card {
    height: 100%;
  }
}

.card {
  border-radius: 2rem;
  padding-block: 1rem;
  padding-inline: 1rem;
  -webkit-box-shadow: -2px 10px 24px -3px rgba(0, 0, 0, 0.1);
  box-shadow: -2px 10px 24px -3px rgba(0, 0, 0, 0.1);
  border: none;
}
.review-list {
  list-style-type: none;
  padding-left: 0;
  li {
    margin-block: 1rem;

    .img-wrapper {
      height: 75px;
      border-radius: 50%;
      img {
        border-radius: 50%;
        height: 100%;
      }
    }
  }
}

h5 {
  text-align: center;
}
p {
  margin-bottom: 0rem;
}
</style>
