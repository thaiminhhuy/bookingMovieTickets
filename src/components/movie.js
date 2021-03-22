import React from "react";
import "./styled-components/movie.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
export default function Movie(props) {
  let { movie } = props;

  return (
    <div className="movie">
      <div className="card card-movie" style={{ height: 400 }}>
        <div className="movie-img">
          <img className="card-img-top img-fluid" src={movie.hinhAnh} alt="" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{movie.tenPhim}</h4>
        </div>
        <div className="background-hover"></div>
        <div className="show see-detail-movie">
          <Button
            variant="contained"
            color="secondary"
            className="showbutton style-link style-button-movie"
          >
            <Link to={`/detail-movie/${movie.maPhim}`}> Xem Chi Tiết </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
