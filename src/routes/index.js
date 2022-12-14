import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NoMatch from "../components/Layout/404";
import LazyComponent from "./LazyComponent";
// 不带左侧栏的路由页面
const RoutesData = [
  {
    path: "/",
    redirect: "/home",
  },
  //登录页面
  {
    path: "/home",
    component: () => import("views/front/Home"),
  },

  {
    path: "/admin",
    component: () => import("views/back/Admin"),
  },
];

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {RoutesData.map((item) => {
          if (item.redirect) {
            return (
              <Route
                path={item.path}
                render={() => <Redirect to={item.redirect} />}
                exact
                key={item.path}
              />
            );
          }

          return (
            <Route
              path={item.path}
              component={LazyComponent(item.component)}
              exact={item.exact}
              key={item.path}
            />
          );
        })}
        <Route component={NoMatch} key="noMatch" />
      </Switch>
    );
  }
}
