import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSeatContext } from "../../context/SeatContext";

import "./CinemaSeats.css";

const SeatPurchaseSummary = ({ onPurchase }) => {
  const { selectedSeats, updateTotalCost, totalCost } =
    useSeatContext();

  const seatCost = 40;

  // const [totalCost, setTotalCostLocal] = useState(
  //   selectedSeats.length * seatCost
  // );

  useEffect(() => {
    // Update totalCost whenever selectedSeats changes
    const newTotalCost = selectedSeats.length * seatCost;
    // Call setTotalCost from the parent component
    updateTotalCost(newTotalCost);
  }, [selectedSeats, seatCost, updateTotalCost]);
  const navigate = useNavigate();

  const handleExit = () => {
    // Navigate to the home page or any other route
    navigate("/Movies");
  };

  return (
    <div className="seat-purchase-summary">
      <h2>Seat Purchase Summary</h2>
      <p>Selected Seats: {selectedSeats.length}</p>
      <p>Cost per Seat: ${seatCost}</p>
      <p>Total Cost: ${totalCost }</p>
      <button onClick={onPurchase}>Purchase</button>
      <button className="left" onClick={handleExit}>
        Exit
      </button>
    </div>
  );
};

export default SeatPurchaseSummary;










// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSeatContext } from "../../context/SeatContext";

// import "./CinemaSeats.css";

// const SeatPurchaseSummary = ({ onPurchase }) => {
//   const { selectedSeats, updateTotalCost, totalCost } =
//     useSeatContext();

//   const seatCost = 40;

//   // const [totalCost, setTotalCostLocal] = useState(
//   //   selectedSeats.length * seatCost
//   // );

//   useEffect(() => {
//     // Update totalCost whenever selectedSeats changes
//     const newTotalCost = selectedSeats.length * seatCost;
//     // Call setTotalCost from the parent component
//     updateTotalCost(newTotalCost);
//   }, [selectedSeats, seatCost, updateTotalCost]);
//   const navigate = useNavigate();

//   const handleExit = () => {
//     // Navigate to the home page or any other route
//     navigate("/Movies");
//   };

//   return (
//     <div className="seat-purchase-summary">
//       <h2>Seat Purchase Summary</h2>
//       <p>Selected Seats: {selectedSeats.length}</p>
//       <p>Cost per Seat: ${seatCost}</p>
//       <p>Total Cost: ${totalCost }</p>
//       <button onClick={onPurchase}>Purchase</button>
//       <button className="left" onClick={handleExit}>
//         Exit
//       </button>
//     </div>
//   );
// };

// export default SeatPurchaseSummary;


