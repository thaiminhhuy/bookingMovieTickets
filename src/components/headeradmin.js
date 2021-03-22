import React from "react";

export default function HeaderAdmin() {
  let nameUserAdmin = JSON.parse(localStorage.getItem("accountAdmin")).taiKhoan;

  return (
    <header id="header-admin">
      <label htmlFor="check">
        <i className="fa fa-bars" aria-hidden="true" id="sidebar-btn"></i>
      </label>
      <div className="left-area">
        <h3>
          Booking <span>now</span>
        </h3>
      </div>
      <div className="right-area">
        <p> {nameUserAdmin}</p>
      </div>
    </header>
  );
}
