import React, { useContext } from "react";
import { IDEContext } from "./IDE";
import { IoIosRocket } from "react-icons/io";
import RawOutput from "./RawOutput";
import CostumeOutput from "./CostumeOutput";

function Output() {
  const IDEState = useContext(IDEContext).state;
  const IDEHandlers = useContext(IDEContext).handlers;
  const currentView = IDEState.currentViews.output;

  const renderView = () => {
    switch (IDEState.currentViews.output) {
      case "raw":
        return <RawOutput />;
      case "costume":
        return <CostumeOutput />;

      default:
        break;
    }
  };

  return (
    <section className="h-lgg w-full bg-lightBlack  shadow-lg relative">
      <header className="sticky top-0 left-0 z-30 bg-lightBlack">
        <ul className="flex justify-between sticky select-none">
          <div className="flex mb-2">
            <li
              className={`p-4 mr-2 cursor-pointer
             ${currentView === "costume" ? "border-b-4 border-blue-600" : ""}
           `}
              onClick={() => IDEHandlers.switchView("output", "costume")}
            >
              Costume Output
            </li>
            <li
              className={`p-4 mr-2 cursor-pointer
             ${currentView === "raw" ? "border-b-4 border-blue-600" : ""}
           `}
              onClick={() => IDEHandlers.switchView("output", "raw")}
            >
              Raw Output
            </li>
          </div>
          <div className="">
            <button className="bg-blue-600 p-2 pl-4 pr-4 flex items-center ">
              <IoIosRocket />
              <span className="ml-2">Submit</span>
            </button>
          </div>
        </ul>
      </header>

      {renderView()}
    </section>
  );
}

export default Output;
