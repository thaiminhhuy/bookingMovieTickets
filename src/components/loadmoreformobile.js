import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import * as action from "../actions/index";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "../components/styled-components/loadmoreformobile.css";
function LoadMoreForMobile(props) {
  const [visiable, setVisiable] = useState(2);
  useEffect(() => {
    props.setListMovieToStore();
  }, []);

  useEffect(() => {
    if (props.valueForLoadMore > 0) {
      setVisiable(2);
    }
  }, [props.valueForLoadMore]);
  const LoadMore = () => {
    setVisiable((visiable) => {
      return visiable + 2;
    });
  };
  return (
    <div className="loadmore-mobile text-center">
      <div className="text-center">
        {props.listMovie.slice(0, visiable).map((item, index) => {
          return (
            <div className="item-loadmore mt-3" key={index}>
              <img src={item.hinhAnh} alt="" />
              <div className="info-film-mobile">
                <span className="d-block name-film-loadmore">
                  {item.tenPhim}
                </span>
                <Button
                  variant="contained"
                  color="secondary"
                  className="showbutton style-link style-button-movie"
                >
                  <Link to={`/detail-movie/${item.maPhim}`}>Xem Chi Tiết</Link>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      {visiable < props.listMovie.length && (
        <Button variant="contained" onClick={LoadMore}>
          Xem Thêm
        </Button>
      )}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    setListMovieToStore: () => {
      dispatch(action.actListMovieAPI());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    listMovie: state.Reducer.listMovie,
    valueForLoadMore: state.Reducer.valueForLoadMore,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoadMoreForMobile);
