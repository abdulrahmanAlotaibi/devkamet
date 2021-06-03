import React, { useReducer } from "react";
import Input from "../Input";
import Textarea from "../Textarea";
import { useParams } from "react-router-dom";
import Main from "../Main";
import AdminSidebar from "../admin-sidebar/AdminSidebar";
import Button from "../Button";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import "./index.css";
import {
  articleState,
  articleReducer,
  UPDATE_INPUTS,
  UPDATE_IS_PREVIEW,
  UPDATE_RESULT,
} from "./reducer";
import * as courseAPI from "shared/api/courseAPI";

function ArticleManager({ isCreated = false }) {
  const { courseId } = useParams();
  const [state, dispatch] = useReducer(articleReducer, articleState);
  
  const { title, content, isPreview } = state;

  const handleInputChange = (inputs) => {
    dispatch({
      type: UPDATE_INPUTS,
      payload: {
        inputs,
      },
    });
  };

  const togglePreview = () => {
    dispatch({
      type: UPDATE_IS_PREVIEW,
    });
  };

  const saveArticle = async (courseId) => {
    const response = await courseAPI.createLesson(
      courseId,
      {
        title,
        content,
      },
      "article"
    );

    dispatch({
      type: UPDATE_RESULT,
      payload: {
        status: response.status,
      },
    });
  };

  return (
    <article>
      <AdminSidebar />
      <Main title="New Article">
        <div className="flex justify-end items-center">
          <Button styles={"mr-4"} isPrimary={false} onClick={togglePreview}>
            Preview
          </Button>
          <Button onClick={() => saveArticle(courseId, { title, content })}>
            {isCreated ? "Save" : "Save"}
          </Button>
        </div>
        {isPreview ? (
          <>
            <h1 className="text-3xl font-semibold mb-8">{title}</h1>

            <div className="markdown-body">
              <ReactMarkdown children={content} />
            </div>
          </>
        ) : (
          <div>
            <Input
              placeholder="How to calculate time complexity..."
              label="Article Title"
              fullWidth={true}
              name="title"
              onChange={(e) =>
                handleInputChange([
                  { key: e.target.name, value: e.target.value },
                ])
              }
              value={title}
            />
            <Textarea
              placeholder="In this article we will..."
              label="Content"
              fullWidth={true}
              styles="h-lgg"
              name="content"
              onChange={(e) =>
                handleInputChange([
                  { key: e.target.name, value: e.target.value },
                ])
              }
              value={content}
            />
          </div>
        )}
      </Main>
    </article>
  );
}

export default ArticleManager;
