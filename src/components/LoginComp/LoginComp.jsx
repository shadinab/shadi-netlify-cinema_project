import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../LoginComp/LoginComp.css";

const LoginComp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch user data from the MockAPI endpoint
      const response = await axios.get(
        "https://6529506f55b137ddc83e97ce.mockapi.io/users"
      );

      // Check if the username and password match with fetched data
      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        // User found, perform login actions
        // For example, you can store user data in state, local storage, or a global context
        // For simplicity, let's assume storing user data in local storage
        localStorage.setItem("user", JSON.stringify(user));

        // Navigate to the "/login" route using useHistory
        navigate("/login");
      } else {
        toast.error("Invalid username or password");
      }
    } catch (error) {
      // Handle error, e.g., network error or invalid response format
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <Link to="/signup">SignUp</Link>
      </div>
    </div>
  );
};

export default LoginComp;
