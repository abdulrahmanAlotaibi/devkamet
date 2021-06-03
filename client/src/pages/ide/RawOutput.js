import LoadingSpinner from "components/LoadingSpinner";
import React, { useContext } from "react";
import { IDEContext } from "./IDE";
import { v4 as uuidv4 } from "uuid";

function RawOutput() {
  const IDEState = useContext(IDEContext).state;

  const renderedRaws = IDEState.output.raw.map((output) => (
    <li className="p-4 border-b-2 border-gray-800 text-left" key={uuidv4()}>
      {output}
    </li>
  ));
  return (
    <div>
      {IDEState.isLoading ? <LoadingSpinner /> : <ul>{renderedRaws}</ul>}
    </div>
  );
}

export default RawOutput;
