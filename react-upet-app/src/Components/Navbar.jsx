import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";


function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-links">
            <Link to="/" className="homepage-link"><img className="home-png" src="/images/home-page.png"/></Link>
            <div className="nav-pets-adopt">
              <Link to="/pets" className="pets-link"> PETS</Link>
              <p>|</p>
              <Link to="/adopt" className="adopt-link"> ADOPT </Link>
            </div>
        </div>
        <div>
            <Link to="/" className="user-img-link"><img className="user-png" src="/images/user.png"/></Link>
        </div>
    </nav>
  )
}

export default Navbar

/*function Navbar({ toggleSidebar }) {
  const location = useLocation();
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  const getCurrentLinkText = (pathname) => {
    const routes = {
      "/dashboard": "Cohorts",
      "/students": "Students",
      "/cohorts/details/:cohortId": "Cohort Details",
      "/cohorts/edit/:cohortId": "Edit Cohort",
      "/cohorts/create": "Create Cohort",
      "/students/details/:studentId": "Student Details",
      "/students/edit/:studentId": "Edit Student",
      "/profile": "User Profile",
      "/login": "Log In",
      "/signup": "Sign Up",
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
    <nav className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between h-20 items-center px-4">
        { Left flex container for burger icon and text } // deleted comment here to comment all
        <div className="flex items-center space-x-2 w-1/4">
          <button
            className="flex items-center text-l py-1"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <span className="text-xl">
            {getCurrentLinkText(location.pathname)}
          </span>
        </div>

        { Center flex container for logo } // deleted comment here to comment all
        <div className="flex justify-center w-1/2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        <div className="w-1/4 flex justify-end mr-4">
          {isLoggedIn && (
            <button className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-400" onClick={logOutUser}>Log Out</button>
          )}
          {!isLoggedIn && location.pathname !== "/login" && location.pathname !== "/signup" && (
            <Link to ="/login">
              <button className="px-6 py-1 rounded bg-blue-500 text-white hover:bg-blue-400">Log In</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
*/