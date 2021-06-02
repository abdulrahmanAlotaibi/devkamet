import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import studentActions from "./studentActions";
import adminAction from "./adminActions";
import { useOnClickOutside } from "shared/util/common";
import Popper from "components/Popper";
import { v4 as uuidv4 } from 'uuid';

function MobileSidebar({ role }) {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const actions = role === "admin" ? adminAction : studentActions;

  const ref = useRef();

  const handleMenuClick = () => {
    setMenuIsOpen(!isMenuOpen);
  };

  useOnClickOutside(ref, () => setMenuIsOpen(false));

  const renderedActions = actions?.map((action, i) => {
    return (
      <li key={uuidv4()}
        className="relative   
            transition duration-200 ease-in-out  flex items-center "
      >
        <Link
          to={action.to}
          className="flex items-center justify-start 
                w-full h-full hover:text-blue-500 transition-all duration-200  p-4 text-center"
        >
          <span className="text-xl mr-2">{action.icon}</span>
          <span className=" text-base">{action.title}</span>
        </Link>
      </li>
    );
  });
  return (
    <nav className="xl:hidden ">
      <div className="relative" onClick={handleMenuClick} ref={ref}>
        {isMenuOpen ? (
          <>
            <AiOutlineClose className="text-3xl cursor-pointer" />
            <Popper top={10} width="w-64">
              {renderedActions}
            </Popper>
          </>
        ) : (
          <HiOutlineMenu
            className="text-3xl cursor-pointer"
            onClick={handleMenuClick}
          />
        )}
      </div>
    </nav>
  );
}

export default MobileSidebar;
