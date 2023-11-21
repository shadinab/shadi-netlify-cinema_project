import { useEffect, useState } from "react";
import axios from "axios";
import './CinemaSeats.css'

const TicketPurchase = ({ onPurchase }) => {
  // Get the logged-in user's username from local storage
  const getLoggedInUser = JSON.parse(localStorage.getItem("user"));

  const [currentBalance, setCurrentBalance] = useState(null);
  const loggedInUser = getLoggedInUser.username;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API
        const response = await axios.get(
          "https://6529506f55b137ddc83e97ce.mockapi.io/users"
        );

        // Find the user with the matching username
        const user = response.data.find(
          (user) => user.username === loggedInUser
        );

        if (user) {
          // Set the currentBalance in the component state
          setCurrentBalance(user.currentBalance);
        } else {
          console.log(`User ${loggedInUser} not found.`);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [loggedInUser, onPurchase]); // Include loggedInUser in the dependency array

  return (
    <div className="balance-container">
      {currentBalance !== null ? (
        <p className="current_balance1">
          Current Balance for {loggedInUser}: ${currentBalance}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TicketPurchase;
