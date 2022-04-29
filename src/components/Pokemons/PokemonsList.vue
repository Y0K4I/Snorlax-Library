<template>
  <Toast position="bottom-right" />
  <ScrollPanel class="panel__block">
    {{ isLoading }}
  </ScrollPanel>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from "vue";
import { useToast } from "primevue/usetoast";

import { Pokemon } from "@/types/pokemon";
import { getPokemons } from "@/api/services/getPokemons";
import { checkApiError } from "@/api";
import { useGlobalStore } from "@/store/global";

const globalStore = useGlobalStore();
const toast = useToast();

const pagination = reactive({
  limit: 20,
  offset: 0,
});
const pokemons = reactive([] as Pokemon[]);
const isLoading = ref(globalStore.isLoading);

const fetchPokemons = async (limit: number, offset: number) => {
  const result = await getPokemons(limit, offset);

  if (checkApiError(result, toast)) {
    pokemons.push(...(result as Pokemon[]));
  }

  return result;
};

// Unknown type of store callback params
globalStore.$subscribe((value: any) => {
  const { events } = value;
  if (events.key === "isLoading") {
    isLoading.value = events.newValue;
  }
});

onBeforeMount(() => {
  fetchPokemons(pagination.limit, pagination.offset);
});
</script>

<style scoped lang="scss">
.panel__block {
  .scroll {
    background-color: var(--blue-400);
    &:hover {
      transition: 0.2s;
      background-color: var(--blue-300);
    }
  }
}
</style>
