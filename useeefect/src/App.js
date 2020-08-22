import React, { useState, useEffect } from "react";
// const title = document.getElementById("title");

const App = () => {
  const [num, setNum] = useState(0);

  const Change = () => {
    setNum(num + 1);
  };
  useEffect(() => {
    return () => {
      // title.innerText = `You Clicked the Button ${num + 1} times`;
      document.title=`You Clicked the Button ${num + 1} times`

    };
  }, [num]);

  return (
    <>
      <button onClick={Change} style={{ padding: "10px" }}>
        {" "}
        Click me {num}
      </button>
    </>
  );
};

export default App;
