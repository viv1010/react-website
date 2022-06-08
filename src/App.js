import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import Aboutus from "./pages/About";
import Contact from "./pages/Contactus";
import Service from "./pages/Service";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={Aboutus}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/service" component={Service}/>
          <Route component={Error}/>
      </Switch>
    </>
  );
};
export default App;
