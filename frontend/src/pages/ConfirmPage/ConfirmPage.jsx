import "./ConfirmPage.css";

function ConfirmPage() {
  return (
    <div className="container-confirm">
      <div className="confirmation-message">
        <h1 className="tracking-in-contract-bck-top">
          Nous avons bien reçu votre paiement,
          <br /> votre séjour va être préparé par nos soins !
        </h1>
        <img
          className="swirl-in-fwd"
          src="src/pages/ConfirmPage/animation_500_lavniaad.gif"
          alt="gif ballon"
        />
      </div>
    </div>
  );
}

export default ConfirmPage;
