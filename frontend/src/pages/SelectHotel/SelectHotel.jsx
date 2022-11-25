import Map from "@components/Map/Map";
import HotelCard from "@components/HotelCard/HotelCard";
import Data from "@services/Data";

import "./SelectHotel.css";

function SelectHotel() {
  return (
    <div className="">
      <div className="d-lg-none d-xl-block">
        <Map />
      </div>
      <div className="">
        {Data.map((items) => (
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          <HotelCard {...items} />
        ))}
      </div>
      <div className="d-none d-lg-block d-xl-none">
        <Map />
      </div>
    </div>
  );
}

export default SelectHotel;
