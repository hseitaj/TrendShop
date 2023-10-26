// src/App.jsx
import React from 'react';
import './App.css';
import './index.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import UserProfile from './components/UserProfile.jsx';
import ProductList from './components/ProductList.jsx';
import { UserProvider } from './UserContext.jsx';

const sampleProducts = [
  { id: 1, name: 'Product 1', description: 'Description for product 1', price: 10 },
  // ... more sample products
];

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Login />
        <UserProfile />
        <ProductList products={sampleProducts} />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
