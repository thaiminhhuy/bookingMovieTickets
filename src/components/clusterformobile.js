import React, { useState } from "react";
import { Fragment } from "react";
import { connect } from "react-redux";

import SystemCinemaItem from "./systemcinemaItem";
import Axios from "axios";
function ClusterForMobile(props) {
  let { cluster } = props;

  const [open, setOpen] = useState(false);
  const [arrListSystemTheaterOld, setArrListSystemTheaterOld] = useState({});

  const callListAddressAPI = () => {
    Axios({
      method: "Get",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${cluster.maHeThongRap}&maNhom=GP05`,
    })
      .then((rs) => {
        setArrListSystemTheaterOld(rs.data[0]);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  const renderListCluster = () => {
    if (arrListSystemTheaterOld.lstCumRap !== undefined) {
      return arrListSystemTheaterOld.lstCumRap.map((item, index) => {
        return <SystemCinemaItem item={item} key={index} cluster={cluster} />;
      });
    }
  };

  return (
    <Fragment>
      <div
        className="cluster-mobile"
        onClick={() => {
          callListAddressAPI();
          setOpen(!open);
        }}
      >
        <div className="img-cluster-mobile">
          <img src={cluster.logo} alt="" />
        </div>
        <span>{cluster.tenHeThongRap}</span>
      </div>
      {open ? (
        <div className="system-cinema-mobile">{renderListCluster()}</div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default connect(null, null)(ClusterForMobile);
