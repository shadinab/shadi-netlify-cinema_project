
import { NavLink } from "react-router-dom";
import "../index.css"; // Import your CSS file for styling
import Navbar from "/public/assets/first page/navbar/movies types images/Navbar.jpg";

// home page navbar

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <img src={Navbar} alt="Navbar logo" />
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink
          to="/store"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          store
        </NavLink>

        <NavLink
          to="/Movies"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          MovieList
        </NavLink>

        <NavLink
          to="/screenx"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          ScreenX
        </NavLink>
        <NavLink
          to="/vip"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          VIP
        </NavLink>
        <NavLink
          to="/4dx"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          4DX
        </NavLink>
        <NavLink
          to="/imax"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          IMAX
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;







