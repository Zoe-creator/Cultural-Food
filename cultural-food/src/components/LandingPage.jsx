import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import picone from "./images/1.png"
import pictwo from "./images/2.png"
import picfour from "./images/wellcore-foodie.jpg"
import picfive from "./images/5.jpg"
import picthree from "./images/3.jpg"
import picsix from "./images/6.jpg"

export default function LandingPage() {
  const [count, setCount] = useState(0)
  const pics = [picone, pictwo, picfive, picfour, picsix, picthree]

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 6)
      setCount(random)
      return () => clearInterval(interval);
    }, 3000);
  }, [])


  return (
    <div className="landingpage"
      style={{ backgroundImage: `url(${pics[count]})`, transition: "background-image 2s ease-in-out .7s" }}>
      <div className="landing-content">
        <header className="landing-header">Welcome to Cultural Foodie Page</header>
        <Link className="landing-link" to="/homepage">View All Foodies</Link>
      </div>
    </div>
  )
}