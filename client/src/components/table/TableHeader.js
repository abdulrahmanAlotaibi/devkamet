import React from "react";
import { v4 as uuidv4 } from "uuid";

function TableHeader({ headerItems }) {
  const renderedHeaderItems = headerItems?.map((headerItem) => (
    <div className="font-semibold text-sm text-center w-1/6" key={uuidv4()}>
      {headerItem}
    </div>
  ));
  return (
    <div className="w-full  flex justify-between items-center text-center p-6 bg-gray-800 shadow-2xl border-b-2 border-gray-800">
      {renderedHeaderItems}
    </div>
  );
}

export default TableHeader;
