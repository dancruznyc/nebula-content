import React, { useState, useEffect } from "react";

function FavColorInput(props) {
  const [color, setColor] = useState("");
  // const [data, setData] = useState("")

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <p>My favorite color is {color}</p>
      <form>
        <label>
          Enter your favorite color:
          <input type="text" value={color} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}

export default FavColorInput;
