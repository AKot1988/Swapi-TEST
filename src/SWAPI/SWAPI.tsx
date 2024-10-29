import {
  SWAPIREQUEST,
  characterInstanse,
  filmInstanse,
  SWapiEntityType,
  SWapiInstanceKeys,
  filterOptions,
  starshipInstanse,
  characterIDExtendedInfo,
} from "./helper";
import { LoaderFunctionArgs } from "react-router";

// export const SWapiMain = async () => {
//   let charactersEntity = null;
//   await fetch(`https://swapi.dev/api/people/${currentCharacterID}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       charactersEntity = data.results;
//     });
//   console.log(charactersEntity);
//   return charactersEntity;
// };

// const request = await SWapiMain();

export const SWapiCharacters = async (data: SWAPIREQUEST) => {
  let charactersArray: characterInstanse[] = [];
  for (let i = 0; i < data.characterQuantity; i++) {
    let currentCharacterID = i + data.startCharacterID;
    await fetch(`https://swapi.dev/api/people/${currentCharacterID}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        charactersArray.push(data as characterInstanse);
        // dataToCheck = data;
      });
  }
  return charactersArray;
};

// const request: characterInstanse[] = await SWAPI({
//   characterQuantity: 5,
// } as SWAPIREQUEST);

export const SWapiGeneral = async (
  type: SWapiEntityType,
  instanseID: number
) => {
  let requestString: string = "";
  switch (type) {
    case "films":
      requestString = `https://swapi.dev/api/films/${instanseID}`;
      break;
    case "people":
      requestString = `https://swapi.dev/api/people/${instanseID}`;
      break;
    case "planets":
      requestString = `https://swapi.dev/api/planets/${instanseID}`;
      break;
    case "starships":
      requestString = `https://swapi.dev/api/starships/${instanseID}`;
      break;
  }
  const data = await fetch(requestString).then((response) => {
    return response.json();
  });
  return data;
};

// const request = await SWapiGeneral(SWapiEntityType.PEOPLE, 2);

export const charactersListLoader = async ({ params }: LoaderFunctionArgs) => {
  let requestedCharacters: SWAPIREQUEST = {
    startCharacterID: 1,
    characterQuantity: 10,
  };
  if (params.startCharacterID !== undefined) {
    requestedCharacters.startCharacterID = +params.startCharacterID;
    // requestedCharactersNumbers.startCharacterNumber = +(params.startCharacterID);
  }
  const data = await SWapiCharacters(requestedCharacters);
  return data;
};



export const characterIDExtendedInfoLoader = async ({
  params,
}: LoaderFunctionArgs) : Promise<characterIDExtendedInfo> => {
  const { characterID } = params;
  if (characterID === undefined) {
    throw new Error("No character ID provided in the URL");
  }
  const characterData = await SWapiGeneral(
    SWapiEntityType.PEOPLE,
    +characterID
  );
  const characterName = characterData.name;
  const filmsURLs: string[] = characterData.films;
  const filmsIDs = filmsURLs.map((url) => +url.split("/")[5]);
  const filmsTitleInvolvedShips = filmsIDs.map(async (ID) => {
    const filmData = await SWapiGeneral(SWapiEntityType.FILMS, ID);
    const fetchedStarshipsInFilm = filmData.starships.map(
      async (starship: string) => {
        const starshipData = await SWapiGeneral(
          SWapiEntityType.STARSHIPS,
          +starship.split("/")[5]
        );
        return starshipData;
      }
    );

    const fetchedStarshipsInFilmResolved = await Promise.all(
      fetchedStarshipsInFilm
    );
    return {
      filmTitle: filmData.title,
      starshipsInFilm: fetchedStarshipsInFilmResolved,
    };
  });

  const filmsTitleInvolvedShipsResolved = await Promise.all(
    filmsTitleInvolvedShips
  ); //here is names array of films and involved Starships
  const filteredResultByCharacter = filmsTitleInvolvedShipsResolved.map(
    (item) => {
      return {
        filmTitle: item.filmTitle,
        pilotedStarships: item.starshipsInFilm.filter((starship) =>
          starship.pilots.includes(characterData.url)
        ),
      };
    }
  );
  const preparedDatatoFlow = {
    characterName: characterName,
    films: filteredResultByCharacter,
  };
  return preparedDatatoFlow; //here is filtered result by character. Hear ve have films and starships that character piloted
};

export const filterRequest = async (
  entityToFilter: SWapiEntityType,
  requestedParam: string,
  requestedKey: SWapiInstanceKeys,
  filterOptions: filterOptions
) => {
  const customFilteredRequestURL = `https://sw-api.starnavi.io/${entityToFilter}/?${requestedKey}${filterOptions}=${requestedParam}`;
  try {
    const response = await fetch(customFilteredRequestURL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Response is not in JSON format");
    }
  } catch (error) {
    console.error("Помилка при запиті:", error);
    throw error;
  }
};
