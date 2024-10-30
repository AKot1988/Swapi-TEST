import { characterIDExtendedInfo } from "../../SWAPI/helper";

export const dataMapperToReactFlow = (data: characterIDExtendedInfo) => {
  const sourseData = data;
  let mapedData = null;
  let nodes: Object[] = [];
  let edges: Object[] = [];

  let starshipsCounter = 0;
  sourseData.films.forEach((film) => {
    film.pilotedStarships.forEach((starship) => {
      starshipsCounter++;
    });
  });
  let myltiplyer = 0

  const displayWidth = window.innerWidth;
  const displayHeight = window.innerHeight;
  const characterNode = {
    id: "1",
    position: { x: displayWidth / 2, y: displayHeight * 0.01 },
    data: { label: `${sourseData.characterName}` },
  };
  nodes.push(characterNode);
  sourseData.films.forEach((film, filmIndex) => {
    const filmNode = {
      id: `${filmIndex}${film.filmTitle}`,
      position: {
        x: `${(displayWidth / sourseData.films.length) * filmIndex}`,
        y: `${displayHeight / 7}`,
      },
      data: { label: `${film.filmTitle}` },
    };

    const character_film_edge = {
      id: `e1-${filmNode.id}`,
      source: "1",
      target: `${filmNode.id}`,
    };

    nodes.push(filmNode);
    edges.push(character_film_edge);

    film.pilotedStarships.forEach((starship, starshipIndex) => {
      const starshipMappedName = starship.name.split(" ").join("");
      const filmMappedName = film.filmTitle.split(" ").join("");
      const starshipNode = {
        id: `${filmMappedName}${starshipMappedName}`,
        position: {
          x: `${(displayWidth / starshipsCounter)*(myltiplyer)}`,
          y: `${(displayHeight) *0.4}`,
        },
        data: { label: starship.name },
      };
      const film_starship_edge = {
        id: `${filmNode.id}${starshipNode.id}`,
        source: `${filmNode.id}`,
        target: `${filmMappedName}${starshipMappedName}`,
      };
      myltiplyer++;
      nodes.push(starshipNode);
      edges.push(film_starship_edge);
    });
  });

  mapedData = { nodes, edges };
  return mapedData;
};
