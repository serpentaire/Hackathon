import React, { useEffect } from "react";
import updateMeta from "@services/Meta";

// eslint-disable-next-line import/no-extraneous-dependencies
import Lottie from "react-lottie";
import animationData from "@assets/animation/ballon.json";

import "./ConfirmPage.css";

function ConfirmPage() {
  useEffect(() => {
    updateMeta("Confirmation reservation");
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      // preserveAspectRatio: "xMidYMid slice"
    },
  };

  return (
    <div className="page d-flex align-items-center container-confirm">
      <div className="confirmation-message text-center col-12">
        <Lottie options={defaultOptions} height={400} width={400} />
        <h1>
          Nous avons bien reçu votre paiement,
          <br /> votre séjour va être préparé par nos soins ! 🌞
        </h1>
      </div>
    </div>
  );
}

export default ConfirmPage;
