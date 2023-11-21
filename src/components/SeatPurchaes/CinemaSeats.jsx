import { useEffect } from "react";
import axios from "axios";
import "./CinemaSeats.css";
import { toast } from "react-toastify";
import { useSeatContext } from "../../context/SeatContext";

import TicketPurchase from "./TicketPurchase";
import SeatPurchaseSummary from "./SeatPurchaseSummary";

const CinemaSeats = () => {
  const totalRows = 6;
  const totalColumns = 10;

  const {
    selectedSeats,
    totalCost,
    updateSelectedSeats,
    newSeats,
    updateNewSeats,
  } = useSeatContext();

  const handleSeatClick = (row, column) => {
    const seatId = `${row}-${column}`;
    if (selectedSeats.includes(seatId)) {
      updateSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      updateSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handlePurchase = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("user"));
      const response = await axios.get(
        `https://6529506f55b137ddc83e97ce.mockapi.io/users/${userId.id}`
      );

      const currentUser = response.data;
      const updatedBalance = currentUser.currentBalance - totalCost;
      const newSeats = [
        ...new Set([...currentUser.userSeats, ...selectedSeats]),
      ];

      if (selectedSeats.length === 0) {
        toast.error("Error: no seat selected");
        return;
      }
      if (
        newSeats.length !==
        currentUser.userSeats.length + selectedSeats.length
      ) {
        toast.error("Error: Duplicate seats are not allowed");
        return;
      }
      const updatedUserData = {
        ...currentUser,
        currentBalance: updatedBalance,
        userSeats: newSeats,
      };

      await axios.put(
        `https://6529506f55b137ddc83e97ce.mockapi.io/users/${userId.id}`,
        updatedUserData
      );

      const userString = JSON.stringify(updatedUserData);
      localStorage.setItem("user", userString);

      console.log("Purchase completed. Updated Balance:", updatedBalance);
      toast.success("Purchase success");

      // Reset selected seats after the purchase is completed
      // updateSelectedSeats([]);
      updateSelectedSeats([]);
      updateNewSeats((newSeats) => [
        ...new Set([...newSeats, ...selectedSeats]),
      ]);
    } catch (error) {
      console.error("Error completing purchase:", error.message);
    }
  };

  useEffect(() => {
    const fetchUserSeats = async () => {
      try {
        const userId = JSON.parse(localStorage.getItem("user"));
        const response = await axios.get(
          `https://6529506f55b137ddc83e97ce.mockapi.io/users/${userId.id}`
        );

        const userSeatsData = response.data.userSeats;
        // updateSelectedSeats([...userSeatsData]);
        updateNewSeats([...userSeatsData, ...selectedSeats]);
        // console.log("User Seats:", numerBuyed);
      } catch (error) {
        console.error("Error fetching userSeats:", error.message);
      }
    };

    // Fetch user seats when the component mounts
    fetchUserSeats();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  const renderSeats = () => {
    const seats = [];

    for (let row = 1; row <= totalRows; row++) {
      for (let column = 1; column <= totalColumns; column++) {
        const seatId = `${row}-${column}`;
        const isSeatSelected = selectedSeats.includes(seatId);
        const isSeatPurchased = newSeats.includes(seatId);

        seats.push(
          <div
            key={seatId}
            className={`seat ${isSeatSelected ? "selected" : ""} ${
              isSeatPurchased ? "purchased" : ""
            }`}
            onClick={() => handleSeatClick(row, column)}
          >
            {row}-{column}
          </div>
        );
      }
    }

    return seats;
  };

  return (
    <div className="cinema-hall">
      <div className="screen"></div>
      <div className="cinema-seats-container">{renderSeats()}</div>
      <SeatPurchaseSummary onPurchase={handlePurchase} />
      <TicketPurchase onPurchase={handlePurchase} />
    </div>
  );
};

export default CinemaSeats;
