import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import SigModal from "./Component/SigModal";


const App = () => {
  const [showModal,setShowModal]=useState(false);
  return (
    <div className="App">
      <h1>E-Sign</h1>
      <Button variant="outline-primary" onClick={()=>setShowModal(true)}>Click To Signature</Button>
      <SigModal  />
    </div>
  );
};

export default App;
