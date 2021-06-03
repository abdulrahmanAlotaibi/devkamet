import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ title, toggleModal, children }) {
  return (
    <section
      className="z-40 w-screen h-screen   
        flex justify-center items-center fixed top-0 right-0 bg-lightBlack bg-opacity-60"
      onClick={toggleModal}
    >
      <div
        className=" rounded-md shadow-2xl   
          bg-lightBlack
            z-50 p-8 
            "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-lg font-semibold">{title}</h1>
          <div>
            <AiOutlineClose
              className="text-xl cursor-pointer"
              onClick={toggleModal}
            />
          </div>
        </header>
        <section>{children}</section>
      </div>
    </section>
  );
}

export default Modal;
