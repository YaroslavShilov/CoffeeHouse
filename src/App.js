import React from "react";
import s from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import { HashRouter } from "react-router-dom";
import ServerState from "./context/server/ServerState";
import { Route, Switch } from "react-router";
import Home from "./pages/Home/Home";
import OurCoffee from "./pages/OurCoffee";
import Pleasure from "./pages/Pleasure";
import AboutIt from "./pages/AboutIt";
import Page404 from "./pages/Page404/Page404";

const App = () => {
  return (
    <ServerState>
      <HashRouter>
        <div className={s.app}>
          <main>
            <Switch>
              <Route path={"/"} component={Home} exact />
              <Route path={"/ourcoffee"} component={OurCoffee} exact />
              <Route path={"/pleasure"} component={Pleasure} exact />
              <Route path={"/aboutit/:name"} component={AboutIt} exact />
              <Route path={"/"} component={Page404} />
            </Switch>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ServerState>
  );
};

export default App;
