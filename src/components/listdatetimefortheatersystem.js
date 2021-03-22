import React, { useState } from "react";

import ListHourTimeForTheaterSystem from "../components/listhourtimefortheatersystem";
export default function ListDateTimeForTheaterSystem(props) {
  const [open, setOpen] = useState(false);
  let { datetime, item } = props;

  const renderListHourTime = () => {
    let arrHour = [];
    for (let datetimeForFilm of item.lstLichChieuTheoPhim) {
      let datetimeForTheaterSystem = new Date(
        datetimeForFilm.ngayChieuGioChieu
      ).toLocaleDateString();

      if (datetimeForTheaterSystem === datetime) {
        let hour = new Date(
          datetimeForFilm.ngayChieuGioChieu
        ).toLocaleTimeString();

        arrHour.push(hour);
      }
    }
    return arrHour.map((hour, index) => {
      return (
        <ListHourTimeForTheaterSystem
          hour={hour}
          key={index}
          datetime={datetime}
          item={item}
        />
      );
    });
  };
  return (
    <div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="datetime-for-theatersystem"
      >
        <div>{datetime}</div>
      </div>
      {open === false ? "" : <div>{renderListHourTime()}</div>}
    </div>
  );
}
