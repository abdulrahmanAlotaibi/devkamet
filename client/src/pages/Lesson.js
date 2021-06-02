import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "components/LoadingSpinner";
import Article from "pages/article/Article";
import Exercise from "pages/Exercise";
import Test from "pages/Test";
import * as lessonAPI from "shared/api/lessonAPI";

function Lesson({ isAdmin, isEdit }) {
  const { lessonSlug } = useParams();
  const [lesson, setLesson] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  const getLesson = useCallback(async () => {
    const response = await lessonAPI.getLesson(lessonSlug);
    setLesson(response.result);
    setIsLoading(false)
  }, [lessonSlug]);


  useEffect(() => {
    getLesson(lessonSlug);
  }, [getLesson, lessonSlug]);

  const renderLesson = () => {
    switch (lesson.contentType) {
      case "Article":
        return (
          <Article
            article={lesson}
            isAdmin={isAdmin}
            isEdit={isEdit}
            isCreated={true}
            lesson={lesson}
          />
        );
      case "Test":
        return <Test lesson={lesson} isAdmin={isAdmin} isEdit={isEdit} />;
      case "Exercise":
        return <Exercise lesson={lesson} isAdmin={isAdmin} isEdit={isEdit} />;
      default:
        break;
    }
  };

  return <>
    {renderLesson()}
    {isLoading && <LoadingSpinner />}
  </>;
}

export default Lesson;
