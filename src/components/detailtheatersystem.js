import React, { useState } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import * as action from "../actions/index";

function DetailTheaterSystem(props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (props.listAddress[0]) {
      setActive(0);
      if (props.listAddress[0] !== undefined) {
        props.sendClusterAndAddressToStore(
          null,
          props.listAddress[0].lstCumRap[0].tenCumRap
        );
      }
    }
  }, [props.listAddress[0]]);

  const sendClusterAndAddressAfter = (tenCumRap, address) => {
    props.sendClusterAndAddressToStore(address, tenCumRap);
  };
  const renderListAddress = () => {
    if (props.listAddress[0] !== undefined) {
      return props.listAddress[0].lstCumRap.map((item, index) => {
        if (index === 0) {
          return (
            <div
              className={
                active === index
                  ? "detail-theater-system-children active-logo-theatersystem"
                  : "detail-theater-system-children "
              }
              onClick={() => {
                setActive(index);
                sendClusterAndAddressAfter(item.tenCumRap, item.diaChi);
              }}
              key={index}
            >
              {props.listAddress[0].maHeThongRap === "BHDStar" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/bhb.jpg"
                  alt=""
                />
              )}
              {props.listAddress[0].maHeThongRap === "CGV" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/cgv.jpg"
                  alt=""
                />
              )}
              {props.listAddress[0].maHeThongRap === "CineStar" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/CNS.jpeg"
                  alt=""
                />
              )}
              {props.listAddress[0].maHeThongRap === "Galaxy" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/galaxy.jpg"
                  alt=""
                />
              )}
              {props.listAddress[0].maHeThongRap === "LotteCinima" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/lotte.jpg"
                  alt=""
                />
              )}
              {props.listAddress[0].maHeThongRap === "MegaGS" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/mega.png"
                  alt=""
                />
              )}
              <div className="wrapinfor-children">
                <span className="style-span-cluster">{item.tenCumRap}</span>
                <span className="style-span-address">{item.diaChi}</span>
              </div>
            </div>
          );
        } else {
          return (
            <div
              className={
                active === index
                  ? "detail-theater-system-children active-logo-theatersystem"
                  : "detail-theater-system-children "
              }
              onClick={() => {
                setActive(index);
                sendClusterAndAddressAfter(item.tenCumRap, item.diaChi);
              }}
              key={index}
            >
              {props.listAddress[0].maHeThongRap === "BHDStar" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/bhb.jpg"
                  alt=""
                />
              )}
              {props.listAddress[0].maHeThongRap === "CGV" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/cgv.jpg"
                  alt=""
                />
              )}
              {props.listAddress[0].maHeThongRap === "CineStar" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/CNS.jpeg"
                  alt=""
                />
              )}
              {props.listAddress[0].maHeThongRap === "Galaxy" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/galaxy.jpg"
                  alt=""
                />
              )}
              {props.listAddress[0].maHeThongRap === "LotteCinima" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/lotte.jpg"
                  alt=""
                />
              )}
              {props.listAddress[0].maHeThongRap === "MegaGS" && (
                <img
                  className="img-listAddressCinema"
                  src="./img/mega.png"
                  alt=""
                />
              )}
              <div className="wrapinfor-children">
                <span className="style-span-cluster">{item.tenCumRap}</span>
                <span className="style-span-address">{item.diaChi}</span>
              </div>
            </div>
          );
        }
      });
    }
  };
  return (
    <div className="detail-theater-system float-left tab-content">
      {renderListAddress()}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendClusterAndAddressToStore: (address, name) => {
      dispatch(action.actSendTheaterSystemCode(address, name));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    listAddress: state.TheaterSystem.listAddress,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailTheaterSystem);
