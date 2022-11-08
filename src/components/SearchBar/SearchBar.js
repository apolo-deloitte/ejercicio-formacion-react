import React from "react";
import Icon from "assets/icomoon/icon";
import Input from "components/Input/Input";
import classes from "./SearchBar.module.scss";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.search_input}>
      <Icon
        icon="search-icon"
        size={18}
        color="white"
        className={classes.icon_search}
      />
      <Input style={classes.input} placeholder={t("header.input_search")} />
    </div>
  );
};

export default SearchBar;
