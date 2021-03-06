import { Link } from "react-router-dom"
import homeIcon from "../../images/homeIcon.png"
import "./nav.css"

export default function Nav() {
  const img = {
    width: "25px",
    height: "25px",
    float: "left",
  }

  return (
    <nav className="navbar">
      <Link to="/homepage" style={{ textDecoration: "none" }}>
        <img style={img} src={homeIcon} />
          Home </Link>
    </nav>
  )
}