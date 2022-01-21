import React from "react";
import "./Person.css";

export default function Person(props) {
  const { year, image, name, team, power, hero } = props.person;
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <h1>{name}</h1>
          <p>{team}</p>
          <p>{year}</p>
          <p>{power}</p>
          <p>{hero ? "Hero" : "Villain"}</p>
        </div>
      </div>
    </div>
  );
}
