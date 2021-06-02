import React, { useContext, useState } from "react";
import { BiTrash, BiPencil } from "react-icons/bi";
import Hint from "components/Hint";
import Input from "components/Input";
import Textarea from "components/Textarea";
import Button from "components/Button";
import { IDEContext } from "./IDE";

function Hints() {
  const [hintTitle, setHintTitle] = useState("");
  const [hintDetails, setHintDetails] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [currentHint, setCurrentHint] = useState("");

  const IDEState = useContext(IDEContext).state;
  const IDEHandlers = useContext(IDEContext).handlers;

  const createHint = () => {
    IDEHandlers.createHint(hintTitle, hintDetails);
  };

  const renderedHints = IDEState.problem?.hints.map((hint) => {
    return (
      <li className="flex items-center justify-between mb-4" key={hint.id}>
        <Hint title={hint.title} details={hint.details} />
        {IDEState.isEdit && (
          <div className="ml-4 flex items-center ">
            <div
              className="p-4 rounded-md bg-gray-800
                    text-blue-600
                    flex items-center 
                    "
              onClick={() => {
                setIsEdit(true);
                setHintTitle(hint.title);
                setHintDetails(hint.details);
                setCurrentHint(hint.id);
              }}
            >
              <BiPencil />
            </div>
            <div
              className="p-4 rounded-md bg-gray-800 ml-4
                            flex items-center  text-red-800 "
              onClick={() =>
                IDEHandlers.removeHint(currentHint, hintTitle, hintDetails)
              }
            >
              <BiTrash />
            </div>
          </div>
        )}
      </li>
    );
  });
  return (
    <div>
      {IDEState.isEdit && (
        <div className="mb-10 text-left">
          <Input
            fullWidth
            placeholder="Hint 1"
            name="hintTitle"
            label="Hint Title"
            onChange={(e) => {
              setHintTitle(e.target.value);
            }}
            value={hintTitle}
          />
          <Textarea
            placeholder="Try to..."
            label="Hint Details"
            name="hintDetails"
            fullWidth
            value={hintDetails}
            onChange={(e) => {
              setHintDetails(e.target.value);
            }}
          />

          {isEdit ? (
            <Button
              fullWidth
              onClick={() =>
                IDEHandlers.editHint(currentHint, hintTitle, hintDetails)
              }
            >
              Edit Hint
            </Button>
          ) : (
            <Button fullWidth onClick={createHint}>
              Add Hint
            </Button>
          )}
        </div>
      )}

      <ul className="">{renderedHints}</ul>
    </div>
  );
}

export default Hints;
