export interface IPokemonInfo {
  name: string;
  url: string;
}

interface IAbility {
  ability: IPokemonInfo;
  is_hidden: boolean;
  slot: number;
}

interface IGameIndex {
  game_index: number;
  version: IPokemonInfo;
}

interface IVersionDetails {
  rarity: number;
  version: IPokemonInfo;
}

interface IHeldItem {
  item: IPokemonInfo;
  version_details: IVersionDetails;
}

interface IVersionGroupDetails {
  level_learned_at: number;
  move_learn_method: IPokemonInfo;
}

interface IMove {
  move: IPokemonInfo;
  version_group_details: IVersionGroupDetails;
}

interface ISprite {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface IStat {
  base_stat: number;
  effort: number;
  stat: IPokemonInfo;
}

interface IType {
  slot: number;
  type: IPokemonInfo;
}

export interface IPokemon {
  abilities: IAbility[];
  base_experience: number;
  forms: IPokemonInfo[];
  game_indices: IGameIndex;
  height: number;
  held_items: IHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  // TODO: find and change type!
  past_types: unknown[];
  species: IPokemonInfo;
  sprites: ISprite;
  stats: IStat[];
  types: IType[];
  weight: number;
}

export interface IPokemonCard {
  name: string;
  image: string | null;
  types: IType[];
}

export type Pokemon = IPokemon;
