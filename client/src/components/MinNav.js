import React, { useState, useContext } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import { FaDiscord } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineClose,
} from "react-icons/ai";
import { UserContext } from "shared/context/User";
import MinProfile from "./MinProfile";

function MinNav() {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const userContext = useContext(UserContext);
  const { user } = userContext.state;
  return (
    <nav className=" w-full flex justify-between  lg:hidden">
      <div className="flex items-center">
        {isMenuOpen ? (
          <>
            <AiOutlineClose
              className="text-3xl"
              onClick={() => setMenuIsOpen(!isMenuOpen)}
            />
            <ul
              className="p-4 bg-gray-900  shadow-md
            w-screen min-h-screen text-center pt-24  z-50 absolute right-0 top-24
        
      "
              id="pop"
            >
              {!user && (
                <>
                  <li>
                    <Button>Join Now</Button>
                  </li>
                  <li className="mt-4 mb-4">
                    <Link
                      to="/login"
                      className="inline-block font-semibold border-b-2 
                border-white"
                    >
                      Or Login Here
                    </Link>
                  </li>
                </>
              )}

              <li className="p-4 text-center text-lg font-medium">
                <Link to="/about-courses">Courses</Link>
              </li>
              <li className="p-4 text-center text-lg font-medium">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="p-4 text-center text-lg font-medium">
                <Link to="/community">Community</Link>
              </li>
              <ul className="flex justify-center items-center text-xl mt-4">
                <a href="/login" className="mr-4 cursor-pointer">
                  <FaDiscord />
                </a>
                <a href="/login" className="mr-4 cursor-pointer">
                  <AiOutlineTwitter />
                </a>
                <a
                  className="cursor-pointer"
                  href="https://github.com/DevKamet"
                >
                  <AiOutlineGithub />
                </a>
              </ul>
            </ul>
          </>
        ) : (
          <>
            <HiOutlineMenu
              className="text-3xl"
              onClick={() => setMenuIsOpen(!isMenuOpen)}
            />
          </>
        )}
      </div>

      <Logo />

      {user ? <MinProfile /> : <Link to="/login">Login</Link>}
    </nav>
  );
}

export default MinNav;
