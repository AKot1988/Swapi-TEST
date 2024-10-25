import { characterInstanse, SWapiEntityType } from "../../SWAPI/helper";

export type CharacterCardProps {
    data: characterInstanse;
    clickhandler: () => void;
}