import React, { useState } from "react";
import { Fragment } from "react";
import DateShowtimeItem from "../components/dateshowtimeItem";
export default function FilmForMobile(props) {
  let { item } = props;
  const [open, setOpen] = useState(false);

  const getListDateShowTime = () => {
    let arrDateShowTime = [];
    for (let datetime of item.lstLichChieuTheoPhim) {
      let date = new Date(datetime.ngayChieuGioChieu).toLocaleDateString();
      if (arrDateShowTime.indexOf(date) === -1) {
        arrDateShowTime.push(date);
      }
    }
    return arrDateShowTime.map((date, index) => {
      return <DateShowtimeItem date={date} key={index} item={item} />;
    });
  };
  return (
    <Fragment>
      <div
        className="film-mobile"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="img-film">
          <img className="img-listAddressCinema" src={item.hinhAnh} alt="" />
        </div>
        <span>{item.tenPhim}</span>
      </div>
      <div className="list-date-showtime-mobile text-center">
        {open === false ? "" : getListDateShowTime()}
      </div>
    </Fragment>
  );
}
