import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function TableItem({ item, to, isEven }) {
  let subItems = [];
  for (const property in item) {
    subItems.push(item[property]);
  }
  const renderedsubItems = subItems.map((subItem) => (
    <td
      key={uuidv4()}
      className="text-center text-sm w-1/6 overflow-ellipsis
     overflow-hidden break-all"
    >
      {subItem?.length > 30 ? `${subItem.substring(0, 30)}...` : subItem}
    </td>
  ));

  return (
    <tbody>
      <tr>
        <Link
          className={`p-6   ${!isEven ? "bg-black" : "bg-black"
            }  border-t-2 border-gray-800 
        flex  items-center justify-between  cursor-pointer text-center 
         hover:bg-gray-800 transition duration-200  overflow-ellipsis overflow-hidden h-16
        `}
          to={to}
        >
          {renderedsubItems}
        </Link>
      </tr>
    </tbody>
  );
}

export default TableItem;
