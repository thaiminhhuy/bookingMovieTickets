import React from "react";
import InforTheaterSystem from "../components/infortheatersystem";
import DetailTheaterSystem from "../components/detailtheatersystem";
import DetailShowtimeForTheaterSystem from "../components/detailshowtimefortheatersystem";
import "../components/styled-components/cinemasystem.css";
export default function CinemaSystem() {
  return (
    <div className="cinemasystem container" id="Cinemasystem">
      <InforTheaterSystem />
      <DetailTheaterSystem />
      <DetailShowtimeForTheaterSystem />
    </div>
  );
}
