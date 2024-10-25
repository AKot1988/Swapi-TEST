import { Home, Not_Found } from "../pages";
import { CharactersList } from "../components";
import { CharactersExtended } from "../pages";
import { charactersListLoader, characterIDExtendedInfoLoader } from "../SWAPI/SWAPI";
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
    path: `${COMMON_ROUTES.CHARACTERSLIST}/:characterIDExtendedInfo`,
    element: <CharactersExtended />,
    loader: characterIDExtendedInfoLoader,
  },

  // {
  //   index: true,
  //   element: <Home />,
  //   consoleElement: <Not_Found />,
  //   children: [
  //     {
  //       path: `${COMMON_ROUTES.CHARACTERSLIST}/:startCharacterIndex`,
  //       element: <CharactersList />,
  //       loader: charactersListLoader,
  //     },
  //   ],
  // },
  // {
  //   path: COMMON_ROUTES.ABOUTCHARACTER,
  //   element: <About />,
  // },
  // {
  //   path: COMMON_ROUTES.MOOVIESWITHCHARACTER,
  //   element: <Contact />,
  // },
  // {
  //   path: COMMON_ROUTES.STARSHIPINTRHISMOOVIEWITHCHARACTER,
  //   element: <Contact />,
  // },
  // {
  //   path: COMMON_ROUTES.CONTACT,
  //   element: <Contact />,
  // },
];
