Cinema Project in React
This project is a cinema application built with React, allowing users to sign up, browse available movies, select seats in the cinema hall, and purchase snacks from the store. The project uses mockapi for user authentication and data storage.

Features
User Authentication: Users can sign up and log in to access personalized features.
Movie Selection: Browse a list of available movies and choose seats for a selected movie.
Store: Purchase snacks and drinks from the virtual store.
MockAPI Integration: Utilizes mockapi to store user data, including balance, and for authentication.
Project Structure
Project Structure

1. Auth
1.1 SignUp
Create a component for user registration.
Collect user details like username, password, etc.
Use the mockapi for storing user data (POST request).
1.2 SignIn
Create a component for user login.
Authenticate users with mockapi (GET request).
2. MovieList
2.1 MovieCard
Display a list of available movies.
On click, navigate to the seat selection page.
3. SeatSelector
3.1 SeatMap
Display a cinema hall with clickable seats.
Allow users to select seats for a chosen movie.
Use local state to manage seat selection.
4. Store
4.1 ProductList
Display a list of food, drinks, and candy available in the store.
Allow users to add items to the cart.
4.2 Cart
Display the user's selected items.
Implement functionality to remove items or proceed to checkout.
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/cinema-react-project.git
Install dependencies:

bash
Copy code
cd cinema-react-project
npm install
Run the development server:

bash
Copy code
npm start
Open your browser and visit http://localhost:3000 to view the application.

Usage
Sign Up / Sign In:

Access the sign-up and sign-in pages to create or log in to your account.
Browse Movies:

Explore the list of available movies and click on a movie card to proceed.
Seat Selection:

Choose your desired seats in the cinema hall for the selected movie.
Store:

Visit the store to buy snacks, drinks, and candy for an enhanced cinema experience.
API Integration:

The project uses mockapi for user data storage. Make sure to check the API documentation for more details.
Contributing
Feel free to contribute to this project by opening issues or submitting pull requests. Follow the contributing guidelines for more information.

License
This project is licensed under the MIT License - see the LICENSE file for details.
