import { Link } from "react-router-dom"
import { baseURL, config } from "../services"
import axios from "axios"
import { useState } from "react"


export default function HomeFood(props) {
  const { name, pictureURL, likes } = props.food.fields
  const [showme,setShowme]=useState(false)

  const opacity = props.description === "" ? "1" :
    props.description === props.food.fields.description ? "1" : "0.5";

  const wordStyle = {
    color: "red",
    fontWeight: "bolder",
    fontSize: "16px"
  }
  async function letgo() {
    const foodURL = `${baseURL}/${props.food.id}`
    await axios.delete(foodURL, config)
    props.setToggle((cur) => !cur)
  }

  function showDescription(){
    return (
      <p className="home-description">{ props.food.fields.description}</p>

    )
  }

  return (
    <div className="each-food"
      onMouseEnter={() => props.setDecription(props.food.fields.description)}
      onMouseLeave={() => props.setDecription("")}
      style={{ opacity }} >
         <p className="home-description">
{showme?showDescription():null} 
      </p>
      <Link className="foods-link" key={props.food.id} to={`/food/${props.food.id}`}>
        <img className="home-image" src={pictureURL} alt={name}
          onMouseEnter={() => setShowme(true)}
          onMouseLeave={() => setShowme(false)} />
      </Link>
 
      <div className="short-info">
        <p className="food-names" style={wordStyle}>{name.toUpperCase()}</p>
        <p className="food-likes" style={wordStyle}> {likes}
          <span style={{ fontSize: "20px" }}>👍</span></p>
      </div>

      <div>
        <button onClick={letgo} className="delete-button">Delete</button>
        <Link to={`/edit/${props.food.id}`} >
          <button className="edit-button">Edit</button>
        </Link>
      </div>



    </div>

  )

}