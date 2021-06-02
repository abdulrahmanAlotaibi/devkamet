import React from 'react'
import { HiOutlineSpeakerphone } from "react-icons/hi"

// Add icon
function Announcement({ title, content }) {
    return (
        <li className="rounded-md shadow-md bg-black p-10 w-full md:w-4/6 mb-6 
            flex  items-center
        
        ">
            <div className="p-4 rounded-md bg-gray-900 mr-10">
                {<HiOutlineSpeakerphone className="text-xl"/>}
            </div>
            <div>
                <h3 className="font-semibold mb-2 ">
                    {title}
                </h3>
                <p>{content}</p>
            </div>
        </li>
    )
}

export default Announcement
