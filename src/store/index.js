import { reactive } from "vue";

export const api = {
  recipes: "http://localhost:8080/recipes",
  comments: "http://localhost:8080/comments",
  cuisines: "http://localhost:8080/cuisines",
  diets: "http://localhost:8080/diets",
  difficulties: "http://localhost:8080/difficulties",
  ingredients: "http://localhost:8080/ingredients",
};

export const store = reactive({
  searchedTerm: "",
});
