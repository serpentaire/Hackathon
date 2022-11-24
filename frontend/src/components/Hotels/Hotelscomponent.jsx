import Data from "@services/Data";
import "@components/Hotels/Hotelscompo.css";

function Hotels() {
  return (
    <div className="composanthotel col-12 d-flex flex-column align-items-center">
      <div className="text-center fs-1 fw-bold mt-3 mb-4">{Data[0].name}</div>
      <div className="text-center mb-4">Adresse : {Data[0].adress}</div>
      <div className="d-flex justify-content-center align-items-center col-12 mb-3">
        <div className="note-hotel text-center mb-3 col-5 col-sm-3 col-md-2 p-2 fw-bold">
          ⭐{Data[0].note}⭐
        </div>
        <div className="buttonpricehotel mb-3 text-center col-5 col-sm-3 col-md-2 p-2 fw-bold">
          {Data[0].price} /nuit 😴
        </div>
      </div>
      <img className="img-fluid" src={Data[0].image} alt={Data[0].name} />
      <div className="handicard d-flex flex-column text-center col-8 col-sm-6 col-md-7 mt-5">
        <span className="fw-bold">{Data[0].type}</span>
        Ce logement est adapté pour les handicapés {Data[0].type} ! 🔥
      </div>
    </div>
  );
}

export default Hotels;
