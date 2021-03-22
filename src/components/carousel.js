import React from "react";
import "../components/styled-components/carousel.css";
export default function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-introduce"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        <li data-target="#carouselExampleIndicators" data-slide-to={3} />
      </ol>
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          style={{ backgroundImage: `url("./img/phim1.jpg")` }}
        ></div>
        <div
          className="carousel-item"
          style={{ backgroundImage: `url("./img/phim2.jpg")` }}
        ></div>
        <div
          className="carousel-item"
          style={{ backgroundImage: `url("./img/phim3.jpg")` }}
        ></div>
        <div
          className="carousel-item"
          style={{ backgroundImage: `url("./img/phim4.jpg")` }}
        ></div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
