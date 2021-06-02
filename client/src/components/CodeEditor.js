import React from "react";
import Editor from "@monaco-editor/react";
import { changeTheme } from "shared/util/IDE";

function CodeEditor() {
  return (
    <section className="h-lgg w-full bg-black shadow-md">
      <ul className="flex justify-between sticky">
        <div className="flex mb-2">
          <li className=" p-2 pl-6 pr-6 mr-2 border-b-4 cursor-pointer border-blue-600">
            Costume Output
          </li>
          <li className="p-2 pl-6 pr-6 cursor-pointer">Raw Output</li>
        </div>
        <div className="">
          <button className="bg-green-600 p-2 pl-4 pr-4 ">Run</button>
        </div>
      </ul>

      <div>
        <Editor
          height
          defaultLanguage="javascript"
          height="36.5rem"
          defaultValue="// some comment"
          beforeMount={changeTheme}
          onMount={changeTheme}
        />
      </div>
    </section>
  );
}

export default CodeEditor;
