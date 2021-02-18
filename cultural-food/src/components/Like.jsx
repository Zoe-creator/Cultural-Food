import { useParams, useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import { baseURL, config } from "../services"
import axios from "axios"

export default function Like(props) {
  const [name, setName] = useState("")
  const [calories, setCalories] = useState(0)
  const [description, setDecription] = useState("")
  const [origin, setOrigin] = useState("")
  const [pictureURL, setPictureURL] = useState("")
  const [fat, setFat] = useState(0)
  const [carbs, setCarbs] = useState(0)
  const [likes, setLikes] = useState(props.food.fields.likes)

  const params = useParams();
  const history = useHistory();
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
      name,
      description,
      calories,
      origin,
      pictureURL,
      fat,
      carbs,
      likes,
    }

    const foodURL = `${baseURL}/${params.id}`
    await axios.put(foodURL, { fields }, config)
    // history.push(`/food/${params.id}`)
  }

  function increment() {
    setLikes(likes + 1)
  }

  const buttonStyle = {
    fontSize: "20px",
    background: "#add8e6",
    borderRadius: "5px",
    width: "120px",
    padding: "5px",
    fontWeight: "bold",
    color: "red"
  }
  return (
    <form onSubmit={handleSubmit} >
      <button style={buttonStyle} type="submit" onClick={increment}> ❤ like {likes}</button>
    </form>
  )
}