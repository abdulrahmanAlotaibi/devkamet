import React from "react";

function MinmizedSettings() {
  return (
    <article>
      <li className="relative">
        {isProfileOpen && (
          <div
            id="pop"
            className="p-2 absolute  left-2/3 -top-full w-72 bg-gray-900 -mt-28 rounded-md shadow-2xl hidden"
          >
            <ul>
              <li className="p-4 pl-6 pr-6">
                <Link className="flex items-center text-lg font-medium">
                  <AiOutlineSetting />
                  <span className="ml-4">Settings</span>
                </Link>
              </li>

              <li className="p-4 pl-6 pr-6 from-blue-600 to-indigo-600 bg-gradient-to-l">
                <Link className="flex items-center text-lg font-medium">
                  <HiSpeakerphone />
                  <span className="ml-4">Announcements</span>
                </Link>
              </li>
              <li className="p-4 pl-6 pr-6">
                <Link className="flex items-center text-lg font-medium">
                  <AiOutlinePoweroff />
                  <span className="ml-4">Sign out</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </li>
    </article>
  );
}

export default MinmizedSettings;
