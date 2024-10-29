import { FC } from "react";
import { DeathStarLoader, CustomReactFlowComponent } from "../../components";
import { characterIDExtendedInfo } from "../../SWAPI/helper";
import { useNavigation } from "react-router-dom";
import { useParams, useLoaderData, useNavigate } from "react-router";
import classes from "./CharacterExtended.module.scss";
import { dataMapperToReactFlow } from "./helper";

const CharactersExtended: FC = () => {
  const { state } = useNavigation();
  const navigate = useNavigate();
  const data = useLoaderData() as characterIDExtendedInfo;
  const mapedData = dataMapperToReactFlow(data);
  return (
    <div className={classes.characterExtendedPage}>
      {state === "loading" ? (
        <DeathStarLoader />
      ) : (
        <>
          <h1>Character Extended</h1>
          <CustomReactFlowComponent
            initialEdges={mapedData.edges}
            initialNodes={mapedData.nodes}
          />
          <button onClick={() => navigate(-1)}>Go back</button>
        </>
      )}
    </div>
  );
};

export default CharactersExtended;
