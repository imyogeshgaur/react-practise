import React from 'react'
import Signup from './components/Signup'
import Courses  from './components/Courses'
import { Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar'

const App = () =>{

  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Signup}></Route>
        <Route exact path="/about" component={Courses}></Route>
      </Switch>
   </>
  );
};

export default App;