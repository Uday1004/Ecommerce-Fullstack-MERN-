import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Upload from './Components/UploadProducts/Upload';
import Mybikes from './Components/User/Mybikes';
import { CustomProvider } from 'rsuite';
import Demoupload from './Components/UploadProducts/Demoupload';
import DrawerComponent from './Components/Navbar/DrawerComponent';

function App() {
  const [cart, setCart] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem._id === item._id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) =>
      prevCart.filter(item => item._id !== itemToRemove._id)
    );
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <CustomProvider>
      <div className="App">
        <Navbar addToCart={addToCart} />
        <Routes>
          <Route exact path="/" element={<Home addToCart={addToCart} />} />
          <Route exact path="/Upload" element={<Upload />} />
          <Route exact path="/Demoupload" element={<Demoupload />} />
          <Route exact path="/MyBikes" element={<Mybikes />} />
          <Route
            exact
            path="/cart"
            element={
              <DrawerComponent
                isOpen={isDrawerOpen}
                toggleDrawer={toggleDrawer}
                cartItems={cart}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </CustomProvider>
  );
}

export default App;
