import { useTranslation } from "react-i18next";
import classes from "./App.module.scss";
import Icon from "./assets/icomoon/icon.js";
import logoibercaja from "./assets/images/logo-ibercaja.png";
import searchicon from "./assets/images/search-icon.svg";
function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className={classes.header}>
        <img className={classes.header_logo} src={logoibercaja}></img>

        <nav className={classes.header_nav}>
          <div>PRODUCTOS</div>
          <div>OPERATIVAS</div>
        </nav>
        <div className={classes.search_input}>
          <Icon icon="search-icon" size={12} color="white" />
          <input placeholder="Busca en ibercaja..." />
        </div>
        <div className={classes.header_notification}>
          <div className={classes.header_notification_count}>2</div>
        </div>
        <div className={classes.header_user_menu}>
          img
          <p>María Salas</p>
          <span className={classes.header_user_menu_icon}>
            <Icon icon="arrow_down" size={25} color="white" />
          </span>
        </div>
      </header>
    </div>
  );
}

export default App;
