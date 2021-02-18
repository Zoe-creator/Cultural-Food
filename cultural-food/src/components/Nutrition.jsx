import { useParams } from "react-router-dom"
import { useState } from "react"
import NutrientForm from "./NutrientForm"


export default function Nutrition(props) {
  const [showForm, setShowForm] = useState(false)
  const params = useParams();

  const food = props.foods.find((food) => (
    food.id === params.id
  ))

  if (!food) {
    return (<h4>Loading...</h4>)
  }

  const containerStyles = {
    height: "30px",
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: "5px",
    marginTop: "10%",
  }

  const fillerStylesCalories = {
    height: '100%',
    width: `${parseInt(food.fields.calories) / 2000 * 100}%`,
    backgroundColor: "pink",
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const fillerStylesFat = {
    height: '100%',
    width: `${parseInt(food.fields.fat) / 67 * 100}%`,
    backgroundColor: "pink",
    textAlign: 'right'
  }

  const fillerStylesCarbs = {
    height: '100%',
    width: `${parseInt(food.fields.carbs) / 325 * 100}%`,
    backgroundColor: "pink",
    textAlign: 'right',
  }

  return (
    <div>
      <header className="nutrient-food-name"> {food.fields.name.toUpperCase()}</header>
      <div className="nutrient-info">
        <div className="nutrient-form">
          <button onClick={() => setShowForm(!showForm)}>Something is wrong</button>
          {showForm ? <NutrientForm food={food} setToggle={props.setToggle} /> : null}
        </div>

        <div style={containerStyles} >
          <h3 style={fillerStylesCalories} className="food-calories">{Math.round(parseInt(food.fields.calories) / 2000 * 100)}%</h3>
        </div>
        <h5>{2000 - parseFloat(food.fields.calories)} / 2,000 cals left</h5>

        <div style={containerStyles}>
          <h3 style={fillerStylesFat} className="food-fat">{Math.round(parseInt(food.fields.fat) / 67 * 100)}%</h3>
        </div>
        <h5>Fats: {67 - parseFloat(food.fields.fat)} / 67 g left</h5>

        <div style={containerStyles}>
          <h3 style={fillerStylesCarbs} className="food-carbs">{Math.round(parseInt(food.fields.carbs) / 325 * 100)}%</h3>
        </div>
        <h5>Carborhydrates: {325 - parseFloat(food.fields.carbs)} / 325 g left</h5>
      </div>
    </div>
  )
}