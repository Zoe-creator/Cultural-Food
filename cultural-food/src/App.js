import { Route } from "react-router-dom"
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
        <Footer />

      </Route>

      <Route exact path="/homepage">
        <h1 className="app-header">Cultural Foodie</h1>
        <Nav />
        <Homepage foods={foods} setToggle={setToggle}/>
      </Route>

      <Route exact path="/form" >
        <h1 className="app-header">Cultural Foodie</h1>
        <Nav />
        <Form setToggle={setToggle} foods={foods}/>
      </Route>

<Route exact path="/edit/:id">
        <h1 className="app-header">Cultural Foodie</h1>
        <Nav />
        <Form  setToggle={setToggle} foods={foods} />
      </Route>

      <Route exact path="/food/:id">
        <h1 className="app-header">Cultural Foodie</h1>
        <Nav />
        <Food foods={foods} setToggle={setToggle}/>

      </Route>

      <Route exact path="/nutritionfacts/:id">
        <h1 className="app-header">Cultural Foodie</h1>
        <Nav />
        <Nutrition foods={foods} setToggle={setToggle} />
      </Route>

    </div>
  );
}

export default App;
