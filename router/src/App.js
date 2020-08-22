import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import Menu from "./Menu";
import User from "./User";
const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path='/user' cpmponent={User}/>
        <Route path ='/user/:fname' component={User}/>
        <Route path="/user/:fname/:lname" component={User} />
        <Route componemt={Error} />
      </Switch>
    </>
  );
};

export default App;
