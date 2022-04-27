import { defineStore } from "pinia";
import { Pokemon } from "@/types/pokemon";

const usePokemonsStore = defineStore("pokemons", {
  state: () => {
    return {
      count: 0,
      list: [] as Pokemon[],
    };
  },
});
