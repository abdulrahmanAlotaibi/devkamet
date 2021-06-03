import React from 'react'
import { chooseCourseIcon } from "shared/util/markup.js"
import { BiBookContent, BiTime } from "react-icons/bi"
import { Link, useRouteMatch } from 'react-router-dom'

function Course({ course }) {

    const match = useRouteMatch()
    return (
        <Link className="
             rounded-md bg-black w-96 h-80 xl:w-80 xl:h-80 cursor-pointer 
               sm:mr-10 mb-10 hover:shadow-lg transition duration-300 flex flex-col justify-between
        "
            to={`${match.url}/${course.slug}`}
        >
            <div>
                <div className="bg-blue-600 p-4 flex items-center justify-between w-full rounded-t-md rounded-">
                    <div className="flex items-center text-lg font-semibold">
                        {chooseCourseIcon(course.title)}
                        <span className="ml-2">{course.title}</span>
                    </div>
                </div>
                <p className="text-base font-light p-4 flex flex-grow-1 items-start">
                    {course.description}
                </p>
            </div>
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center mr-2">
                    <BiBookContent />
                    <span className="ml-2">{course.lessons?.length}</span>
                </div>
                <div className="flex items-center ">
                    <BiTime />
                    <span className="ml-2">2-4 Weeks</span>
                </div>
            </div>
        </Link>
    )
}

export default Course
