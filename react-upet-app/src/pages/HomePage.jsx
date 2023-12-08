import { Link } from "react-router-dom"; 
import { AuthContext } from '../Context/auth.context';
import { useContext } from "react";

function HomePage() {
  const {user} = useContext(AuthContext);
  return (
    <div className="home-page">
        <h1 className="home-title">Upet</h1>
        <h2 className="home-description">All about pet friends</h2>
        {/*<img className="home-image" src="/images/home-image.png" />{*/}
        <div className="home-buttons">
        {user? (
        <div><Link to={`${user?._id}/pets`} className="home-pets-button"> MY PETS </Link>
        <Link to="/adopt" className="home-adopt-button"> ADOPT </Link>
        </div>
        ): 
        <div className="loginsignup-button"> 
          <Link to="/login" className="home-adopt-button"> LOGIN </Link>
          <Link to="/signup" className="home-signup-button"> SIGN UP </Link>
          </div>}
        </div>
    </div>
  )
}

export default HomePage;