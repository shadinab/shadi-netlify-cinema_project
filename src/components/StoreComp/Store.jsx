import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./store.css";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";

const cinemaItems = [
  {
    id: 1,
    name: "Hersheys",
    price: 12,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/71gTpHAuhzL._SL1500_-300x300.jpg ",
  },

  {
    id: 2,
    name: "Fanta",
    price: 8,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/ea13aaa2-30d7-47d0-8b54-5069d20b0502-300x300.jpg ",
  },
  {
    id: 3,
    name: "HappyHippo",
    price: 18,
    image:
      "https://candy-store.co.il/wp-content/uploads/2021/06/%D7%94%D7%A4%D7%99-%D7%94%D7%99%D7%A4%D7%95-300x300.jpg ",
  },
  {
    id: 4,
    name: "Nachos&Cola",
    price: 54,
    image:
      "https://www.pngkey.com/png/detail/973-9739103_ws-nachos-kicsi-menu-transparent-coca-cola-png.png ",
  },
  {
    id: 5,
    name: "Popcorn&Cola",
    price: 60,
    image:
      "https://cdn.dribbble.com/users/146881/screenshots/1165089/media/246f2b31c82207ac24a64774d0020ff7.jpg ",
  },

  {
    id: 6,
    name: "StarBucks",
    price: 30,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/starbucks-cappuccino-220ml-300x300.png ",
  },
  {
    id: 7,
    name: "SweetoBurger",
    price: 14,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/11/654d4sf65465ds4f6d4s_1024x1024@2x-300x300.webp ",
  },
  {
    id: 8,
    name: "Kinder Joy",
    price: 8,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/8df5fd37-97a2-4821-9688-73c38f6d6112-300x300.jpg ",
  },
  {
    id: 9,
    name: "Lays",
    price: 18,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-19-at-20.01.12-300x300.jpeg ",
  },
  {
    id: 10,
    name: "Lotus",
    price: 14,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/5410126116953-300x300.jpg ",
  },
  {
    id: 11,
    name: "LuppoChoco",
    price: 16,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/10/caramel-300x300.png",
  },
  {
    id: 12,
    name: "m&m",
    price: 14,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/small-300x300.webp ",
  },
  {
    id: 13,
    name: "Mars",
    price: 12,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/10/Mars-Chocolate-300x300.png ",
  },
  {
    id: 14,
    name: "MonsterMule",
    price: 10,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/6f9bbc62-24b5-4bb6-898c-8bea5add41d4-300x300.jpg ",
  },
  {
    id: 15,
    name: "MonsterNitro",
    price: 10,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/C_5060896620145_1-300x300.jpg ",
  },
  {
    id: 16,
    name: "MonsterUltra",
    price: 10,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/monster-ultra-gold-05-l-300x300.jpg",
  },

  {
    id: 17,
    name: "OzmoHoppo",
    price: 16,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/d7fdb50a-e24f-4ec5-86d8-a9a3f0200b51-300x300.jpg ",
  },
  {
    id: 18,
    name: "Bueno",
    price: 11,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/41xezLu9nrL_1024x1024-300x300.webp ",
  },

  {
    id: 19,
    name: "Pringles",
    price: 14,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-19-at-18.33.28-300x300.jpeg ",
  },
  {
    id: 20,
    name: "Skittles",
    price: 8,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/GUEST_0e3a7b2d-618d-46ee-a6c1-8cf1c7a37632-300x300.jpg ",
  },
  {
    id: 21,
    name: "Snickers",
    price: 8,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/5000159382731-300x300.jpg ",
  },
  {
    id: 22,
    name: "Sweeto",
    price: 13,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/11/352d86a7-4f4b-4aae-a38e-851071256ca6-1-300x300.jpg ",
  },
  {
    id: 23,
    name: "Twix",
    price: 12,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/10/Twix.jpg_Q90.jpg_-300x300.webp ",
  },
  {
    id: 24,
    name: "OzaoPopsy",
    price: 8,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/110000078647706-300x300.jpg ",
  },
  {
    id: 25,
    name: "Cheetos",
    price: 15,
    image:
      "https://candy-store.co.il/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-19-at-18.49.15-300x300.jpeg ",
  },
  // Add more cinema items as needed
];

