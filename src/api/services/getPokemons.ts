import { AxiosResponse } from "axios";

import { api, createRequest } from "@/api";
import { usePokemonsStore } from "@/store/pokemons";
import { Pokemon } from "@/types/pokemon";
import { IApiError } from "@/types/api";
import { useGlobalStore } from "@/store/global";

export const getPokemons = (limit: number, offset: number) => {
  const globalStore = useGlobalStore();
  const pokemonsStore = usePokemonsStore();

  globalStore.setIsLoading(true);

  return api
    .get("/pokemon", {
      params: {
        limit,
        offset,
      },
    })
    .then(async (res: AxiosResponse) => {
      const { data } = res;

      const pokemonsData: Pokemon[] = [];
      const requests: Promise<AxiosResponse>[] = [];

      for (const pokemon of data.results) {
        requests.push(createRequest({ url: pokemon.url }));
      }

      await Promise.all(requests)
        .then((results: AxiosResponse[]) => {
          results.forEach((result: AxiosResponse) => {
            pokemonsData.push(result.data);
          });
        })
        .then(() => {
          pokemonsStore.setPokemons(data.count, pokemonsData);
          globalStore.setIsLoading(false);
        })
        .catch((err: IApiError) => {
          return err;
        });

      return pokemonsData;
    })
    .catch((err: IApiError) => {
      return err;
    });
};
