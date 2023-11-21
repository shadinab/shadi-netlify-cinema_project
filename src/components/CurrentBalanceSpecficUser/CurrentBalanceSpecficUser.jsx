import { useState, useEffect } from "react";

const CurrentBalanceSpecficUser = () => {
  const [currentBalance, setCurrentBalance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from local storage
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.currentBalance !== undefined) {
      // Set the current balance to the user's currentBalance property
      setCurrentBalance(user.currentBalance);
      setLoading(false);
    } else {
      // Handle the case when user data is not found in local storage
      setLoading(false);
    }
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  if (loading) {
    // Show a loading message while the data is being fetched
    return <div>Loading...</div>;
  }

  if (currentBalance === null) {
    // Handle the case when user data is not found in local storage
    return <div>User data not found. Please check your storage.</div>;
  }

  return <div>Balance: {currentBalance} ILS</div>;
};

export default CurrentBalanceSpecficUser;
