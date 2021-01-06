import React from 'react';


const Card = (props) => {
    return (
        <>
            <div class="row row-cols-1 row-cols-md-2 g-4 my-3 mx-2">
                <div class="col">
                    <div class="card" id="c1">
                        <img src={props.imgsrc} class="card-img-top" alt="DSA" />
                        <div class="card-body">
                            <h3 class="card-title">{props.title}</h3>
                            <h5>
                                <p class="card-text">₹ {props.price}</p>
                                <label for="courses">Number Of Courses</label>
                                <select id="courses" name="courses">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;