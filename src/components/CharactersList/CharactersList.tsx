import { FC } from "react";
import { useNavigation } from "react-router-dom";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { characterInstanse } from "../../SWAPI/helper";
import { emptyCharacter } from "./helper";
import { CharacterCard, Loader } from "../../components";
import classes from "./CharactersList.module.scss";

const CharacterList: FC = () => {
  const { state } = useNavigation();
  const navigate = useNavigate();
  const { startCharacterID } = useParams();
  const loaderData = useLoaderData() as characterInstanse[];
  console.log(loaderData);

  return (
    <div className={classes.charactersPage}>
      <h1 className={classes.charactersPageTitle}>CharacterList</h1>
      <div className={classes.charactersPageCards}>
        {state === "loading" ? (
          <Loader />
        ) : (
          loaderData.map((character: characterInstanse, index) => {
            if (!character.name) {
              return <CharacterCard key={index} data={emptyCharacter} />;
            } else {
              return <CharacterCard key={character.name} data={character} />;
            }
          })
        )}
      </div>
      <div className={classes.homePageButtonsContainer}>
        <button
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

export default CharacterList;
