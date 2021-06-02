import React, { useContext, useState } from "react";
import { IDEContext } from "./IDE";
import Input from "components/Input";
import Textarea from "components/Textarea";

function ProblemContent() {
  const [editTitle, setEditTitle] = useState(false);
  const IDEState = useContext(IDEContext).state;
  const IDEHandlers = useContext(IDEContext).handlers;
  const problemState = IDEState.problem;

  return (
    <div className="text-left">
      {IDEState.isEdit ? (
        <Input
          fullWidth
          label="Problem Title"
          className="text-2xl font-semibold mb-4 text-gray-200"
          contentEditable={editTitle}
          onClick={() => setEditTitle(!editTitle)}
          onChange={(e) =>
            IDEHandlers.handleInputChange(
              [{ key: e.target.name, value: e.target.value }],
              "problem"
            )
          }
          name="title"
          value={problemState.title}
        />
      ) : (
        <h1 className="text-xl font-semibold mb-4">{problemState.title}</h1>
      )}

      {IDEState.isEdit ? (
        <>
          <Textarea
            fullWidth
            label="Problem Content"
            contentEditable={editTitle}
            onChange={(e) =>
              IDEHandlers.handleInputChange(
                [{ key: e.target.name, value: e.target.value }],
                "problem"
              )
            }
            name="content"
            value={problemState.content}
          />
        </>
      ) : (
        <p className="text-base text-gray-200">{problemState.content}</p>
      )}
    </div>
  );
}

export default ProblemContent;
