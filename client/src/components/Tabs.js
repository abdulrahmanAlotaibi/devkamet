import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Tabs({ tabsItems, handleTabClick }) {
  const [active, setActive] = useState(tabsItems[0]?.label);

  const renderedTabs = tabsItems?.map((tabItem) => {
    return (
      <li key={uuidv4()}>
        <div
          to={tabItem.to}
          className={`p-4 mr-6 font-semibold text-lg
                transition duration-200 ease-in-out border-gray-900 cursor-pointer
                 mb-4 inline-block ${
                   active === tabItem.label ? "border-b-4 border-blue-600" : ""
                 }`}
          onClick={() => {
            setActive(tabItem.label);
            handleTabClick(tabItem.value);
          }}
        >
          {tabItem.label}
        </div>
      </li>
    );
  });

  return (
    <nav>
      <ul className="flex mb-4">{renderedTabs}</ul>
    </nav>
  );
}

export default Tabs;
