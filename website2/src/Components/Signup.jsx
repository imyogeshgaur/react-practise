import React from 'react'
const Signup = () => {
  return (
    <>
      <div className="container mb-4 col-md-6">
        <h1 style={{ display: "grid", placeItems: "center" }}>
          Register Here
         </h1>
        <div className="mb-3">
          <label for="fname" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="fname"
            placeholder="Enter Your First Name"
          />
        </div>
        <div className="mb-3">
          <label for="lname" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lname"
            placeholder="Enter Your Last Name"
          />
        </div>
        <div className="mb-3">
          <label for="rollno" className="form-label">Roll Number</label>
          <input
            type="text"
            className="form-control"
            id="rollno"
            placeholder="Enter Your Roll Number"
          />
        </div>
        <div className="mb-3">
          <label for="branch" className="form-label">Branch</label>
          <input
            className="form-control"
            list="datalistOptions"
            id="branch"
            placeholder="Enter Your Branch"
          />
          <datalist id="datalistOptions">
            <option value="Civil"></option>
            <option value="Computer Science"></option>
            <option value="Information Technology"></option>
            <option value="Electronics and Communication"></option>
            <option value="Mechanical"></option>
          </datalist>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label"
          >Your Custom Username</label
          >
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Username"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label"
          >Your Custom Password</label
          >
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="container my-20" style={{textAlign:"center",padding:40}}>
        <button id="submit" className="btn btn-danger">
          Sign Up
        </button>
      </div>
      </div>
    </>
  );
}

export default Signup;