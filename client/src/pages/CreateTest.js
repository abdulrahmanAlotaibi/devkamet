import React from "react";
import IDE from "pages/ide/IDE";
import { useParams } from "react-router-dom";

function CreateTest() {
  const { courseSlug } = useParams();

  return (
    <IDE
      contentType="Test"
      isAdmin={true}
      isEdit={true}
      isCreated={false}
      courseSlug={courseSlug}
    />
  );
}

export default CreateTest;
