import React, { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Table from "components/table/Table";
import CreateLesson from "components/CreateLesson";
import * as courseAPI from "shared/api/courseAPI";
import AdminSidebar from "components/admin-sidebar/AdminSidebar";
import Main from "components/Main";
import {
  generalCourseState,
  generalCourseReducer,
  SEND_REQUEST,
  UPDATE_LESSONS,
} from "./reducer";

function AdminLessonslist() {
  const { courseSlug } = useParams();

  const [state, dispatch] = useReducer(
    generalCourseReducer,
    generalCourseState
  );

  const [isCreateLessonsOpen, setisCreateLessonsOpen] = useState(false);

  const { isLoading, lessons } = state;

  const handleToggleModal = () => {
    setisCreateLessonsOpen(!isCreateLessonsOpen);
  };

  useEffect(() => {
    getAllLessons();
  }, []);

  const getAllLessons = async () => {
    dispatch({
      type: SEND_REQUEST,
    });

    const response = await courseAPI.getAllLessons(courseId);

    dispatch({
      type: UPDATE_LESSONS,
      payload: {
        status: response.status,
        lessons: response.result.lessons,
      },
    });
  };

  const formatedTableItems = lessons?.map((lesson) => {
    return {
      title: lesson.title,
      content: lesson.content,
      updatedAt: lesson.updatedAt,
      createdAt: lesson.createdAt,
    };
  });

  return (
    <div>
      <AdminSidebar />
      <Main title="Lessons">
        {isCreateLessonsOpen && (
          <CreateLesson toggleModal={handleToggleModal} />
        )}
        <Table
          headerItems={[
            "Name",
            "Content",
            "Updated At",
            "Created At",
            "Options",
          ]}
          addtionalPath={`admin/${courseSlug}/lessons`}
          isLoading={isLoading}
          formattedItems={formatedTableItems}
          originalItems={lessons}
          tableType="lessons"
          createNewItem={handleToggleModal}
        />
      </Main>
    </div>
  );
}

export default AdminLessonslist;
