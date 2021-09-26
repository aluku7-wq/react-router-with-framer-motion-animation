import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Car from "./components/Car";
import Cars from "./components/Cars";
import "./App.css";
import Navigation from "./components/Navigation";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Cars} />
          <Route exact path="/car/:id" component={Car} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
