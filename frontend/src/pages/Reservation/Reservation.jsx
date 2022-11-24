import React from 'react';
import "@pages/Reservation/Reservation";

function Reservation() {
  return (
    <div className="Reservation">
      <div className="container-fluid">
      <label className="form-label mt-5">
        Demande de réservation
      </label>
        <div className="row">
          <div className=" d-flex flex-column align-items-center col-12 col-lg-5">
            <div className="text-start mb-4 col-10 col-lg-7">
              <label className="form-label">
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
              <label className="form-label">
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
              <label className="form-label">
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
              <label className="form-label">
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
              <label className="form-label">
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
              <label className="form-label">
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
