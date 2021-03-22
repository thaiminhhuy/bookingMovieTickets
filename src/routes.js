// import Home from "./page/home";
// import DetailMovie from "./page/detail-movie";
// import BookSeat from "./page/bookseat";
import React from "react";

import Dashboard from "./components/dashboard";
import ListAccountAdmin from "./components/listaccountAdmin";
const Home = React.lazy(() => import("./page/home"));
const DetailMovie = React.lazy(() => import("./page/detail-movie"));
const BookSeat = React.lazy(() => import("./page/bookseat"));
const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/home",
    exact: true,
    component: Home,
  },
  {
    path: "/detail-movie/:id",
    exact: false,
    component: DetailMovie,
  },
  {
    path: "/book-seat/:maLichChieu",
    exact: false,
    component: BookSeat,
  },
];
const routesAdmin = [
  {
    path: "/dashboard",
    exact: false,
    component: Dashboard,
  },
  {
    path: "/list-account",
    exact: false,
    component: ListAccountAdmin,
  },
];
export { routesHome, routesAdmin };
