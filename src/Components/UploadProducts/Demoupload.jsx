import React, { useState } from "react";
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalBody, MDBModalFooter } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const Demoupload = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <MDBBtn outline color="success" onClick={handleShowModal}>
        Add +
      </MDBBtn>

      <MDBModal show={showModal} setShow={setShowModal} tabIndex="-1">
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <h5 className="modal-title">Add Your Bike</h5>
              <MDBBtn className="btn-close" color="none" onClick={handleCloseModal}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>Modal content here</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="primary">Submit</MDBBtn>
              <MDBBtn color="secondary" onClick={handleCloseModal}>
                Cancel
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default Demoupload;
