import React, { useState, useLayoutEffect } from 'react';

const App = () =>
{

  let bgcolor = "purple"; 
  const[currentColor,finalColor] = useState(bgcolor);
  const[textin,updateText] = useState('Magic Button')

  const updateColor = () =>{
    bgcolor = "red";
    finalColor(bgcolor)
    updateText('WoW !!! 😯');

  }
  const backToNormal = () =>{
    bgcolor = "purple";
    finalColor(bgcolor)
    updateText('Back !!! 😎')
  }
  const updateColor2 = () =>{
    bgcolor = "green";
    finalColor(bgcolor)
    updateText('Amazing !!! 👍');

  }
  const updateColor3 = () =>{
    bgcolor = "pink";
    finalColor(bgcolor)
    updateText('Yeahh !!! 💯');

  } 
  return(
     <>
     <div style={{backgroundColor:currentColor}}>
     <button onMouseEnter={updateColor}  onMouseLeave={backToNormal} onDoubleClick={updateColor2} onClick={updateColor3} style={{backgroundImage:useLayoutEffect}}> {textin}</button>
     </div>
     </>
   );
}

export default App;
