import React from 'react';
import { Drawer, Button } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';

function DrawerComponent({ cart, removeFromCart, isOpen, toggleDrawer }) {
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
            <ul className="list-group">
              
                
                  
                
               

              {/* Example static item for demonstration purposes */}
              <li className="list-group-item d-flex align-items-center">
                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Product" className="img-fluid me-3" style={{ width: '96px', height: '96px' }} />
                <div className="flex-grow-1">
                  <h6 className="mb-0">Medium Stuff Satchel</h6>
                  <small className="text-muted">Blue</small>
                  <div className="d-flex justify-content-between align-items-end mt-2">
                    <span className="text-muted">Qty 1</span>
                    <button type="button" className="btn btn-link text-danger p-0">Remove</button>
                  </div>
                </div>
                <span className="ms-auto">$32.00</span>
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <div className="d-flex mt-3 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Subtotal</h6>
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
      </Drawer.Body>
    </Drawer>
  );
}

export default DrawerComponent;
