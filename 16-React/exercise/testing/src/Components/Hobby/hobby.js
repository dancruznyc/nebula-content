import React, { useState } from "react";

function Hobby(props) {
  return (
    <div>
      <p>Hobbies</p>
      <p>My favorite hobby is {props.hobby}</p>
    </div>
  );
}

export default Hobby;
