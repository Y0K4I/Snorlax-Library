<template>
  <HeaderMain />
  <router-view></router-view>
</template>

<script setup lang="ts">
import HeaderMain from "@/components/Header/HeaderMain.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0 auto;
  padding: 0;

  font-family: "Poppins", sans-serif;
  background-color: var(--surface-100);
}

#app {
  height: 100%;
  .panel {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    color: var(--text-color);
    &__block {
      padding: 3%;
      width: 90%;
      background-color: var(--surface-0);
      border-radius: 7px;
    }
  }

  .scroll {
    background-color: var(--blue-400);
    &:hover {
      transition: 0.2s;
      background-color: var(--blue-300);
    }
  }
}
</style>
