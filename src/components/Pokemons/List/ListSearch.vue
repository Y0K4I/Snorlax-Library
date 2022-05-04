<template>
  <form>
    <div class="auto-complete"></div>
    <span class="p-float-label">
      <AutoComplete
        v-model="selectedName"
        :suggestions="filteredPokemons"
        @complete="searchPokemons($event)"
      />
      <label for="autocomplete">Search by name</label>
      <Button label="Find" @click="emit('filter', filteredPokemons)" />
      <Button label="Reset" @click="emit('reset', true)" />
    </span>
  </form>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps<{
  names: string[];
}>();

const emit = defineEmits(["filter", "reset"]);

const selectedName = ref(null);
const filteredPokemons = ref([] as string[]);

const searchPokemons = (event: any) => {
  const { query } = event;

  const tempFilter = [] as string[];

  props.names.forEach((name) => {
    if (name.includes(query.toLocaleLowerCase())) {
      tempFilter.push(name);
    }
  });

  filteredPokemons.value = tempFilter;
};
</script>

<style scoped lang="scss">
.p-autocomplete {
  max-width: 1000px;
}

.p-button {
  margin-left: 10px;
  background-color: var(--blue-400);
  border-color: var(--blue-400);
  &:hover {
    border-color: var(--blue-300);
    background-color: var(--blue-300);
  }
}

@media only screen and (max-width: 576px) {
  .p-float-label {
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .p-button {
      width: 100%;
      height: 100px;
      margin-top: 20px;
      margin-left: 0;
    }
  }
}
</style>
