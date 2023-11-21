

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToastContainer } from "react-toastify"; // Import ToastContainer from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify CSS
import "./components/Navbar/index.css";
import { SeatProvider } from "./context/SeatContext";

ReactDOM.render(
  <SeatProvider>
    <React.StrictMode>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.StrictMode>
  </SeatProvider>,
  document.getElementById("root")
);

