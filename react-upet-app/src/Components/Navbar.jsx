import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/auth.context";


function Navbar({ toggleSidebar }) {

  const location = useLocation();
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  const getCurrentLinkText = (pathname) => {
    const routes = {
      "/login": "",
      "/signup": "",
      "/": "",
      "/pets": "",
      "/pets/:petId": "",
      "/pets/:petId/edit": "",
      "/adopt": "",
      "/user": "",
    };

    for (let route in routes) {
      let regexPattern = new RegExp("^" + route.replace(/:\w+/g, "\\w+") + "$");
      if (regexPattern.test(pathname)) {
        return routes[route];
      }
    }
    return "";
  };

  return (
    <nav className="navbar">
        <div className="navbar-links">
          <Link to="/" className="homepage-link"><img className="home-png" 
          src="/images/home-page.png"/></Link>
        <div className="nav-pets-adopt">
          <Link to="/pets" className="pets-link"> PETS</Link>
          <p>|</p>
          <Link to="/adopt" className="adopt-link"> ADOPT </Link>
        </div>
        </div>
          <div className="sidebar-wrapper">
            <button
              className="sidebar"
              onClick={toggleSidebar}
              >
              ☰
            </button>
            <span className="retrieve-link">
              {getCurrentLinkText(location.pathname)}
            </span>
          </div>
          <div className="logged-in-log-out-wrapper">
            {isLoggedIn?(
            <button className="log-out" onClick={logOutUser}>Log Out</button>
            ): (<Link to ="/login">
            <button className="log-in">Log In</button>
          </Link>)
            }
        </div>
      {/* <div>
        <Link to="/" className="user-img-link"><img className="user-png" src="/images/user.png"/></Link>
      </div> */}
    </nav>
  );
}

export default Navbar;