import { SWAPIREQUEST, characterInstanse, SWapiEntityType } from "./helper";
import { LoaderFunctionArgs } from "react-router";

export const SWapiCharacters = async (data: SWAPIREQUEST) => {
  let charactersArray: characterInstanse[] = [];
  for (
    let i=0;
    i < data.characterQuantity;
    i++
  ) {
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
// console.log(request);

export const SWapiGeneral = async (type: SWapiEntityType, instanseID: number) => {
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
// console.log(request);


export const charactersListLoader = async ({
  params,
}: LoaderFunctionArgs) => {
  let requestedCharacters: SWAPIREQUEST = {
    startCharacterID: 1,
    characterQuantity: 10,
  };
  if (params.startCharacterID !== undefined) {
    requestedCharacters.startCharacterID = +(params.startCharacterID);
    // requestedCharactersNumbers.startCharacterNumber = +(params.startCharacterID);
  }
  const data = await SWapiCharacters(requestedCharacters);
  return data;
}

export const characterIDExtendedInfoLoader = async ({params}: LoaderFunctionArgs) => {
  console.log(params)
  const data = await SWapiGeneral(SWapiEntityType.PEOPLE, 1);
  return data;
}