import React from "react";
import Data from "@services/Data";

function Hotels() {
  return (
    <div className="composanthotel">
      <div>slt</div>
      <div>{Data[0].name}</div>
      <div>{Data[0].adress}</div>
      <div>{Data[0].price}</div>
      <div>{Data[0].image}</div>
      <div>{Data[0].type}</div>
      <div>{Data[0].note}</div>
      <div>{Data[0].description}</div>
    </div>
  );
}

export default Hotels;
