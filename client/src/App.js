import React from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "routing/Routes";
import UserContext from "shared/context/User";

function App() {

  return (
    <>
      <UserContext>
        <Route component={Routes} />
      </UserContext>
    </>

  )

}

export default App;
