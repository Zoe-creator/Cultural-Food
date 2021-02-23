import { Link } from "react-router-dom"
import { baseURL, config } from "../../services"
import axios from "axios"
import { useState } from "react"
import "./homepage.css"
import error404pic from "../../images/404.jpg"


export default function HomeFood(props) {
  const { name, pictureURL, likes } = props.food.fields
  const [showme, setShowme] = useState(false)

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
console.log(props.food.fields.description)
  function showDescription() {
    return (
      <p>{props.food.fields.description.length>20?props.food.fields.description.slice(0, 20):props.food.fields.description}...</p>
    )
  }
//if no valid pic url,show404error
  function defaultSrc(e) {
    e.target.src=error404pic
  }
  return (
    <div className="each-food"
      onMouseEnter={() => props.setDecription(props.food.fields.description)}
      onMouseLeave={() => props.setDecription("")}
      style={{ opacity }} >

      <Link className="foods-link" key={props.food.id} to={`/food/${props.food.id}`}>
        <img className="home-image" src={pictureURL} alt={name} onError={defaultSrc}
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
      <div className="home-description">

        {showme ? showDescription() : null}

      </div>


    </div>

  )

}