import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/auth.context";
import Sidebar from "./Sidebar";
import IsPrivate from "./IsPrivate";
import IsAnon from "./IsAnon";


function Navbar({ toggleSidebar }) {

  const location = useLocation();
  const { user, isLoggedIn, logOutUser } = useContext(AuthContext);
  
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
          <div className="home-page-png">
          <Link to="/" className="homepage-link"><img className="home-png" 
          src="/images/home-page.png"/></Link>
          </div>
        <div className="nav-pets-adopt">
          {isLoggedIn?(
          <div className="show-both-pets-and-adopt">
            <Link to={`${user?._id}/pets`} className="pets-link"> PETS </Link>
            <p>|</p>
            <Link to="/adopt" className="adopt-link"> ADOPT </Link>
          </div>
          ): (
          <div className="show-only-adopt">
            <Link to="/adopt" className="adopt-link"> ADOPT </Link>
          </div>
          
          )
          }
        </div>
        </div>
          {/*<div className="sidebar-wrapper">
            <button
              className="sidebar"
              onClick={toggleSidebar}
              >
              ☰
            </button>
            <span className="retrieve-link">
              {getCurrentLinkText(location.pathname)}
            </span>
        </div>*/}
          <div className="logged-in-log-out-wrapper">
            {isLoggedIn?(
            <div className="nav-right-links">
            <button className="log-out" onClick={logOutUser}>LOG OUT</button>
            <p>|</p>
            <Link to="/user" className="user-nav-link"> USER </Link>
            </div>
            ): (
            <div className="logged-out-nav-buttons">
            <Link to ="/login">
              <button className="log-in">LOG IN</button>
            </Link>
            <Link to ="/signup">
            <button className="sign-up">SIGN UP</button>
          </Link>
          </div>)
            }
        </div> 
    </nav>
  );
}

export default Navbar;