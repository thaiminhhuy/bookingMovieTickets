import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as action from "../actions/index";
function SideBaradmin(props) {
  const [active, setActive] = useState(1);
  useEffect(() => {
    props.sendValueCheck(1);
  }, []);
  return (
    <div className="admin-sidebar">
      <center>
        <img alt="" src="/img/avatar.png" />
        <h4>DashBoard</h4>
      </center>
      <ul>
        <li
          className={active === 1 ? "active" : ""}
          onClick={() => {
            setActive(1);
            props.sendValueCheck(1);
          }}
        >
          <i className="fa fa-user-circle" aria-hidden="true"></i>
          <span>Accounts</span>
        </li>
        <li
          className={active === 2 ? "active" : ""}
          onClick={() => {
            setActive(2);
            props.sendValueCheck(2);
          }}
        >
          <i className="fa fa-film" aria-hidden="true"></i>
          <span>Movies</span>
        </li>
        <li
          className={active === 3 ? "active" : ""}
          onClick={() => {
            setActive(3);
            props.sendValueCheck(3);
          }}
        >
          <i className="fa fa-th" aria-hidden="true"></i>
          <span>Forms</span>
        </li>
        <li
          className={active === 4 ? "active" : ""}
          onClick={() => {
            setActive(4);
            props.sendValueCheck(4);
          }}
        >
          <i className="fa fa-italic" aria-hidden="true"></i>
          <span>About</span>
        </li>
        <li
          className={active === 5 ? "active" : ""}
          onClick={() => {
            setActive(5);
            props.sendValueCheck(5);
          }}
        >
          <i className="fa fa-cogs" aria-hidden="true"></i>
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendValueCheck: (value) => {
      dispatch(action.sendValueCheckInFileAction(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(SideBaradmin);
