import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function Hint({ title, details }) {
  const [open, setopen] = useState(false);
  return (
    <div
      className="bg-gray-800 p-4 rounded-md w-lgg h-18  cursor-pointer"
      onClick={() => setopen(!open)}
    >
      <div className="flex justify-between items-center">
        <span>{title}</span>

        <div className="flex items-center">
          <AiOutlinePlus className="text-xl mr-2" />
        </div>
      </div>

      {open && (
        <div className=" mt-2" id="pop">
          {details}
        </div>
      )}
    </div>
  );
}

export default Hint;
