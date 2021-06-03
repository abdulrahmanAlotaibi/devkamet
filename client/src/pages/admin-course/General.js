import React, { useReducer, useEffect } from "react";
import Textarea from "components/Textarea";
import Input from "components/Input";
import Button from "components/Button";
import { createCourse } from "shared/api/courseAPI";
import { ImSpinner2 } from "react-icons/im";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  generalCourseReducer,
  generalCourseState,
  UPDATE_INPUT,
  SAVE_CHANGES,
  UPDATE_RESULT,
} from "./reducer";

function General({ course }) {
  const [state, dispatch] = useReducer(
    generalCourseReducer,
    generalCourseState
  );

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
  }, [state]);

  const saveChanges = async () => {
    dispatch({
      type: SAVE_CHANGES,
    });

    const response = await createCourse(title, description);

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
        <Button handleSaveClick={saveChanges}>
          {isLoading ? (
            <>
              <ImSpinner2 className="animate-spin  text-white" />
              <span className="ml-2">Save</span>
            </>
          ) : (
            "Save"
          )}
        </Button>
      </form>
      <section>
        <div className="shadow-md bg-gray-800 rounded-lg p-4 mt-10 flex items-center justify-between w-lgg">
          <div className="flex items-center justify-between">
            <AiOutlineInfoCircle />
            <span className="ml-2">
              There is no lessons added to this course yet.
            </span>
          </div>

          <button
            className="bg-green-600 p-2 rounded-md"
            onClick={isCreateLessonsOpen}
          >
            + Create Lesson
          </button>
        </div>
      </section>
    </div>
  );
}

export default General;
