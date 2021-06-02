import React, { useReducer, useEffect } from "react";
import { useCallback } from 'react'

import { BiTrash, BiPencil } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineEye } from "react-icons/ai";
import { HiCheck } from "react-icons/hi";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useHistory } from "react-router-dom";

import {
  articleState,
  articleReducer,
  UPDATE_INPUTS,
  INIT,
  UPDATE_RESULT,
  TOGGLE,
  SEND_REQUEST,
} from "./reducer";
import ReactMarkdown from "react-markdown";

import { useParams } from "react-router-dom";
import * as lessonAPI from "shared/api/lessonAPI";
import * as courseAPI from "shared/api/courseAPI";
import Input from "components/Input";
import Modal from "components/Modal";
import Textarea from "components/Textarea";
import LoadingSpinner from "components/LoadingSpinner";
import Alert from "components/Alert";
import ProgressBar from "components/ProgressBar"

function Article({ isAdmin, isCreated = true, article, lesson }) {
  const history = useHistory();

  const { courseSlug, lessonSlug } = useParams();

  const [state, dispatch] = useReducer(articleReducer, articleState);

  const { title, content, isEdit, isRemove, isLoading, isError, message } = state;


  const init = useCallback(() => {
    if (article) {
      dispatch({
        type: INIT,
        payload: {
          title: article.title,
          content: article.content,
        },
      });
    }
  }, [article])

  useEffect(() => {
    init();
  }, [init, lesson?._id]);


  // Create syntax highlight for code snippets 
  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          className="editor"
          style={atomDark}
          language={language}
          children={value}
        />
      );
    },
  };

  const toggle = (toggledState) => {
    dispatch({
      type: TOGGLE,
      payload: {
        toggledState: toggledState,
      },
    });
  };

  const handleInputChange = (inputs) => {
    dispatch({
      type: UPDATE_INPUTS,
      payload: {
        inputs,
      },
    });
  };

  const createArticle = async () => {
    dispatch({
      type: SEND_REQUEST,
    });

    const response = await courseAPI.createLesson(
      courseSlug,
      title,
      content,
      "Article"
    );

    dispatch({
      type: UPDATE_RESULT,
      payload: {
        status: response.status,
        message: response.message,
      },
    });

    // Go to the created course page
    if (response.status == "success") {
      history.replace(`/admin/courses/${courseSlug}/lessons/${response.result.slug}`)
    }

  };

  const updateArticle = async () => {
    dispatch({
      type: SEND_REQUEST,
    });

    const response = await lessonAPI.updateLesson(lesson._id, {
      title,
      content,
    });

    dispatch({
      type: UPDATE_RESULT,
      payload: {
        status: response.status,
        message: response.message,
      },
    });
  };

  const removeArticle = async () => {
    const response = await lessonAPI.removeLesson(courseSlug, lesson._id);

    if (response.status === "success") history.replace(`/admin/courses/${courseSlug}`);

    else
      dispatch({
        type: UPDATE_RESULT,
        payload: {
          status: response.status,
          message: response.message,
        },
      });
  };

  return (
    <div className="text-wrap w-full break-words">
      <ProgressBar />
      {message && <Alert isError={isError} message={message} />}

      {isRemove && (
        <Modal
          title="Removing the article"
          toggleModal={() => toggle("isRemove")}
        >
          <p>Are you sure that you want to delete the article ?</p>
          <div className="mt-4 flex items-center justify-center">
            <button
              className="bg-gray-800 text-white p-2 pl-4 
              pr-4 rounded-md font-semibold select-none"
              onClick={() => toggle("isRemove")}
            >
              Cancel
            </button>
            <button
              onClick={() => removeArticle()}
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
      <div className="h-full">
        {isAdmin && (
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              {isCreated && (
                <button
                  onClick={() => toggle("isRemove")}
                  className="flex items-center p-2 pl-4 pr-4 rounded-md bg-black"
                >
                  <BiTrash className="text-red-500" />
                  <span className="font-semibold ml-2 text-red-500 select-none">
                    Remove
                  </span>
                </button>
              )}
              {state.isEdit ? (
                <button
                  onClick={() => toggle("isEdit")}
                  className="flex items-center p-2 pl-4 pr-4 rounded-md 
               text-blue-600
               bg-black ml-2"
                >
                  <AiOutlineEye className="mr-2" />
                  <span className="font-semibold select-none">Preview</span>
                </button>
              ) : (
                <button
                  onClick={() => toggle("isEdit")}
                  className="flex items-center p-2 pl-4 pr-4 rounded-md 
                    text-blue-600
                    bg-black ml-2"
                >
                  <BiPencil className="mr-2" />
                  <span className="font-semibold select-none">Edit</span>
                </button>
              )}

              {isCreated ? (
                <button
                  className="flex items-center p-2 pl-4 pr-4 rounded-md bg-black 
                      text-green-500 select-none ml-2" onClick={updateArticle}
                >
                  <div className="flex items-center h-full w-full" >
                    <HiCheck className="mr-2 select-none" />
                    <span className="font-semibold ">Save</span>
                  </div>
                </button>
              ) : (
                <button
                  className="flex items-center p-2 pl-4 pr-4 rounded-md bg-black 
                  text-green-500 select-none ml-2" onClick={() => createArticle()}
                >
                  <div

                    className="flex items-center h-full w-full"
                  >
                    <AiOutlinePlus className="mr-2 select-none" />
                    <span className="font-semibold ">Create</span>
                  </div>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (

        <>
          {
            isEdit ? (
              <>
                <div className="mb-10">
                  <Input
                    label="Article Title"
                    placeholder="Basics of Golang"
                    fullWidth
                    onChange={(e) =>
                      handleInputChange([
                        { key: e.target.name, value: e.target.value },
                      ])
                    }
                    value={title}
                    name="title"
                  />
                </div>
                <Textarea
                  placeholder="In this exercise..."
                  fullWidth
                  label="Content"
                  name="content"
                  styles="h-lggg"
                  onChange={(e) =>
                    handleInputChange([{ key: e.target.name, value: e.target.value }])
                  }
                  value={content}
                />
              </>
            ) : (
              <div className="w-full p-2 xl:w-4/5 text-white font-normal text-xl">
                <h1 className="text-3xl  xl:text-5xl font-bold text-blue-600 mb-6 xl:mb-10">
                  {title}
                </h1>
                <div className="editor w-full ">
                  <ReactMarkdown renderers={renderers} children={content} className="w-full " />
                </div>
              </div>
            )
          }

        </>
      )}
    </div >
  );
}

export default Article;
