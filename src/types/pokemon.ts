interface IPokemonInfo {
  name: string;
  url: string;
}

interface IAbilities {
  ability: IPokemonInfo;
  is_hidden: boolean;
  slot: number;
}

interface IGameIndices {
  game_index: number;
  version: IPokemonInfo;
}

interface IVersionDetails {
  rarity: number;
  version: IPokemonInfo;
}

interface IHeldItems {
  item: IPokemonInfo;
  version_details: IVersionDetails;
}

interface IVersionGroupDetails {
  level_learned_at: number;
  move_learn_method: IPokemonInfo;
}

interface IMoves {
  move: IPokemonInfo;
  version_group_details: IVersionGroupDetails;
}

interface ISprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface IStats {
  base_stat: number;
  effort: number;
  stat: IPokemonInfo;
}

interface ITypes {
  slot: number;
  type: IPokemonInfo;
}

export interface IPokemon {
  abilities: IAbilities[];
  base_experience: number;
  forms: IPokemonInfo[];
  game_indices: IGameIndices[];
  height: number;
  held_items: IHeldItems[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMoves[];
  name: string;
  order: number;
  // TODO: find and change type!
  past_types: unknown[];
  species: IPokemonInfo;
  sprites: ISprites;
  stats: IStats[];
  types: ITypes[];
  weight: number;
}

export type Pokemon = IPokemon | IPokemonInfo;
