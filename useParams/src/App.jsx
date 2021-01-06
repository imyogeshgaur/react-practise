import React from 'react'
import NavBar from './asset/Navbar'
import  Home  from "./components/Home";
import  Service  from "./components/Service";
import  User  from "./components/User";
import  Contact  from "./components/Contact";
import {Switch,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <NavBar />
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/service/" component={Service}/>
    <Route exact path="/user/:fname/:lname" component={User}/>
    <Route exact path="/contact/" component={Contact}/>
    </Switch>
    </>
  )
}

export default App;

