import React, { useState } from 'react'

const Form = () => {
    const [startMail, endMail] = useState({
        Fname:"",
        Lname:"",
        Radio1:"",
        Radio2:"",
        Radio3:"",
        pass: " "
    });

    const inputEvent = (event) => {
        const value = event.target.value;
        const name = event.target.name;
    
        endMail((preValue) => {
            return{
             ...preValue,
             [name]:value,
            }
         });  
    };

    return (
        <>
            <div class="container my-4">
                <h1>Welcome to Krishna Enginnering College</h1>
                <form action="/" method="GET">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Enter your First Name</label>
                        <input type="name" class="form-control" id="Fname" aria-describedby="emailHelp" name="Fname"
                            onChange={inputEvent} />
                        <small id='small1' class="form-text  text-danger"></small>

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Enter your Last Name</label>
                        <input type="name" class="form-control" id="Lname" name="Lname"
                            onChange={inputEvent} />
                        <small id='small2' class="form-text  text-danger"></small>
                    </div>
                    <h3>choose your branch</h3>
                    <div id="radios">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="Radio1" value="option1" onChange={inputEvent} />
                            <label class="form-check-label" for="exampleRadios1">
                                FrontEnd
                    </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="Radio2" value="option2" onChange={inputEvent} />
                            <label class="form-check-label" for="exampleRadios2">
                                Backend
                    </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="Radio3" value="option3" onChange={inputEvent} />
                            <label class="form-check-label" for="exampleRadios3">
                                Devops
                    </label>
                        </div>
                    </div>
                </form>
                <button type="submit" id="btn" class="btn btn-primary my-2">Submit</button>
            </div>
            <div className="container">
                <div id="display" class="my-4 ">
                    <div id="mail">
                       <h2>{`${startMail.Fname}.`}</h2>
                    </div>
                    <div id="pass">
                      <h2>{`${startMail.pass}`}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;