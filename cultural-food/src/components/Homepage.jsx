import { Link } from "react-router-dom"
import plus from "./images/plus.jpg"

export default function Homepage(props) {
  const imgStyle = {
    width: "200px",
    height: "300px",
  }
  return (
    <div className="foods-link">
      {props.foods.map((food) => (
        <div className="eachFood">
          <Link key={food.id} to={`/food/${food.id}`}>
            <img style={imgStyle} src={food.fields.pictureURL} alt={food.fields.name} />
          </Link>
          <p className="food_name">{food.fields.name}</p>
        </div>
      ))
      }
      <Link to="/form">
        <img style={imgStyle} src={plus} alt="add another foodie" />
      </Link>

    </div>
  )

}