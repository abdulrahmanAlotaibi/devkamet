import React from 'react'
import { Link } from 'react-router-dom'
import image from "../assets/images/logo.svg"

function Logo({ styles }) {
    return (
        <Link to="/" className={["flex items-center justify-center", styles]}>
            <img src={image} className="mr-3 w-8 h-8 "  alt="Logo"/>
            <span className="text-xl font-semibold">DevKamet</span>
        </Link>
    )
}

export default Logo

