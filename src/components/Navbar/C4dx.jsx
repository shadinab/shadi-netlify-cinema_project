import "./MovieTypes.css";
import C4dxImage from "../../../public/assets/first page/navbar/movies types images/C4dxImage.jpg";
import { useNavigate } from "react-router-dom";

const C4dx = () => {
    const navigate = useNavigate();

    const handleExit = () => {
      // Navigate to the home page or any other route
      navigate("/login");
    };
  return (
    <div className="imax-container">
      <img src={C4dxImage} alt="IMAX" className="imax-image" />
      <div className="imax-content">
        <h2>The 4DX hall presents movies in four dimensions</h2>
        <p>
          4dx The 4DX hall presents, for the first time in Israel movies in four
          dimensions – in 2D and 3D* with an additional dimension of sensation.
          This is an additional step in enhancing the cinematic experience so
          that the viewer feels inside the movie. Effects of the 4DX Hall In
          addition to moving seats perfectly synchronized with the plot on the
          screen, the 4DX hall features special effects to enhance the
          experience: wind, water, lighting, and scents that take the viewer on
          a one-time journey along with the movies hero. Motion: Seats move
          sideways, up and down, and forward and backward, according to the
          movies plot. Wind: From a powerful gust to a light breeze. Scents: A
          variety of scents, from the smell of explosions to the aroma of hot
          coffee. Water: From a gentle mist in the early morning hours to water
          droplets sprayed during a boat ride. Lighting: Lightning and
          thunderstorms come to life in the cinema hall. *Not all effects are
          activated for every movie. The decision regarding the combined effects
          in the movie is subject to the discretion of 4DX engineers in Korea in
          collaboration with movie producers. For your safety! Watching a movie
          in the 4DX hall is not allowed for pregnant women, children under 4
          years old, or individuals who are shorter than 100 cm, epileptics,
          people with high blood pressure, those weighing over 120 kg,
          individuals with heart and/or back problems, as well as any other
          serious medical condition. Children aged 4-7 are allowed to enter the
          hall only when accompanied by an adult. Enjoy your viewing!
        </p>
        <button onClick={handleExit}>Exit to HomePage</button>
      </div>
    </div>
  );
};

export default C4dx;
