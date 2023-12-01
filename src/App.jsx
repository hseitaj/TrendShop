// src/App.jsx
import React from "react";
import "./styles/App.css"; // Correct path for App.css
import "./styles/index.css"; // Corrected path for index.css
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import UserProfile from "./components/UserProfile.jsx";
import ProductList from "./components/ProductList.jsx";
import About from "./components/About.jsx";
import { UserProvider } from "./UserContext.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact.jsx";

const sampleProducts = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for product 1",
    price: 10,
  },
  // ... more sample products
];

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/"
              element={<ProductList products={sampleProducts} />}
            />
            {/* Add other routes as needed */}
          </Routes>
          <Footer />
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
