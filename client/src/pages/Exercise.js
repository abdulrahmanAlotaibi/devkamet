import IDE from "pages/ide/IDE";
import React from "react";

function Exercise({ lesson, isAdmin, isEdit }) {
  return (
    <IDE
      contentType="Exercise"
      isAdmin={isAdmin}
      isEdit={isEdit}
      isCreated={true}
      lesson={lesson}
    />
  );
}
export default Exercise;
