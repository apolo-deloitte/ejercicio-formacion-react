import logo from "./logo.svg";
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("layout.text")}
        </a>
      </header>
    </div>
  );
}

export default App;
