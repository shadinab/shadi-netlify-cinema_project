import "./MovieTypes.css";
import VipImage from "/public/assets/first page/navbar/movies types images/VipImage.jpg";
import { useNavigate } from "react-router-dom";

const Vip = () => {
    const navigate = useNavigate();

  const handleExit = () => {
    // Navigate to the home page or any other route
    navigate("/login");
  };
  return (
    <div className="imax-container">
      <img src={VipImage} alt="IMAX" className="imax-image" />
      <div className="imax-content">
        <h2>vip Come discover the VIP facilities and enjoy</h2>
        <p>
          vip Come discover the VIP facilities and enjoy the perfect leisure
          experience, including a rich dinner, an unlimited cinema snack bar,
          and watching a movie in a private cinema hall with luxurious viewing
          seats, all in one ticket. VIP guests are invited to arrive at the
          facility 45 minutes before entering the movie to enjoy everything the
          VIP area has to offer: starting from a rich and varied seasonal menu
          featuring the finest seasonal ingredients that turn every dish into a
          delightful experience, a free cinema snack bar with hot popcorn and
          crispy nachos just right, and a variety of especially indulgent and
          decadent desserts. Entry to the VIP area is accompanied by a parent
          for customers under 18. * The menu is subject to changes. * The snack
          bar closes half an hour after the start of the last screening.
        </p>
        <button  onClick={handleExit}>
          Exit to HomePage
        </button>
      </div>
    </div>
  );
};

export default Vip;
