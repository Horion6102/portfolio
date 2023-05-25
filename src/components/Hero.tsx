import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="hero">
      <div className="row hero__subject">
        <h1>Developpeur </h1>
        <TypeAnimation
          sequence={["FRONTEND", 2000, "REACT", 2000, "NODE.JS", 2000]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          style={{ marginLeft: "2rem" }}
        />
      </div>

      <h1 className="hero__name">Valentin LAUNAY</h1>
    </div>
  );
};

export default Hero;
