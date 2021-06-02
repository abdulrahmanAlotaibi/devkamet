import React from "react";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

function Button({
  children,
  to,
  isPrimary = true,
  isLoading,
  background,
  isDark,
  styles,
  fullWidth,
  ...others
}) {
  return (
    <Link
      to={to}
      {...others}
      className={[
        `${
          isDark
            ? "bg-gray-900 hover:bg-gray-800"
            : isPrimary
            ? "bg-blue-600 hover:bg-blue-500"
            : "border-2 border-blue-600"
        } 
            p-2 pl-6 pr-6 text-center rounded-md font-semibold cursor-pointer
            transition duration-300 ease-in-out
            inline-flex justify-center items-center ${
              fullWidth && "w-full"
            } ${styles}
            `,
      ]}
    >
      {isLoading ? (
        <div className="inline-flex justify-center items-center h-full w-full">
          <ImSpinner2 className="animate-spin   text-white mr-2" />
          <span>{children}</span>
        </div>
      ) : (
        <div className="inline-flex justify-center items-center h-full w-full">
          {children}
        </div>
      )}
    </Link>
  );
}

export default Button;
