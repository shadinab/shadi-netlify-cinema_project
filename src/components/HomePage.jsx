import { Link } from "react-router-dom";
import "../index.css"; // Import your CSS file here
// import NavBar from "./NavBar";
import Store from "/public/assets/first page/navbar/movies types images/Store.jpg";
import Theater from "/public/assets/first page/navbar/movies types images/Theater.jpg";

import CurrentBalanceSpecficUser from "./CurrentBalanceSpecficUser/CurrentBalanceSpecficUser";
// home page

const HomePage = () => {
  return (
    <div className="container">
      {/* <NavBar /> */}
      <div className="header">
        <h1>
          Welcome to Our Cinema :
          <CurrentBalanceSpecficUser></CurrentBalanceSpecficUser>
        </h1>
      </div>
      <div className="movie-list">
        <Link to="/Store" className="movie-card">
          <img src={Store} alt="Movie 1" />
          <h2>store</h2>
        </Link>
        <Link to="/Movies" className="movie-card">
          <img src={Theater} alt="Movie List" />
          <h2>Movies</h2>
        </Link>
        {/* <div className="footer">
          <p>&copy; 2023 Our Cinema. All rights reserved.</p>
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
