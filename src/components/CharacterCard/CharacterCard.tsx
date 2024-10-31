import { FC, useState, useEffect } from "react";

import { SWapiEntityType } from "../../SWAPI/helper";
import { CharacterCardProps } from "./helper";
import { SWapiGeneral } from "../../SWAPI/SWAPI";
import classes from "./CharacterCard.module.scss";

const CharacterCard: FC<CharacterCardProps> = ({ data, clickhandler }) => {
  const [homeWorldInfo, setHomeWorldInfo] = useState({name: ""});
  useEffect(() => {
    const fetchHomeWorldInfo = async () => {
      if (data.homeworld) {
        const homeWorldID = data.homeworld.split("/")[5];
        const homeWorldInfo = await SWapiGeneral(
          SWapiEntityType.PLANETS,
          +homeWorldID
        );
        setHomeWorldInfo(homeWorldInfo);
      }
    };
    fetchHomeWorldInfo();
  }, [data.homeworld]);

  return (
    <div className={classes.characterCard} onClick={clickhandler}>
      <h3 className={classes.characterCardName}>{data.name}</h3>
      <p className={classes.characterAddInfo}>{data.gender}</p>
      <p className={classes.characterAddInfo}>{homeWorldInfo.name}</p>
    </div>
  );
};

export default CharacterCard;
