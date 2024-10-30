import { Home, Not_Found } from "../pages";
import { CharactersExtended, CharactersList } from "../pages";
import {
  charactersListLoader,
  characterIDExtendedInfoLoader,
} from "../SWAPI/SWAPI";
import { COMMON_ROUTES } from "./routesNames";

export const commonRouter = [
  {
    index: true,
    element: <Home />,
    errorElement: <Not_Found />,
  },
  {
    path: `${COMMON_ROUTES.CHARACTERSLIST}/:startCharacterID`,
    element: <CharactersList />,
    loader: charactersListLoader,
  },
  {
    path: `${COMMON_ROUTES.ABOUTCHARACTER}/:characterID`,
    element: <CharactersExtended />,
    loader: characterIDExtendedInfoLoader,
  },
];
