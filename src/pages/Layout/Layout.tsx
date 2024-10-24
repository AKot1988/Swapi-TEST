import { FC } from "react";
import { Outlet } from "react-router-dom";
import { footerProps } from "./helper";
import { Header, Footer, Loader } from "../../components";
import classes from "./Layout.module.scss";

const Layout: FC = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Outlet />
      <Footer title={footerProps()} />
    </div>
  );
};

export default Layout;
