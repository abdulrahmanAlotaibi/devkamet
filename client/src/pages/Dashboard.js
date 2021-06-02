import Main from "components/Main";
import React, { useContext } from "react";
import Sidebar from "components/sidebar/Sidebar";
import { UserContext } from "shared/context/User";
import MobileNav from "components/MobileNav";

function Dashboard({ children }) {
  const context = useContext(UserContext);
  const user = context.state.user;

  return (
    <>
      <Sidebar role={user.role} />
      <Main>{children}</Main>
      <MobileNav />
    </>
  );
}

export default Dashboard;
