import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link
            to="/pets"
            className={location.pathname === "/pets" ? "active" : ""}
          >
            Pets
          </Link>
        </li>
        <li>
          <Link
            to="/user"
            className={location.pathname === "/user" ? "active" : ""}
          >
            User
          </Link>
        </li>
        <li>
          Logout
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
