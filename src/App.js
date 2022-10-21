import { useTranslation } from "react-i18next";
import classes from "./App.module.scss";
import Icon from "./assets/icomoon/icon.js";
import logoibercaja from "./assets/images/logo-ibercaja.png";
import avatar from "./assets/images/avatar.png";
function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className={classes.header}>
        <div className={classes.header_logo_bank}>
          <img className={classes.header_logo} src={logoibercaja}></img>
        </div>
        <nav className={classes.header_nav}>
          <div>PRODUCTOS</div>
          <div>OPERATIVAS</div>
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
              <input placeholder="Busca en ibercaja..." />
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
            <div class="App_header_logo_menu__GDGbX">LOGO</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
