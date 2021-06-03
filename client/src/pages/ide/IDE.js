import React, {
  useEffect,
  useReducer,
  createContext,
  useCallback,
} from "react";
import { changeTheme } from "shared/util/IDE";
import Problem from "./Problem";
import Output from "./Output";
import TestEditor from "./TestEditor";
import SolutionEditor from "./SolutionEditor";
import { BiTrash, BiPencil } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineEye } from "react-icons/ai";
import { HiCheck } from "react-icons/hi";
import {
  IDEState,
  IDEReducer,
  UPDATE_ITEM,
  UPDATE_INPUTS,
  TOGGLE,
  SEND_REQUEST,
  UPDATE_RESULT,
  SWITCH_VIEW,
  CREATE_HINT,
  SAVE_CHANGES,
  REMOVE_HINT,
  EDIT_HINT,
  INIT,
  RUN_CODE,
  CREATE_TEST_CASE,
  REMOVE_TEST_CASE,
  EDIT_TEST_CASE,
  ALERT,
} from "./reducer";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import * as IDEAPI from "shared/api/IDEAPI";
import * as courseAPI from "shared/api/courseAPI";
import * as lessonAPI from "shared/api/lessonAPI";
import Alert from "components/Alert";
import Modal from "components/Modal";

export const IDEContext = createContext({
  state: {},
  handlers: {},
});

