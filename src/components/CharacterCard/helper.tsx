import { characterInstanse } from "../../SWAPI/helper";

export type CharacterCardProps = {
  data: characterInstanse;
  clickhandler: () => void;
};
