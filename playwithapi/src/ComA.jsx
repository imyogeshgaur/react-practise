import React,{useState,useEffect} from "react";
import axios from 'axios'
const ComA = () => {

    const [num, setNum] = useState()
    const [name,setName] = useState()
    const [moves,setMoves] = useState();

    
    useEffect(() => {
      async function getData(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        setName(response.data.name)
        setMoves(response.data.moves.length)
      }
      getData();
    })
  return (
    <>
    <h1>You choose {num} value</h1>

    <h1>My Name is <span style={{color:"Red"}}> {name}</span> </h1>

     <h1>My moves are <span style={{color:"Red"}}> {moves}</span> </h1>
      <select value={num} onChange={(event)=>{
          setNum(event.target.value)
      
      }}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default ComA;
