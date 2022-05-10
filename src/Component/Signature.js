import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "../App.css";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import { saveAs } from "file-saver";
import ViewModal from "./ViewModal";

const Signature = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [fName, setFname] = useState("");
  const [viewModal, setViewModal] = useState(false);

  const imageUrlHandler = (imgUrl) => {
    //   console.log(imgUrl)
    setImageUrl(imgUrl);
  };

  const downloaderHandler = () => {
    saveAs(imageUrl, fName);
  };

  const fileNameHandler = (fileName) => {
    // console.log(fileName);
    setFname(fileName);
  };

  const removeHandler = () => {
    setImageUrl(null);
  };

  const viewHandler = () => {
    setViewModal(true);
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
          fileNameHandler={fileNameHandler}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "88vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imageUrl ? (
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={imageUrl} width='100%' />
            <Card.Body>
              <Card.Text>{fName}.png</Card.Text>
              <Button
                variant="primary"
                onClick={downloaderHandler}
                style={{ marginRight: "1rem" }}
              >
                Download
              </Button>
              <Button variant="primary" onClick={removeHandler} style={{ marginRight: "1rem" }}>
                Remove
              </Button>
              <Button variant="primary" onClick={viewHandler}>
                View
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <h2>Kindly Click Blue Button</h2>
        )}
      </div>
      {viewModal && (
        <ViewModal
          show={viewModal}
          onHide={() => setViewModal(false)}
          imgurl={imageUrl}
          fname={fName}
        />
      )}
    </>
  );
};

export default Signature;
