import React,{useState} from 'react'
import './App.css'

const App = () =>{
    const state = useState()

const[count,setCount] = useState(0);
const IncreaseNumber = () =>{
    // console.log(state)
    setCount(count+1)
}
const DecreaseNumber = () =>{
    // console.log(state)
    setCount(count-1)
}
    return(
        <>
          <h1 id= 'number'>{count}</h1>
          <button  id='button1' onClick={IncreaseNumber}>Increase</button>
          <button id ='button2' onClick={DecreaseNumber}>Decrease</button>
        </>
    );
}

export default App;