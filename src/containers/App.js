import React, { useState,useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { robots } from "../robots";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([])
  const [searchfield,setSearchField] = useState('')
  const [count] = useState(0)
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((Response) => Response.json())
        .then((users) => {
          setRobots(users);
        })
  },[count])


  const onSearchChange = (event) => {
    console.log("🚀 ~ file: App.js:24 ~ App ~ event:", event.target.value);
    setSearchField(event.target.value);
    // console.log(this.searchfield);
  }
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox
          searchChange={onSearchChange}
          searchfield={searchfield}
        />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
export default App;
