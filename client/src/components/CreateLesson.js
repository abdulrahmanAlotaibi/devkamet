import Modal from "components/Modal";
import React from "react";
import { chooseLessonIcon } from "shared/util/markup";
import { Link, useRouteMatch } from "react-router-dom";

function CreateLesson({ toggleModal }) {
  const { url } = useRouteMatch();

  return (
    <Modal title="Create Lesson" toggleModal={toggleModal}>
      <ul
        className="flex justify-center items-start
      w-lgg h-44
      "
      >
        <Link
          to={`${url}/new-article`}
          className="p-4 rounded-md bg-gray-900
                flex flex-col justify-center items-center mr-8
                w-36 h-36 from-blue-600 to-indigo-600 bg-gradient-to-t cursor-pointer
            "
        >
          {chooseLessonIcon("Article")}
          <div className="mt-4">Article</div>
        </Link>
        <Link
          to={`${url}/new-exercise`}
          className="p-4 rounded-md bg-gray-900
                flex flex-col justify-center items-center mr-8
                w-36 h-36 from-blue-600 to-indigo-600 bg-gradient-to-t cursor-pointer
            "
        >
          {chooseLessonIcon("Exercise")}
          <div className="mt-4">Exercise</div>
        </Link>
        <Link
          to={`${url}/new-test`}
          className="p-4 rounded-md bg-gray-900
                flex flex-col justify-center items-center
                w-36 h-36 from-blue-600 to-indigo-600 bg-gradient-to-t cursor-pointer
            "
        >
          {chooseLessonIcon("Test")}
          <div className="mt-4">Test</div>
        </Link>
      </ul>
    </Modal>
  );
}

export default CreateLesson;
