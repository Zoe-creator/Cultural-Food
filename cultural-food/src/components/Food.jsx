import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"



export default function Food(props) {

  const params = useParams();
  //console.log(params.id)
  const food = props.foods.find((food) => (
    food.id === params.id
  ))

  if (!food) {
    return (<h4>Loading...</h4>)
  }

  return (
    <div className="food-info" key={food.id} >
      <img className="food-pic" src={food.fields.pictureURL} alt={food.fields.name} />
      <h1 className="food-name">Name: {food.fields.name}</h1>
      <h2 className="food-region">Region: {food.fields.origin}</h2>
      <h3 className="food-description">{food.fields.description}</h3>
      <Link to={`/nutritionfacts/${food.id}`}> Nutrient Facts</Link>

      {/* <h4>Reviews: {food.fields.[`reviews (from Reviews)`][0]}</h4> */}
    </div>

  )
}