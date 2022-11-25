import Map from "@components/Map/Map";
import HotelCard from "@components/HotelCard/HotelCard";
import Data from "@services/Data";

import "./SelectHotel.css";

function SelectHotel() {
  return (
    <div className="hotelitem grid">
      <div className="col-lg-6">
        <Map />
      </div>
      <div className="col-lg-6">
        {Data.map((items) => (
          <HotelCard {...items} />
        ))}
      </div>
    </div>
  );
}

export default SelectHotel;
