<template>
  <section class="panel">
    <div class="panel__block">
      <h2>About project</h2>
      <h3>Global</h3>
      <p>
        This is a training project for studying
        <a class="vue-3" href="https://vuejs.org/">Vue 3</a>. It`s based on free
        index about pokemons - <a href="https://pokeapi.co">pokeapi.co</a>.
      </p>
      <h3>Technologies used</h3>
      <p>
        Main technology - class based
        <a class="vue-3" href="https://vuejs.org/">Vue 3</a> with using
        <a class="ts" href="https://www.typescriptlang.org/">TS</a>.
      </p>
      <p>
        UI library -
        <a class="prime-vue" href="https://www.primefaces.org/primevue/"
          >PRIMEVUE</a
        >.
      </p>
      <p>
        API connection -
        <a href="https://axios-http.com/">Axios</a>.
      </p>
      <h3>API</h3>
      <p>
        All data about pokemons was taken from
        <a href="https://pokeapi.co">pokeapi.co</a>.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.panel {
  &__block {
    &__scroll {
      background-color: var(--blue-400);
      &:hover {
        transition: 0.2s;
        background-color: var(--blue-300);
      }
    }
  }
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
}
</style>
