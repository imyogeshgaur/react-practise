import React, { useState } from "react";
import greeting from "./greeting";
const App = () => {

  const [fullName, setFullName] = useState({
    uname:"Your Username is : ",
    name: "Your full name : ",
    email:"Your Email Address is : ",
    phone:"Your Phone Number is :  ",
  });
  
  const [color, setColor] = useState();

  const clickToSubmit = (event) => {
    event.preventDefault();
    setColor("green");
    alert("Form Submitted !!!");
  };
  
  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
       return{
        ...preValue,
        [name]:value,
       }
    });
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={clickToSubmit}>
          <h1>
            {`${greeting()} Please fill the form `}
          </h1>
          <h2>  
          <p>{` ${fullName.uname}`}</p>
          <p>{` ${fullName.name}`}</p>
          <p>{`${fullName.email}`}</p>
          <p>{`${fullName.phone}`}</p>        
          </h2>
          <input
          type="text"
          placeholder="Enter Your User Name"
          name="uname"
          onChange={inputEvent}
          style={{ width: 200 }}
          autoComplete="off"
        />
        <br />
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            onChange={inputEvent}
            style={{ width: 200 }}
             autoComplete="off"
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            onChange={inputEvent}
            style={{ width: 200 }}
             autoComplete="off"
          />
          <br />
          <input
          type="text"
          placeholder="Enter Your Phone Number"
          name="phone"
          onChange={inputEvent}
          style={{ width: 200 }}
           autoComplete="off"
        />
        <br />
          <button onClick={clickToSubmit} style={{ backgroundColor: color }}>
            Click Me 😎
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
