import React from "react";
import Label from "components/Label";
import { v4 as uuidv4 } from "uuid";

function Textarea({ label, errors, fullWidth, styles, ...others }) {
  const renderedErrors = errors?.map((error) => {
    return <li key={uuidv4()}>{error.msg}</li>;
  });

  return (
    <>
      <Label htmlFor="textarea">{label}</Label>
      <textarea
        name="textarea"
        className={`resize  rounded-md bg-gray-800    
            p-2
            h-44
            focus:outline-none focus:shadow-outlin
            shadow-xl
            focus:ring-2
            focus:ring-blue-500 
            block
            mb-6
            ${fullWidth ? "w-full" : "w-96"}
            ${styles}
        `}
        {...others}
      ></textarea>
      <ul>{renderedErrors}</ul>
    </>
  );
}

export default Textarea;
