import React from 'react';
import Img1 from '../img/pic4.jpg';
import Img2 from '../img/pic5.jpg';
import Img3 from '../img/pic6.jpg';
import Img4 from '../img/pic7.jpg';
import './Courses.css'

const About = () => {
    return (
        <>
            <div class="row row-cols-1 row-cols-md-2 g-4 my-3 mx-2">
                <div class="col">
                    <div class="card" id="c1">
                        <img src={Img1} class="card-img-top" alt="DSA" />
                        <div class="card-body">
                            <h3 class="card-title">Machine Leraning</h3>
                            <h5>
                                <p class="card-text">₹ 15000</p>
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
                <div class="col">
                    <div class="card" id="c2">
                        <img src={Img2} class="card-img-top" alt="OS" />
                        <div class="card-body">
                            <h3 class="card-title">Cyber Security</h3>
                            <h5>
                                <p class="card-text">₹ 10000</p>
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
                <div class="col">
                    <div class="card" id="c3">
                        <img src={Img3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Web development</h3>
                            <h5>
                                <p class="card-text">₹ 8000</p>
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
                <div class="col">
                    <div class="card" id="c4">
                        <img src={Img4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Digital Marketing</h3>
                            <h5>
                                <p class="card-text">₹ 6000</p>
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
};

export default About;