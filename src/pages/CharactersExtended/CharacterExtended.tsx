import { FC } from "react";
import { DeathStarLoader } from "../../components";
import { useNavigation } from "react-router-dom";
import { useParams, useLoaderData, useNavigate } from "react-router";
import classes from "./CharacterExtended.module.scss";

const CharactersExtended: FC = () => {
  const { state } = useNavigation();
  const navigate = useNavigate();
  const data = useLoaderData();
  console.log(data);
  return (
    <div className={classes.characterExtendedPage}>
      <h1>Character Extended</h1>
      <div className={classes.characterExtendedPageContent}>
        {state === "loading" ? <DeathStarLoader /> : <h1>data has been loaded</h1>}
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default CharactersExtended;
