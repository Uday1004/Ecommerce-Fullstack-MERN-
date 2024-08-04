import React from 'react';
import { Drawer, Button } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';

function DrawerComponent({ isOpen, toggleDrawer, cartItems = [], removeFromCart }) {
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
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
        {cartItems.length > 0 ? (
          <div className="modal-content">
            <div className="modal-body">
              <ul className="list-group">
                {cartItems.map((item, index) => (
                  <li key={index} className="list-group-item d-flex align-items-center">
                    <img src={item.imageUrl} alt="Product" className="img-fluid me-3" style={{ width: '96px', height: '96px' }} />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">{item.name}</h6>
                      <small className="text-muted">{item.color}</small>
                      <div className="d-flex justify-content-between align-items-end mt-2">
                        <span className="text-muted">Qty {item.quantity}</span>
                        <button
                          type="button"
                          className="btn btn-link text-danger p-0"
                          onClick={() => removeFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <span className="ms-auto">${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <div className="d-flex w-100 justify-content-between">
                <div>
                  <h6 className="mb-0">Subtotal</h6>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                <button type="button" className="btn btn-primary" onClick={toggleDrawer}>Checkout</button>
              </div>
              <div className="w-100 mt-3 text-center">
                <small className="text-muted">Shipping and taxes calculated at checkout.</small>
              </div>
              <div className="w-100 mt-3 text-center">
                <button type="button" className="btn btn-link" onClick={toggleDrawer}>Continue Shopping &rarr;</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">Your cart is empty</div>
        )}
      </Drawer.Body>
    </Drawer>
  );
}

export default DrawerComponent;
