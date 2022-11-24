import React from "react";
import { Link } from "react-router-dom";
import "@components/BesoinAide/BesoinAide.css";

function BesoinAide() {
  return (
    <div className="BesoinAide home-1 d-flex flex-column align-items-center">
      <div className="col-11 col-sm-10">
        <h1 className="titrebesoinaid text mb-5 pt-4">
          <b>Vous avez besoin d'aide ?</b>
        </h1>
        <p className="textbesoinaid text">
          Vous souhaitez obtenir des informations sur les logements ? Vous avez
          besoin de conseils pour organiser votre séjour ?
        </p>
        {/* <p className="textbesoinaid text">Vous avez besoin de conseils pour organiser votre séjour ?</p> */}
        <p className="textbesoinaid text">
          <b>Mustapha</b>, <b>Sylvain</b>, <b>Gaëtan</b>, <b>Charlie</b> et{" "}
          <b>Alexandre</b> sont à votre écoute pour toutes vos demandes !
        </p>
        <p className="textbesoinaid text">
          Le service client est ouvert de <b>9h à 20h tous les jours</b>.
        </p>
        <Link to="/">
          <button
            type="button"
            className="btnbesoinaide navbar-button m-3 p-2 px-3 navbar-toggler text-white"
          >
            06-06-06-06-06
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BesoinAide;
