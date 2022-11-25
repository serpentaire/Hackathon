import React, { useEffect } from "react";
import Map from "@components/Map/Map";
import HotelCard from "@components/HotelCard/HotelCard";
import Data from "@services/Data";
import updateMeta from "@services/Meta";

import "./SelectHotel.css";

function SelectHotel() {
  useEffect(() => {
    updateMeta("Choissisez votre hotel, et bon match !");
  }, []);

  return (
    <div className="hotelitem grid">
      <div className="col-lg-6">
        <Map />
      </div>
      <div className="col-lg-6 hotelitemMap p-2">
        {Data.map((items) => (
          <button type="button" className="navbar-toggler p-0">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <HotelCard {...items} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectHotel;
