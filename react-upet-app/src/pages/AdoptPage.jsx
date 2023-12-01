import { Link } from "react-router-dom"

function Adoptpage() {
  return (
    <div className="adopt-page">
        <h1 className="adopt-title">Want a new friend?</h1>
        <h2 className="adoptpage-description">Check animals looking for a new home</h2>
        <img className="adopt-apamg-image" src="/images/apamg-png.webp" />
        <Link to="/pets" className="adopt-button"> Apply </Link>
    </div>
  )
}

export default Adoptpage