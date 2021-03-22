import React, { useState } from "react";
import { useEffect } from "react";
import ListDateTimeForTheaterSystem from "../components/listdatetimefortheatersystem";
export default function ListFilmForTheaterSystem(props) {
  const [open, setOpen] = useState(false);

  let { item } = props;

  useEffect(() => {
    if (item) {
      setOpen(false);
    }
  }, [item]);
  const getListShowTime = () => {
    let arrDateTime = [];
    for (let datetime of item.lstLichChieuTheoPhim) {
      datetime = new Date(datetime.ngayChieuGioChieu).toLocaleDateString();
      if (arrDateTime.indexOf(datetime) === -1) {
        arrDateTime.push(datetime);
      }
    }
    return arrDateTime.map((datetime, index) => {
      return (
        <ListDateTimeForTheaterSystem
          key={index}
          datetime={datetime}
          item={item}
          val={false}
        />
      );
    });
  };
  return (
    <div>
      <div
        className="all-info-film-datetime-hourtime"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="info-film-datetime-hourtime">
          <img src={item.hinhAnh} alt="" />
          <div className="namefilm-showtime">
            <span className="d-block">{item.tenPhim}</span>
          </div>
        </div>
      </div>
      {open === false ? (
        ""
      ) : (
        <div className="text-center listdatetime-for-theatersystem">
          {getListShowTime()}
        </div>
      )}
    </div>
  );
}
