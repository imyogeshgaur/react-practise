import React, { useState } from 'react'

const App = () => {

  let newTime = new Date().toLocaleTimeString();
  const [cTime, setTime] = useState(newTime);

  const updateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(updateTime,1000)

  return (
    <>
      <h1>{cTime}</h1>
    </>

  );

}


export default App;