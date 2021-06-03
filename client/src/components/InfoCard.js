import { Link } from 'react-router-dom'
import React from 'react'

function InfoCard({ icon, title, description }) {
    return (
        <article className="bg-gray-800 p-6 rounded-md w-11/12
         min-h-72 md:w-96
         
         cursor-pointer flex flex-col justify-between
          items-start shadow-xl transform hover:-translate-y-2 
          transition duration-300 ease-in-out overflow-hidden">
            <div className="flex">
                {icon}
                <span className="ml-4 font-medium truncate ">{title}</span>
            </div>
            <p className="mt-4 mb-4">{description}</p>
            <Link to={"/"} className="border-b-2 pb-1 border-blue-600 inline-block ">Read More</Link>
        </article>
    )
}

export default InfoCard