const Store = () => {
  const loggedInUserId = JSON.parse(localStorage.getItem("user"));
  const STORE_API_URL = `https://6529506f55b137ddc83e97ce.mockapi.io/users/${loggedInUserId.id}`;

  const [selectedItems, setSelectedItems] = useState([]);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data and set the initial balance
    axios
      .get(STORE_API_URL)
      .then((response) => {
        setCurrentBalance(response.data.currentBalance);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleAddToCart = (item) => {
    const updatedCart = [...cartItems];
    // console.log(updatedCart);
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
    //  console.log(existingItemIndex);
    if (existingItemIndex !== -1) {
      // If item already exists in the cart, increment the quantity
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      // If item is not in the cart, add it with quantity 1
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCartItems(updatedCart);
  };

   const handleRemoveFromCart = (itemId) => {
     const updatedCart = cartItems.filter((item) => item.id !== itemId);
     setCartItems(updatedCart);
   };

  const handleExit = () => {
    // Navigate to the home page or any other route
    navigate("/login");
  };

  const handleCheckout = () => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    if (totalPrice > currentBalance) {
      console.log("Insufficient balance");
      return;
    }

    const updatedBalance = currentBalance - totalPrice;

    axios
      .put(STORE_API_URL, {
        currentBalance: updatedBalance,
      })
      .then((response) => {
        console.log("User balance updated successfully:", response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        setCurrentBalance(updatedBalance);
        setSelectedItems([]);
        setCartItems([]);
        toast.success("purchaes success");
      })
      .catch((error) => {
        console.error("Error updating user balance:", error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>; // Add loading state while data is being fetched
  }

  return (
    <div className="app-container">
      <h1>Cinema Store</h1>
      <h2 className="current-balance">Current Balance: {currentBalance}</h2>
      <Cart
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        handleCheckout={handleCheckout}
      />
      <button className="exit-button" onClick={handleExit}>
        Exit
      </button>
      <div className="cinema-items">
        {cinemaItems.map((item) => (
          <div className="cinema-item" key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt="Cinema Item" />
            <p>{item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "./store.css";
// import { useNavigate } from "react-router-dom";

// const cinemaItems = [
//   {
//     id: 1,
//     name: "Hersheys",
//     price: 12,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/71gTpHAuhzL._SL1500_-300x300.jpg ",
//   },

//   {
//     id: 2,
//     name: "Fanta",
//     price: 8,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/ea13aaa2-30d7-47d0-8b54-5069d20b0502-300x300.jpg ",
//   },
//   {
//     id: 3,
//     name: "HappyHippo",
//     price: 18,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2021/06/%D7%94%D7%A4%D7%99-%D7%94%D7%99%D7%A4%D7%95-300x300.jpg ",
//   },
//   {
//     id: 4,
//     name: "Nachos&Cola",
//     price: 54,
//     image:
//       "https://www.pngkey.com/png/detail/973-9739103_ws-nachos-kicsi-menu-transparent-coca-cola-png.png ",
//   },
//   {
//     id: 5,
//     name: "Popcorn&Cola",
//     price: 60,
//     image:
//       "https://cdn.dribbble.com/users/146881/screenshots/1165089/media/246f2b31c82207ac24a64774d0020ff7.jpg ",
//   },

//   {
//     id: 6,
//     name: "StarBucks",
//     price: 30,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/starbucks-cappuccino-220ml-300x300.png ",
//   },
//   {
//     id: 7,
//     name: "SweetoBurger",
//     price: 14,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/11/654d4sf65465ds4f6d4s_1024x1024@2x-300x300.webp ",
//   },
//   {
//     id: 8,
//     name: "Kinder Joy",
//     price: 8,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/8df5fd37-97a2-4821-9688-73c38f6d6112-300x300.jpg ",
//   },
//   {
//     id: 9,
//     name: "Lays",
//     price: 18,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-19-at-20.01.12-300x300.jpeg ",
//   },
//   {
//     id: 10,
//     name: "Lotus",
//     price: 14,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/5410126116953-300x300.jpg ",
//   },
//   {
//     id: 11,
//     name: "LuppoChoco",
//     price: 16,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/10/caramel-300x300.png",
//   },
//   {
//     id: 12,
//     name: "m&m",
//     price: 14,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/small-300x300.webp ",
//   },
//   {
//     id: 13,
//     name: "Mars",
//     price: 12,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/10/Mars-Chocolate-300x300.png ",
//   },
//   {
//     id: 14,
//     name: "MonsterMule",
//     price: 10,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/6f9bbc62-24b5-4bb6-898c-8bea5add41d4-300x300.jpg ",
//   },
//   {
//     id: 15,
//     name: "MonsterNitro",
//     price: 10,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/C_5060896620145_1-300x300.jpg ",
//   },
//   {
//     id: 16,
//     name: "MonsterUltra",
//     price: 10,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/monster-ultra-gold-05-l-300x300.jpg",
//   },

//   {
//     id: 17,
//     name: "OzmoHoppo",
//     price: 16,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/d7fdb50a-e24f-4ec5-86d8-a9a3f0200b51-300x300.jpg ",
//   },
//   {
//     id: 18,
//     name: "Bueno",
//     price: 11,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/41xezLu9nrL_1024x1024-300x300.webp ",
//   },

//   {
//     id: 19,
//     name: "Pringles",
//     price: 14,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-19-at-18.33.28-300x300.jpeg ",
//   },
//   {
//     id: 20,
//     name: "Skittles",
//     price: 8,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/GUEST_0e3a7b2d-618d-46ee-a6c1-8cf1c7a37632-300x300.jpg ",
//   },
//   {
//     id: 21,
//     name: "Snickers",
//     price: 8,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/5000159382731-300x300.jpg ",
//   },
//   {
//     id: 22,
//     name: "Sweeto",
//     price: 13,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/11/352d86a7-4f4b-4aae-a38e-851071256ca6-1-300x300.jpg ",
//   },
//   {
//     id: 23,
//     name: "Twix",
//     price: 12,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/10/Twix.jpg_Q90.jpg_-300x300.webp ",
//   },
//   {
//     id: 24,
//     name: "OzaoPopsy",
//     price: 8,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/110000078647706-300x300.jpg ",
//   },
//   {
//     id: 25,
//     name: "Cheetos",
//     price: 15,
//     image:
//       "https://candy-store.co.il/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-19-at-18.49.15-300x300.jpeg ",
//   },
//   // Add more cinema items as needed
// ];

// const Store = () => {
//   const loggedInUserId = JSON.parse(localStorage.getItem("user"));
//   const STORE_API_URL = `https://6529506f55b137ddc83e97ce.mockapi.io/users/${loggedInUserId.id}`;

//   const [selectedItems, setSelectedItems] = useState([]);
//   const [currentBalance, setCurrentBalance] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch user data and set the initial balance
//     axios
//       .get(STORE_API_URL)
//       .then((response) => {
//         setCurrentBalance(response.data.currentBalance);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//         setIsLoading(false);
//       });
//   }, []);

//   const handleAddToCart = (item) => {
//     setSelectedItems((prevItems) => [...prevItems, item]);
//   };

//   const handleExit = () => {
//     // Navigate to the home page or any other route
//     navigate("/login");
//   };

//   const handleCheckout = () => {
//     const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);

//     if (totalPrice > currentBalance) {
//       console.log("Insufficient balance");
//       return;
//     }

//     const updatedBalance = currentBalance - totalPrice;

//     axios
//       .put(STORE_API_URL, {
//         currentBalance: updatedBalance,
//       })
//       .then((response) => {
//         console.log("User balance updated successfully:", response.data);
//         localStorage.setItem("user", JSON.stringify(response.data));
//         setCurrentBalance(updatedBalance);
//         setSelectedItems([]);
//         toast.success("purchaes success");
//       })
//       .catch((error) => {
//         console.error("Error updating user balance:", error);
//       });
//   };

//   if (isLoading) {
//     return <div>Loading...</div>; // Add loading state while data is being fetched
//   }

//   return (
//     <div className="app-container">
//       <h1>Cinema Store</h1>
//       <button className="checkout-button" onClick={handleCheckout}>
//         Checkout
//       </button>
//       <button className="exit-button" onClick={handleExit}>
//         Exit to HomePage
//       </button>
//       <h2 className="current-balance">Current Balance: {currentBalance}</h2>
//       <div className="cinema-items">
//         {cinemaItems.map((item) => (
//           <div className="cinema-item" key={item.id}>
//             <h2>{item.name}</h2>
//             <img src={item.image} alt="Cinema Item" />
//             <p>{item.price}</p>
//             <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Store;
