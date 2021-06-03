import React from "react";
import CourseGeneralForm from "components/course-general-form/CourseGeneralForm";
import Modal from "components/Modal";

function CreateCourse({ toggleModal }) {
  return (
    <Modal title="Create Lesson" toggleModal={toggleModal}>

      {/* Display the edit form of the course */}
      <CourseGeneralForm isCreated={false} />
    </Modal>
  );
}

export default CreateCourse;
