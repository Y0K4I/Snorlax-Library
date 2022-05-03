import { AxiosResponse } from "axios";

import { api } from "@/api";
import { IApiError } from "@/types/api";
import { useGlobalStore } from "@/store/global";
import { usePokemonsStore } from "@/store/pokemons";

export const getPokemonsNames = () => {
  const globalStore = useGlobalStore();
  const pokemonsStore = usePokemonsStore();

  globalStore.setIsLoading(true);

  return api
    .get("/pokemon", {
      params: {
        limit: 10000,
        offset: 0,
      },
    })
    .then((res: AxiosResponse) => {
      pokemonsStore.setPokemonsNames(res.data.results);
      globalStore.setIsLoading(false);
    })
    .catch((err: IApiError) => {
      globalStore.setIsLoading(false);
      return err;
    });
};
