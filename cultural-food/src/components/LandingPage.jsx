import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div style={{backgroundImage:`url("https://static.toiimg.com/photo/70189092.cms")`, width:'100%', background:"cover"}}>
      <Link to="/homepage" style={{position:"fixed", top:"50%", left:"50%"}}>Welcome to Cultural Foodie Page</Link>
    </div>
    
  )
}