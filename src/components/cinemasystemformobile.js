import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as action from "../actions/index";
import "../components/styled-components/cinemasystemmobile.css";
import ClusterForMobile from "./clusterformobile";

function CinemaSystemForMobile(props) {
  useEffect(() => {
    props.getListCluster();
  }, []);

  const renderListClusterForMobile = () => {
    return props.listClusterMobile.map((item, index) => {
      return <ClusterForMobile cluster={item} key={index} id={index} />;
    });
  };

  return (
    <div className="cinemasystem-mobile">{renderListClusterForMobile()}</div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getListCluster: () => {
      dispatch(action.actListClusterMobileAPT());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    listClusterMobile: state.Reducer.listClusterMobile,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CinemaSystemForMobile);
