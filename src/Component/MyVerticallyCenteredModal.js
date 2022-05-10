import { useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import SignatureCanvas from "react-signature-canvas";

const MyVerticallyCenteredModal = (props) => {
  const sigCanvas = useRef({});
  const saveHandler = () => {
    if (sigCanvas.current.isEmpty()) {
      alert("Signature on black pad!!");
      return;
    }
    // console.log("SAVED");
    props.imageurlhandler(
      sigCanvas.current.getTrimmedCanvas().toDataURL("image/png")
    );
    props.onHide(false);
  };
  const clearHandler = () => {
    // console.log("CLEAR");
    sigCanvas.current.clear();
  };
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Signature</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{ width: 700, height: 200 }}
          backgroundColor="rgb(0,0,0)"
          penColor="rgb(0, 221, 255)"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={saveHandler}>Save</Button>
        <Button onClick={clearHandler}>Clear</Button>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
