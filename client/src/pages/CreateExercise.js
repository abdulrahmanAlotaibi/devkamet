import React from "react";
import IDE from "pages/ide/IDE";
import { useParams } from "react-router-dom";

function CreateExercise() {
  const { courseId } = useParams();

  return (
    <IDE
      contentType={"Exercise"}
      isAdmin={true}
      isEdit={true}
      isCreated={false}
      courseId={courseId}
    />
  );
}

export default CreateExercise;
