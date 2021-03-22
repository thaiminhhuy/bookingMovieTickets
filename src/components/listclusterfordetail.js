import React, { useState } from "react";
import { connect } from "react-redux";
import ListShowTimeForDetail from "../components/listshowtimefordetail";
import { Fragment } from "react";
function ListClusterForDetail(props) {
  const [open, setOpen] = useState(false);

  let { cluster } = props;

  const getShowTimes = () => {
    let arrShowTime = [];
    for (let item of props.detailMovie.lichChieu) {
      if (item.thongTinRap.tenCumRap === cluster) {
        if (
          arrShowTime.indexOf(
            new Date(item.ngayChieuGioChieu).toLocaleDateString()
          ) === -1
        ) {
          arrShowTime.push(
            new Date(item.ngayChieuGioChieu).toLocaleDateString()
          );
        }
      }
    }
    return arrShowTime.map((item, index) => {
      return (
        <ListShowTimeForDetail showtime={item} key={index} cluster={cluster} />
      );
    });
  };

  return (
    <Fragment>
      <div
        className="cluster-for-detail"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {cluster}
      </div>
      {open === false ? "" : <div> {getShowTimes()}</div>}
    </Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    detailMovie: state.Reducer.DetailMovie,
  };
};
export default connect(mapStateToProps, null)(ListClusterForDetail);
