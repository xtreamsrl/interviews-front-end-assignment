<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <img src="../assets/Recipe book.gif" alt="" />
      </div>
      <div class="col text-center">
        <h1>RecipeBook</h1>
        <p>Discover Recipes</p>
        <router-link
          :to="{ name: 'recipes.index' }"
          class="btn btn-orange rounded-pill"
          >Explore</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  .row {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.col {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
