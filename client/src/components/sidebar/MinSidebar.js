import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import logo from "assets/images/logo.svg";
import { v4 as uuidv4 } from "uuid";

function MinSidebar({ actions }) {
  const renderedActions = actions?.map((action) => (
    <li
      className="relative hover:bg-blue-600 w-full transition duration-200 ease-in-out "
      key={uuidv4()}
    >
      <NavLink
        to={action.to}
        className="flex items-center justify-center text-xl  p-4 text-center"
        activeClassName="bg-blue-600"
        exact
      >
        {action.icon}
      </NavLink>
    </li>
  ));
  return (
    <aside
      className="list-none bg-black hidden fixed h-screen w-16  
    flex-col justify-between  2xl:hidden xl:flex"
    >
      <ul>
        <li>
          <Link
            className="flex items-center justify-start p-4 
          pt-6 -b-6 mb-4 text-2xl font-semibold"
            to="/"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </Link>
        </li>
        {renderedActions}
      </ul>
      <ul>
        <li className="relative hover:bg-blue-600 w-full transition duration-200 ease-in-out ">
          <Link
            className="flex items-center justify-center text-xl  p-4 text-center"
            to="/faqs"
          >
            <AiOutlineQuestionCircle />
          </Link>
        </li>
        <li className="relative hover:bg-blue-600 w-full transition duration-200 ease-in-out ">
          <Link
            className="flex items-center justify-center text-xl  p-4 text-center"
            to="/contact"
          >
            <BiMessageDetail />
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default MinSidebar;
