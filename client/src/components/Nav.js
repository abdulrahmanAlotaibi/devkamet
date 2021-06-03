import React, { useState, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Logo from './Logo'
import { UserContext } from "shared/context/User";
import Avatar from './Avatar'
import Settings from './settings/Settings'
import { useOnClickOutside } from 'shared/util/common'

function Nav() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const userContext = useContext(UserContext);
    const user = userContext.state?.user
    const ref = useRef();

    useOnClickOutside(ref, () => setIsProfileOpen(false))
    return (
        <nav className=" w-5/6 hidden lg:flex items-center justify-between ">
            <ul className="  align-center  flex  items-center justify-center">
                <li className="align-center flex">
                    <Logo />
                </li>
            </ul>
            <ul className="  align-center justify-center  flex  items-center ">
                <li className="align-center mr-8 flex hover:text-blue-600 transition duration-300 ease-in-out">
                    <Link to="/about-courses">Courses</Link>

                </li>
                <li className="align-center  flex mr-8 hover:text-blue-600 transition duration-300 ease-in-out">
                    <Link to="/Blog">Blog</Link>
                </li>
                <li className="align-center  flex transition hover:text-blue-600 duration-300 ease-in-out">
                    <Link to="/community">Community</Link>
                </li>

            </ul>
            {user ? (
                <div className="relative" ref={ref}>
                    <Avatar avatar={user.avatar} name={user.name} onClick={() => setIsProfileOpen(!isProfileOpen)} />
                    {isProfileOpen && <Settings isHome={user} />}
                </div>
            ) : (
                <ul className="relative align-center flex  items-center justify-items-end justify-end	">

                    <li className="align-center mr-8 flex hover:text-blue-600 transition duration-300 ease-in-out">
                        <Link to="login">Login</Link>
                    </li>
                    <li className="mr-8">

                        <Button to="/signup">Join Now</Button>
                    </li>
                </ul>

            )}

        </nav >
    )
}

export default Nav
