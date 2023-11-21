
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import MovieList from "./components/MovieList";
import CinemaSeats from "./components/SeatPurchaes/CinemaSeats";
import Vip from "./components/vip";
import ScreenX from "./components/ScreenX";
import Imax from "./components/Imax";
import C4dx from "./components/C4dx";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Store from "./components/StoreComp/Store";
import NavbarForAll from "./components/Layout/NavbarForAll";
const App = () => {
  return (
    <Router>
      <NavbarForAll>
        <Routes>
          <Route path="/login" element={<HomePage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/Movies" element={<MovieList />} />
          {/*movie in movies list*/}

          <Route path="/movie/:movieId" element={<CinemaSeats />} />

          {/* navbar */}
          {/* <Route path="/signin" element={<div>signin</div>} /> */}
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route
            path="/"
            element={
              <div>
                <Login></Login>
              </div>
            }
          />
          <Route path="/vip" element={<Vip />} />
          <Route path="/screenx" element={<ScreenX />} />
          <Route path="/4dx" element={<C4dx />} />
          <Route path="/imax" element={<Imax />} />
        </Routes>
      </NavbarForAll>
    </Router>
  );
};

export default App;
