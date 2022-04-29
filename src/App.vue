<template>
  <HeaderMain />
  <router-view></router-view>
</template>

<script setup lang="ts">
import HeaderMain from "@/components/Header/HeaderMain.vue";
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

.panel {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  color: var(--text-color);
  &__block {
    padding: 3%;
    width: 80%;
    background-color: var(--surface-0);
    border-radius: 7px;
  }
}
</style>
