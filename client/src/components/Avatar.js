import React from "react";

function Avatar({ avatar, name, onClick, ...rest }) {
  return (
    <>
      {avatar ? (
        <img
          {...rest}
          id="avatar"
          onClick={onClick}
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg cursor-pointer object-cover "
          src={avatar}
          alt="Avatar"
          {...rest}
        />
      ) : (
        <div
          onClick={onClick}
          {...rest}
          id="avatar"
          className=" relative w-14 h-14 rounded-full shadow-lg
                            cursor-pointer from-blue-600  to-indigo-600 bg-gradient-to-l text-center
                            text-xl font-bold flex items-center justify-center select-none"
        >
          <span>{name?.substring(0, 1)}</span>
        </div>
      )}
    </>
  );
}

export default Avatar;
