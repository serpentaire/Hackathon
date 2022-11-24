import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [date, setDate] = useState();

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  return (
    <div className="home-1">
      <h1 className="text text-center p-5">
        Des séjours adaptés à <span className="handi">votre handicap </span>
        pendant la coupe du monde 2022
      </h1>
      <p className="text d-flex text-center p-5 fs-4">
        HandiQat, 1er site de réservation pour la World Cup 2022 au Qatar pour
        les personnes à mobilité réduite et en situation de handicap
      </p>
      <div className="input-home card d-flex flex-column mb-3 align-items-center text-center">
        <select
          className="form-select form-select-sm w-50 text-center"
          aria-label=".form-select-sm example"
        >
          <option selected>Choisissez votre Pays</option>
          <option value="1">France</option>
          <option value="2">Angleterre</option>
          <option value="3">Espagne</option>
          <option value="4">Allemagne</option>
          <option value="5">Suisse</option>
          <option value="6">Italie</option>
        </select>
        <select
          className="form-select form-select-sm w-50 m-3 text-center mb-0"
          aria-label=".form-select-sm example"
        >
          <option selected>Nombre de personnes</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3">4 et +</option>
        </select>
        <div className="input p-0 m-0 d-flex flex-column align-items-center">
          <span className="date-input justify-content-center input-group-text w-75 m-3">
            Date : Aller | Retour
          </span>
          <div className=" input-date">
            <input
              onChange={(e) => handleChangeDate(e.target.value)}
              type="date"
              id="start"
              name="trip-start"
              value={date}
              min="2022-11-25"
              max="2022-12-25"
            />
            <input
              onChange={(e) => handleChangeDate(e.target.value)}
              type="date"
              id="start"
              name="trip-start"
              value={date}
              min="2022-11-25"
              max="2022-12-25"
            />
          </div>
        </div>

        <button className="boutton-search btn btn-lg m-3" type="button">
          <span className="text-bouton">Rechercher</span>
        </button>
      </div>
      <div className="text d-flex text-center">
        <p>Choississez votre équipe préférée et soutenez-la au Qatar ! ⚽</p>
      </div>
    </div>
  );
}
