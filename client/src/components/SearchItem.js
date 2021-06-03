import React from "react";
import { BiNews, BiNetworkChart } from "react-icons/bi";
import { BsTerminal } from "react-icons/bs";
import { AiOutlineExperiment } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";

const chooseIcon = (type) => {
  switch (type) {
    case "Article":
      return <BiNews className="text-2xl" />;
      break;
    case "Test":
      return <AiOutlineExperiment className="text-2xl" />;
    case "Exercise":
      return <BsTerminal className="text-2xl" />;
    default:
      break;
  }
};

function SearchItem({ item, type }) {
  const history = useHistory();
  const renderedTags = item.tags?.map((tag) => (
    <li className=" text-sm text-blue-600 mr-2 mt-2">{tag}</li>
  ));

  return (
    <Link to={`/${type}/${item.slug}`}>
      <li
        className="p-4 border-b-2 border-gray-900 h-20
                flex items-center justify-between cursor-pointer hover:bg-gray-800 transition-all duration-200
            "
      >
        <div>
          <h1 className="font-semibold w-full overflow-hidden truncate">
            {item.title}
          </h1>
          <ul className="flex items-center flex-wrap">{renderedTags}</ul>
        </div>
        <div>{chooseIcon(item.contentType)}</div>
      </li>
    </Link>
  );
}

export default SearchItem;
