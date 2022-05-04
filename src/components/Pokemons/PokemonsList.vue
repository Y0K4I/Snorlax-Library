<template>
  <div class="pokemons">
    <Toast position="bottom-right" />
    <div class="pokemons__search">
      <ListSearch
        :names="names"
        @filter="filterPokemons"
        @reset="resetFilter"
      />
    </div>
    <div class="pokemons__list">
      <ListCard v-for="card in cards" :key="card.name" :card="card" />
    </div>
    <div class="pokemons__pagination">
      <ListPagination
        :limit="pagination.limit"
        :offset="pagination.offset"
        :total-cards="totalCards"
        :fetch-pokemons="fetchPokemons"
        :fetch-filtered-pokemons="fetchFilteredPokemons"
        :is-filtered="isFiltered"
        @limit="changeLimit"
        @offset="changeOffset"
      />
    </div>
    <ScrollTop class="scroll" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from "vue";
import { useToast } from "primevue/usetoast";

import ListCard from "@/components/Pokemons/List/ListCard.vue";
import ListSearch from "@/components/Pokemons/List/ListSearch.vue";
import ListPagination from "@/components/Pokemons/List/ListPagination.vue";
import { IPokemonCard, Pokemon } from "@/types/pokemon";
import { getPokemons } from "@/api/services/getPokemons";
import { getPokemonsNames } from "@/api/services/getPokemonsNames";
import { checkApiError } from "@/api";
import { usePokemonsStore } from "@/store/pokemons";
import { getPokemon } from "@/api/services/getPokemon";
import { useGlobalStore } from "@/store/global";

const pokemonsStore = usePokemonsStore();
const globalStore = useGlobalStore();
const toast = useToast();

const cards = ref([] as IPokemonCard[]);
const names = ref([] as string[]);
const totalCards = ref(0);
const isFiltered = ref(false);
const pagination = reactive({
  limit: 20,
  offset: 0,
});

const changeLimit = (value: number) => {
  pagination.limit = value;
};

const changeOffset = (value: number) => {
  pagination.offset = value;
};

const fetchPokemons = async (limit: number, offset: number) => {
  const result = await getPokemons(limit, offset);

  if (checkApiError(result, toast)) {
    cards.value = pokemonsStore.getPokemonsCards;
    totalCards.value = pokemonsStore.count;
  }
};

const fetchPokemonsNames = async () => {
  const result = await getPokemonsNames();

  if (checkApiError(result, toast)) {
    names.value = pokemonsStore.getPokemonsNames;
  }
};

const filterPokemons = async (value: string[]) => {
  const filteredPokemons = [] as Pokemon[];

  isFiltered.value = true;
  pagination.offset = 0;

  globalStore.setIsLoading(true);
  for (const name of value) {
    const pokemon = (await getPokemon(name)) as Pokemon;

    filteredPokemons.push(pokemon);
  }
  globalStore.setIsLoading(false);

  pokemonsStore.setPokemons(value.length, filteredPokemons);
  await fetchFilteredPokemons(pagination.limit, pagination.offset);
};

const fetchFilteredPokemons = async (limit: number, offset: number) => {
  const filteredCards = pokemonsStore.getPokemonsCards;
  totalCards.value = filteredCards.length;
  cards.value = filteredCards.filter((card, idx) => {
    return idx >= offset && idx < limit + offset;
  });
};

const resetFilter = () => {
  isFiltered.value = false;
  pagination.offset = 0;
  fetchPokemons(pagination.limit, pagination.offset);
};

onBeforeMount(() => {
  fetchPokemons(pagination.limit, pagination.offset);
  fetchPokemonsNames();
});
</script>

<style scoped lang="scss">
.pokemons {
  display: flex;
  align-items: center;
  flex-direction: column;
  &__list {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__search {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
  }
}
</style>
