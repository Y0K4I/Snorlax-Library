<template>
  <HeaderMain></HeaderMain>
  <nav><router-link to="/">Home</router-link> |</nav>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import HeaderMain from "./components/Header/HeaderMain.vue";

@Options({
  components: {
    HeaderMain,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600;700&display=swap");

body {
  margin: 0 auto;
  padding: 0;

  font-family: var(--font-family);
}
</style>
