import React from "react";
import { Modal } from "react-bootstrap";

const ViewModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.fname}.png
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <img src={props.imgurl} alt="" />
      </Modal.Body>
    </Modal>
  );
};

export default ViewModal;
