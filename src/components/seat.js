import React, { useState } from "react";
import { Fragment } from "react";
export default function Seat(props) {
  const [bookingSeat, setbookingSeat] = useState(false);

  const handlebookingSeat = () => {
    setbookingSeat(!bookingSeat);
    props.handleSeatItem(props.seat);
  };
  return (
    <Fragment>
      {props.seat.daDat === true ? (
        <button className="btn btn-secondary" disabled={props.seat.daDat}>
          {props.seat.tenGhe}
        </button>
      ) : (
        <Fragment>
          {props.seat.loaiGhe === "Thuong" ? (
            <button
              className={
                bookingSeat === false ? "btn btn-dark" : "btn btn-success"
              }
              onClick={handlebookingSeat}
            >
              {props.seat.tenGhe}
            </button>
          ) : (
            <button
              className={
                bookingSeat === false ? "btn btn-warning" : "btn btn-success"
              }
              onClick={handlebookingSeat}
            >
              {props.seat.tenGhe}
            </button>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}
