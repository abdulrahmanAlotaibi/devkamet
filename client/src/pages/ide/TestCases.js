import Button from "components/Button";
import Textarea from "components/Textarea";
import React, { useContext, useState } from "react";
import { BiTrash, BiPencil } from "react-icons/bi";
import { AiOutlineFunction } from "react-icons/ai";
import { IDEContext } from "./IDE";
import { v4 as uuidv4 } from "uuid";

function TestCases() {
  const [testCaseContent, setTestCaseContent] = useState("");

  const IDEState = useContext(IDEContext).state;
  const IDEHandlers = useContext(IDEContext).handlers;

  const renderedTestCases = IDEState.test.testCases?.map((testCase) => {
    return (
      <li
        className="p-4 rounded-md  w-full  flex justify-between items-center"
        key={uuidv4()}
      >
        <div
          className="mr-4 bg-gray-800 shadow-md w-lgg p-4 text-left rounded-md
                flex items-center
            "
        >
          <AiOutlineFunction className="mr-4 text-lg text-blue-500" />
          <span>{testCase.content}</span>
        </div>

        {IDEState.isEdit && (
          <div className="ml-4 flex items-center ">
            <div
              className="p-4 rounded-md bg-gray-800
                        text-blue-600
                         flex items-center mr-4 cursor-pointer
        "
              onClick={() => {
                setTestCaseContent(testCase.content);
              }}
            >
              <BiPencil />
            </div>
            <div
              className="p-4 rounded-md bg-gray-800
                        flex items-center  text-red-800 cursor-pointer"
              onClick={() => IDEHandlers.removeTestCase(testCase.id)}
            >
              <BiTrash />
            </div>
          </div>
        )}
      </li>
    );
  });

  return (
    <div className="p-4">
      {IDEState.isEdit && (
        <form>
          <Textarea
            label="Arguments"
            fullWidth
            onChange={(e) => setTestCaseContent(e.target.value)}
            placeholder={`{"array":[1,2,4],"k:2}`}
            value={testCaseContent}
          />
          <Button
            fullWidth
            onClick={() => IDEHandlers.createTestCase(testCaseContent)}
          >
            Add Test Case
          </Button>
        </form>
      )}
      <ul className="mt-10">{renderedTestCases}</ul>
    </div>
  );
}

export default TestCases;
