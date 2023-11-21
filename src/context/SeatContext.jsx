import { createContext, useContext, useState } from "react";

const SeatContext = createContext();

export const SeatProvider = ({ children }) => {
  const [totalCost, setTotalCost] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [newSeats, setNewSeats] = useState([]);

  const updateTotalCost = (newTotalCost) => {
    setTotalCost(newTotalCost);
  };

  const updateSelectedSeats = (newSelectedSeats) => {
    setSelectedSeats(newSelectedSeats);
  };

  const updateNewSeats = (purchsedSeat) => {
    setNewSeats(purchsedSeat);
  };

  return (
    <SeatContext.Provider
      value={{
        totalCost,
        selectedSeats,
        updateTotalCost,
        updateSelectedSeats,
        newSeats,
        updateNewSeats
      }}
    >
      {children}
    </SeatContext.Provider>
  );
};
export const useSeatContext = () => {
  return useContext(SeatContext);
};
