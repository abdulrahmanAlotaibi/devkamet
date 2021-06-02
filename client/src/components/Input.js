import React from "react";
import Label from "components/Label";

function Input({
  type = "text",
  fullWidth = false,
  icon, isDark = true,
  styles,
  label,
  htmlFor,
  ...others
}) {
  return (
    <>
      {label && <Label htmlFor={htmlFor}>{label}</Label>}
      <div className="relative flex w-full">
        <div className="relative flex flex-wrap items-stretch mb-3  w-full">
          {icon && (
            <span
              className="z-10 h-full leading-snug font-normal absolute text-center 
                    text-gray-400  bg-transparent rounded text-base items-center 
                    justify-center w-8 pl-3 py-3 focus-within:
                    flex 
                    "
            >
              {icon}
            </span>
          )}
          <input
            type={type}
            {...others}
            className={`px-3 py-3
                 placeholder-gray-400  relative 
                ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'} rounded text-sm  ${fullWidth ? 'w-full' : 'w-96'}
                outline-none focus:outline-none focus:shadow-outline ${icon && "pl-10"
              } 
                focus:ring-2 focus:ring-blue-500 ${styles} 
            }`}
          />
        </div>
      </div>
    </>
  );
}

export default Input;
