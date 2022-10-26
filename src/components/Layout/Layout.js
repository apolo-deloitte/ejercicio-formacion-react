import React from "react";
import Header from "./Header/Header";
import classes from "./Layout.module.scss";
import MainDashboard from "./MainDashboard";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <Header></Header>
      <MainDashboard />
      <footer>FOOTER</footer>
    </div>
  );
};

export default Layout;
