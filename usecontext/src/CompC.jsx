import React from "react";
import { fname, lname } from "./App";

const ComC = () => {
  return (
    <>
      <fname.Consumer>
        {(fn) => {
          return (
            <lname.Consumer>
              {(ln) => {
                return (
                  <h1>
                    My Name is {fn} {ln}
                  </h1>
                );
              }}
            </lname.Consumer>
          );
        }}
      </fname.Consumer>
    </>
  );
};

export default ComC;