function IDE({ isAdmin, isCreated, contentType, lesson }) {
  const [state, dispatch] = useReducer(IDEReducer, IDEState);
  const { courseId, lessonId } = useParams();
  const history = useHistory();

  const {
    problem,
    solution,
    test,
    output,
    isError,
    isRemove,
    currentViews,
    type,
    message,
  } = state;

  const init = useCallback(() => {
    if (lesson?.contentType === "Test") {
      dispatch({
        type: INIT,
        payload: {
          type: lesson.contentType,
          title: lesson.title,
          content: lesson.content,
          hints: lesson.hints,
          testCases: lesson.testCases,
          starterCode: lesson.starterCode, // change this
          ourSolution: lesson.ourSolution,
          yourSolution: lesson.yourSolution, // TestReport
          rawTest: lesson.rawTest,
          course: courseId,
          isCreated: isCreated,
        },
      });
    } else if (lesson?.contentType === "Exercise") {
      dispatch({
        type: INIT,
        payload: {
          type: lesson.contentType,
          title: lesson.title,
          content: lesson.content,
          starterCode: lesson.starterCode, // change this
          ourSolution: lesson.ourSolution,
          yourSolution: lesson.ourSolution,
          rawTest: lesson.rawTest,
          course: courseId,
          isCreated: isCreated,
        },
      });
    } else {
      dispatch({
        type: INIT,
        payload: {
          type: contentType,
          isCreated: isCreated,
        },
      });
    }
  }, [contentType, courseId, lesson, isCreated]);

  useEffect(() => {
    changeTheme();
    init();
  }, [init]);

  const handleInputChange = (inputs, type) => {
    dispatch({
      type: UPDATE_INPUTS,
      payload: {
        inputs,
        type,
      },
    });
  };

  const toggle = (toggledState) => {
    dispatch({
      type: TOGGLE,
      payload: {
        toggledState: toggledState,
      },
    });
  };

  const handleItemClick = (itemType, itemLabel, itemValue) => {
    dispatch({
      type: UPDATE_ITEM,
      payload: {
        itemType,
        currentItemLabel: itemLabel,
        currentItemValue: itemValue,
      },
    });
  };

  const createHint = (hintTitle, hintDetail) => {
    dispatch({
      type: CREATE_HINT,
      payload: {
        hintTitle,
        hintDetail,
      },
    });
  };

  const removeHint = (id) => {
    dispatch({
      type: REMOVE_HINT,
      payload: {
        id,
      },
    });
  };

  const editHint = (id, title, details) => {
    dispatch({
      type: EDIT_HINT,
      payload: {
        id,
        title,
        details,
      },
    });
  };

  const createTestCase = (content) => {
    dispatch({
      type: CREATE_TEST_CASE,
      payload: {
        content,
      },
    });
  };

  const removeTestCase = (id) => {
    dispatch({
      type: REMOVE_TEST_CASE,
      payload: {
        id,
      },
    });
  };

  const editTestCase = (id, content) => {
    dispatch({
      type: EDIT_TEST_CASE,
      payload: {
        id,
        content,
      },
    });
  };

  const switchView = (viewType, newView) => {
    dispatch({
      type: SWITCH_VIEW,
      payload: { viewType, newView },
    });
  };

  const runCode = async () => {
    dispatch({
      type: SAVE_CHANGES,
    });

    const yourSolution = state.solution.yourSolution;
    const language = state.language;

    const response = await IDEAPI.runCode(language, yourSolution, "");

    if (response.status === "success") {
      dispatch({
        type: RUN_CODE,
        payload: {
          raw: response.result.stdout || response.result.stderr,
          status: response.status,
        },
      });
    } else {
      dispatch({
        type: ALERT,
        payload: {
          status: response.status,
          message: response.message,
        },
      });
    }
  };

  const createLesson = async (type) => {
    dispatch({
      type: SEND_REQUEST,
    });

    let response;
    if (type === "Test") {
      response = await courseAPI.createLesson(
        courseId,
        {
          title: state.problem.title,
          content: state.problem.content,
          hints: state.problem.hints,
          testCases: state.test.testCases,
          starterCode: state.solution.yourSolution, // TODO: Change this
          ourSolution: state.solution.ourSolution,
          rawTest: state.test.raw,
          course: courseId,
          type,
        },
        type
      );
    } else {
      response = await courseAPI.createLesson(
        courseId,
        {
          title: state.problem.title,
          content: state.problem.content,
          ourSolution: state.solution.ourSolution,
          rawTest: state.test.raw,
          course: courseId,
          type,
        },
        type
      );
    }
    if (response.status === "success")
      history.replace(
        `/dashboard/courses/${courseId}/lessons/${response.result._id}`
      );

    dispatch({
      type: UPDATE_RESULT,
      payload: {
        status: response.status,
        message: response.message,
      },
    });
  };

  const updateExercise = async () => {
    dispatch({
      type: SEND_REQUEST,
    });

    let response;
    if (type === "Test") {
      response = await lessonAPI.updateLesson(
        lessonId,
        {
          title: state.problem.title,
          content: state.problem.content,
          hints: state.problem.hints,
          testCases: state.test.testCases,
          starterCode: state.solution.starterCode, // TODO: Change this
          ourSolution: state.solution.ourSolution,
          rawTest: state.test.raw,
          course: courseId,
          contentType: type,
          origin: contentType,
        },
        type
      );
    } else if (type === "Exercise") {
      response = await lessonAPI.updateLesson(
        lessonId,
        {
          title: state.problem.title,
          content: state.problem.content,
          ourSolution: state.solution.ourSolution,
          rawTest: state.test.raw,
          course: courseId,
          contentType: type,
          origin: contentType,
        },
        type
      );
    }

    dispatch({
      type: UPDATE_RESULT,
      payload: {
        status: response.status,
        message: response.message,
      },
    });
  };

  const removeLesson = async () => {
    const response = await lessonAPI.removeLesson(courseId, lessonId);

    if (response.status === "success") {
      history.replace(`/courses/${courseId}/`);
    } else {
      dispatch({
        type: UPDATE_RESULT,
        payload: {
          status: response.status,
          message: response.message,
        },
      });
    }
  };

  return (
    <IDEContext.Provider
      value={{
        state,
        handlers: {
          handleInputChange,
          handleItemClick,
          switchView,
          createHint,
          removeHint,
          editHint,
          createLesson,
          runCode,
          createTestCase,
          removeTestCase,
          editTestCase,
        },
      }}
    >
      {message && <Alert isError={isError} message={message} />}

      {isRemove && (
        <Modal
          title="Removing the article"
          toggleModal={() => toggle("isRemove")}
        >
          <p>Are you sure that you want to delete the article ?</p>
          <div className="mt-4 flex items-center justify-center">
            <button
              className="bg-gray-800 text-white p-2 pl-4 pr-4 rounded-md font-semibold select-none"
              onClick={() => toggle("isRemove")}
            >
              Cancel
            </button>
            <button
              onClick={() => removeLesson()}
              className="flex items-center p-2 pl-4 pr-4 rounded-md bg-red-600 ml-4"
            >
              <BiTrash className=" text-white " />
              <span className="font-semibold ml-2 select-none text-white ">
                Remove
              </span>
            </button>
          </div>
        </Modal>
      )}

      <div className="h-full mt-10">
        {isAdmin && (
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              {isCreated && (
                <button
                  onClick={() => toggle("isRemove")}
                  className="flex items-center p-2 pl-4 pr-4 rounded-md bg-black
                  mr-2
                  "
                >
                  <BiTrash className="text-red-500" />
                  <span className="font-semibold ml-2 text-red-500 select-none">
                    Remove
                  </span>
                </button>
              )}
              {!isCreated && (
                <button
                  onClick={() => history.goBack()}
                  className=" p-2 pl-4 pr-4 rounded-md mr-2
                    text-blue-500  text-center font-semibold select-none
                   "
                >
                  Cancel
                </button>
              )}
              {state.isEdit ? (
                <button
                  onClick={() => toggle("isEdit")}
                  className="flex items-center p-2 pl-4 pr-4 rounded-md 
               text-blue-600
               bg-black "
                >
                  <AiOutlineEye className="mr-2" />
                  <span className="font-semibold select-none">Preview</span>
                </button>
              ) : (
                <button
                  onClick={() => toggle("isEdit")}
                  className="flex items-center p-2 pl-4 pr-4 rounded-md 
              text-blue-600
              bg-black "
                >
                  <BiPencil className="mr-2" />
                  <span className="font-semibold select-none">Edit</span>
                </button>
              )}
              <button
                className="flex items-center p-2 pl-4 pr-4 rounded-md bg-black 
              text-green-500 select-none
              ml-2"
              >
                {state.isCreated ? (
                  <div className="flex items-center" onClick={updateExercise}>
                    <HiCheck className="mr-2 select-none" />
                    <span className="font-semibold ">Save</span>
                  </div>
                ) : (
                  <div
                    onClick={() => createLesson(type)}
                    className="flex items-center"
                  >
                    <AiOutlinePlus className="mr-2 select-none" />
                    <span className="font-semibold ">Create</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        )}
        <div
          className="grid grid-rows-4 grid-cols-1 xl:grid-cols-2 gap-6 xl:grid-rows-2
          items-center justify-center "
        >
          <Problem problem={problem} currentViews={currentViews} />
          <SolutionEditor solution={solution} currentViews={currentViews} />
          <TestEditor test={test} currentViews={currentViews} />
          <Output output={output} currentViews={currentViews} />
        </div>
      </div>
    </IDEContext.Provider>
  );
}

export default IDE;
