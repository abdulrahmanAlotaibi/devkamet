import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineSetting,
  AiOutlinePoweroff,
  AiOutlineHome,
} from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";
import { UserContext } from "shared/context/User";
import Popper from "components/Popper";

/**
 *@Desc : isHome will be true if you are in the home page. This is helpful for displaying different markup
 */

function Settings({ isHome }) {
  const userContext = useContext(UserContext);
  const { user } = userContext.state;

  const signOut = () => {
    userContext.handlers.signOut();
  };

  return (
    <Popper direction="right" top={20}>
      {isHome && (
        <li className="p-4 pl-6 pr-6">
          <Link
            className="flex items-center text-lg font-medium w-full h-full"
            to={user.role === "student" ? "/courses" : "/admin/courses"}
          >
            <AiOutlineHome />
            <span className="ml-4">Dashboard</span>
          </Link>
        </li>
      )}
      <li className="p-4 pl-6 pr-6">
        <Link
          to="/settings"
          className="flex items-center text-lg font-medium w-full h-full"
        >
          <AiOutlineSetting />
          <span className="ml-4">Settings</span>
        </Link>
      </li>

      <li className="p-4 pl-6 pr-6 from-blue-600 to-indigo-600 bg-gradient-to-l">
        <Link
          to="announcements"
          className="flex items-center text-lg font-medium w-full h-full"
        >
          <HiSpeakerphone />
          <span className="ml-4">Announcements</span>
        </Link>
      </li>
      <li className="p-4 pl-6 pr-6">
        <button
          className="flex items-center text-lg font-medium w-full h-full"
          onClick={signOut}
        >
          <AiOutlinePoweroff />
          <span className="ml-4">Sign out</span>
        </button>
      </li>
    </Popper>
  );
}

export default Settings;
