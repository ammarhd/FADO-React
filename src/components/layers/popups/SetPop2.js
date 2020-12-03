import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import { layer2count } from "../functions/txConfig.js";
import Pop2Config from "./Pop2Config";

function SetPopup2(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(layer2count);

  useEffect(() => {
    const interval = setInterval(() => {
      for (var j = 0; j < 100; j++) {
        setCount((prevCount) => layer2count);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        component="span"
        id="layer1Btn"
        onClick={togglePopup}
      >
        <h2>{props.name}</h2>
      </Button>
      {isOpen && <Pop2Config count={count} closePopup={togglePopup} />}
    </div>
  );
}

export default SetPopup2;
