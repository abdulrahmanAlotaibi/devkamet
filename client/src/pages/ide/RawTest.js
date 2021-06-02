import React, { useContext } from 'react'
import { changeTheme } from 'shared/util/IDE'
import LoadingSpinner from 'components/LoadingSpinner'
import { ControlledEditor } from "@monaco-editor/react"
import { IDEContext } from "./IDE"


function RawTest() {
  const IDEState = useContext(IDEContext).state
  const IDEHandlers = useContext(IDEContext).handlers
  const testState = IDEState.test

  return (
    <div
      className=" 
    "
    >
      <ControlledEditor
        editorDidMount={()=>changeTheme()}
        loading={<LoadingSpinner />}
        height={"36.5rem"}
        defaultValue="// some comment"
        theme="vs-dark"
        onChange={(monaco, value) =>
          IDEHandlers.handleInputChange([{ key: "raw", value: value }], "test")
        }

        name="yourSolution"
        value={testState.raw}
        language={IDEState.language}
      />
    </div>
  );
}

export default RawTest;
