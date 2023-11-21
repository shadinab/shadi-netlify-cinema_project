import "./MovieTypes.css";
import ScreenxImage from "/public/assets/first page/navbar/movies types images/ScreenxImage.jpg";
import { useNavigate } from "react-router-dom";

const ScreenX = () => {
      const navigate = useNavigate();
      
  const handleExit = () => {
    // Navigate to the home page or any other route
    navigate("/login");
  };

  return (
    <div className="imax-container">
      <img src={ScreenxImage} alt="IMAX" className="imax-image" />
      <div className="imax-content">
        <h2> ScreenX The ScreenX format features three screens</h2>
        <p>
          ScreenX The ScreenX format features three screens that provide viewers
          with a more intense, wider, and much more immersive experience. The
          technology was first introduced in 2012 in Asia (Korea, Japan, and
          China) and quickly became a groundbreaking success. The innovative
          hall offers visitors a panoramic view at 270 degrees, expanding the
          screen onto the walls of the hall and providing a viewing experience
          unlike any other seen in Israel. In the ScreenX hall, top Hollywood
          blockbusters adapted for triangular projection in ScreenX technology
          are showcased. As part of the ScreenX experience, effects and video
          segments are added, appearing on unique screens on the sides of the
          hall in addition to the main screen. These effects enhance the viewing
          experience and are displayed on the side screens only in selected
          segments of the movie (not throughout the entire film), according to
          the decision of the movie creators.
        </p>
        <button onClick={handleExit}>Exit to HomePage</button>
      </div>
    </div>
  );
};

export default ScreenX;
