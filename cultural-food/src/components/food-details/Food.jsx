import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Like from "./Like"
import "./food.css"

export default function Food(props) {

  const params = useParams();
  const food = props.foods.find((food) => (
    food.id === params.id
  ))
  if (!food) {
    return (<h4>Loading...</h4>)
  }

  return (
    <div className="food-infos" key={food.id} >
      <img className="food-pic" src={food.fields.pictureURL} alt={food.fields.name} />
      <div className="food-info">
        <Like food={food} setToggle={props.setToggle} />
        <button className="nutrient-link-button">
          <Link style={{ textDecoration: "none" }} className="nutrient-Link" to={`/nutritionfacts/${food.id}`}> Nutrient Facts</Link>
        </button>
        <h1 className="food-name">{(food.fields.name).toUpperCase()}</h1>
        <h2 className="food-region">Region: {food.fields.origin}</h2>
        <h3 className="food-description">{food.fields.description}</h3>
      </div>
    </div>

  )
}