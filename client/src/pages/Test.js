import IDE from "pages/ide/IDE";
import React from "react";

function Test({ lesson, isAdmin, isEdit }) {
  return (
    <IDE
      contentType="Test"
      isAdmin={isAdmin}
      isEdit={isEdit}
      isCreated={true}
      lesson={lesson}
    />
  );
}

export default Test;
