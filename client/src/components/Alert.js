import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineCheckCircle } from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";

function Alert({ isError, message }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 3200);
  }, []);
  return (
    <div
      id={isOpen ? "fade" : "fadeOut"}
      className="absolute top-14 right-4 bg-white shadow-lg
            rounded-md p-4 text-black w-96 z-30"
    >
      <div className="flex justify-end items-center">
        <AiOutlineClose
          className="cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className="flex items-center">
        <div
          className={`mr-4 ${
            isError ? "text-red-600" : "text-green-500"
          } text-2xl flex items-center justify-center`}
        >
          {isError ? <FiAlertTriangle /> : <AiOutlineCheckCircle />}
        </div>
        <div>
          <div
            className={`mr-4 ${
              isError ? "text-red-600" : "text-green-500"
            } font-semibold`}
          >
            {isError ? "Something went wrong" : "Success"}
          </div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Alert;
