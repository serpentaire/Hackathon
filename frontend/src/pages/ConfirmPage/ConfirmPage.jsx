import React, { useEffect } from "react";
import updateMeta from "@services/Meta";

import "./ConfirmPage.css";

function ConfirmPage() {
  useEffect(() => {
    updateMeta("Confirmation reservation");
  }, []);

  return (
    <div className="container-confirm">
      <div className="confirmation-message text-center col-12">
        <h1>
          Nous avons bien reçu votre paiement,
          <br /> votre séjour va être préparé par nos soins ! 🌞
        </h1>
      </div>
    </div>
  );
}

export default ConfirmPage;
