import { FC } from "react";
import { SWAPIREQUEST } from "../../SWAPI/helper";
import { SWapiCharacter } from "../../SWAPI/SWAPI";
import classes from "./Header.module.scss";

// const request = await SWapiCharacter({ characterQuantity: 5 } as SWAPIREQUEST);
// console.log(request);

const Header: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.headerTitle}>SWAPI Test WEB APP</h1>
      </div>
    </div>
  );
};

export default Header;
