import React from "react";
import s from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { HashRouter } from "react-router-dom";
import ServerState from "./context/server/ServerState";

const App = () => {
  console.log("reload");

  return (
    <ServerState>
      <HashRouter>
        <div className={s.app}>
          <Main />
          <Footer />
        </div>
      </HashRouter>
    </ServerState>
  );
};

export default App;
