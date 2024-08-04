import React, { useState, useEffect } from 'react';
import { Drawer, Button } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import axios from 'axios';

function DrawerComponent({ isOpen, toggleDrawer }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (isOpen) {
      // Fetch cart items from the server when the drawer opens
      axios.get('/api/cart')
        .then(response => setCartItems(response.data))
        .catch(error => console.error('Error fetching cart items:', error));
    }
  }, [isOpen]);

  const handleRemoveFromCart = (itemId) => {
    axios.delete(`/api/cart/${itemId}`)
      .then(() => {
        setCartItems(cartItems.filter(item => item._id !== itemId));
      })
      .catch(error => console.error('Error removing item from cart:', error));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.priceRange * item.quantity), 0);
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
                  <li key={item._id} className="list-group-item d-flex align-items-center">
                    <img src={`/uploads/${item.image}`} alt="Product" className="img-fluid me-3" style={{ width: '96px', height: '96px' }} />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">{item.name}</h6>
                      <small className="text-muted">{item.category}</small>
                      <div className="d-flex justify-content-between align-items-end mt-2">
                        <span className="text-muted">Qty {item.quantity}</span>
                        <button type="button" className="btn btn-link text-danger p-0" onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
                      </div>
                    </div>
                    <span className="ms-auto">${item.priceRange * item.quantity}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="modal-footer">
            <div className="d-flex w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Subtotal</h6>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <Button appearance="primary" onClick={toggleDrawer}>Checkout</Button>
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
