import React from 'react'
import { IoMdSearch, IoMdNotificationsOutline } from "react-icons/io"
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { RiNotification3Line, RiSearchLine } from "react-icons/ri"
import {GoHome} from "react-icons/go"
import {BiHomeCircle} from "react-icons/bi"
function MobileNav() {
    return (
        <nav className="bg-black h-20 sticky md:hidden bottom-0 p-4 shadow-xl z-50
            
        ">
            <ul className="text-center flex justify-between">
                <Link to="/courses" className="flex flex-col justify-center focus:text-blue-600
                    w-20
                items-center text-center">
                    <AiOutlineHome className="text-xl" />
                    <span className="mt-2 text-xs">Home</span>
                </Link>
                <Link to="/announcments"
                    className="flex flex-col focus:text-blue-600
                    w-20
                items-center text-center">
                    <RiNotification3Line className="text-xl" />
                    <span className="mt-2 text-xs">Announcments</span>
                </Link>
                <Link to="/search"
                    className="flex flex-col focus:text-blue-600
                    w-20
                items-center text-center">
                    <RiSearchLine className="text-xl" />
                    <span className="mt-2 text-xs">Search</span>
                </Link>

            </ul>
        </nav>
    )
}

export default MobileNav
