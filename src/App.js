import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Country from "./components/Country/Country";
import Header from "./components/Header/Header";

function App() {
  const [darkTheme, setDarkTheme] = useState(getDefaultTheme());

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkTheme));
  }, [darkTheme]);

  function getDefaultTheme() {
    const selectedTheme = JSON.parse(localStorage.getItem("dark"));
    return selectedTheme || false;
  }
  const handleToggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
      <Router>
        <Header
          handleToggleTheme={handleToggleTheme}
          selectedTheme={darkTheme}
        />
        <Switch>
          <Route exact path="/">
            <Home selectedTheme={darkTheme} />
          </Route>
          <Route path="/details/:id">
            <Country selectedTheme={darkTheme} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
