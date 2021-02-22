import github from "../../images/github.png"
import linkin from "../../images/linkin.jpeg"
import "./footer.css"

export default function Footer() {
  const img = {
    width: "30px",
    height: "30px",
    textAlign: "center",
  }

  return (
    <footer >
      <div className="footer">
        <div >
          <a target="_blank" href="https://github.com/Zoe-creator/Cultural-Food">
            <img src={github} style={img} /> </a>
        </div>
        <div >
          <a target="_blank" href="https://www.linkedin.com/in/zoe-zhenwen-li-65343a179/">
            <img src={linkin} style={img} /> </a>
        </div>
      </div>

    </footer>
  )
}