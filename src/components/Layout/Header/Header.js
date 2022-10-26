import React from "react";
import classes from "./Header.module.scss";
import logoibercaja from "../../../assets/images/logo-ibercaja.png";
import avatar from "../../../assets/images/avatar.png";
import { useTranslation } from "react-i18next";
import Icon from "../../../assets/icomoon/icon";
import Input from "../../Input/Input";
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
      <nav className={classes.header_nav}>
        <div>{t("header.btn_operative")}</div>
        <div>{t("header.btn_products")}</div>
      </nav>
      <div className={classes.header_user_container}>
        <div className={classes.header_user_content}>
          <div className={classes.search_input}>
            <Icon
              icon="search-icon"
              size={12}
              color="white"
              className={classes.icon_search}
            />
            <Input
              style={classes.input}
              placeholder={t("header.input_search")}
            />
          </div>
          <div className={classes.header_notification_container}>
            <div className={classes.header_notification_content}>
              <div className={classes.header_notification_count}>2</div>
            </div>
          </div>
          <div className={classes.header_user_menu}>
            <img src={avatar} alt="usuario" />
            <p>María Salas</p>
            <span className={classes.header_user_menu_icon}>
              <Icon icon="arrow_down" size={25} color="white" />
            </span>
          </div>
          <div className={classes.header_user_menu_logo}>LOGO</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
