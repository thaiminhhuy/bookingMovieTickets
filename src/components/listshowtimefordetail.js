import React, { useState } from "react";
import { connect } from "react-redux";
import { Fragment } from "react";
import ListHourForDetail from "../components/listhourfordetail.js";
function ListShowTimeForDetail(props) {
  const [open, setOpen] = useState(false);
  let { showtime, cluster } = props;

  const getHourTime = () => {
    let arrHourTime = [];
    for (let item of props.detailMovie.lichChieu) {
      if (item.thongTinRap.tenCumRap === cluster) {
        if (
          new Date(item.ngayChieuGioChieu).toLocaleDateString() === showtime
        ) {
          arrHourTime.push(
            new Date(item.ngayChieuGioChieu).toLocaleTimeString()
          );
        }
      }
    }
    return arrHourTime.map((item, index) => {
      return (
        <ListHourForDetail
          hour={item}
          key={index}
          cluster={cluster}
          showtime={showtime}
        />
      );
    });
  };
  return (
    <Fragment>
      <div
        className="listshowtime-for-detail"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {showtime}
      </div>
      {open === false ? "" : <div> {getHourTime()}</div>}
    </Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    detailMovie: state.Reducer.DetailMovie,
  };
};
export default connect(mapStateToProps, null)(ListShowTimeForDetail);
