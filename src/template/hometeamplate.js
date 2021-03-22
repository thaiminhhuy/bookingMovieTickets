import React from "react";
import { Route } from "react-router-dom";
import { Fragment } from "react";
import Footer from "../components/footer";
import LoginAndLogOut from "../components/LoginAndLogOut";
import ScrollToTop from "../components/scrolltotop";
const HomeLayout = (props) => {
  return (
    <Fragment>
      <ScrollToTop />
      {props.children}
      <Footer />
      <LoginAndLogOut />
    </Fragment>
  );
};
export default function HomeTeamplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
