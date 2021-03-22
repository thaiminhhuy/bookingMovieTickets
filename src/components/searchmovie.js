import React, { useState } from "react";
import "./styled-components/search.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as action from "../actions/index";
import { Link } from "react-router-dom";
import { Fragment } from "react";
function SearchMovie(props) {
  const [containFilm, setContainFilm] = useState(null);
  const [containCluster, setContainCluster] = useState(null);
  const [containShowTimes, setContainShowTimes] = useState(null);
  const [containHours, setcontainHours] = useState(null);
  const [showtimeCode, setShowtimeCode] = useState(null);

  const renderListFilm = () => {
    return props.listMovie.map((movie, index) => {
      return (
        <button
          className="dropdown-item"
          type="button"
          key={index}
          onClick={() => {
            setContainFilm(movie.tenPhim);
            setContainCluster(null);
            setContainShowTimes(null);
            setcontainHours(null);
            setShowtimeCode(null);
            props.getInformationShowTimes(movie.maPhim);
          }}
        >
          {movie.tenPhim}
        </button>
      );
    });
  };

  const getShowTimes = () => {
    if (containCluster !== null) {
      let heThongRap = props.arrShowTimes.heThongRapChieu;
      let arrShowTimesForCluster = [];
      for (let showTimes of heThongRap) {
        let arrShowTimes = showTimes.cumRapChieu;
        for (let showTime of arrShowTimes) {
          arrShowTimesForCluster.push(showTime);
        }
      }
      let ShowTimesForCluster = [];
      for (let cluster of arrShowTimesForCluster) {
        if (cluster.tenCumRap === containCluster) {
          ShowTimesForCluster = cluster.lichChieuPhim;
        }
      }
      let arrGetShowTimes = [];
      for (let item of ShowTimesForCluster) {
        if (arrGetShowTimes.length === 0) {
          let dd_mm_yy = new Date(item.ngayChieuGioChieu).toLocaleDateString();
          arrGetShowTimes.push(dd_mm_yy);
        } else {
          let dd_mm_yy = new Date(item.ngayChieuGioChieu).toLocaleDateString();
          if (arrGetShowTimes.indexOf(dd_mm_yy) === -1) {
            arrGetShowTimes.push(dd_mm_yy);
          }
        }
      }
      return arrGetShowTimes.map((showtime, index) => {
        return (
          <button
            className="dropdown-item"
            type="button"
            key={index}
            onClick={() => {
              setContainShowTimes(showtime);
              setShowtimeCode(null);
              setcontainHours(null);
            }}
          >
            {showtime}
          </button>
        );
      });
    }
  };
  const renderClusterShowTime = () => {
    let heThongRap = props.arrShowTimes.heThongRapChieu;
    if (heThongRap !== undefined) {
      if (heThongRap.length > 0) {
        let arrAddressShowTimes = [];

        for (let showTimes of heThongRap) {
          let arrShowTimes = showTimes.cumRapChieu;

          for (let showTime of arrShowTimes) {
            arrAddressShowTimes.push(showTime.tenCumRap);
          }
        }

        return arrAddressShowTimes.map((cluster, index) => {
          return (
            <button
              className="dropdown-item"
              type="button"
              key={index}
              onClick={() => {
                setContainCluster(cluster);
                setContainShowTimes(null);
                setShowtimeCode(null);
                setcontainHours(null);
              }}
            >
              {cluster}
            </button>
          );
        });
      }
    }
  };
  const renderhourShowTimes = () => {
    if (containShowTimes !== null) {
      let heThongRap = props.arrShowTimes.heThongRapChieu;
      let arrShowTimesForCluster = [];
      for (let showTimes of heThongRap) {
        let arrShowTimes = showTimes.cumRapChieu;
        for (let showTime of arrShowTimes) {
          arrShowTimesForCluster.push(showTime);
        }
      }
      let ShowTimesForCluster = [];
      for (let cluster of arrShowTimesForCluster) {
        if (cluster.tenCumRap === containCluster) {
          ShowTimesForCluster = cluster.lichChieuPhim;
        }
      }

      let hoursShowTimes = [];
      for (let cluster of ShowTimesForCluster) {
        let dd_mm_yy = new Date(cluster.ngayChieuGioChieu).toLocaleDateString();
        if (containShowTimes === dd_mm_yy) {
          let hour = new Date(cluster.ngayChieuGioChieu).toLocaleTimeString();
          hoursShowTimes.push(hour);
        }
      }

      return hoursShowTimes.map((hour, index) => {
        return (
          <button
            className="dropdown-item"
            type="button"
            key={index}
            onClick={() => {
              setcontainHours(hour);
              setShowtimeCode(null);
            }}
          >
            {hour}
          </button>
        );
      });
    }
  };
  const getShowTimesCode = () => {
    let heThongRap = props.arrShowTimes.heThongRapChieu;
    if (
      containCluster !== null &&
      containFilm !== null &&
      containShowTimes !== null &&
      containHours !== null &&
      showtimeCode === null
    ) {
      let arrCluster = [];
      for (let Clusters of heThongRap) {
        let arrShowTimes = Clusters.cumRapChieu;
        for (let cluster of arrShowTimes) {
          arrCluster.push(cluster);
        }
      }
      let Cluster;
      for (let cluster of arrCluster) {
        if (cluster.tenCumRap === containCluster) {
          Cluster = cluster;
        }
      }

      for (let lichChieu of Cluster.lichChieuPhim) {
        let dateShowTime = new Date(
          lichChieu.ngayChieuGioChieu
        ).toLocaleDateString();
        let hourShowTime = new Date(
          lichChieu.ngayChieuGioChieu
        ).toLocaleTimeString();
        if (
          dateShowTime === containShowTimes &&
          hourShowTime === containHours
        ) {
          console.log(lichChieu.maLichChieu);

          setShowtimeCode(lichChieu.maLichChieu);
          break;
        }
      }
    }
  };
  return (
    <div className="searchmovie">
      <div className="container">
        <div className=" justify-content-center">
          <div className="col-sm-10 toolsearchmovie row">
            <div className="col-sm-4 dropdown ">
              <div
                className=" dropdown-toggle selectMenu"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {containFilm === null ? "Phim" : containFilm}
              </div>
              <div
                className="dropdown-menu selectMovie selectscroll"
                aria-labelledby="dropdownMenu2"
              >
                {renderListFilm()}
              </div>
            </div>
            <div className="col-sm-2 dropdown ">
              <div
                className=" dropdown-toggle selectMenu"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>{containCluster === null ? " Rạp" : containCluster}</span>
              </div>
              <div
                className="dropdown-menu selectMovie .searchcluster .selectscroll"
                aria-labelledby="dropdownMenu2"
              >
                {containFilm === null ? (
                  "Vui lòng chọn phim "
                ) : (
                  <div>{renderClusterShowTime()}</div>
                )}
              </div>
            </div>
            <div className="col-sm-2 dropdown">
              <div
                className=" dropdown-toggle selectMenu"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {containShowTimes === null ? "Ngày Xem" : containShowTimes}
              </div>
              <div
                className="dropdown-menu selectMovie .selectscroll"
                aria-labelledby="dropdownMenu2"
              >
                {containCluster === null ? (
                  "Vui lòng chọn phim và rạp"
                ) : (
                  <div>{getShowTimes()}</div>
                )}
              </div>
            </div>
            <div className="col-sm-2 dropdown ">
              <div
                className=" dropdown-toggle selectMenu"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {containHours === null ? " Suất Chiếu" : containHours}
              </div>
              <div
                className="dropdown-menu selectMovie .selectscroll"
                aria-labelledby="dropdownMenu2"
              >
                {containShowTimes === null ? (
                  "Vui lòng chọn phim và rạp , ngày xem"
                ) : (
                  <div>
                    {renderhourShowTimes()}
                    {getShowTimesCode()}
                  </div>
                )}
              </div>
            </div>
            <div className="col-sm-2 buyticket">
              {localStorage.getItem("user") && props.checkAccount === false ? (
                <Fragment>
                  {showtimeCode === null ? (
                    <Button variant="contained">Mua Vé Ngay</Button>
                  ) : (
                    <Button variant="contained">
                      <Link to={`/book-seat/${showtimeCode}`}>Mua Vé Ngay</Link>
                    </Button>
                  )}
                </Fragment>
              ) : (
                <Fragment>
                  {showtimeCode === null ? (
                    <Button variant="contained">Mua Vé Ngay</Button>
                  ) : (
                    <Button
                      variant="contained"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() => {
                        console.log(showtimeCode);

                        props.sendValuecheckLogoutLoginAndBuyTickets(
                          showtimeCode,
                          false
                        );
                      }}
                    >
                      Mua Vé Ngay
                    </Button>
                  )}
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.Reducer.listMovie,
    arrShowTimes: state.Reducer.informationShowTimes,
    checkAccount: state.LoginAndRegister.checkAccount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getInformationShowTimes: (maPhim) => {
      dispatch(action.actGetShowTimesForSearchFilmAPI(maPhim));
    },
    sendValuecheckLogoutLoginAndBuyTickets: (maLichChieu, value) => {
      dispatch(
        action.actSendValuecheckLogoutLoginAndBuyTickets(maLichChieu, value)
      );
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);
