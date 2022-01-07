import React from "react";
import AboutMe from "../AboutMe/aboutMe";
import Hobby from "../Hobby/hobby";
import Food from "../Food/food";

function Profile() {
  const handleChange = (event, name) => {
    console.log(name);
    setProfile({ ...profile, [name]: event.target.value });
  };
  return (
    <div>
      <AboutMe name={name} />
      <Hobby hobby={hobby} />
      <Food food={food} />
    </div>
  );
}

export default Profile;
