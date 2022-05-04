import { api } from "@/api";
import { AxiosResponse } from "axios";
import { IApiError } from "@/types/api";
import { Pokemon } from "@/types/pokemon";

export const getPokemon = (name: string) => {
  return api
    .get(`/pokemon/${name}`)
    .then((res: AxiosResponse) => {
      return res.data as Pokemon;
    })
    .catch((err: IApiError) => {
      return err;
    });
};
