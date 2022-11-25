import React from "react";

import "./HotelCard.css";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
function HotelCard({ name, image, note, adress, type, price }) {
  return (
    <div className="items  card d-flex">
      <div className="col-5">
        <img className="img-item img-fluid" src={image} alt={name} />
      </div>
      <div className="d-flex flex-column">
        <div className="p-2 text-start">
          <div className="d-flex align-items-center">
            <h1 className="item-text m-0 col-6 flex-grow-1 me-3 fs-6">
              {name}
            </h1>
            <div className="note-item item-text fs-6">{note}</div>
          </div>
          <p className="item-text d-none d-md-block fs-6">{adress}</p>
          <div>
            <div className="type-item fw-bold mt-1">{type}</div>
          </div>
        </div>
        <div className="d-flex p-2">
          <button className="button-price" type="button">
            <span className="fw-bold">{price}</span>{" "}
            <span className="night-price">/ nuit</span>
          </button>
          <div className="d-none d-md-block">540€ au total</div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
