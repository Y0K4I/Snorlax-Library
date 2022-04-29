import { defineStore } from "pinia";

import { IPokemonCard, Pokemon } from "@/types/pokemon";

export const usePokemonsStore = defineStore("pokemons", {
  state: () => {
    return {
      count: 0,
      list: [] as Pokemon[],
    };
  },
  getters: {
    getPokemonsCards() {
      const cards: IPokemonCard[] = [];

      this.list.forEach((pokemon) => {
        cards.push({
          name: pokemon.name,
          image: pokemon.sprites.front_default,
          types: pokemon.types,
        });
      });

      return cards;
    },
  },
  actions: {
    setPokemons(count: number, pokemons: Pokemon[]): void {
      this.count = count;
      this.list = pokemons;
    },
  },
});
