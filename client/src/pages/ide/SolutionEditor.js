import React, { useContext } from "react";
import { changeTheme } from "shared/util/IDE";
import { ControlledEditor } from "@monaco-editor/react";
import { FaTerminal } from "react-icons/fa";
import { IDEContext } from "./IDE";
import LoadingSpinner from "components/LoadingSpinner";

function SolutionEditor() {
  const IDEState = useContext(IDEContext).state;
  const IDEHandlers = useContext(IDEContext).handlers;

  const solutionState = IDEState.solution;

  return (
    <section className="h-lgg w-full bg-lightBlack  shadow-md relative">
      <header className="sticky top-0">
        <ul className="flex justify-between ">
          <div className="flex mb-2">
            <li
              className=" p-2 pl-6 pr-6 mr-2 border-b-4 cursor-pointer
                    border-blue-600
                    "
            >
              Your Solution
            </li>
          </div>
          <div className="">
            <button
              className="bg-green-600 p-2 pl-4 pr-4 flex items-center
                        font-semibold
                    "
              onClick={IDEHandlers.runCode}
            >
              <FaTerminal />
              <span className="ml-2">Run</span>
            </button>
          </div>
        </ul>
      </header>

      <div
        className=" 
    "
      >
        <ControlledEditor
          theme="default"
          loading={<LoadingSpinner />}
          defaultLanguage="go"
          height="31rem"
          defaultValue="// some comment"
          editorDidMount={() => changeTheme()}
          onChange={(monaco, value) =>
            IDEHandlers.handleInputChange(
              [{ key: "yourSolution", value: value }],
              "solution"
            )
          }
          name="yourSolution"
          value={solutionState.yourSolution}
          language={IDEState.language}
        />
      </div>
    </section>
  );
}

export default SolutionEditor;
