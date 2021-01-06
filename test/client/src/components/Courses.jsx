import React from 'react';
import Card from './Card';
import Data from './data';
import './Courses.css'

const About = () => {
    return (
        <>
            {Data.map((val) => {
                console.log(val);
                return (
                    <Card
                        imgsrc={val.imgsrc}
                        title={val.title}
                        price={val.price}
                    />
                );
            })}
        </>
    );
};

export default About;