import axios from "./axiosConfig";

export const getAllBugsReport = async () => {
  try {
    const response = await axios.get("bugs");
    return response.data;
  } catch (error) {
    console.error(error.response);
    return { ...error.response?.data };
  }
};

export const createBugReport = async (title, details, userId) => {};
