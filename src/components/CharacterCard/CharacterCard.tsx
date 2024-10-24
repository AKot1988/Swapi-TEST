import { FC } from "react";

import { characterInstanse } from "../../SWAPI/helper";
import classes from "./CharacterCard.module.scss";

const CharacterCard: FC<{ data: characterInstanse }> = ({ data }

) => {
  return (
    <div className={classes.characterCard} onClick={()=> console.log(data)}>
      <h3 className={classes.characterCardName}>{data.name}</h3>
      <p className={classes.characterAddInfo}>{data.gender}</p>
      <p className={classes.characterAddInfo}>{data.homeworld}</p>
    </div>
  );
};

export default CharacterCard;
