import React from 'react'
import { FirstName, LastName, Age, Hobby } from './App';

const ComC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <Age.Consumer>
                    {(age) => {
                      return (
                        <Hobby.Consumer>
                          {(hobby) => {
                            return (
                              <h1>My name is {fname} {lname}. My Age is {age} and  my hobby is {hobby}</h1>
                            );
                          }}
                        </Hobby.Consumer>
                      );
                    }}
                  </Age.Consumer>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
}

export default ComC;