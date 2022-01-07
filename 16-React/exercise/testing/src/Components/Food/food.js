import React, { useState } from "react";

function Food(props) {
  return (
    <div>
      <p>Favorite Food</p>
      <p>My favorite food is {props.food}</p>
    </div>
  );
}

export default Food;
