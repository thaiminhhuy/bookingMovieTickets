import React from "react";
import { Route } from "react-router-dom";
import { Fragment } from "react";
import { Redirect } from "react-router-dom";

const AdminLayout = (props) => {
  return <Fragment>{props.children}</Fragment>;
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("accountAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        } else {
          return <Redirect to="/admin" />;
        }
      }}
    />
  );
}
