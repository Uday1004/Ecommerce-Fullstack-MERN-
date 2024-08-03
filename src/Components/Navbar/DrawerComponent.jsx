import React from 'react';
import { Drawer, Button } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';

function DrawerComponent({ isOpen, toggleDrawer }) {
  return (
    <Drawer placement="right" size={500} open={isOpen} onClose={toggleDrawer}>
      <Drawer.Header>
        <Drawer.Title>Your Cart</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={toggleDrawer} appearance="primary">Cancel</Button>
        </Drawer.Actions>
      </Drawer.Header>
      <Drawer.Body>
       {/* <div className="container text-center"> your cart is empty</div> */}
       <div className="modal-content">
          {/* <div className="modal-header">
            <h5 className="modal-title" id="slide-over-title">Shopping Cart</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={toggleDrawer}></button>
          </div> */}
          <div className="modal-body">
            <ul className="list-group">
              <li className="list-group-item d-flex align-items-center">
                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Product" className="img-fluid me-3" style={{ width: '96px', height: '96px' }} />
                <div className="flex-grow-1">
                  <h6 className="mb-0">Throwback Hip Bag</h6>
                  <small className="text-muted">Salmon</small>
                  <div className="d-flex justify-content-between align-items-end mt-2">
                    <span className="text-muted">Qty 1</span>
                    <button type="button" className="btn btn-link text-danger p-0">Remove</button>
                  </div>
                </div>
                <span className="ms-auto">$90.00</span>
              </li>
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

{/* this last li is used for the mongodata base */}

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

{/* this last li is used for the mongodata base */}

              {/* More products... */}
            </ul>
          </div>
          <div className="modal-footer">
            <div className="d-flex w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Subtotal</h6>
                <span>$262.00</span>
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
