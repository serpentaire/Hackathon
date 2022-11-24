import React from "react";
import { Link } from "react-router-dom";
import "@components/Reservation/Reservation.css";

function Reservation() {
  return (
    <div className="Reservation">
      <div className="container-fluid">
        <h1 className="mt-5 text-center py-4">Demande de réservation</h1>
        <div className="row">
          <div className=" d-flex flex-column align-items-center col-12 col-lg-5">
            <div className="text-start mb-4 col-10 col-lg-7">
              <label className="form-label" htmlFor="prenomresa">
                Prénom
              </label>
              <input
                type="text"
                id="prenomresa"
                className="form-control border form-control-lg text-white"
              />
            </div>
            <div className="text-start mb-4 col-10 col-lg-7">
              <label className="form-label" htmlFor="nomresa">
                Nom
              </label>
              <input
                type="text"
                id="nomresa"
                className="form-control border form-control-lg text-white"
              />
            </div>
            <div className="text-start mb-4 col-10 col-lg-7">
              <label className="form-label" htmlFor="telresa">
                Téléphone
              </label>
              <input
                type="text"
                id="telresa"
                className="form-control border form-control-lg text-white"
              />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center col-12 col-lg-12">
            <div className="text-start mb-4 col-10 col-lg-10">
              <label className="form-label" htmlFor="emailresa">
                Email
              </label>
              <input
                type="email"
                id="emailresa"
                className="form-control border form-control-lg text-white"
              />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center col-12 col-lg-5">
            <div className="text-start mb-4 col-10 col-lg-7">
              <label className="form-label" htmlFor="nblitresa">
                Nombre de lits
              </label>
              <select
                id="nblitresa"
                className=" form-control border form-control-lg text-white"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center col-12 col-lg-12">
            <div className="text-start mb-4 col-10 col-lg-10">
              <label className="form-label" htmlFor="remarquess">
                Remarques
              </label>
              <textarea
                id="textarearesa"
                className="form-control border form-control-lg w-100 text-white"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Link to="/">
              <button
                type="button"
                className="buttonresa btn btn-dark mb-4 px-5"
              >
                Paiement
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
