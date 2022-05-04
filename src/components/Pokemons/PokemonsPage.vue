<template>
  <div class="pokemon" v-if="!isError">
    <div class="pokemon__breadcrumb">
      <PageBreadcrumb :name="pokemonName" />
    </div>
    <div class="pokemon__data">
      <Image :src="pokemon?.sprites?.front_default" preview />
      <span class="pokemon__data__name">
        {{ pokemonName }}
      </span>
      <div class="pokemon__data__types">
        <div
          class="pokemon__data__types__item"
          v-for="type in pokemon?.types"
          :key="type"
          :style="{ backgroundColor: TypesColors[type.type.name] }"
        >
          {{ type.type.name }}
        </div>
      </div>
      <div class="pokemon__data__stats">
        <ProgressBar
          v-for="stat in pokemon?.stats"
          :value="stat.base_stat"
          :key="stat.stat.name"
        >
          {{ stat.stat.name }}: {{ stat.base_stat }}
        </ProgressBar>
      </div>
    </div>
  </div>
  <div class="error" v-else>404 Pokemon not found!</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, onBeforeMount, ref } from "vue";

import { useToast } from "primevue/usetoast";

import PageBreadcrumb from "@/components/Pokemons/Page/PageBreadcrumb.vue";
import { usePokemonsStore } from "@/store/pokemons";
import { useGlobalStore } from "@/store/global";
import { getPokemon } from "@/api/services/getPokemon";
import { checkApiError } from "@/api";
import { Pokemon } from "@/types/pokemon";
import { TypesColors } from "@/assets/constants/typesColors";

const route = useRoute();
const pokemonsStore = usePokemonsStore();
const globalStore = useGlobalStore();
const toast = useToast();

const pokemon = ref();
const isError = ref(false);

const fetchPokemon = async () => {
  const storePokemonData = pokemonsStore.getPokemonByName(
    route.params.name as string
  );

  if (!storePokemonData) {
    globalStore.setIsLoading(true);
    const pokemonData = (await getPokemon(
      route.params.name as string
    )) as Pokemon;

    if (checkApiError(pokemonData, toast)) {
      globalStore.setIsLoading(false);
      pokemon.value = pokemonData;
    } else {
      globalStore.setIsLoading(false);
      isError.value = true;
    }
  } else {
    pokemon.value = storePokemonData;
  }
};

const pokemonName = computed(() => {
  return (
    (route.params.name as string).charAt(0).toUpperCase() +
    (route.params.name as string).slice(1)
  );
});

onBeforeMount(() => {
  fetchPokemon();
});
</script>

<style scoped lang="scss">
.pokemon {
  display: flex;
  flex-direction: column;
  &__data {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    &__name {
      font-size: 20px;
      font-weight: bold;
    }
    &__types {
      width: 150px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 20px;
      margin-bottom: 20px;
      &__item {
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        padding: 2px;
        color: white;
        border-radius: 10px;
      }
    }
    &__stats {
      width: 50%;
      .p-progressbar {
        height: 50px;
        margin-top: 20px;
      }
    }
  }
}

.error {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 48px;
}
</style>
