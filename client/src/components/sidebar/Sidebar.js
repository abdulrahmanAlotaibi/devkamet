import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import logo from "assets/images/logo.svg";
import studentActions from "./studentActions";
import adminAction from "./adminActions";
import MinSidebar from "./MinSidebar";
import { v4 as uuidv4 } from 'uuid';

function Sidebar({ role }) {
  const actions = role === "admin" ? adminAction : studentActions;

  const renderedActions = actions?.map((action) => (
    <li className="relative hover:bg-blue-600 w-full transition duration-200 ease-in-out"
      key={uuidv4()}
    >
      <NavLink
        to={action.to}
        className="flex items-center justify-start text-lg font-medium p-4 w-full h-full"
        activeClassName="bg-blue-600"
        exact
      >
        {action.icon}
        <span className="ml-4">{action.title}</span>
      </NavLink>
    </li>
  ));
  return (
    <>
      <aside className="list-none bg-black fixed h-screen w-72 flex-col justify-between hidden 2xl:flex">
        <ul className="">
          <li>
            <Link
              className="flex items-center justify-start p-4 pt-6 -b-6 mb-4 text-2xl font-semibold w-full h-full"
              to="/"
            >
              <img
                src={logo}
                alt="Logo"
                className="mr-4 w-12 h-12 object-contain"
              />
              <span className="">DevKamet</span>
            </Link>
          </li>
          {renderedActions}
        </ul>

        <ul>
          <li className="relative hover:bg-blue-600 w-full transition duration-200 ease-in-out">
            <NavLink
              className="flex items-center justify-start text-lg font-medium p-4 w-full h-full"
              to="/faqs"
              activeClassName="bg-blue-600"
              exact
            >
              <AiOutlineQuestionCircle />
              <span className="ml-4">FAQs</span>
            </NavLink>
          </li>
          <li className="relative hover:bg-blue-600 w-full transition duration-200 ease-in-out">
            <NavLink
              className="flex items-center justify-start text-lg font-medium p-4"
              to="/contact"
              activeClassName="bg-blue-600"
              exact
            >
              <BiMessageDetail />
              <span className="ml-4">Contact Us</span>
            </NavLink>
          </li>
        </ul>
      </aside>
      <MinSidebar actions={actions} />
    </>
  );
}

export default Sidebar;
