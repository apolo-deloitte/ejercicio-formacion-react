import React from "react";
import classes from "./Header.module.scss";
import logoibercaja from "../../../assets/images/logo-ibercaja.png";
import avatar from "../../../assets/images/avatar.png";
import { useTranslation } from "react-i18next";
import Icon from "../../../assets/icomoon/icon";
import Input from "../../Input/Input";
import { NavLink } from "react-router-dom";
import SearchBar from "components/SearchBar/SearchBar";
const Header = () => {
  const { t } = useTranslation();
  return (
    <header className={classes.header}>
      <div className={classes.header_logo_bank}>
        <img
          className={classes.header_logo}
          src={logoibercaja}
          alt="Logo ibercaja"
        ></img>
      </div>
      <NavLink className={classes.header_nav}>
        {t("header.btn_operative")}
      </NavLink>
      <NavLink className={classes.header_nav}>
        {t("header.btn_products")}
      </NavLink>

      <div className={classes.header_notification_container}>
        <SearchBar />
        <div className={classes.notification}>
          <div className={classes.header_notification_count}>2</div>
        </div>
      </div>
      <div className={classes.header_user_menu}>
        <div className={classes.header_user}>
          <img src={avatar} alt="usuario" />
          <p className={classes.header_user_name}>María Salas</p>
          <span className={classes.header_user_menu_icon}>
            <Icon icon="arrow_down" size={25} color="white" />
          </span>
        </div>

        <div className={classes.header_user_menu_logo}>LOGOUT</div>
      </div>
      {/* <div className={classes.header_user_menu}>
        <div className={classes.header_user_content}>
          <div className={classes}>
            <img src={avatar} alt="usuario" />
            <p>María Salas</p>
            <span className={classes.header_user_menu_icon}>
              <Icon icon="arrow_down" size={25} color="white" />
            </span>
          </div>
          <div className={classes.header_user_menu_logo}>LOGOUT</div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
