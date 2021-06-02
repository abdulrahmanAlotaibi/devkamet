import React, { createContext, useState, useEffect } from "react";
import { setHeader, deleteHeader } from "shared/api/setAuthToken";
import { getLocalStorageItem, setLocalStorageItem } from "shared/util/common";

export const UserContext = createContext({});

function UserContextContainer({ children }) {
  const [user, setUser] = useState(false);

  const [theme, setTheme] = useState({
    isDark: true,
  });

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    try {
      const user = getLocalStorageItem("user");

      if (user) setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  // Update the Context (memory) and the local storage with user data
  const updateUser = (user) => {
    setLocalStorageItem("user", user);
    setUser(user);
  };

  // Clean up all user data from memory and localStorage
  const signOut = () => {
    deleteHeader("accessToken");
    deleteHeader("refreshToken");

    window.localStorage.removeItem("user");

    // window.localStorage.removeItem("accessToken");
    // window.localStorage.removeItem("refreshToken");

    window.location.reload();
  };

  // For example: Set to dark theme
  const updateTheme = (newTheme) => {
    setLocalStorageItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <UserContext.Provider
      value={{
        state: { user, theme },
        handlers: {
          updateUser,
          updateTheme,
          signOut,
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextContainer;
