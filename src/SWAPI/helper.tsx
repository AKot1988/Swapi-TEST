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

export enum SWapiEntityType {
    FILMS= "films",
    PEOPLE= "people",
    PLANETS= "planets",
    STARSHIPS= "starships",
}
