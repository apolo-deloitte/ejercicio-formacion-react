import { useTranslation } from "react-i18next";
import classes from "./App.module.scss";
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
          <img src={searchicon}></img>
          <input placeholder="componente de busqueda" />
        </div>
      </header>
    </div>
  );
}

export default App;
