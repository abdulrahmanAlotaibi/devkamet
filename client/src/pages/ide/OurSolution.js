import React, { useContext } from "react";
import { ControlledEditor } from "@monaco-editor/react";
import { changeTheme } from "shared/util/IDE";
import LoadingSpinner from "components/LoadingSpinner";
import { IDEContext } from "./IDE"; // Central data store for the the IDE

function OurSolution() {
  const IDEState = useContext(IDEContext).state;
  const IDEHandlers = useContext(IDEContext).handlers;
  const solutionState = IDEState.solution;

  return (
    <ControlledEditor
      loading={<LoadingSpinner />}
      defaultLanguage="javascript"
      height={"36.5rem"}
      defaultValue="// some comment"
      onChange={(monaco, value) =>
        IDEHandlers.handleInputChange(
          [{ key: "ourSolution", value: value }],
          "solution"
        )
      }
      editorDidMount={() => changeTheme()}
      theme="vs-dark"
      name="ourSolution"
      value={solutionState.ourSolution}
      language={IDEState.language}
    />
  );
}

export default OurSolution;
