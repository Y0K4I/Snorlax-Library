import { defineStore } from "pinia";

import { IPokemonCard, IPokemonInfo, Pokemon } from "@/types/pokemon";

export const usePokemonsStore = defineStore("pokemons", {
  state: () => {
    return {
      count: 0,
      list: [] as Pokemon[],
      names: [] as IPokemonInfo[],
    };
  },
  getters: {
    getPokemonsCards(state): IPokemonCard[] {
      const cards: IPokemonCard[] = [];

      state.list.forEach((pokemon) => {
        cards.push({
          name: pokemon.name,
          image: pokemon.sprites.front_default,
          types: pokemon.types,
        });
      });

      return cards;
    },

    getPokemonByName(state): (name: string) => Pokemon {
      return (name: string) =>
        state.list.find((pokemon) => pokemon.name === name) as Pokemon;
    },

    getPokemonsNames(state) {
      return state.names.map((pokemon) => {
        return pokemon.name;
      });
    },
  },
  actions: {
    setPokemons(count: number, pokemons: Pokemon[]): void {
      this.count = count;
      this.list = pokemons;
    },

    setPokemonsNames(names: IPokemonInfo[]): void {
      this.names = names;
    },
  },
});
