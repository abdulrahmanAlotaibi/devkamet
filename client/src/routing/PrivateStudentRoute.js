import Dashboard from "pages/Dashboard";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getLocalStorageItem } from "shared/util/common";

/**
 * @Description : Frontend Authorization for Student Views/Routes.
 * @See --> https://en.wikipedia.org/wiki/Role-based_access_control
 */

const PrivateStudentRoute = ({ Component, path, exact, ...rest }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() =>
        getLocalStorageItem("user")?.role ? (
          <Dashboard>
            <Component {...rest} />
          </Dashboard>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateStudentRoute;
