import React, { useEffect, useReducer, useCallback } from "react";
import Lesson from "components/Lesson";
import * as courseAPI from "shared/api/courseAPI";
import emptyImage from "assets/images/search.svg";

import { useParams } from "react-router-dom";
import {
  courseState,
  courseReducer,
  SEND_REQUEST,
  UPDATE_RESULT,
} from "./reducer";
import LoadingSpinner from "components/LoadingSpinner";
import { v4 as uuidv4 } from "uuid";

function CourseHome() {
  const [state, dispatch] = useReducer(courseReducer, courseState);
  const { isLoading, course } = state;

  const { courseSlug } = useParams();

  const getAllLessons = useCallback(async () => {
    dispatch({
      type: SEND_REQUEST,
    });
    const response = await courseAPI.getAllLessons(courseSlug);

    dispatch({
      type: UPDATE_RESULT,
      payload: {
        status: response.status,
        course: response.result,
      },
    });
  }, [courseSlug])

  useEffect(() => {
    getAllLessons();
  }, []);


  const renderedLessons = course.lessons?.map((lesson) => (
    <li className="flex items-center" key={uuidv4()}>
      <Lesson lesson={lesson} courseSlug={courseSlug} courseName={course.name} />
    </li>
  ));
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 ">
        <section className="w-full text-left mb-6 ">
          <h1 className="text-3xl xl:text-6xl font-bold mb-4 text-blue-600">
            {course.title?.replaceAll("-", " ")}
          </h1>
          <p className="text-xl">{course.description}</p>
        </section>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {course.lessons?.length > 0 ? (
              <ul className="w-full mt-4">{renderedLessons}</ul>
            ) : (
              <section className="p-6 flex flex-col justify-center items-center">
                <img
                  className="h-72 w-72 object-cover"
                  src={emptyImage}
                  alt="Empty list"
                />
                <h1 className="font-semibold text-2xl mb-4 mt-8">
                  Sorry, the list is empty{" "}
                </h1>
              </section>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default CourseHome;
