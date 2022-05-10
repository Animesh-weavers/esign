import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "../App.css";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import { saveAs } from "file-saver";

const Signature = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const imageUrlHandler = (imgUrl) => {
    setImageUrl(imgUrl);
  };

  const downloaderHandler = () => {
    saveAs(imageUrl, "signature.png");
  };

  return (
    <>
      <div className="App">
        <h1>E-Sign</h1>
        <Button variant="outline-primary" onClick={() => setShowModal(true)}>
          Click To Signature
        </Button>
        <MyVerticallyCenteredModal
          show={showModal}
          onHide={() => setShowModal(false)}
          imageurlhandler={imageUrlHandler}
        />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "88vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imageUrl ? (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Button variant="primary" onClick={downloaderHandler}>
                Download
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <h2>Kindly Click Blue Button</h2>
        )}
      </div>
    </>
  );
};

export default Signature;
