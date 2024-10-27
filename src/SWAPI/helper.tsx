export type SWAPIREQUEST = {
  startCharacterID: number;
  characterQuantity: number;
};
export type characterInstanse = {
  name?: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created?: string;
  edited?: string;
  url?: string;
};

export type filmInstanse = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

export type starshipInstanse = {
  name: string, 
  model: string, 
  manufacturer: string, 
  cost_in_credits: "149999", 
  length: string, 
  max_atmosphering_speed: string, 
  crew: string, 
  passengers: string, 
  cargo_capacity: string, 
  consumables: string, 
  hyperdrive_rating: string, 
  MGLT: string, 
  starship_class: string, 
  pilots: string[], 
  films: string[],
  created: string, 
  edited: string,
  url: string,
}

export enum SWapiEntityType {
  FILMS = "films",
  PEOPLE = "people",
  PLANETS = "planets",
  STARSHIPS = "starships",
}

export type SWapiInstanceKeys = keyof filmInstanse | keyof characterInstanse | keyof starshipInstanse;

export enum filterOptions {
// CLIMATE = 'climate',  // string -- The field name you want to filter on.
CONTAINS = '__contains', // string -- A substring to match within the attribute value.
RANGE = '__range', // string -- A start and end value for range queries, separated by a comma.
NEGATE = '!=', // string -- Used after a filter to negate the query.
MULTIPLE = '__in', // string -- Multiple values for the attribute, separated by commas.
}
