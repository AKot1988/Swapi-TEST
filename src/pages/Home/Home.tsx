import { FC } from "react";
import { useNavigate, useNavigation } from "react-router";

import { DeathStarLoader } from "../../components";
import { homeInfo } from "./helper";
import { COMMON_ROUTES } from "../../router/routesNames";
import classes from "./Home.module.scss";

const Home: FC = () => {
  const navigate = useNavigate();
  const { state } = useNavigation();

  return (
    <div className={classes.homePageContainer}>
      {state === "loading" ? (
        <DeathStarLoader />
      ) : (
        <>
          <h1 className={classes.homePageTitle}>Home</h1>
          <p
            className={classes.homePageDescription}
            children={homeInfo.about}
          />
          <button
            onClick={() => {
              navigate(`${COMMON_ROUTES.CHARACTERSLIST}/1`);
            }}
          >
            Go to the characters
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
