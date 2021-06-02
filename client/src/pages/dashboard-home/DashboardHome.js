import React, { useEffect, useReducer } from "react";
import Course from "components/Course";
import * as courseAPI from "shared/api/courseAPI";
import {
  dashboardHomeState,
  dashboardHomeReducer,
  SEND_REQUEST,
  UPDATE_RESULT,
} from "./reducer";
import * as userAPI from "shared/api/userAPI";
import LoadingSpinner from "components/LoadingSpinner";
import Empty from "components/Empty";
import { v4 as uuidv4 } from "uuid";

function DashboardHome() {
  const [state, dispatch] = useReducer(
    dashboardHomeReducer,
    dashboardHomeState
  );
  const { isLoading, courses } = state;
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    dispatch({
      type: SEND_REQUEST,
    });

    const responses = await Promise.all([
      courseAPI.getAllCourses(),
      userAPI.getLastActions(),
    ]);

    const courses = responses[0];
    dispatch({
      type: UPDATE_RESULT,
      payload: {
        status: courses.status,
        courses: courses.result,
      },
    });
  };

  const renderedCourses = courses?.map((course) => (
    <Course course={course} key={uuidv4()} />
  ));

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className="">
          <h2 className="mb-8 mt-4 text-2xl font-semibold ">Courses</h2>
          <div className="flex flex-wrap justify-center xl:justify-start">
            {courses?.length > 0 ? <>{renderedCourses}</> : <Empty />}
          </div>
        </section>
      )}
    </div>
  );
}

export default DashboardHome;
