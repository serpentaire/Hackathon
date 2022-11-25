import React, { useState } from "react";
import Hotels from "@components/Hotels/Hotelscomponent";
import Data from "@services/Data";
import Reservation from "@components/Reservation/Reservation";

import "./OneHotel.css";

function OneHotel() {
  const [openpopup, setOpenpopup] = useState(false);

  return (
    <div className="container-onehotel">
      <Hotels />
      <div className="d-flex flex-column align-items-center">
        <a href="#scrool">
          <button type="button" className="downbutton p-2 mt-5">
            <span className="text-white">Réserver mon séjour 👇</span>
          </button>
        </a>
        <div className="container mt-5">
          <h2 className="text-center">Informations sur l'accessibilité ⭐</h2>
          <ul className="d-flex flex-column text-start p-0">
            <li className="mt-3">
              {" "}
              ✔ Salle de bain accessible aux personnes à mobilité réduite
            </li>
            <li className="mt-3"> ✔ Douche accessible en fauteuil roulant</li>
            <li className="mt-3">
              {" "}
              ✔ Parking accessible aux personnes en fauteuil roulant
            </li>
            <li className="mt-3">
              {" "}
              ✔ Accessibilité de la chambre aux personnes à mobilité réduite
            </li>
            <li className="mt-3">
              {" "}
              ✔ Accessible aux personnes en fauteuil roulant (des restrictions
              peuvent s’appliquer)
            </li>
            <li className="mt-3">
              {" "}
              ✔ Rampe d’ascenseur accessible aux personnes en fauteuil roulant
            </li>
            <li className="mt-3">
              {" "}
              ✔ Réception accessible aux personnes en fauteuil roulant
            </li>
          </ul>
          <h2 className="mt-5 mb-4  text-center">Description du lieu 🌵</h2>
          <div className="textdedescrip">{Data[0].description}</div>
        </div>
        <div>
          {openpopup && <Reservation />}
          <button
            type="button"
            className="reservbutton p-2 mt-5 mb-5"
            onClick={() => setOpenpopup(true)}
            id="scrool"
          >
            <span className="text-white">Je réserve mon séjour ⚽</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OneHotel;
