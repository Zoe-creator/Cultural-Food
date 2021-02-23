import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { baseURL, config } from "../../services"
import axios from "axios"
import "./food.css"

export default function Like(props) {

  const [likes, setLikes] = useState(props.food.fields.likes)

  const params = useParams();
  useEffect(() => {
    if (params.id) {
      setLikes(props.food.fields.likes)
    }
  }, [params.id])

  async function handleSubmit(e) {
    e.preventDefault()
    const fields = {
      likes,
    }
    const foodURL = `${baseURL}/${params.id}`
    //use patch to updated one piece of info.
    await axios.patch(foodURL, { fields }, config)
    //connect this all the way to the app.js.
    //so that the like increase even i went back to homepage
    //otherwise i need to do refresh to update.
    props.setToggle((cur) => !cur)
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