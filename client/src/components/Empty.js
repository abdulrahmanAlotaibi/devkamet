import React from 'react'
import emptyImage from "assets/images/search.svg"

function Empty({ isSmall }) {
    return (
        <section className="p-6 flex flex-col w-full justify-center items-center">
            <img className={`${isSmall ? 'h-40 w-40' : 'h-72 w-72'} object-cover`} src={emptyImage} alt="Empty result" />
            <h1 className={`font-semibold ${isSmall ? 'text-lg' : 'text-2xl'} mb-4 mt-8`}>Sorry, the list is empty </h1>
        </section>
    )
}

export default Empty
