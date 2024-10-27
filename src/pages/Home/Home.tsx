import { FC } from "react";
import { useNavigate } from "react-router";
import { homeInfo } from "./helper";
import { COMMON_ROUTES } from "../../router/routesNames";
import classes from "./Home.module.scss";

// const edfdf = await fetch(`https://swapi.dev/api/people/`);
// console.log(edfdf);

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.homePageContainer}>
      <h1 className={classes.homePageTitle}>Home</h1>
      <p className={classes.homePageDescription} children={homeInfo.about} />
      <button
        onClick={() => {
          navigate(`${COMMON_ROUTES.CHARACTERSLIST}/1`);
        }}
      >
        Go to the characters
      </button>
    </div>
  );
};

export default Home;
