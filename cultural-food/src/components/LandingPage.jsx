import { Link } from "react-router-dom"
export default function LandingPage() {



  return (
    <div className="landingpage" >
      <div className="landing-content">
<header className="landing-header">Welcome to Cultural Foodie Page</header>
        <Link className="landing-link" to="/homepage">View All Foodies</Link>

      </div>

    </div>


  )
}