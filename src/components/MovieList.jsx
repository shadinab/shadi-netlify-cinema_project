import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useNavigate } from "react-router-dom";
import "../components/MovieTypes.css";

// css movieType

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const handleExit = () => {
    // Navigate to the home page or any other route
    navigate("/login");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/all/day?api_key=952d0b28b323492fd6b1b65027871edd"
        );
        // Assuming the movie data is inside the 'results' property of the response
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="movie-list1">
      {movies.map((movie) => (
        // Use Link component from React Router to create a link to another page
        <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card1">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h2 className="sen">
            {" "}
            <br></br>
            {movie.title}
          </h2>
          <p className="sen">{movie.overview}</p>
          <p className="sen">Release_date {movie.release_date}</p>
          <p className="sen">Language {movie.original_language}</p>
          <p className="sen">Popularity {movie.popularity}</p>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import { useNavigate } from "react-router-dom";

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);

//   const navigate = useNavigate();

//   const handleExit = () => {
//     // Navigate to the home page or any other route
//     navigate("/login");
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.themoviedb.org/3/trending/all/day?api_key=952d0b28b323492fd6b1b65027871edd"
//         );
//         // Assuming the movie data is inside the 'results' property of the response
//         setMovies(response.data.results);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="movie-list1">
//       <button className="exit" onClick={handleExit}>
//         Exit to HomePage
//       </button>
//       {movies.map((movie) => (
//         // Use Link component from React Router to create a link to another page
//         <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card1">
//           <img
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             alt={movie.title}
//           />
//           <h2>{movie.title}</h2>
//           <p>{movie.overview}</p>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default MovieList;
