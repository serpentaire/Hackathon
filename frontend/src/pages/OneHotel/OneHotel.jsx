import React from "react";
import "./OneHotel.css";
// import "@components/Hotels/Hotelscomponent.jsx";

function OneHotel() {
  return (
    <div className="container-onehotel">
      {/* <Hotels /> */}
      {/* {Hotels
                .map((hotel) => (
                     {hotel.name}
))} */}
      <div>
        <button type="button" className="downbutton col-11 mt-5">
          <span className="text-white">Réserver mon séjour 👇</span>
        </button>
      </div>

      <div className="container col-10 mt-5">
        <h2 className="text-center">Informations sur l'accessibilité ⭐</h2>
        <ul className="d-flex flex-column text-center">
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
        <h2 className="mt-5">Description du lieu 🌵</h2>
      </div>
      <div>
        <button
          type="button"
          className="reservbutton col-8 col-md-6 col-lg-3 mt-5 mb-5"
        >
          <span className="text-white">Je réserve mon séjour ⚽</span>
        </button>
      </div>
    </div>
  );
}

export default OneHotel;
