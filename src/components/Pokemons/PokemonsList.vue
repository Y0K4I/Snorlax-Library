<template>
  <div class="pokemons">
    <Toast position="bottom-right" />
    <div class="pokemons__list">
      <PokemonsCard v-for="card in cards" :key="card.name" :card="card" />
    </div>
    <Paginator
      :rows="pagination.limit"
      :first="pagination.offset"
      :total-records="totalCards"
      :rowsPerPageOptions="[20, 30, 50]"
      @page="onPage($event)"
    />
    <ScrollTop class="scroll" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref, watch } from "vue";
import { useToast } from "primevue/usetoast";

import PokemonsCard from "@/components/Pokemons/PokemonsCard.vue";
import { IPokemonCard } from "@/types/pokemon";
import { getPokemons } from "@/api/services/getPokemons";
import { checkApiError } from "@/api";
import { usePokemonsStore } from "@/store/pokemons";

const pokemonsStore = usePokemonsStore();
const toast = useToast();

const pagination = reactive({
  limit: 20,
  offset: 0,
});
const cards = ref([] as IPokemonCard[]);
const totalCards = ref(0);

const fetchPokemons = async (limit: number, offset: number): Promise<void> => {
  const result = await getPokemons(limit, offset);

  if (checkApiError(result, toast)) {
    cards.value = pokemonsStore.getPokemonsCards;
    totalCards.value = pokemonsStore.count;
  }
};

// Unknown UI type
const onPage = (event: any) => {
  pagination.offset = event.first;
  pagination.limit = event.rows;
};

watch(pagination, () => {
  fetchPokemons(pagination.limit, pagination.offset);
});

onBeforeMount(() => {
  fetchPokemons(pagination.limit, pagination.offset);
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
}
</style>
