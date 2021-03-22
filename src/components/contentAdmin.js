import React, { useState } from "react";
import ListAccountForPageAdmin from "../components/listaccountforpageadmin";
import ListMovieForPageAdmin from "../components/listmovieforpageadmin";
import { connect } from "react-redux";
function ContentAdmin(props) {
  return (
    <div className="content-wrapper">
      {props.value && props.value === 1 ? <ListAccountForPageAdmin /> : ""}
      {props.value && props.value === 2 ? <ListMovieForPageAdmin /> : ""}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    value: state.Admin.valueCheck,
  };
};
export default connect(mapStateToProps, null)(ContentAdmin);
