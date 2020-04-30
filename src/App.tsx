import React from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";

import Home from "./Views/Home";
import About from "./Views/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home}></Route>
      </Switch>
      <Switch>
        <Route path="/about" component={About}></Route>
      </Switch>
    </Router>
  );
}

export default App;
