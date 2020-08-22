import React,{useState} from 'react';
import Add from '@material-ui/icons/Add';
import Del from '@material-ui/icons/Minimize';

const App = () =>{
  
  const [initial, Change] = useState(0)
  
  const Inc = ()=>{
    Change(initial+1)
  }
  const Dec = () =>{
    if(initial!==0)
    {
      Change(initial-1);
    }
    else
    {
      alert("Minium value 0 can't decrement anymore !!!")
      Change(0)
    }
  }
  return (
    <>
      <div className="outer_div">
        <div className="inner_div">
        <h1> Counter </h1>
        <h1> {initial} </h1>
        <button onClick={Inc}> <Add/> </button>
        <button onClick={Dec}> <Del/></button>
        </div>
      </div>
    </>
  );
}

export default App;
