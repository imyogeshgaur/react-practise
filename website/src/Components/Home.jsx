import React from "react";
import web from "../images/img2.svg";
import Commom from "../assets/Commom";
const Home = () => {
  return (
    <>
      <Commom
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
