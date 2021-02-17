import { Link, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Nav from "./components/Nav"
import Food from "./components/Food"
import axios from "axios"
import Form from "./components/Form"
import { useEffect, useState } from "react"

import './App.css';
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Nutrition from "./components/Nutrition"
import { baseURL, config } from "./services"


function App() {
  const [foods, setFoods] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const getFood = async () => {
      const resp = await axios.get(baseURL, config)
      console.log(resp.data.records)
      setFoods(resp.data.records)
    }
    getFood()
  }, [toggle])

  return (
    <div className="App">

      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route path="/homepage">
        <Nav />
        <Homepage foods={foods} />
      </Route>

      <Route path="/form">
        <Nav />
        <Form setToggle={setToggle}/>
      </Route>

      <Route path="/food/:id">
        <Nav />
        <Food foods={foods} />
      </Route>

      <Route exact path="/nutritionfacts/:id">
        <Nav />
        <Nutrition foods={foods} />
      </Route>
      <Footer />


    </div>
  );
}

export default App;
