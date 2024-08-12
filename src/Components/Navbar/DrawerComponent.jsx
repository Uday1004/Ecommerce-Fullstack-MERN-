import React, { useState, useEffect } from 'react';
import { Drawer, Button } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import axios from 'axios';

function DrawerComponent({ isOpen, toggleDrawer }) {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (isOpen) {
      // Fetch cart items from the server when the drawer opens
      axios.get('http://localhost:5000/cart')
        .then(response => {
          setCartItems(response.data);
          const initialQuantities = response.data.reduce((acc, item) => {
            acc[item._id] = item.quantity;
            return acc;
          }, {});
          setQuantities(initialQuantities);
        })
        .catch(error => console.error('Error fetching cart items:', error));
    }
  }, [isOpen]);

  const handleRemoveFromCart = (itemId) => {
    axios.delete(`http://localhost:5000/cart/${itemId}`)
      .then(() => {
        setCartItems(cartItems.filter(item => item._id !== itemId));
        setQuantities(prevQuantities => {
          const { [itemId]: _, ...rest } = prevQuantities;
          return rest;
        });
      })
      .catch(error => console.error('Error removing item from cart:', error));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.priceRange * (quantities[item._id] || 0)), 0);
  };

  const qtyPlus = (itemId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 1) + 1
    }));
  };

  const qtyMinus = (itemId) => {
    setQuantities(prevQuantities => {
      const newQuantity = (prevQuantities[itemId] || 1) - 1;
      return {
        ...prevQuantities,
        [itemId]: Math.max(newQuantity, 1) // Ensures quantity is at least 1
      };
    });
  };

  return (
    <Drawer placement="right" size={500} open={isOpen} onClose={toggleDrawer}>
      <Drawer.Header>
        <Drawer.Title>Your Cart</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={toggleDrawer} appearance="primary">Cancel</Button>
        </Drawer.Actions>
      </Drawer.Header>
      <Drawer.Body>
        <div className="modal-content">
          <div className="modal-body">
            {cartItems.length === 0 ? (
              <div className="container text-center">Your cart is empty</div>
            ) : (
              <ul className="list-group">
                {cartItems.map(item => (
                  <li key={item._id} className="list-group-item d-flex align-items-center flex-between">
                    <img src={`http://localhost:5000/uploads/${item.image}`} alt="Product" className="img-fluid me-3" style={{ width: '25%',objectFi:'contain',aspectRatio:'3/2',mixBlendMode:"darken" }} />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">{item.name}</h6>
                      <small className="text-muted">{item.category}</small>
                      <div className="d-flex justify-content-between align-items-end mt-2">
                        <div className='d-flex flex-row'>
                          <button className='btn btn-primary' onClick={() => qtyPlus(item._id)}>+</button>
                          <span className="text-muted mx-2">{quantities[item._id] || 1}</span>
                          <button className='btn btn-danger' onClick={() => qtyMinus(item._id)}>-</button>
                        </div>
                      </div>
                      <button type="button" className="btn btn-link text-danger p-0" onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
                    </div>
                    <span className="ms-auto">Rs. {item.priceRange * (quantities[item._id] || 1)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="modal-footer">
            <div className="d-flex w-100 justify-content-between mt-3">
              <div>
                <h6 className="mb-0">Subtotal</h6>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <button className='btn btn-primary'   onClick={toggleDrawer}>Checkout</button>
            </div>
            <div className="w-100 mt-3 text-center">
              <small className="text-muted">Shipping and taxes calculated at checkout.</small>
            </div>
            <div className="w-100 mt-3 text-center">
              <Button appearance="link" onClick={toggleDrawer}>Continue Shopping &rarr;</Button>
            </div>
          </div>
        </div>
      </Drawer.Body>
    </Drawer>
  );
}

export default DrawerComponent;
