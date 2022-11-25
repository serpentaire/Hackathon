import React from "react";

import iconeFootball from "@assets/pictures/football.jpg";

import "./HotelCard.css";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
function HotelCard({ name, image, note, adress, type, price }) {
  return (
    <div className="items card d-flex align-items-center">
      <div className="col-5">
        <img className="img-item img-fluid" src={image} alt={name} />
      </div>
      <div className="d-flex col-7 flex-column">
        <div className="p-2 text-start">
          <div className="d-flex align-items-center">
            <h1 className="item-h1 m-0 col-6 flex-grow-1 me-3">{name}</h1>
            <div className="note-item m-0 item-text fs-6">{note}</div>
          </div>
          <p className="item-p col-10 d-none d-md-block">{adress}</p>
          <div>
            <div className="type-item fw-bold mt-1">{type}</div>
          </div>
        </div>
        <div className="d-flex p-2  d-flex align-items-center">
          <button className="button-price" type="button">
            <span className="fw-bold fs-6">{price}</span>{" "}
            <span className="night-price">/ nuit</span>
          </button>
          <div className="d-none d-md-block fs-6">540€ au total</div>
          <div className="divPhotoItems d-flex align-items-end">
            <img className="photoItems d-flex" src={iconeFootball} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
