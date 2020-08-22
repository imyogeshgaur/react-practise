import React from "react";
import ComA from "./CompA";
import { createContext } from "react";

const fname = createContext();
const lname = createContext();

const App = () => {
  return (
    <>
      <fname.Provider value={"Yogesh"}>
        <lname.Provider value={"Gaur"}>
          <ComA />
        </lname.Provider>
      </fname.Provider>
    </>
  );
};

export default App;
export { fname, lname };
