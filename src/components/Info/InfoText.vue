<template>
  <h2>About project</h2>
  <h3>Global</h3>
  <p>
    This is a training project for studying
    <a class="vue-3" href="https://vuejs.org/">Vue 3</a>. It`s based on free api
    about pokemons - <a href="https://pokeapi.co">pokeapi.co</a>.
  </p>
  <h3>Technologies used</h3>
  <p>
    Main technology -
    <a class="vue-3" href="https://vuejs.org/">Vue 3</a> with using composition
    api and <a class="ts" href="https://www.typescriptlang.org/">TS</a>.
  </p>
  <p>
    UI library -
    <a class="prime-vue" href="https://www.primefaces.org/primevue/">PRIMEVUE</a
    >.
  </p>
  <p>
    API connection -
    <a class="axios" href="https://axios-http.com/">Axios</a>.
  </p>
  <h3>API</h3>
  <p>
    All data about pokemons was taken from
    <a href="https://pokeapi.co">pokeapi.co</a>.
  </p>
  <h3>Author</h3>
  <p><i>Oleksii Skorokhod</i> - 2022</p>
</template>

<style scoped lang="scss">
h2 {
  font-size: 36px;
}
a {
  color: var(--text-color);
}
.vue-3 {
  color: var(--green-500);
}
.ts {
  color: var(--blue-500);
}
.prime-vue {
  color: var(--blue-600);
}
.axios {
  color: var(--purple-600);
}
</style>
