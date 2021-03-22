import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routesHome, routesAdmin } from "./routes";
import HomeTeamplate from "./template/hometeamplate";
import LazyLoadComponent from "./components/lazyloadcomponent";
import AdminTemplate from "./template/admintemplate";
import Admin from "./page/admin";
//import ScrollToTop from "./components/scrolltotop";
function App() {
  const showHomeLayout = (routesHome) => {
    if (routesHome && routesHome.length > 0) {
      return routesHome.map((item, index) => {
        return (
          <HomeTeamplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  const showAdminLayout = (routesAdmin) => {
    if (routesAdmin && routesAdmin.length > 0) {
      return routesAdmin.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            Component={item.component}
            exact={item.exact}
            path={item.path}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        {showAdminLayout(routesAdmin)}
        <Suspense fallback={<LazyLoadComponent />}>
          <Route>
            {showHomeLayout(routesHome)}

            <Route path="/admin" component={Admin} exact={false} />
          </Route>
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
