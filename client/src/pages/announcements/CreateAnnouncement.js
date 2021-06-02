import React from "react";
import Input from "components/Input";
import Modal from "components/Modal";
import Textarea from "components/Textarea";
import Button from "components/Button";

function CreateAnnouncement({
  toggleModal,
  createAnnouncement,
  isLoading,
  handleInputChange,
}) {
  return (
    <Modal toggleModal={toggleModal} title="New Announcement">
      <Input
        placeholder="Version 2.2 is Out!"
        label="Title"
        name="title"
        onChange={(e) =>
          handleInputChange([{ key: e.target.name, value: e.target.value }])
        }
      />
      <Textarea
        placeholder="In this version..."
        label="Content"
        name="content"
        onChange={(e) =>
          handleInputChange([{ key: e.target.name, value: e.target.value }])
        }
      />
      <Button isLoading={isLoading} fullWidth onClick={createAnnouncement}>
        Create
      </Button>
    </Modal>
  );
}

export default CreateAnnouncement;
