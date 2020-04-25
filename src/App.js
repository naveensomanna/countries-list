import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Country from "./components/Country/Country";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:id">
          <Country />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
