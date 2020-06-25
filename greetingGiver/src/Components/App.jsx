import React, { useState } from 'react'

function App(){

   let newTime = new Date().toLocaleTimeString();
   const[cTime,setTime] = useState(newTime);

   const updateTime = () =>{
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
   }

   setInterval(updateTime,1000);

    let currentTime = new Date().getHours()

    let colorOfText = {}
    let greeting = ''

   if (currentTime >= 1 && currentTime < 12) {
        greeting = 'Good Morning'
        colorOfText.color = 'magenta'
    }
    else if (currentTime >= 12 && currentTime < 20) {
        greeting = 'Good Afternoon'
        colorOfText.color = 'orange'
    }
    else {
        greeting = 'Good Night'
        colorOfText.color = 'purple'
    }
  return (
    <>
    <div id = 'timer'>
    <h1>{cTime}</h1>
     </div>
     <div id= 'happy'>
     <h1>Hello Sir, <span style={colorOfText}>{greeting}</span></h1>
   </div>
    </>
  );
 }

export default App