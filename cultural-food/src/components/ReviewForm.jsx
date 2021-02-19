import axios from "axios"
import { useState } from "react"
import { baseURL, config } from "../services"
import {useParams} from "react-router-dom"

//edit,submit form
export default function Form(props) {
  const [reviewer, setReviewer] = useState("")
  const [reviews, setReviews] = useState('')
  const [review, setReview] = useState([])

  // const history = useHistory()
  const params = useParams()
  console.log(params.id)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      reviewer,
      reviews,
    }


    console.log(fields)

    const baseURL2 = `https://api.airtable.com/v0/appCBcRI4QhwKyEEZ/reviews`
    const config2 = {
      headers: {
        Authorization: `Bearer keyTnwp6eklms4ITA`
      }
    }
    await axios.post(baseURL2, { fields }, config2)

    props.setToggle((cur) => !cur)
    // history.push(`/`)
  }

  return (
    <form onSubmit={handleSubmit} >
      <input type="text" value={reviewer} onChange={(e) => setReviewer(e.target.value)} />
      <input value={reviews} onChange={(e) => setReviews(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}