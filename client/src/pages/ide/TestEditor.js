import React, { useContext } from "react";
import { AiFillExperiment } from "react-icons/ai";
import { IDEContext } from "./IDE";
import RawTest from "./RawTest";
import TestCases from "./TestCases";

function TestEditor() {
  const IDEState = useContext(IDEContext).state;
  const IDEHandlers = useContext(IDEContext).handlers;

  const currentView = IDEState.currentViews.test;

  const renderView = () => {
    switch (IDEState.currentViews.test) {
      case "raw":
        return <RawTest />;
      case "costume":
        return <TestCases />;
      default:
        return "";
    }
  };

  return (
    <section className="h-lgg w-full bg-lightBlack shadow-md relative">
      <header className="sticky top-0 left-0 z-30 bg-lightBlack">
        <ul className="flex justify-between sticky select-none">
          <div className="flex mb-2">
            <li
              className={`p-4 cursor-pointer
              ${currentView === "costume" ? "border-b-4 border-blue-600" : ""}
            `}
              onClick={() => IDEHandlers.switchView("test", "costume")}
            >
              Test Cases
            </li>
            <li
              className={`p-4 mr-2 cursor-pointer
             ${currentView === "raw" ? "border-b-4 border-blue-600" : ""}
           `}
              onClick={() => IDEHandlers.switchView("test", "raw")}
            >
              Raw Test
            </li>
          </div>
          <div>
            <button className="bg-red-800 p-2 pl-4 pr-4 flex items-center ">
              <AiFillExperiment />
              <span className="ml-2 0B0E16">Test</span>
            </button>
          </div>
        </ul>
      </header>
      {renderView()}
    </section>
  );
}

export default TestEditor;
