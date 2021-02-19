import { Route } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import ReviewsForm from "./ReviewForm"


export default function Reviews() {
  const [reviews, setReviews] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const getReviews = async () => {
      const baseURL = `https://api.airtable.com/v0/appCBcRI4QhwKyEEZ/reviews`
      const config = {
        headers: {
          Authorization: `Bearer keyTnwp6eklms4ITA`
        }
      }
      const resp = await axios.get(baseURL, config)
      console.log(resp.data.records)
      setReviews(resp.data.records)
    }
    getReviews()
  }, [toggle])


  return (
    <div>
      <ReviewsForm setToggle={setToggle} />
    </div>
  )
}
