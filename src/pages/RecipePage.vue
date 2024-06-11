<script>
import AppHeader from "../components/AppHeader.vue";
import AppMainRecipePage from "../components/AppMainRecipePage.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppHeader,
    AppMainRecipePage,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />
  <AppMainRecipePage />
  <AppFooter />
</template>

<style lang="scss"></style>
