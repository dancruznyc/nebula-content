import "./App.css";
import { useState, useEffect } from "react";
import Person from "./Components/Person/Person";

function App() {
  const [data, setData] = useState({});
  // const json = `{
  //   "employees":[
  //       {
  //         "name": "Micheal Scott",
  //         "username": "M-Scott",
  //         "city": "Scranton",
  //         "state": "Pennsylvania",
  //         "online": false,
  //         "position": "manager",
  //         "age": 31
  //       },
  //       {
  //         "name": "Dwight Schrute",
  //         "username": "D-Schrute",
  //         "city": "Scranton",
  //         "state": "Pennsylvania",
  //         "online": true,
  //         "position": "assistant to the regional manager",
  //         "age": 31
  //       },
  //       {
  //         "name": "James Halpert",
  //         "username": "J-Halpert",
  //         "city": "Scranton",
  //         "state": "Pennsylvania",
  //         "online": false,
  //         "position": "Sales Lead",
  //         "age": 31
  //       },
  //       {
  //         "name": "Toby Flenderson",
  //         "username": "T-Flenz",
  //         "city": "Scranton",
  //         "state": "Pennsylvania",
  //         "online": true,
  //         "position": "HR",
  //         "age": 31
  //       }
  //   ]
  // }`;
  const json = `{
    "employees":[
        {
          "name": "Wolverine",
          "hero": true,
          "team": "Team: X-Men",
          "image": "https://cdn.shopify.com/s/files/1/2059/7683/products/STL146259.jpg?v=1579710078", 
          "year": "First Appearance: 1974",
          "power": "Healing Factor"
        }, 
        { 
          "name": "Spider-Man",
          "hero": true,
          "team": "Team: None",
          "image": "https://m.media-amazon.com/images/I/71YshV0v6IL._AC_SY741_.jpg", 
          "year": "First Appearance: 1962",
          "power": "Spider-Sense, Super Strength, Speed & Agility, Wallcrawling"
        },
        { 
          "name": "Magneto",
          "hero": false,
          "team": "Team: Brotherhood",
          "image": "https://i.pinimg.com/736x/f6/8f/a9/f68fa9283c154f326a830b9c569238f2.jpg", 
          "year": "First Appearance: 1963",
          "power": "Controls Magnatism"
        },
        {
          "name": "Hulk",
          "hero": true,
          "team": "Avengers",
          "image": "https://cdn.europosters.eu/image/750/posters/marvel-comics-incredible-hulk-retro-i11896.jpg", 
          "year": "First Appearance: 1962",
          "power": "Super Strength"
        },
        {
          "name": "Daredevil",
          "hero": true,
          "team": "Defenders",
          "image": "https://pbs.twimg.com/media/EQH1ysWWsAA7QLf?format=jpg&name=4096x4096", 
          "year": "First Appearance: 1964",
          "power": "Powers: Radar, Super Agility"
        },
        { 
          "name": "Doctor Octopus",
          "hero": false,
          "team": "Team: Sinister Six",
          "image": "https://i.pinimg.com/736x/b9/d0/30/b9d03044cecb921ff310eeeaf2b5af16.jpg", 
          "year": "First Appearance: 1963",
          "power": "Mad Genius Scientist"
        },
        {
          "name": "Iron Man",
          "hero": true,
          "team": "Avengers",
          "image": "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/500x659/products/1519690/5825740/GPE4781STD__16914.1626277931.jpg?c=2", 
          "year": "First Appearance: 1970",
          "power": "Genius Tech Engineer"
        },
        { 
          "name": "Thanos",
          "hero": false,
          "team": "Team: None",
          "image": "https://img.beckett.com/images/items_stock/468286/7761786/7761821/front.jpg", 
          "year": "First Appearance: 1973",
          "power": "Controls Magnatism"
        }
    ]
  }`;
  //On Mount
  // Initial Render
  useEffect(() => {
    // Get data from API
    // Parse Data
    // Store data in state
    console.log("Pulling From API");
    const data = JSON.parse(json);
    setData(data);
  }, []);

  console.log(data);
  return (
    <div className="card-container">
      {(data.employees || []).map((person, i) => (
        <Person person={person} key={i} />
      ))}
    </div>
  );
}

export default App;
