import Dashboard from "pages/Dashboard";
import React from "react";
import { getLocalStorageItem } from "shared/util/common";
import { Route, Redirect } from "react-router-dom";

/**
 * @Description : Frontend Authorization for Admin Views/Routes.
 * @See --> https://en.wikipedia.org/wiki/Role-based_access_control
 */

const PrivateAdminRoute = ({ Component, path, exact, ...rest }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() =>
        getLocalStorageItem("user")?.role === "admin" ? (
          <Dashboard>
            <Component {...rest} />
          </Dashboard>
        ) : (
          <Redirect to="/404" />
        )
      }
    />
  );
};

export default PrivateAdminRoute;
