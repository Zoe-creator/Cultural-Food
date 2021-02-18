import { Link } from "react-router-dom"
import { baseURL, config } from "../services"
import axios from "axios"


export default function HomeFood(props) {
  const { name, pictureURL, likes } = props.food.fields

  // const opacity = name === "" ? "1" : name === name ? "1" : "0.5";

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

  return (
    <div className="each-food">
      {/* onMouseEnter={() => props.setName(name)}
      onMouseLeave={() => props.setName("")}
      style={{ opacity }} > */}
      <Link className="foods-link" key={props.food.id} to={`/food/${props.food.id}`}>
        <img className="home-image" src={pictureURL} alt={name}
        />

      </Link>
      <div className="short-info">
        <p className="food_name" style={wordStyle}>{name}</p>
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