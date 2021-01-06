import React from 'react';
import Navbar from './Components/Navbar';
import Home from  './Components/Home'
import Menu from  './Components/Menu'
import Contact from  './Components/Contact';
import Signup from './Components/Signup'
import {Switch,Route, Redirect} from 'react-router-dom';

const App = ()=>{
  return(
    <>
    <Navbar/>
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/menu" component={Menu}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Redirect to="/"></Redirect>
    </Switch>
    </>
  );
}

export default App;
