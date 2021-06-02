import React from "react";
import { Link } from "react-router-dom";
import { chooseLessonIcon } from "shared/util/markup.js";
import { HiOutlineBadgeCheck } from "react-icons/hi";

function Lesson({ courseSlug, lesson }) {
  return (
    <Link
      className="block  p-6 w-full h-36 rounded-md bg-black shadow-md relative cursor-pointer  
            transform hover:-translate-y-2 transition duration-300 ease-in-out  mb-10"
      to={`/courses/${courseSlug}/lessons/${lesson.slug}`}
    >
      <div className="flex items-center justify-between h-full overflow-hidden ">
        <div className="flex items-center  h-full  truncate mr-4 w-4/5 ">
          {chooseLessonIcon(lesson.contentType)}
          <div className="ml-2 xl:ml-10 truncate overflow-ellipsis">
            <h2 className="font-semibold">{lesson.title}</h2>
          </div>
        </div>
        {/* <div
          className="bg-green-600 p-2 pl-4 pr-4 text-center 
                        rounded-md flex items-center justify-center font-semibold"
        >
          <HiOutlineBadgeCheck className="text-white text-2xl mr-4 " />
          <span>Passed</span>
        </div> */}
      </div>
    </Link>
  );
}

export default Lesson;
