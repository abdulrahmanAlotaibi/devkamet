import React from "react";
import AdminSidebar from "./admin-sidebar/AdminSidebar";
import CodeEditor from "./CodeEditor";
import Input from "./Input";
import Main from "./Main";
import Textarea from "./Textarea";
import Hint from "./Hint";
import Button from "./Button";

function ExerciseManager() {
  return (
    <div>
      <AdminSidebar />
      <Main title="New Exercise">
        <section className="mb-6">
          <input
            type="checkbox"
            name="Make it a test"
            value="test"
            placeholder="ddd"
          />
          <label htmlFor="" className="ml-2 text-xl">
            Make it a test
          </label>
        </section>
        <Input
          placeholder="Max with K Transactions"
          fullWidth
          label="Exercise Title"
        />
        <Textarea
          placeholder="In this exercise..."
          fullWidth
          label="Exercise Content"
        />
        <h1 className="font-semibold text-2xl mb-6">Hints</h1>
        <ul className="mb-10">
          <form className="mb-10 mr-4">
            <Textarea placeholder="In this exercise..." label="Hints Details" />
            <Button>Add Hint</Button>
          </form>
          <Hint title="Hint 1" details={"Look at"} />
        </ul>
        <h1 className="font-semibold text-2xl mb-6  ">Exercise Starter Code</h1>
        <section className="flex mb-10">
          <CodeEditor />
          <div className="bg-black w-1/2">
            <ul>
              <li className="p-4 border-b-2 border-gray-800 bg-scroll">99</li>
            </ul>
          </div>
        </section>
        <h1 className="font-semibold text-2xl mb-6  ">Solution</h1>
        <section className="flex">
          <CodeEditor />
          <div className="bg-black w-1/2">
            <ul>
              <li className="p-4 border-b-2 border-gray-800 bg-scroll">99</li>
            </ul>
          </div>
        </section>
      </Main>
    </div>
  );
}

export default ExerciseManager;
