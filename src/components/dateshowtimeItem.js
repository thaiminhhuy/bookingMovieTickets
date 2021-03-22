import React, { useState } from "react";
import { Fragment } from "react";
import ListHourMobile from "../components/listhourmobile";
export default function DateShowtimeItem(props) {
  let { date, item } = props;

  const [open, setOpen] = useState(false);
  const getListHour = () => {
    let arrHour = [];
    for (let showtime of item.lstLichChieuTheoPhim) {
      let datetime = new Date(showtime.ngayChieuGioChieu).toLocaleDateString();
      if (date === datetime) {
        let hour = new Date(showtime.ngayChieuGioChieu).toLocaleTimeString();
        arrHour.push(hour);
      }
    }

    return arrHour.map((hour, index) => {
      return <ListHourMobile key={index} hour={hour} date={date} item={item} />;
    });
  };
  return (
    <Fragment>
      <div
        className="date-time-mobile"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {date}
      </div>
      <div className="list-hour-mobile">
        {open === false ? "" : getListHour()}
      </div>
    </Fragment>
  );
}
