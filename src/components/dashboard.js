import React from "react";
import HeaderAdmin from "./headeradmin";
import SideBaradmin from "./sidebaradmin";
import ContentAdmin from "./contentAdmin";
import "./styled-components/dashboard.css";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <input type="checkbox" id="check" />
      <HeaderAdmin />
      <SideBaradmin />
      <ContentAdmin />
    </div>
  );
}
