import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
import { baseURL, config } from "../services"

export default function NutrientForm(props) {
  const [name, setName] = useState("")
  const [calories, setCalories] = useState(0)
  const [description, setDecription] = useState("")
  const [origin, setOrigin] = useState("")
  const [pictureURL, setPictureURL] = useState("")
  const [fat, setFat] = useState(0)
  const [carbs, setCarbs] = useState(0)
  const [likes, setLikes] = useState(0)
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      setLikes(props.food.fields.likes)
      setName(props.food.fields.name)
      setCalories(props.food.fields.calories)
      setDecription(props.food.fields.description)
      setOrigin(props.food.fields.origin)
      setPictureURL(props.food.fields.pictureURL)
      setFat(props.food.fields.fat)
      setCarbs(props.food.fields.carbs)
    }
  }, [params.id])

  async function handleSubmit(e) {
    e.preventDefault()
    const fields = {
      likes,
      name,
      description,
      calories,
      origin,
      pictureURL,
      fat,
      carbs,
    }
    const foodURL = `${baseURL}/${params.id}`
    await axios.put(foodURL, { fields }, config)
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