import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import * as action from "../actions/index";

function InforTheaterSystem(props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    props.getListCluster();
  }, []);
  useEffect(() => {
    if (props.listCluster[0]) {
      props.sendAddressCluster(props.listCluster[0].maHeThongRap);
    }
  }, [props.listCluster]);
  const sendAddressClusterToStore = (maHeThongRap) => {
    props.sendAddressCluster(maHeThongRap);
  };

  const renderListTheaterSystem = () => {
    return props.listCluster.map((cluster, index) => {
      if (index === 0) {
        return (
          <li
            key={index}
            className={active === index ? "active-logo-theatersystem" : ""}
            onClick={() => {
              setActive(index);
              sendAddressClusterToStore(cluster.maHeThongRap);
            }}
          >
            <img src={cluster.logo} alt="" />
          </li>
        );
      } else {
        return (
          <li
            key={index}
            className={active === index ? "active-logo-theatersystem" : ""}
            onClick={() => {
              setActive(index);
              sendAddressClusterToStore(cluster.maHeThongRap);
            }}
          >
            <img src={cluster.logo} alt="" />
          </li>
        );
      }
    });
  };
  return (
    <ul className="infor-theater-system nav nav-tabs">
      {renderListTheaterSystem()}
    </ul>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListCluster: () => {
      dispatch(action.actListClusterAPT());
    },
    sendAddressCluster: (maHeThongRap) => {
      dispatch(action.actSendListAddressAPI(maHeThongRap));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    listCluster: state.Reducer.listCluster,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InforTheaterSystem);
