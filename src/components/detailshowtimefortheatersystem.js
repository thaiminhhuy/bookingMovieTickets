import React from "react";
import { connect } from "react-redux";
import ListFilmForTheaterSystem from "../components/listfilmfortheatersystem";
function DetailShowtimeForTheaterSystem(props) {
  const renderListFilm = () => {
    if (props.listAddress[0] !== undefined) {
      const result = props.listAddress[0].lstCumRap.filter(
        (item) => item.tenCumRap === props.theaterSystemName
      );

      if (result[0] !== undefined) {
        return result[0].danhSachPhim.map((item, index) => {
          return <ListFilmForTheaterSystem key={index} item={item} />;
        });
      }
    }
  };
  return (
    <div className="detail-showtime-for-theater-system">{renderListFilm()}</div>
  );
}

const mapStateToProps = (state) => {
  return {
    listAddress: state.TheaterSystem.listAddress,
    address: state.TheaterSystem.address,
    theaterSystemName: state.TheaterSystem.theaterSystemName,
  };
};
export default connect(mapStateToProps, null)(DetailShowtimeForTheaterSystem);
