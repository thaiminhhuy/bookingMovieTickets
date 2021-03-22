import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Fragment } from "react";
import * as action from "../actions/index";

function ListHourForDetail(props) {
  const history = useHistory();
  let { hour, showtime, cluster } = props;
  const nextPagesToBookingSeat = () => {
    for (let item of props.detailMovie.lichChieu) {
      if (
        item.thongTinRap.tenCumRap === cluster &&
        new Date(item.ngayChieuGioChieu).toLocaleDateString() === showtime &&
        new Date(item.ngayChieuGioChieu).toLocaleTimeString() === hour
      ) {
        history.push(`/book-seat/${item.maLichChieu}`);
      }
    }
  };
  const LoginForBookingSeat = () => {
    for (let item of props.detailMovie.lichChieu) {
      if (
        item.thongTinRap.tenCumRap === cluster &&
        new Date(item.ngayChieuGioChieu).toLocaleDateString() === showtime &&
        new Date(item.ngayChieuGioChieu).toLocaleTimeString() === hour
      ) {
        props.sendValuecheckLogoutLoginAndBuyTickets(item.maLichChieu, false);
      }
    }
  };
  return (
    <Fragment>
      {" "}
      {localStorage.getItem("user") && props.checkAccount === false ? (
        <div
          className="listhour-for-detail"
          onClick={() => {
            nextPagesToBookingSeat();
          }}
        >
          {hour}
        </div>
      ) : (
        <div
          onClick={() => {
            LoginForBookingSeat();
          }}
          className="listhour-for-detail"
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
    detailMovie: state.Reducer.DetailMovie,
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
export default connect(mapStateToProps, mapDispatchToProps)(ListHourForDetail);
