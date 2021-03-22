import React, { useEffect } from "react";
import { useState } from "react";
import "../components/styled-components/detailmovie.css";
import { connect } from "react-redux";
import * as action from "../actions/index";
import ListClusterForDetail from "../components/listclusterfordetail.js";
import Iframe from "react-iframe";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LazyLoadComponent from "../components/lazyloadcomponent";
function DetailMovie(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    props.getDetailMovie(props.match.params.id);
  }, []);
  useEffect(() => {
    return () => {
      props.destroyDetailMovie();
      props.setLoadingTrue();
    };
  }, []);

  const renderCluster = () => {
    if (props.detailMovie.lichChieu !== undefined) {
      let arrCluster = [];
      for (let item of props.detailMovie.lichChieu) {
        if (arrCluster.indexOf(item.thongTinRap.tenCumRap) === -1) {
          arrCluster.push(item.thongTinRap.tenCumRap);
        }
      }
      return arrCluster.map((item, index) => {
        return <ListClusterForDetail key={index} cluster={item} />;
      });
    }
  };
  console.log(props.loading);

  if (props.loading) return <LazyLoadComponent />;
  else
    return (
      <div className="p-detail-movie">
        <div
          className="detail-movie"
          style={{ backgroundImage: `url(${props.detailMovie.hinhAnh})` }}
        >
          <div className="cloud-img animation-cloud1">
            <img src="/img/cloud.png" alt="" />
          </div>
          <div className="cloud-img  animation-cloud2">
            <img src="/img/cloud.png" alt="" />
          </div>
          <div className="cloud-img  animation-cloud3">
            <img src="/img/cloud.png" alt="" />
          </div>
          <div className="cloud-img  animation-cloud4">
            <img src="/img/cloud.png" alt="" />
          </div>

          <div className="container ">
            <div className="row justify-content-center ">
              <div className="col-sm-10 margin-top-100px">
                <div className="row ">
                  <div className="col-sm-8 d-flex detail-box-movie">
                    <div className="hover-caption">
                      <img
                        className="img-fluid img-width-height"
                        src={props.detailMovie.hinhAnh}
                        alt=""
                      />
                      <div className="content-movie-detail d-flex">
                        <div className="content-infomation-movie">
                          <span className="span-style-title-film ">
                            Tên Phim : {props.detailMovie.tenPhim}
                          </span>
                          <span className="span-style">
                            Đánh Giá : {props.detailMovie.danhGia}
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                          </span>
                          <span className="span-style">
                            Mô Tả : {props.detailMovie.moTa}
                          </span>
                          <span className="span-style">
                            Ngày Khởi Chiếu :
                            {new Date(
                              props.detailMovie.ngayKhoiChieu
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="video-detail-movie">
                      <Button variant="primary" onClick={handleShow}>
                        <span>
                          Watch Trailer
                          <i className="fa fa-play-circle" aria-hidden="true">
                            &nbsp;
                          </i>
                        </span>
                      </Button>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Iframe
                            width="100%"
                            src={props.detailMovie.trailer}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            className="myiframe"
                          ></Iframe>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </div>
                  <div className="col-sm-4 mt-3">
                    <div className="info-detailmovie-bookingseat">
                      <div className="padding-top-bottom-100 text-center">
                        Thông Tin Chi Tiết Đặt Vé
                      </div>
                      <div className="bookticket-movie container mt-3">
                        {renderCluster()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDetailMovie: (maPhim) => {
      dispatch(action.actGetDetailMovieAPI(maPhim));
    },
    destroyDetailMovie: () => {
      dispatch(action.actDestroyDetailMovie({}));
    },
    setLoadingTrue: () => {
      dispatch(action.actSetLoadingValueTrue());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    detailMovie: state.Reducer.DetailMovie,
    loading: state.Reducer.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
