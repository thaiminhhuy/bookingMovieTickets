import React from "react";
import Navbar from "../components/navbar";
import ListMovie from "../components/listmovie";
import Carousel from "../components/carousel";
import SearchMovie from "../components/searchmovie";
import CinemaSystem from "../components/cinemasystem";
import CinemaSystemForMobile from "../components/cinemasystemformobile";
import "../components/styled-components/home.css";
import { Fragment } from "react";
import LazyLoadComponent from "../components/lazyloadcomponent";
import { connect } from "react-redux";
import * as action from "../actions/index";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import ScrollToTop from "../components/scrolltotop";
function Home(props) {
  useEffect(() => {
    let clearSetTimeout = setTimeout(() => {
      props.getSendLoadingFalse();
      clearTimeout(clearSetTimeout);
    }, 4000);

    return () => {
      props.setLoadingTrue();
    };
  }, []);
  if (props.loading) return <LazyLoadComponent />;
  return (
    <Route>
      <ScrollToTop />
      <Fragment>
        <Navbar />
        <Carousel />
        <SearchMovie />
        <ListMovie />
        <div className="homechild-layout"></div>

        <CinemaSystemForMobile />
        <CinemaSystem />
        <div className="homechild-layout"></div>
      </Fragment>
    </Route>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.Reducer.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSendLoadingFalse: () => {
      dispatch(action.actSetLoadingValueFalse());
    },
    setLoadingTrue: () => {
      dispatch(action.actSetLoadingValueTrue());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
