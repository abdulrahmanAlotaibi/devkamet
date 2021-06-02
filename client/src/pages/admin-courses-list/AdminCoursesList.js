import React, { useEffect, useReducer } from "react";
import Table from "components/table/Table";
import * as courseAPI from "shared/api/courseAPI";
import LoadingSpinner from "components/LoadingSpinner";
import {
  coursesListStateReducer,
  coursesListState,
  UPDATE_RESULT,
  SEARCH,
  UPDATE_CHECKED_ITEMS,
  SET_IS_CREATE_COURSE_OPEN,
} from "./reducer";
import CreateCourse from "./CreateCourse";

function AdminCoursesList() {
  const [state, dispatch] = useReducer(
    coursesListStateReducer,
    coursesListState
  );
  const {
    courses,
    isLoading,

    isCreateCourseOpen,
    checkedItems,
  } = state;

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    dispatch({
      type: SEARCH,
    });

    const response = await courseAPI.getAllCourses();

    dispatch({
      type: UPDATE_RESULT,
      payload: {
        status: response.status,
        courses: response.result,
      },
    });
  };

  const handleToggleModal = () => {
    dispatch({
      type: SET_IS_CREATE_COURSE_OPEN,
    });
  };

  const formattedTable = courses?.map((course) => {
    return {
      title: course.title,
      status: course.status,
      lessons: course.lessons?.length || [],
      createdAt: course.createdAt,
      updatedAt: course.updatedAt,
    };
  });

  const handleCheckItem = (checkedItem) => {
    dispatch({
      type: UPDATE_CHECKED_ITEMS,
      payload: { checkedItem },
    });
  };

  return (
    <>
      {isCreateCourseOpen && <CreateCourse toggleModal={handleToggleModal} />}

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Table
          headerItems={[
            "Name",
            "Status",
            "Lessons",
            "Updated At",
            "Created At",
          ]}
          addtionalPath="admin/courses"
          tableType="courses"
          originalItems={courses}
          formattedItems={formattedTable}
          createNewItem={handleToggleModal}
          handleCheckItem={handleCheckItem}
          checkedItems={checkedItems}
        />
      )}
    </>
  );
}

export default AdminCoursesList;
