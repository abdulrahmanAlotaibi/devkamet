import Table from "components/table/Table";
import React, { useState, useEffect } from "react";
import CreateLesson from "components/CreateLesson";

function Lessons({ lessons, isLoading, getAllLessons, courseSlug }) {
  const [isCreateLessonsOpen, setisCreateLessonsOpen] = useState(false);

  const handleToggleModal = () => {
    setisCreateLessonsOpen(!isCreateLessonsOpen);
  };

  useEffect(() => {
    getAllLessons();
  }, []);

  const formatedTableItems = lessons?.map((lesson) => {
    return {
      title: lesson.title,
      content: lesson.content,
      updatedAt: lesson.updatedAt,
      createdAt: lesson.createdAt,
    };
  });


  return (
    <div>
      {isCreateLessonsOpen && <CreateLesson toggleModal={handleToggleModal} />}
      <Table
        headerItems={["Name", "Content", "Updated At", "Created At", "Options"]}
        isLoading={isLoading}
        formattedItems={formatedTableItems}
        originalItems={lessons}
        tableType="lessons"
        addtionalPath={`admin/courses/${courseSlug}/lessons`}
        createNewItem={handleToggleModal}
      />
    </div>
  );
}

export default Lessons;
