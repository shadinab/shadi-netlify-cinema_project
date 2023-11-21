import "./MovieTypes.css";
import ImaxImage from "/public/assets/first page/navbar/movies types images/ImaxImage.jpg";
import { useNavigate } from "react-router-dom";

const Imax = () => {

   const navigate = useNavigate();

   const handleExit = () => {
     // Navigate to the home page or any other route
     navigate("/login");
   };

  return (
    <div className="imax-container">
      <img src={ImaxImage} alt="IMAX" className="imax-image" />
      <div className="imax-content">
        <h2>IMAX - The Ultimate Cinema Experience</h2>
        <p>
          IMAX is the largest cinema experience in the world! IMAX technology
          enables the most advanced 3D and 2D projection in the world. The
          unique geometry of the IMAX theater, combined with the distinctive
          projection equipment and powerful sound, creates a breathtakingly
          lifelike experience. The investment in an IMAX theater is more than 15
          times that of a regular cinema hall. IMAX made its debut in the 1960s
          as the largest film presentation format in the world. It was the first
          technology that allowed projection much larger than what a regular
          film projector could achieve. Throughout its years of operation, IMAX
          maintained exceptional technological superiority without competition
          in any aspect of projection. IMAX reached its technological peak about
          four years ago when it introduced digital IMAX, undoubtedly the
          innovative and leading way to present movies worldwide.
        </p>
        <button onClick={handleExit}>Exit to HomePage</button>
      </div>
    </div>
  );
};

export default Imax;
