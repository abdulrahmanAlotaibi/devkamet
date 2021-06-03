import React, { useReducer, useEffect } from "react";
import Announcement from "./Announcement";
import Button from "components/Button";
import {
  announcementsReducer,
  UPDATE_INPUTS,
  announcementsState,
  UPDATE_RESULT,
  CREATE,
  SET_IS_CREATE_ANNOUNCEMENT__OPEN,
} from "./reducer";
import * as announcementsAPI from "shared/api/announcementAPI";
import LoadingSpinner from "components/LoadingSpinner";

import CreateAnnouncement from "./CreateAnnouncement";

function AnnouncementsList() {
  const [state, dispatch] = useReducer(
    announcementsReducer,
    announcementsState
  );
  const {
    title,
    content,
    announcements,
    isLoading,
    isCreateAnnouncementOpen,
  } = state;

  useEffect(() => {
    getAllAnnouncements();
  }, []);

  const handleInputChange = (inputs) => {
    dispatch({
      type: UPDATE_INPUTS,
      payload: {
        inputs,
      },
    });
  };

  const handleToggleModal = () => {
    dispatch({
      type: SET_IS_CREATE_ANNOUNCEMENT__OPEN,
    });
  };

  const createAnnouncement = async () => {
    dispatch({
      type: CREATE,
    });

    await announcementsAPI.createAnnouncement(title, content);
    getAllAnnouncements();
  };

  const getAllAnnouncements = async () => {
    dispatch({
      type: CREATE,
    });
    const response = await announcementsAPI.getAllAnnouncements();
    dispatch({
      type: UPDATE_RESULT,
      payload: {
        status: response.status,
        announcements: response.result,
      },
    });
  };
  const renderedAnnouncements = announcements?.map((announcement) => (
    <Announcement
      title={announcement.title}
      content={announcement.content}
      key={announcement._id}
    />
  ));

  return (
    <>
      {isCreateAnnouncementOpen && (
        <CreateAnnouncement
          createAnnouncement={createAnnouncement}
          toggleModal={handleToggleModal}
          handleInputChange={handleInputChange}
          isLoading={isLoading}
        />
      )}

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex justify-end items-center mb-10">
            <Button onClick={handleToggleModal}>+ Create Announcement</Button>
          </div>
          <ul className="flex items-center justify-center flex-col">
            {renderedAnnouncements}
          </ul>
        </>
      )}
    </>
  );
}

export default AnnouncementsList;
