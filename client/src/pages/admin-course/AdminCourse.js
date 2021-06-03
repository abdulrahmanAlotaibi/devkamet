import React, { useEffect, useReducer } from "react";
import Tabs from "components/Tabs";
import Lessons from "./Lessons";
import tabsItems from "./tabsItems";
import * as courseAPI from "shared/api/courseAPI";
import { useRouteMatch, useParams } from "react-router-dom";
import CourseGeneralForm from "components/course-general-form/CourseGeneralForm";

import {
  generalCourseState,
  generalCourseReducer,
  UPDATE_RESULT,
  SWITCH_VIEW,
  SEND_REQUEST,
  UPDATE_LESSONS,
} from "./reducer";

function AdminCreateCourse() {
  let { url } = useRouteMatch();

  const { courseSlug } = useParams();
  const [state, dispatch] = useReducer(
    generalCourseReducer,
    generalCourseState
  );

  const { currentView, title, description, isLoading, lessons } = state;

  useEffect(() => {
    getCourse(courseSlug);
  }, [courseSlug]);

  const getCourse = async (courseSlug) => {
    dispatch({
      type: SEND_REQUEST,
    });

    const response = await courseAPI.getCourse(courseSlug);

    dispatch({
      type: UPDATE_RESULT,
      payload: {
        status: response.status,
        title: response.result.title,
        description: response.result.description,
      },
    });
  };

  const getAllLessons = async () => {
    dispatch({
      type: SEND_REQUEST,
    });
    const response = await courseAPI.getAllLessons(courseSlug);

    dispatch({
      type: UPDATE_LESSONS,
      payload: {
        status: response.status,
        lessons: response.result.lessons,
      },
    });
  };

  const handleTabClick = (newView) => {
    dispatch({
      type: SWITCH_VIEW,
      payload: {
        newView,
      },
    });
  };

  const switchView = (currentView) => {
    switch (currentView) {
      case "general":
        return (
          <CourseGeneralForm course={{ title, description }} isCreated={true} />
        );
      case "lessons": {
        return (
          <Lessons
            isLoading={isLoading}
            course={{ title, description }}
            lessons={lessons}
            getAllLessons={getAllLessons}
            courseSlug={courseSlug}
          />
        );
      }
      default:
        return;
    }
  };

  const addPathsToTabs = (tabsItems) => {
    return tabsItems.map((tab) => {
      switch (tab.value) {
        case "general":
          tab.to = `${url}/`;
          break;
        case "lessons":
          tab.to = `${url}/lessons`;
          break;
        case "students":
          tab.to = `${url}/students`;
          break;
        default:
          break;
      }
      return tab;
    });
  };

  return (
    <>
      <Tabs
        tabsItems={addPathsToTabs(tabsItems)}
        handleTabClick={handleTabClick}
      />
      {switchView(currentView)}
    </>
  );
}

export default AdminCreateCourse;
