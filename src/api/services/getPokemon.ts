import { api } from "@/api";
import { AxiosResponse } from "axios";
import { IApiError } from "@/types/api";
import { useGlobalStore } from "@/store/global";
import { Pokemon } from "@/types/pokemon";

export const getPokemon = (name: string) => {
  const globalStore = useGlobalStore();

  globalStore.setIsLoading(true);

  return api
    .get(`/pokemon/${name}`)
    .then((res: AxiosResponse) => {
      globalStore.setIsLoading(false);
      return res.data as Pokemon;
    })
    .catch((err: IApiError) => {
      globalStore.setIsLoading(false);
      return err;
    });
};
