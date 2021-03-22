import React, { useState } from "react";
import "./styled-components/navbar.css";
import LoginAndLogOut from "../components/LoginAndLogOut";
import { connect } from "react-redux";
import * as action from "../actions/index";
function Navbar(props) {
  const [logOut, setLogOut] = useState(true);
  const handleLogout = () => {
    localStorage.removeItem("user");
    props.checkAccount();
    setLogOut(false);
  };
  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand" href="/">
          <img src="./img/wedlogo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href="#show-slider-listmovie">
                Lịch Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Cinemasystem">
                Cụm Rạp
              </a>
            </li>
          </ul>

          {localStorage.getItem("user") && logOut === true ? (
            <div className="account width-account-200px">
              <img src="./img/avatar.png" alt="" />
              <p className="ml-2 ">
                {JSON.parse(localStorage.getItem("user")).taiKhoan}
              </p>
              <p onClick={handleLogout} className="ml-2">
                Đăng Xuất
              </p>
            </div>
          ) : (
            <div
              className="account width-account-200px"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={() => {
                props.checkLogoutLoginAndBuyTicketsForLogin(true);
              }}
            >
              <img src="./img/avatar.png" alt="" />
              <p className="ml-2">Đăng Nhập</p>
            </div>
          )}
        </div>
      </nav>
      <div className="navbarMobile">
        <div className="listMenuMobile MobileShow" id="navbarSupportedContent">
          {localStorage.getItem("user") && logOut === true ? (
            <div className="account">
              <img src="./img/avatar.png" alt="" />
              <p className="ml-2 ">
                {JSON.parse(localStorage.getItem("user")).taiKhoan}
              </p>
              <p onClick={handleLogout} className="ml-2">
                Đăng Xuất
              </p>
            </div>
          ) : (
            <div
              className="account"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={() => {
                props.checkLogoutLoginAndBuyTicketsForLogin(true);
              }}
            >
              <img src="./img/avatar.png" alt="" />
              <p className="ml-2">Đăng Nhập</p>
            </div>
          )}
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href="#show-slider-listmovie">
                Lịch Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Cinemasystem">
                Cụm Rạp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <LoginAndLogOut />
    </header>
  );
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    checkAccount: () => {
      dispatch(action.actCheckAccount(true));
    },
    checkLogoutLoginAndBuyTicketsForLogin: (value) => {
      dispatch(action.actSendValueLogoutLoginAndBuyTicketsForLogin(value));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
