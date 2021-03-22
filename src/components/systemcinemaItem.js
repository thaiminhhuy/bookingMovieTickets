import React, { Fragment } from "react";
import { useState } from "react";
import FilmForMobile from "../components/filmformobile";
export default function SystemCinemaItem(props) {
  let { item, cluster } = props;
  const [open, setOpen] = useState(false);
  const getListFilm = () => {
    return item.danhSachPhim.map((item, index) => {
      return <FilmForMobile key={index} item={item} />;
    });
  };
  return (
    <Fragment>
      <div
        className="system-cinema-item "
        onClick={() => {
          setOpen(!open);
          getListFilm();
        }}
      >
        <div className="img-system-cinema-item-mobile">
          {cluster.maHeThongRap === "BHDStar" && (
            <img className="img-listAddressCinema" src="./img/bhb.jpg" alt="" />
          )}
          {cluster.maHeThongRap === "CGV" && (
            <img className="img-listAddressCinema" src="./img/cgv.jpg" alt="" />
          )}
          {cluster.maHeThongRap === "CineStar" && (
            <img
              className="img-listAddressCinema"
              src="./img/CNS.jpeg"
              alt=""
            />
          )}
          {cluster.maHeThongRap === "Galaxy" && (
            <img
              className="img-listAddressCinema"
              src="./img/galaxy.jpg"
              alt=""
            />
          )}
          {cluster.maHeThongRap === "LotteCinima" && (
            <img
              className="img-listAddressCinema"
              src="./img/lotte.jpg"
              alt=""
            />
          )}
          {cluster.maHeThongRap === "MegaGS" && (
            <img
              className="img-listAddressCinema"
              src="./img/mega.png"
              alt=""
            />
          )}
        </div>
        <span>{item.tenCumRap}</span>
      </div>
      {open === false ? "" : getListFilm()}
    </Fragment>
  );
}
