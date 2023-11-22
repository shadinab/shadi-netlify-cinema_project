import axios from "axios";
import "../SignUpComp/SignUpComp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentBalance, setCurrentBalance] = useState(300);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://655e4f599f1e1093c59ae302.mockapi.io/shadi",
        {
          username,
          password,
          currentBalance,
        }
      );

      if (response.status === 201) {
        console.log("User signed up successfully!");
        toast.success("User signed up successfully!");
        navigate("/");
        // Redirect the user to the desired page or perform other actions upon successful signup
      } else {
        console.error("Failed to sign up the user");
        toast.error("Failed to sign up the user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="allpageConainerSignUp">
      <div className="signup-container">
        <Link to="/">&larr; Login</Link>

        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* You can add more form fields for other user data if needed */}
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// import axios from "axios";
// import "../SignUpComp/SignUpComp.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [currentBalance, setCurrentBalance] = useState(300);
//   const [movies, setMovies] = useState([]);

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://6529506f55b137ddc83e97ce.mockapi.io/users",
//         {
//           username,
//           password,
//           currentBalance,
//         }
//       );

//       if (response.status === 201) {
//         console.log("User signed up successfully!");
//         // Redirect the user to the desired page or perform other actions upon successful signup
//       } else {
//         console.error("Failed to sign up the user");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="allpageConainerSignUp">
//       <div className="signup-container">
//         {" "}
//         {/* Added className here */}
//         <div>
//           <Link to="/">&larr;</Link>
//           <h2 className="makeTitleOnCenter">Signup</h2>
//         </div>
//         <form onSubmit={handleSignup}>
//           <div>
//             <label>Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {/* You can add more form fields for other user data if needed */}
//           <button type="submit">Signup</button>
//         </form>
//       </div>{" "}
//     </div>
//   );
// };

// export default Signup;
