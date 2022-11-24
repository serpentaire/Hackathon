import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-1">
      <h1 className="text d-flex text-center p-5">
        Des séjours adaptés à votre handicap pendant la coupe du monde 2022
      </h1>
      <p className="text d-flex text-center p-5 fs-4">
        HandiQat, 1er site de réservation pour la World Cup 2022 au Qatar pour
        les personnes à mobilité réduite et en situation de handicap
      </p>
      <div className="input-home col-12 text-center m-2">
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
        <div className="input w-50">
          <span className="date-input input-group-text w-0 m-2">
            Date : Aller | Retour
          </span>
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2022-11-24"
            min="2022-11-25"
            max="2022-12-25"
          />
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2022-11-24"
            min="2022-11-24"
            max="2022-12-31"
          />
        </div>
        <select
          className="form-select form-select-sm w-50 m-2 text-center"
          aria-label=".form-select-sm example"
        >
          <option selected>Nombre de personnes</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3">4 et +</option>
        </select>
        <button className="boutton-search btn btn-lg m-2" type="button">
          Rechercher
        </button>
      </div>
      <div className="text d-flex text-center">
        <p>Choississez votre équipe préférée et soutenez-la au Qatar ! ⚽</p>
      </div>
    </div>
  );
}
