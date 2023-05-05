import React from "react";

export default function MainMenu() {
  return (
    <div className="layout">
      <nav className="mainMenu">
        <a className="mainMenu__item" href="#">
          Qui suis-je ?
        </a>
        <a className="mainMenu__item" href="#">
          Mes Formations
        </a>
        <a className="mainMenu__item" href="#">
          Mes Expériences
        </a>
        <a className="mainMenu__item" href="#">
          Ma Stack
        </a>
      </nav>
    </div>
  );
}
