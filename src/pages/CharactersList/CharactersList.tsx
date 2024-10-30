import { FC } from "react";
import { useNavigation } from "react-router-dom";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { characterInstanse } from "../../SWAPI/helper";
import { emptyCharacter } from "./helper";
import { COMMON_ROUTES } from "../../router/routesNames";
import { CharacterCard, DeathStarLoader } from "../../components";
import classes from "./CharactersList.module.scss";

const CharactersList: FC = () => {
  const { state } = useNavigation();
  const navigate = useNavigate();
  const { startCharacterID } = useParams();
  const loaderData = useLoaderData() as characterInstanse[];
  const prevButtonDisabled =
    startCharacterID === "1" || state === "loading" ? true : false;
  const nextButtonDisabled = state === "loading" ? true : false;

  return (

    <div className={classes.charactersPage}>
      <h1 className={classes.charactersPageTitle}>CharacterList</h1>
      <div className={classes.charactersPageCards}>
        {state === "loading" ? (
          <DeathStarLoader />
        ) : (
          loaderData.map((character: characterInstanse, index) => {
            const characterID = character.url?.split("/")[5];
            if (!character.name) {
              return (
                <CharacterCard
                  key={index}
                  data={emptyCharacter}
                  clickhandler={() => {
                    return navigate(
                      `${COMMON_ROUTES.ABOUTCHARACTER}/${characterID}`
                    );
                  }}
                />
              );
            } else {
              return (
                <CharacterCard
                  key={character.name}
                  data={character}
                  clickhandler={() => {
                    return navigate(
                      `${COMMON_ROUTES.ABOUTCHARACTER}/${characterID}`
                    );
                  }}
                />
              );
            }
          })
        )}
      </div>
      <div className={classes.homePageButtonsContainer}>
        <button
          disabled={prevButtonDisabled}
          onClick={() => {
            if (startCharacterID !== undefined && +startCharacterID <= 10) {
              navigate(`/charactersList/${startCharacterID}`);
            } else {
              navigate(
                `/charactersList/${
                  startCharacterID ? +startCharacterID - 10 : 1
                }`
              );
            }
          }}
          children="Previous 10 characters"
        />
        <button
          disabled={nextButtonDisabled}
          onClick={() => {
            navigate(
              `/charactersList/${startCharacterID ? +startCharacterID + 10 : 1}`
            );
          }}
          children="Next 10 characters"
        />
      </div>
    </div>
  );
};

export default CharactersList;
