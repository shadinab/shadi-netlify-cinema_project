import { Link } from "react-router-dom";
import "../index.css"; // Import your CSS file here
// import NavBar from "./NavBar";
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
          <img src="/public/assets/first page/store.PNG" alt="Movie 1" />
          <h2>store</h2>
        </Link>
        <Link to="/Movies" className="movie-card">
          <img
            src="/public/assets/first page/move theater 02.PNG"
            alt="Movie List"
          />
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
