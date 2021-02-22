import { Route } from "react-router-dom"
import LandingPage from "./components/landingPage/LandingPage"
import Nav from "./components/navbar/Nav"
import Food from "./components/food-details/Food"
import axios from "axios"
import Form from "./components/form/Form"
import { useEffect, useState } from "react"
import './App.css';
import Footer from "./components/footer/Footer";
import Homepage from "./components/homepage/Homepage";
import Nutrition from "./components/nutrients/Nutrition"
import { baseURL, config } from "./services"


function App() {
  const [foods, setFoods] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const getFood = async () => {
      const resp = await axios.get(baseURL, config)
      setFoods(resp.data.records)
    }
    getFood()
  }, [toggle])

  return (
    <div className="App" >

      <Route exact path="/" >
        <LandingPage />
        <Footer />
      </Route>

      <Route exact path="/homepage" >
        <h1 className="app-header" > Cultural Foodie </h1>
        <Nav />
        <Homepage foods={foods}
          setToggle={setToggle} />

      </Route >

      <Route exact path="/form" >
        <h1 className="app-header" > Cultural Foodie </h1>
        <Nav />
        <Form setToggle={setToggle}
          foods={foods} />
      </Route>

      <Route exact path="/edit/:id" >
        <h1 className="app-header" > Cultural Foodie </h1>
        <Nav />
        <Form setToggle={setToggle} foods={foods} />
      </Route >

      <Route exact path="/food/:id" >
        <h1 className="app-header" > Cultural Foodie </h1>
        < Nav />
        < Food foods={foods} setToggle={setToggle} />
      </Route>

      <Route exact path="/nutritionfacts/:id" >
        <h1 className="app-header" > Cultural Foodie </h1>
        <Nav />
        <Nutrition foods={foods} setToggle={setToggle} />
      </Route >

    </div>
  );
}

export default App;