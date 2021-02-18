import { Link } from "react-router-dom"


export default function HomeFood(props) {
  const { name, pictureURL, likes } = props.food.fields

  // const opacity = name === "" ? "1" : name === name ? "1" : "0.5";

  const wordStyle = {
    color: "red",
    fontWeight: "bolder",
    fontSize: "16px"
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
      <p className="food_name" style={wordStyle}>{name}</p>
      <p className="food-likes" style={wordStyle}> {likes}
        <span style={{ fontSize: "20px" }}>👍</span></p>
    </div>

  )

}