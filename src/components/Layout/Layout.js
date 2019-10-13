import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import AppInfo from "../AppInfo/AppInfo";
import Rules from "../../articles/Rules";
import PrivacyPolicy from "../../articles/PrivacyPolicy";

const Layout = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/congress-crush-app/" exact component={AppInfo} />
      <Route path="/congress-crush-app/rules" component={Rules} />
      <Route path="/congress-crush-app/privacyPolicy" component={PrivacyPolicy} />
    </Switch>
    <span className="copyright">
      Made by{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/KoshiroKun"
      >
        KoshiroKun
      </a>{" "}
      - 2019
    </span>
  </Router>
);

export default Layout;
