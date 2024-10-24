import { FC, useState, useEffect } from "react";
import { homeInfo } from "./helper";
import { COMMON_ROUTES } from "../../router/routesNames";
import { CustomNavLink } from "../../components";
import classes from "./Home.module.scss";


const Home: FC = () => {

  return (
    <div className={classes.homePageContainer}>
      <h1 className={classes.homePageTitle}>Home</h1>
      <p className={classes.homePageDescription} children={homeInfo.about}/>
      <CustomNavLink title={'Go to the characters'} path={`${COMMON_ROUTES.CHARACTERSLIST}/1`}/>
    </div>
  );
};

export default Home;
