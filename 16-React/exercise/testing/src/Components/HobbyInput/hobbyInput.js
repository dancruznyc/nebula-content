import React, { useState } from "react";

function HobbyInput(props) {
  return (
    <div>
      <input
        type="text"
        value={props.hobby}
        placeholder="Hobby"
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default HobbyInput;
