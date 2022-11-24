import React from "react";
import "@pages/Reservation/Reservation.css";

function Reservation() {
  return (
    <div className="Reservation">
      <div className="container-fluid">
        <h1 className="mt-5">Demande de réservation</h1>
        <div className="row">
          <div className=" d-flex flex-column align-items-center col-12 col-lg-5">
            <div className="text-start mb-4 col-10 col-lg-7">
              <label className="form-label" htmlFor="prenomresa">
                Prénom
              </label>
              <input
                type="text"
                id="prenomresa"
                className="form-control border form-control-lg"
                // value={name}
                // onChange={(event) => setName(event.target.value)}
              />
              {/* {name === "" && ( */}

              {/* )} */}
            </div>
            <div className="text-start mb-4 col-10 col-lg-7">
              <label className="form-label" htmlFor="nomresa">
                Nom
              </label>
              <input
                type="text"
                id="nomresa"
                className="form-control border form-control-lg"
                // value={name}
                // onChange={(event) => setName(event.target.value)}
              />
              {/* {name === "" && ( */}

              {/* )} */}
            </div>
            <div className="text-start mb-4 col-10 col-lg-7">
              <label className="form-label" htmlFor="telresa">
                Téléphone
              </label>
              <input
                type="text"
                id="telresa"
                className="form-control border form-control-lg"
                // value={newPassword}
                // onChange={(event) => setNewPassword(event.target.value)}
              />
              {/* {newPassword === "" && ( */}

              {/* )} */}
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
                className="form-control border form-control-lg"
                // value={newEmail}
                // onChange={(event) => setNewEmail(event.target.value)}
              />
              {/* {newEmail === "" && ( */}

              {/* )} */}
            </div>
          </div>
          <div className="d-flex flex-column align-items-center col-12 col-lg-5">
            <div className="text-start mb-4 col-10 col-lg-7">
              <label className="form-label" htmlFor="nblitresa">
                Nombre de lits
              </label>
              <input
                type="text"
                id="nblitresa"
                className="form-control border form-control-lg"
                // value={name}
                // onChange={(event) => setName(event.target.value)}
              />
              {/* {name === "" && ( */}

              {/* )} */}
            </div>
          </div>
          <div className="d-flex flex-column align-items-center col-12 col-lg-12">
            <div className="text-start mb-4 col-10 col-lg-10">
              <label className="form-label" htmlFor="remarquess">
                Remarques
              </label>
              <textarea
                className="form-control border form-control-lg w-100"
                // placeholder="Remarques"
                // onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button
              type="button"
              className=" buttonresa btn btn-dark"
              // onClick={() => setBtnSubscribe(!btnSubscribe)}
            >
              Paiement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
