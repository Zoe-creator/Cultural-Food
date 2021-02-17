import { Link } from "react-router-dom"
import plus from "./images/plus.jpg"
import { useState } from "react"


export default function HomeFood(props) {
  const { name, pictureURL } = props.food.fields


  // const opacity = name === "" ? "1" : name === name ? "1" : "0.5";

  return (
    <div className="each-food">
      {/* onMouseEnter={() => props.setName(name)}
      onMouseLeave={() => props.setName("")}
      style={{ opacity }} > */}
      <Link className="foods-link" key={props.food.id} to={`/food/${props.food.id}`}>
        <img className="home-image" src={pictureURL} alt={name}
        />
      
      </Link>
  <p className="food_name">{name}</p>
    </div>

  )

}