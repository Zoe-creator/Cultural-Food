import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
import { baseURL, config } from "../../services"
import "./nutrient.css"

export default function NutrientForm(props) {
  const [calories, setCalories] = useState(0)
  const [fat, setFat] = useState(0)
  const [carbs, setCarbs] = useState(0)
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      setCalories(props.food.fields.calories)
      setFat(props.food.fields.fat)
      setCarbs(props.food.fields.carbs)
    }
  }, [params.id])

  async function handleSubmit(e) {
    e.preventDefault()
    const fields = {
      calories,
      fat,
      carbs,
    }
    const foodURL = `${baseURL}/${params.id}`
    await axios.patch(foodURL, { fields }, config)
    props.setToggle((cur) => !cur)
  }

  return (
    <div>
      <form className="show-me" onSubmit={handleSubmit}>
        <label htmlFor="calories of Food">calories of Food: </label>
        <input type="number" value={calories} onChange={(e) => setCalories(e.target.valueAsNumber)} />
        <br />
        <label htmlFor="fat of Food">Fat of Food: </label>
        <input type="number" value={fat} onChange={(e) => setFat(e.target.valueAsNumber)} />
        <br />
        <label htmlFor="Carbs of Food">carbs of Food: </label>
        <input type="number" value={carbs} onChange={(e) => setCarbs(e.target.valueAsNumber)} />
        <br />
        <button type="submit">Update Nutrient</button>
      </form>
    </div>
  )

}