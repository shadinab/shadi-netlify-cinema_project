import { useEffect } from "react";
import axios from "axios";
import "./CinemaSeats.css";
import { toast } from "react-toastify";
import { useSeatContext } from "../../context/SeatContext";
import { useParams } from "react-router-dom";

import TicketPurchase from "./TicketPurchase";
import SeatPurchaseSummary from "./SeatPurchaseSummary";

const CinemaSeats = () => {
  const {
    totalCost,
    selectedSeats,
    updateSelectedSeats,
    newSeats,
    updateNewSeats,
  } = useSeatContext();

  const { movieId } = useParams();

  const handleSeatClick = (row, column) => {
    const seatId = `${row}-${column}`;
    const isSeatPurchased = newSeats.includes(seatId);

    if (isSeatPurchased) {
      toast.error("Error: Seat already purchased");
      return;
    }
    if (selectedSeats.includes(seatId)) {
      updateSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      updateSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handlePurchase = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("user"));

      if (!userId || !userId.id) {
        console.error("Error: Invalid user data in localStorage");
        return;
      }

      const response = await axios.get(
        `https://655e4f599f1e1093c59ae302.mockapi.io/shadi/${userId.id}`
      );

      const currentUser = response.data;
      const updatedBalance = currentUser.currentBalance - totalCost;

      if (selectedSeats.length === 0) {
        toast.error("Error: no seat selected");
        return;
      }

      if (updatedBalance < 0) {
        toast.error("Error: Insufficient funds");
        return;
      }

      const selectedMovie = currentUser.movies.find(
        (movie) => movie.moviename === movieId
      );



      if (!selectedMovie) {
        const newMovie = {
          moviename: movieId,
          userSeats: selectedSeats,
        };

        const updatedMovies = [...currentUser.movies, newMovie];

        const updatedUserDataWithNewMovie = {
          ...currentUser,
          currentBalance: updatedBalance,
          movies: updatedMovies,
        };

        await axios.put(
          `https://655e4f599f1e1093c59ae302.mockapi.io/shadi/${userId.id}`,
          updatedUserDataWithNewMovie
        );

        const userString = JSON.stringify(updatedUserDataWithNewMovie);
        localStorage.setItem("user", userString);

        console.log(
          "New movie entry created. Updated Balance:",
          updatedBalance
        );
        toast.success("New movie entry created");
      } else {
        const updatedMovie = {
          moviename: movieId,
          userSeats: [...selectedMovie.userSeats, ...selectedSeats],
        };

        const updatedMovies = currentUser.movies.map((movie) =>
          movie.moviename === movieId ? updatedMovie : movie
        );

        const updatedUserData = {
          ...currentUser,
          currentBalance: updatedBalance,
          movies: updatedMovies,
        };

        await axios.put(
          `https://655e4f599f1e1093c59ae302.mockapi.io/shadi/${userId.id}`,
          updatedUserData
        );

        const userString = JSON.stringify(updatedUserData);
        localStorage.setItem("user", userString);

        console.log("Purchase completed. Updated Balance:", updatedBalance);
        toast.success("Purchase success");
      }

      updateSelectedSeats([]);
      updateNewSeats([]);
    } catch (error) {
      console.error("Error completing purchase:", error.message);
    }
  };

  useEffect(() => {
    const fetchUserSeats = async () => {
      try {
        const userId = JSON.parse(localStorage.getItem("user"));
        const response = await axios.get(
          `https://655e4f599f1e1093c59ae302.mockapi.io/shadi/${userId.id}`
        );

        const selectedMovie = response.data.movies.find(
          (movie) => movie.moviename === movieId
        );

        if (selectedMovie) {
          updateNewSeats([...selectedMovie.userSeats]);
        } else {
          updateNewSeats([]);
        }
      } catch (error) {
        console.error("Error fetching userSeats:", error.message);
      }
    };

    fetchUserSeats();
  }, [selectedSeats, movieId]);

  const getSeatClassName = (row, column) => {
    const seatId = `${row}-${column}`;
    const isSeatSelected = selectedSeats.includes(seatId);
    const isSeatPurchased = newSeats.includes(seatId);

    return `seat ${isSeatSelected ? "selected" : ""} ${
      isSeatPurchased ? "purchased" : ""
    }`;
  };

  const renderSeats = () => {
    const seats = [];

    const totalRows = 6;
    const totalColumns = 10;

    for (let row = 1; row <= totalRows; row++) {
      for (let column = 1; column <= totalColumns; column++) {
        const seatId = `${row}-${column}`;

        seats.push(
          <div
            key={seatId}
            className={getSeatClassName(row, column)}
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

/*
      {
    "username": "Shadi2000@gmail.com",
    "password": "GgOoOoDd",
    "currentBalance": 399998780,
    "movies": [
      {
        "moviename": "",
        "userSeats": []
      }
    ],
    "id": "1"
  },
      */

// import { useEffect } from "react";
// import axios from "axios";
// import "./CinemaSeats.css";
// import { toast } from "react-toastify";
// import { useSeatContext } from "../../context/SeatContext";

// import TicketPurchase from "./TicketPurchase";
// import SeatPurchaseSummary from "./SeatPurchaseSummary";

// const CinemaSeats = () => {
//   const totalRows = 6;
//   const totalColumns = 10;

//   const {
//     selectedSeats,
//     totalCost,
//     updateSelectedSeats,
//     newSeats,
//     updateNewSeats,
//   } = useSeatContext();

//   const handleSeatClick = (row, column) => {
//     const seatId = `${row}-${column}`;
//     if (selectedSeats.includes(seatId)) {
//       updateSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
//     } else {
//       updateSelectedSeats([...selectedSeats, seatId]);
//     }
//   };

//   const handlePurchase = async () => {
//     try {
//       const userId = JSON.parse(localStorage.getItem("user"));
//       const response = await axios.get(
//         `https://6529506f55b137ddc83e97ce.mockapi.io/users/${userId.id}`
//       );

//       const currentUser = response.data;
//       const updatedBalance = currentUser.currentBalance - totalCost;
//       const newSeats = [
//         ...new Set([...currentUser.userSeats, ...selectedSeats]),
//       ];

//       if (selectedSeats.length === 0) {
//         toast.error("Error: no seat selected");
//         return;
//       }
//       if (
//         newSeats.length !==
//         currentUser.userSeats.length + selectedSeats.length
//       ) {
//         toast.error("Error: Duplicate seats are not allowed");
//         return;
//       }
//       const updatedUserData = {
//         ...currentUser,
//         currentBalance: updatedBalance,
//         userSeats: newSeats,
//       };

//       await axios.put(
//         `https://6529506f55b137ddc83e97ce.mockapi.io/users/${userId.id}`,
//         updatedUserData
//       );

//       const userString = JSON.stringify(updatedUserData);
//       localStorage.setItem("user", userString);

//       console.log("Purchase completed. Updated Balance:", updatedBalance);
//       toast.success("Purchase success");

//       // Reset selected seats after the purchase is completed
//       // updateSelectedSeats([]);
//       updateSelectedSeats([]);
//       updateNewSeats((newSeats) => [
//         ...new Set([...newSeats, ...selectedSeats]),
//       ]);
//     } catch (error) {
//       console.error("Error completing purchase:", error.message);
//     }
//   };

//   useEffect(() => {
//     const fetchUserSeats = async () => {
//       try {
//         const userId = JSON.parse(localStorage.getItem("user"));
//         const response = await axios.get(
//           `https://6529506f55b137ddc83e97ce.mockapi.io/users/${userId.id}`
//         );

//         const userSeatsData = response.data.userSeats;
//         // updateSelectedSeats([...userSeatsData]);
//         updateNewSeats([...userSeatsData, ...selectedSeats]);
//         // console.log("User Seats:", numerBuyed);
//       } catch (error) {
//         console.error("Error fetching userSeats:", error.message);
//       }
//     };

//     // Fetch user seats when the component mounts
//     fetchUserSeats();
//   }, []); // Empty dependency array ensures useEffect runs only once on mount

//   const renderSeats = () => {
//     const seats = [];

//     for (let row = 1; row <= totalRows; row++) {
//       for (let column = 1; column <= totalColumns; column++) {
//         const seatId = `${row}-${column}`;
//         const isSeatSelected = selectedSeats.includes(seatId);
//         const isSeatPurchased = newSeats.includes(seatId);

//         seats.push(
//           <div
//             key={seatId}
//             className={`seat ${isSeatSelected ? "selected" : ""} ${
//               isSeatPurchased ? "purchased" : ""
//             }`}
//             onClick={() => handleSeatClick(row, column)}
//           >
//             {row}-{column}
//           </div>
//         );
//       }
//     }

//     return seats;
//   };

//   return (
//     <div className="cinema-hall">
//       <div className="screen"></div>
//       <div className="cinema-seats-container">{renderSeats()}</div>
//       <SeatPurchaseSummary onPurchase={handlePurchase} />
//       <TicketPurchase onPurchase={handlePurchase} />
//     </div>
//   );
// };

// export default CinemaSeats;
