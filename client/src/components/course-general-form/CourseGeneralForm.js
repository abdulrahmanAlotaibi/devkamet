import React, { useReducer, useEffect } from "react";
import Textarea from "components/Textarea";
import Input from "components/Input";
import Button from "components/Button";
import { createCourse, updateCourse } from "shared/api/courseAPI";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  generalCourseReducer,
  generalCourseState,
  UPDATE_INPUT,
  SAVE_CHANGES,
  UPDATE_RESULT,
} from "./reducer";
import { useParams } from "react-router-dom";

/** 
 * @Desc : if isCreated true it means that the course is created so the form will be for editing,
 * this is needed for markup reasons. For example : displaying 'Creare course' rather than 'Edit course' button  
 */

function CourseGeneralForm({ course = {}, isCreated = true }) {
  const [state, dispatch] = useReducer(
    generalCourseReducer,
    generalCourseState
  );

  let { courseId } = useParams();

  const { title, description, isLoading, status } = state;

  useEffect(() => {
    handleInputChange([
      {
        key: "title",
        value: course.title,
      },
      {
        key: "description",
        value: course.description,
      },
    ]);
  }, [course.description, course.title]);

  const saveChanges = async () => {
    dispatch({
      type: SAVE_CHANGES,
    });

    const response = isCreated
      ? await updateCourse(courseId, { title, description })
      : await createCourse(title, description);

    dispatch({
      type: UPDATE_RESULT,
      payload: {
        status: response.status,
        errors: response.errors,
      },
    });
  };

  const handleInputChange = (inputs) => {
    dispatch({
      type: UPDATE_INPUT,
      payload: {
        inputs,
      },
    });
  };

  return (
    <div className="">
      {status === "success" && <div>Changes has been saved</div>}
      <form>
        <Input
          isDark={true}
          label="Course Title"
          htmlFor="course-title"
          name="title"
          required={true}
          placeholder="Linux Basics"
          onChange={(e) =>
            handleInputChange([{ key: e.target.name, value: e.target.value }])
          }
          value={title}
        />
        <Textarea
          placeholder="This course is about..."
          htmlFor="course-description"
          label="Course Description"
          name="description"
          onChange={(e) =>
            handleInputChange([{ key: e.target.name, value: e.target.value }])
          }
          value={description}
        />
        <div>
          <Button
            onClick={saveChanges}
            fullWidth={!isCreated}
            isLoading={isLoading}
          >
            {isCreated ? "Save" : "Create"}
          </Button>
        </div>
      </form>
      {isCreated && (
        <section>
          <div className="shadow-md bg-gray-800 rounded-lg p-4 mt-10 flex items-center justify-between w-lgg">
            <div className="flex items-center justify-between">
              <AiOutlineInfoCircle />
              <span className="ml-2">
                There is no lessons added to this course yet.
              </span>
            </div>

            <button className="bg-green-600 p-2 rounded-md">
              + Create Lesson
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default CourseGeneralForm;
