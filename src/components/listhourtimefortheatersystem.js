import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../actions/index";
import { Fragment } from "react";
function ListHourTimeForTheaterSystem(props) {
  let { item, datetime, hour } = props;
  const history = useHistory();

  const nextPageToBookingSeat = () => {
    for (let val of item.lstLichChieuTheoPhim) {
      let datetimeForTheaterSystem = new Date(
        val.ngayChieuGioChieu
      ).toLocaleDateString();
      let hourTimeForTheaterSystem = new Date(
        val.ngayChieuGioChieu
      ).toLocaleTimeString();
      if (
        datetimeForTheaterSystem === datetime &&
        hourTimeForTheaterSystem === hour
      ) {
        history.push(`/book-seat/${val.maLichChieu}`);
      }
    }
  };
  const LoginForBookingSeat = () => {
    for (let val of item.lstLichChieuTheoPhim) {
      let datetimeForTheaterSystem = new Date(
        val.ngayChieuGioChieu
      ).toLocaleDateString();
      let hourTimeForTheaterSystem = new Date(
        val.ngayChieuGioChieu
      ).toLocaleTimeString();
      if (
        datetimeForTheaterSystem === datetime &&
        hourTimeForTheaterSystem === hour
      ) {
        props.sendValuecheckLogoutLoginAndBuyTickets(val.maLichChieu, false);
      }
    }
  };

  return (
    <Fragment>
      {localStorage.getItem("user") && props.checkAccount === false ? (
        <div
          onClick={() => {
            nextPageToBookingSeat();
          }}
          className="hour-for-theatersystem"
        >
          {hour}
        </div>
      ) : (
        <div
          onClick={() => {
            LoginForBookingSeat();
          }}
          className="hour-for-theatersystem"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          {hour}
        </div>
      )}
    </Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    checkAccount: state.LoginAndRegister.checkAccount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendValuecheckLogoutLoginAndBuyTickets: (maLichChieu, value) => {
      dispatch(
        action.actSendValuecheckLogoutLoginAndBuyTickets(maLichChieu, value)
      );
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListHourTimeForTheaterSystem);
