import React, { useState } from "react";

function NameInput(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={props.name}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default NameInput;
