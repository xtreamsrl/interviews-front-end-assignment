<script>
import { store, api } from "../store/index";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <a class="h2">RecipeBook</a>
      <form class="d-flex" role="search">
        <input
          v-model="store.searchedTerm"
          class="form-control me-2 rounded-pill"
          type="search"
          placeholder="Search for recipes"
          aria-label="Search"
        />
        <button class="btn btn-orange rounded-pill" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  height: 80px;
}
</style>
