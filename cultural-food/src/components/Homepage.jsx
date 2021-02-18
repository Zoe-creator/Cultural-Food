import { Link } from "react-router-dom"
import plus from "./images/plus.jpg"
import { useState } from "react"
import HomeFood from "./HomeFood"

export default function Homepage(props) {
  const [description, setDecription] = useState("")

  return (
    <div className="food-content">
      {props.foods.map((food) => (
        <HomeFood food={food} description={description} setDecription={setDecription} setToggle={props.setToggle} />
      ))}

      <Link to="/form" className="each-food">
        <img className="home-image" src={plus} alt="add another foodie" />
      </Link>
    </div>
  )

}