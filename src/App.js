import React from "react";

import { Switch, Route } from "react-router-dom";
import { Home } from "./Component/Home/HomePage";
import AboutPage from "./Component/About/AboutPage";
import { Project} from "./Component/Project/Project";
import { ContactPage } from "./Component/Contact/ContactPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/home">
        <Home/>
      </Route>

      <Route path="/about">
        <AboutPage />
      </Route>

      <Route path="/projects">
       <Project/>
      </Route>

      <Route path="/contact">
       <ContactPage/>
      </Route>
    </Switch>
  );
};

export default App;