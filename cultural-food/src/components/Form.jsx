import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { baseURL, config } from "../services"


export default function Form(props) {
  const [name, setName] = useState("")
  const [calories, setCalories] = useState(0)
  const [description, setDecription] = useState("")
  const [origin, setOrigin] = useState("")
  const [pictureURL, setPictureURL] = useState("")
  const [fat, setFat] = useState(0)
  const [carbs, setCarbs] = useState(0)
  const [likes, setLikes] = useState(0)
  

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    const fields = {
      name,
      description,
      calories,
      likes,
      origin,
      pictureURL,
      fat,
      carbs,
    }
    console.log(fields)
    await axios.post(baseURL, { fields }, config)
    props.setToggle((cur) => !cur)
    history.push("./homepage")
  }


  return (
    
    <form onSubmit={handleSubmit} className="form">
      <h2>Submit a New Food</h2>
      <label htmlFor="name">Name: </label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label htmlFor="Description of Food">Description of Food: </label>
      <textarea type="text" value={description} onChange={(e) => setDecription(e.target.value)} ></textarea>
      <br />
      <label htmlFor="Origin of Food">Origin of Food: </label>
      <input type="text"  value={origin} onChange={(e) => setOrigin(e.target.value)} />
      <br />
      <label htmlFor="Valid Image Link">Valid Image Link: </label>
      <input type="text"  value={pictureURL} onChange={(e) => setPictureURL(e.target.value)} />
      <br />
      <label htmlFor="calories of Food">calories of Food: </label>
      <input type="number"  value={calories} onChange={(e) => setCalories(e.target.valueAsNumber)} />
      <br />
      <label htmlFor="fat of Food">Fat of Food: </label>
      <input type="number" value={fat} onChange={(e) => setFat(e.target.valueAsNumber)} />
      <br />
      <label htmlFor="Carbs of Food">carbs of Food: </label>
      <input type="number"  value={carbs} onChange={(e) => setCarbs(e.target.valueAsNumber)} />
      <br/>
      <button type="submit">Add Me!</button>
    </form>
  )
}