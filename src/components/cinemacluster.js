import React, { useEffect, useState } from "react";
import "./styled-components/cinemacluster.css";
import { connect } from "react-redux";
import * as action from "../actions/index";

let count = 0;

function CinemaCluster(props) {
  useEffect(() => {
    props.getListCluster();
  }, []);
  const [activeAddressCinema, setActive] = useState(0);

  const renderCluster = () => {
    return props.listCluster.map((item, index) => {
      if (index === 0) {
        return (
          <li
            key={index}
            className="activelogo listCluster "
            onClick={
              (props.getListAddressActive(item.maHeThongRap, index),
              () => {
                setActive(0);
                props.getListAddressNoActive(item.maHeThongRap, index);
              })
            }
          >
            <a>
              <img src={item.logo} alt="" />
            </a>
          </li>
        );
      } else {
        return (
          <li
            key={index}
            className="listCluster "
            onClick={() => {
              setActive(0);
              props.getListAddressNoActive(item.maHeThongRap, index);
            }}
          >
            <a>
              <img src={item.logo} alt="" />
            </a>
          </li>
        );
      }
    });
  };
  const handleGetMovie = (danhSachPhim) => {
    if (count === 0) {
      if (danhSachPhim !== []) {
        let length = danhSachPhim.length;
        for (let i = 0; i < danhSachPhim.length; i++) {
          props.getMovie(danhSachPhim[i].maPhim, length);
        }
        count++;
      } else {
        console.log("khong co phim ");
      }
    } else if (props.indexCluster !== -1 && props.indexCluster !== undefined) {
      console.log(props.indexCluster);

      console.log(danhSachPhim);

      if (danhSachPhim !== []) {
        let length = danhSachPhim.length;
        for (let i = 0; i < danhSachPhim.length; i++) {
          props.getMovieNoActive(danhSachPhim[i].maPhim, length, -1);
        }
      } else {
        console.log("khong co phim ");
      }
    }
  };
  const renderListAddressCinema = () => {
    if (props.listAddressCinema.lstCumRap !== undefined) {
      return props.listAddressCinema.lstCumRap.map((item, index) => {
        if (index === 0) {
          return (
            <div
              key={index}
              className={
                activeAddressCinema === index
                  ? "listAddressCinema activeAddressCinema"
                  : "listAddressCinema"
              }
              onClick={
                (handleGetMovie(item.danhSachPhim),
                () => {
                  setActive(index);

                  if (item.danhSachPhim !== []) {
                    console.log(item.danhSachPhim);
                    let length = item.danhSachPhim.length;
                    for (let i = 0; i < item.danhSachPhim.length; i++) {
                      props.getMovieNoActive(
                        item.danhSachPhim[i].maPhim,
                        length
                      );
                    }
                  } else {
                    console.log("khong co phim ");
                  }
                })
              }
            >
              {props.listAddressCinema.maHeThongRap === "BHDStar" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/bhb.jpg"
                  alt=""
                />
              )}
              {props.listAddressCinema.maHeThongRap === "CGV" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/cgv.jpg"
                  alt=""
                />
              )}
              {props.listAddressCinema.maHeThongRap === "CineStar" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/CNS.jpeg"
                  alt=""
                />
              )}
              {props.listAddressCinema.maHeThongRap === "Galaxy" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/galaxy.jpg"
                  alt=""
                />
              )}
              {props.listAddressCinema.maHeThongRap === "LotteCinima" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/lotte.jpg"
                  alt=""
                />
              )}
              {props.listAddressCinema.maHeThongRap === "MegaGS" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/mega.png"
                  alt=""
                />
              )}
              <div className="AddressCinema">
                <span className="titleCinema">{item.tenCumRap}</span>
                <span className="infoCinema">{item.diaChi}</span>
                <span className="detailAddress">Chi Tiết</span>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              onClick={() => {
                setActive(index);

                if (item.danhSachPhim !== []) {
                  console.log(item.danhSachPhim);
                  let length = item.danhSachPhim.length;
                  for (let i = 0; i < item.danhSachPhim.length; i++) {
                    props.getMovieNoActive(item.danhSachPhim[i].maPhim, length);
                  }
                } else {
                  console.log("khong co phim ");
                }
              }}
              className={
                activeAddressCinema === index
                  ? "listAddressCinema activeAddressCinema"
                  : "listAddressCinema"
              }
            >
              {props.listAddressCinema.maHeThongRap === "BHDStar" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/bhb.jpg"
                  alt=""
                />
              )}
              {props.listAddressCinema.maHeThongRap === "CGV" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/cgv.jpg"
                  alt=""
                />
              )}
              {props.listAddressCinema.maHeThongRap === "CineStar" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/CNS.jpeg"
                  alt=""
                />
              )}
              {props.listAddressCinema.maHeThongRap === "Galaxy" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/galaxy.jpg"
                  alt=""
                />
              )}
              {props.listAddressCinema.maHeThongRap === "LotteCinima" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/lotte.jpg"
                  alt=""
                />
              )}
              {props.listAddressCinema.maHeThongRap === "MegaGS" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/mega.png"
                  alt=""
                />
              )}
              <div className="AddressCinema">
                <span className="titleCinema">{item.tenCumRap}</span>
                <span className="infoCinema">{item.diaChi}</span>
                <span className="detailAddress">Chi Tiết</span>
              </div>
            </div>
          );
        }
      });
    }
  };
  const renderShowTimeListMovie = () => {
    return props.listShowTimeMovie.map((item, index) => {
      return (
        <div className="dropdown" key={index}>
          <a
            className="btn btn-secondary dropdown-toggle"
            href="/"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="movie-cinema">
              <img src={item.hinhAnh} alt="" />
              <div className="title-time-movie">
                <span>{item.tenPhim}</span>
                <span>
                  {
                    item.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0]
                      .thoiLuong
                  }
                  Phút
                </span>
              </div>
            </div>
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <div className="row">
              <div className="col-sm-6 padding-right">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 ">
                      <div className="showtime-cinema">
                        <span>10:10</span>
                        <span>~12:10</span>
                      </div>
                      <div className="showtime-cinema">
                        <span>10:10</span>
                        <span>~12:10</span>
                      </div>
                    </div>
                    <div className="col-sm-6 ">
                      <div className="showtime-cinema">
                        <span>10:10</span>
                        <span>~12:10</span>
                      </div>
                      <div className="showtime-cinema">
                        <span>10:10</span>
                        <span>~12:10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 padding-left">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="showtime-cinema">
                        <span>10:10</span>
                        <span>~12:10</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="showtime-cinema">
                        <span>10:10</span>
                        <span>~12:10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container .cluster-introduce">
      <div className="row justify-content-center">
        <div className="col-sm-10">
          <ul className="nav nav-tabs nav-tabs-cluster-showmovie">
            {renderCluster()}
          </ul>
          <div className="tab-content float-left tab-content-cluster-showmovie">
            {renderListAddressCinema()}
          </div>
          <div className="listmovie">{renderShowTimeListMovie()}</div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getListCluster: () => {
      dispatch(action.actListClusterAPT());
    },
    getListAddressActive: (maHeThongRap, index) => {
      dispatch(action.actListAddressAPI(maHeThongRap, index));
    },
    getListAddressNoActive: (maHeThongRap, index) => {
      dispatch(action.actListAddressNoActiveAPI(maHeThongRap, index));
    },
    getMovie: (maPhim, length) => {
      dispatch(action.actGetMovieAPI(maPhim, length));
    },
    getMovieNoActive: (maPhim, length, index) => {
      dispatch(action.actGetMovieNoActiveAPI(maPhim, length, index));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    listCluster: state.Reducer.listCluster,
    listAddressCinema: state.Reducer.listAddressCinema,
    listShowTimeMovie: state.Reducer.arrMovieShowTime,
    indexCluster: state.Reducer.indexCluster,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CinemaCluster);
