import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(51.534817);
  const [lat] = useState(25.286106);
  const [zoom] = useState(10);
  const [API_KEY] = useState("djw6LQd2VfSAiD1ocDZa");

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom,
    });
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([51.49793, 25.27587])
      .addTo(map.current)
      .setPopup(
        new maplibregl.Popup().setHTML(
          "<div>" +
            `<input type="button" value="Ouvrir" onClick="window.location.href='../OneHotel'" />` +
            "</div>"
        )
      );
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([51.540176, 25.374749])
      .addTo(map.current);
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([51.544982, 25.271766])
      .addTo(map.current);
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([51.351107, 25.324817])
      .addTo(map.current);
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([51.535279, 25.275168])
      .addTo(map.current);
  });

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
