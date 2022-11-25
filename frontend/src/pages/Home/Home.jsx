import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import updateMeta from "@services/Meta";

// eslint-disable-next-line import/no-extraneous-dependencies
import Lottie from "react-lottie";
import animationData from "@assets/animation/football.json";

import "./Home.css";

export default function Home() {
  const [date, setDate] = useState();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      // preserveAspectRatio: "xMidYMid slice"
    },
  };

  useEffect(() => {
    updateMeta(
      "Accueil - La plateforme qui permet aux personnes en situation de handicap de passer un séjour au Qatar pour la Coupe du monde 2022"
    );
  }, []);

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
          className="select-person form-select form-select-sm w-50 text-center mt-3"
          aria-label=".form-select-sm example"
        >
          <option value="1">France 🇫🇷</option>
          <option value="2">Angleterre 🏴󠁧󠁢󠁥󠁮󠁧󠁿</option>
          <option value="3">Espagne 🇪🇸</option>
          <option value="4">Allemagne 🇩🇪</option>
          <option value="5">Suisse 🇨🇭</option>
          <option value="6">Italie 🇮🇹</option>
        </select>
        <select
          className="select-person form-select form-select-sm w-50 m-3 text-center mb-0"
          aria-label=".form-select-sm example"
        >
          <option selected>Nombre de personnes</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3">4 et +</option>
        </select>
        <div className="input p-0 m-0 d-flex flex-column align-items-center">
          <p className="text-date m-2"> Date : Aller | Retour</p>
          <div className="input-date">
            <input
              className="me-1"
              onChange={(e) => handleChangeDate(e.target.value)}
              type="date"
              id="start"
              name="trip-start"
              value={date}
              min="2022-11-25"
              max="2022-12-25"
            />
            <b className="space-date">|</b>
            <input
              className="ms-1"
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

        <Link
          to="/SelectHotel"
          className="boutton-search btn btn-lg m-3"
          type="button"
        >
          <span className="text-bouton">Rechercher</span>
        </Link>
      </div>
      <div className="text d-flex justify-content-center text-center fs-4">
        <p className="mb-5">
          Choississez votre équipe préférée et soutenez-la au Qatar ! ⚽
        </p>
      </div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
