import { Link } from "react-router-dom"

function Homepage() {
  return (
    <div className="home-page">
        <h1 className="home-title">UPet</h1>
        <h2 className="home-description">All about pet friends</h2>
        <img className="home-image" src="/images/home-image.png" />
        <div className="home-buttons">
        <Link to="/pets" className="home-pets-button"> My Pets </Link>
        <Link to="/adopt" className="home-adopt-button"> Adopt </Link>
        </div>
    </div>
  )
}

export default Homepage;