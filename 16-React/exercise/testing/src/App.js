import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

import FavColorInput from "./Components/Counter/FavColorInput/favColorInput.js";
import AboutMe from "./Components/AboutMe/aboutMe.js";
import Hobby from "./Components/Hobby/hobby.js";
import Food from "./Components/Food/food.js";
import NameInput from "./Components/NameInput/nameInput";
import HobbyInput from "./Components/HobbyInput/hobbyInput";
import FoodInput from "./Components/FoodInput/foodInput";
import Profile from "./Components/Profile/Profile";

function App(props) {
  // const [name, setName] = useState("Daniel");
  // const [hobby, setHobby] = useState("Chess");
  // const [food, setFood] = useState("Pernil");
  const [profile, setProfile] = useState({});
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <form>
        <NameInput setName={setName} name={name} />
        <HobbyInput setHobby={setHobby} hobby={hobby} />
        <FoodInput setFood={setFood} food={food} />
      </form>
      <Profile
        name={profile.name}
        hobby={profile.hobby}
        food={profile.food}
      ></Profile>
    </div>
  );
}

export default App;
