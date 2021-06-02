import axios from "./axiosConfig";

/**
 * 
 * @param {string} token : Either the server will set headers or client (using persistent storage like localStoage)
 */
const setAuthTokenHeader = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthTokenHeader;
