import { FC } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.scss";


const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.headerTitle} onClick={()=>{navigate('/')}} >SWAPI Test WEB APP</h1>
      </div>
    </div>
  );
};

export default Header;
