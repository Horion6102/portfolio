import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="layoutHero">
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
        <p className="hero__description">
          Jeune diplomé d'une licence professionnel en developpement web
          full-stack, je suis à la recherche d'un poste en tant que développeur
          front end
        </p>
      </div>
      <div className="image">
        <img className="hero__image" src={heroImage} />
      </div>
    </div>
  );
};

export default Hero;
