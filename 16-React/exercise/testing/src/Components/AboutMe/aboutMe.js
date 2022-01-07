import React, { useState } from "react";

function AboutMe(props) {
  return (
    <div>
      <p>About me</p>
      <p>My name is {props.name}</p>
    </div>
  );
}

export default AboutMe;
