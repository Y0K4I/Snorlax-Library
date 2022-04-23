<template>
  <HeaderMain />
  <router-view></router-view>
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
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0 auto;
  padding: 0;

  font-family: var(--font-family);
  background-color: var(--surface-400);
}

#app {
  height: 100%;
}
</style>
