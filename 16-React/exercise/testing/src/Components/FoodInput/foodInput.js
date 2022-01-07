import React, { useState } from "react";

function FoodInput(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Food"
        onChange={handleChange}
        value={props.food}
      ></input>
    </div>
  );
}

export default FoodInput;
