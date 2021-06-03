import axios from "axios";
import { setHeader, deleteHeader } from "shared/api/setAuthToken";
import { getLocalStorageItem } from "shared/util/common";

let domain;

switch (process.env.NODE_ENV) {
  case "development": {
    domain = process.env.REACT_APP_SERVER_DOMAIN_DEV;
    break;
  }
  case "test": {
    domain = process.env.REACT_APP_SERVER_DOMAIN_TEST;
    break;
  }
  case "production": {
    domain = process.env.REACT_APP_SERVER_DOMAIN_PROD;
    break;
  }
  default:
    domain = process.env.REACT_APP_SERVER_DOMAIN_DEV;
    break;
}


axios.defaults.withCredentials = true

const instance = axios.create({
  baseURL: `${domain}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },

});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  return response;
}, async function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (error.response.status === 403) {
    deleteHeader("accessToken");
    deleteHeader("refreshToken");

    window.localStorage.removeItem("user");
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("refreshToken");

    window.location.reload();
  }
  return Promise.reject(error);
});

export const initHeaders = () => {
  try {
    const accessToken = getLocalStorageItem("accessToken");
    const refreshToken = getLocalStorageItem("refreshToken");

    if ((accessToken, refreshToken)) {
      setHeader({ key: "accessToken", value: accessToken });
      setHeader({ key: "refreshToken", value: refreshToken });
    }
  } catch (error) {
    console.error(error);
  }
};

export default instance;
