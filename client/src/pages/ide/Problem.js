import React, { useContext } from "react";
import Hints from "./Hints";
import { IDEContext } from "./IDE";
import OurSolution from "./OurSolution";
import ProblemContent from "./ProblemContent";

function Problem() {
  const IDEState = useContext(IDEContext).state;
  const IDEHandlers = useContext(IDEContext).handlers;
  const currentView = IDEState.currentViews.problem;

  const renderView = () => {
    switch (IDEState.currentViews.problem) {
      case "problem":
        return <ProblemContent />;
      case "hints":
        return <Hints />;
      case "ourSolution":
        return <OurSolution />;
      default:
        break;
    }
  };
  return (
    <section
      className="h-lgg bg-lightBlack shadow-xl scrollbar-thin scrollbar-thumb-gray-800
         scrollbar-track-black  overflow-y-scroll  bg-scroll relative  "
    >
      <header className="sticky top-0 left-0  bg-lightBlack">
        <ul className="flex justify-between mb-4 ">
          <div className="flex select-none">
            <li
              className={`p-4 mr-2  cursor-pointer
                          ${
                            currentView === "problem"
                              ? "border-b-4 border-blue-600"
                              : ""
                          }
                        `}
              onClick={() => IDEHandlers.switchView("problem", "problem")}
            >
              Problem
            </li>
            <li
              className={`p-4 mr-2 cursor-pointer
              ${currentView === "hints" ? "border-b-4 border-blue-600" : ""}
            `}
              onClick={() => IDEHandlers.switchView("problem", "hints")}
            >
              Hints
            </li>
            <li
              className={`p-4 cursor-pointer
              ${
                currentView === "ourSolution"
                  ? "border-b-4 border-blue-600"
                  : ""
              }
            `}
              onClick={() => IDEHandlers.switchView("problem", "ourSolution")}
            >
              Our Solution
            </li>
          </div>
        </ul>
      </header>
      <div className="p-4">{renderView()}</div>
    </section>
  );
}

export default Problem;
