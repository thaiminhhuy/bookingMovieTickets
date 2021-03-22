import React, { useEffect } from "react";
import Movie from "./movie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { connect } from "react-redux";
import * as action from "../actions/index";
import Button from "@material-ui/core/Button";
import "./styled-components/styleListMovie.css";
import LoadMoreForMobile from "../components/loadmoreformobile";
function ListMovie(props) {
  var Settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    props.setListMovieToStore(5);
  }, []);
  const renderListMovie = () => {
    let { listMovie } = props;
    return listMovie.map((movie) => {
      return <Movie movie={movie} key={movie.maPhim} />;
    });
  };
  return (
    <div className="show-slider-listmovie" id="show-slider-listmovie">
      <div className="container mt-5">
        <div className="row  justify-content-center">
          <div className="col-sm-12 hiddenToShowMobile ">
            <nav className="mb-3">
              <div
                className="nav nav-tabs  justify-content-center"
                id="nav-tab"
                role="tablist"
              >
                <Button
                  className="nav-item nav-link active momentshowtime-loadmore fontsize"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  onClick={() => {
                    props.setListMovieToStore(5);
                  }}
                >
                  Đang Chiếu
                </Button>
                <Button
                  className="nav-item nav-link soonshowtime-loadmore fontsize"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                  onClick={() => {
                    props.setListMovieToStore(4);
                  }}
                >
                  Sắp Chiếu
                </Button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active "
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <Slider {...Settings}>{renderListMovie()}</Slider>
              </div>
              <div
                className="tab-pane fade "
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <Slider {...Settings}>{renderListMovie()}</Slider>
              </div>
            </div>
          </div>

          <div className="col-sm-12 showMobile ">
            <nav className="mb-2 ">
              <div
                className="nav nav-tabs justify-content-center"
                id="nav-tab"
                role="tablist"
              >
                <Button
                  className="nav-item nav-link active momentshowtime-loadmore"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  onClick={() => {
                    props.sendValueForLoadMore(1);
                  }}
                >
                  Đang Chiếu
                </Button>
                <Button
                  className="nav-item nav-link soonshowtime-loadmore"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                  onClick={() => {
                    props.sendValueForLoadMore(2);
                  }}
                >
                  Sắp Chiếu
                </Button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active "
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <LoadMoreForMobile />
              </div>
              <div
                className="tab-pane fade "
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <LoadMoreForMobile />
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
    setListMovieToStore: (value) => {
      dispatch(action.actListMovieAPI(value));
    },
    sendValueForLoadMore: (value) => {
      dispatch(action.actSendValueForLoadMore(value));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    listMovie: state.Reducer.listMovie,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
