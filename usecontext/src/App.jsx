import React from 'react'
import { createContext } from 'react';
import ComA from './CompA'

const FirstName = createContext();
const LastName = createContext();
const Age = createContext();
const Hobby = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Yogesh"}>
        <LastName.Provider value={"Gaur"}>
          <Age.Provider value={19}>
            <Hobby.Provider value={"Coding"}>
              <ComA />
            </Hobby.Provider>
          </Age.Provider>
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName, LastName, Age, Hobby }