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
      <Route path="/" exact component={AppInfo} />
      <Route path="/rules" component={Rules} />
      <Route path="/privacyPolicy" component={PrivacyPolicy} />
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
