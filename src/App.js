import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/home";
import HeaderBar from "./components/header";
import About from "./components/about";
import Resource from "./components/resource";

const App = () => (
  <Router>
    <HeaderBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/resource" component={Resource} />
      <Route exact path="/about" component={About} />
    </Switch>
  </Router>
);

export default App;
